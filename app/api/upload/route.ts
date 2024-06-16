import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest, response: NextResponse)
 {
    const data = await request.json()
    console.log(data)
    return NextResponse.json({ message: 'request.body' }, {status: 200})
}