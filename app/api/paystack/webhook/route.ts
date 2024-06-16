import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const API_SECRET_KEY = process.env.SECRET_KEY as string;
const verify = (eventData: any, signature: string) => {
  const hmac = crypto.createHmac("sha512", API_SECRET_KEY);
  const expectedSignature = hmac
    .update(JSON.stringify(eventData))
    .digest("hex");
  return expectedSignature === signature;
};

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const { headers } = await req.json();

  const signature = await headers["x-paystack-signature"];
  if (!verify(data, signature)) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 404 }
    );
  }

  if (data.event === "charge.success") {
    const transactionId = data.data.id;
    console.log(`Transaction ${transactionId} was successful`);
  }
  console.log(data);
  return NextResponse.json({ message: "Paid" }, { status: 200 });
}
