import { NextResponse } from 'next/server';
import { ImageService } from '@/lib/services/image-service';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const imageId = await ImageService.uploadImage(file);
    
    return NextResponse.json({ 
      success: true,
      imageId,
      url: ImageService.getImageUrl(imageId)
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}