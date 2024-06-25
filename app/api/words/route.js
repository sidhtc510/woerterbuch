import connectMongoDB from "@/app/libs/mongodb";
import Words from "@/app/models/words";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const words = await Words.findOne();
        return NextResponse.json(words);
    } catch (error) {
        console.error('Error fetching words:', error);
        return NextResponse.json({ error: 'Error fetching words' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await connectMongoDB();

        const data = await request.json();
        const { word, wordRu, singular, plural } = data;

        if (!word || !wordRu || !singular || !plural) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const letter = word.charAt(0).toUpperCase();

        const newWordObj = {
            word,
            wordRu,
            singular,
            plural
        };

        const update = {};
        update[letter] = newWordObj;

        // Найти документ по первой букве и обновить его массив слов
        const result = await Words.findOneAndUpdate(
            { [letter]: { $exists: true } },
            { $push: { [letter]: newWordObj } },
            { new: true, upsert: true }
        );

        return NextResponse.json(result, { status: 201 });

    } catch (error) {
        console.error('Error saving word:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}