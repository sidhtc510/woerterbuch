import connectMongoDB from "@/app/libs/mongodb";
import Verb from "@/app/models/verbs";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();
        const verb = await Verb.findById(id);

        if (!verb) {
            return NextResponse.json({ error: 'Verb not found' }, { status: 404 });
        }

        return NextResponse.json(verb, { status: 200 });
    } catch (error) {
        console.error('Error fetching verb:', error);
        return NextResponse.json({ error: 'Error fetching verb' }, { status: 500 });
    }
}