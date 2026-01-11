import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Explicitly use long-term credentials from environment variables
// and ignore any temporary session tokens
const s3Client = new S3Client({ 
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        // Explicitly NOT including sessionToken to avoid temporary credential issues
    }
});

export default async function getResumeSignedUrl() {
    const command = new GetObjectCommand({
        Bucket: "portfolio-312948723",
        Key: "resume/main/Ethan_Chen_Coop_Resume.pdf"
    });
    
    const url = await getSignedUrl(s3Client, command);
    return url;
}
