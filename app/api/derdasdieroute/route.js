import connectMongoDB from "@/app/libs/mongodb";
import derdasdieWords from "@/app/models/words";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();


        const all_words = await derdasdieWords.aggregate([
            { $project: { keys: { $objectToArray: "$$ROOT" } } },
            { $unwind: "$keys" },
            { $group: { _id: null, keys: { $addToSet: "$keys.k" } } }
        ]);

        let letters = []
        {
            Object.values(all_words[0].keys).map(letter => (
                (letter !== '_id') && (letters.push(letter))
            )).sort();
        }

        // // Создание проекции для полей singular.nominativ в каждом ключе
        const projection = {};

        letters.forEach(letter => {
            projection[`${letter}.singular.nominativ`] = 1;
        });

        // Выполнение запроса с проекцией
        const ddd_words = await derdasdieWords.findOne({}, projection);

        return NextResponse.json(ddd_words);
    } catch (error) {
        console.error('Error fetching ddd_words:', error);
        return NextResponse.json({ error: 'Error fetching ddd_words' }, { status: 500 });
    }
}