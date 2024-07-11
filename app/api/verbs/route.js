import connectMongoDB from "@/app/libs/mongodb";
import Verb from "@/app/models/verbs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        console.log('Connected to MongoDB');
        const verbs = await Verb.find().select({ _id: 1, verb: 1, translation: 1 }).sort({ verb: 1 });
        return NextResponse.json(verbs);
    } catch (error) {
        console.error('Error fetching verbs:', error);
        return NextResponse.json({ error: 'Error fetching verbs' }, { status: 500 });
    }
}

export async function POST(request) {
    // console.log("Request before handling", request);
    try {
        await connectMongoDB();

        const data = await request.json();
        const { verb, translation, conjugation, examples, notes } = data;

        if (!verb || !translation || !conjugation || !examples || !notes) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newVerbObj = {
            verb,
            translation,
            conjugation,
            examples,
            notes
        };
        // console.log('newVerbObj - API', newVerbObj);
        // Найти документ по глаголу и обновить его или создать новый, если не существует
        const result = await Verb.findOneAndUpdate(
            { verb: newVerbObj.verb },
            { $set: newVerbObj },
            { new: true, upsert: true }
        );

        // console.log('RESULT - API', newVerbObj);
        return NextResponse.json(result, { status: 201 });

    } catch (error) {
        console.error('Error saving verb:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}