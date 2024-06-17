import connectMongoDB from "@/app/libs/mongodb";
import Words from "@/app/models/words";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const words = await Words.findOne();
        // console.log('words from route', words);
        return NextResponse.json(words);
    } catch (error) {
        console.error('Error fetching words:', error);
        return NextResponse.json({ error: 'Error fetching words' }, { status: 500 });
    }
}