import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import uniqid from 'uniqid';

export const maxDuration = 60;
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req) {
  const { filename, contentType } = await req.json();
  
  const s3client = new S3Client({
    region: 'ap-south-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const id = uniqid();
  const ext = filename.split('.').slice(-1)[0];
  const newName = id + '.' + ext;

  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: newName,
    ContentType: contentType,
    ACL: 'public-read',
  });

  const presignedUrl = await getSignedUrl(s3client, command, { 
    expiresIn: 3600 // 1 hour
  });

  return Response.json({ 
    presignedUrl, 
    newName, 
    id,
    originalName: filename
  });
}
