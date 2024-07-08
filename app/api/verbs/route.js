import connectMongoDB from "@/app/libs/mongodb";
import Verb from "@/app/models/verbs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        console.log('Connected to MongoDB');
        
        const verbs = await Verb.find().select({_id:1, verb:1, translation:1}).sort({ verb: 1 });;
        // console.log('Fetched verbs:', verbs);

        return NextResponse.json(verbs);
    } catch (error) {
        console.error('Error fetching verbs:', error);
        return NextResponse.json({ error: 'Error fetching verbs' }, { status: 500 });
    }
}