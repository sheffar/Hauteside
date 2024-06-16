import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    // Get the request body
    const data = await request.json();

    // Check if the data is valid
    if (typeof data !== 'object' || data === null || Array.isArray(data) || !data.image) {
      return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }

    // Get the image data from the request body
    const imageData = data.image;

    // Create the folder to store the image
    const folderPath = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Create the file path for the image
    const fileName = `${Date.now()}.jpg`;
    const filePath = path.join(folderPath, fileName);

    // Write the image data to the file
    fs.writeFileSync(filePath, imageData, 'base64');

    // Return a success response
    return NextResponse.json({ message: 'Image uploaded successfully', fileName });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}