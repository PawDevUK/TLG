import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db/db';
import { Log } from '@/lib/db/models/log.model';

export async function POST(req: NextRequest) {
	const dbConnection = dbConnect();
	if (dbConnection) {
	}
	try {
		const { level, message, meta } = await req.json();
		const log = await Log.create({ level, message, meta });
		return NextResponse.json({ success: true, log });
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
	}
}

export async function GET() {
	try {
		const logs = await Log.find().sort({ timestamp: -1 }).limit(100);
		return NextResponse.json({ success: true, logs });
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
	}
}
