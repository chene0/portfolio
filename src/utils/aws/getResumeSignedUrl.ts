import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({ region: "us-east-1" });

export default async function getResumeSignedUrl() {
    const command = new GetObjectCommand({
        Bucket: "portfolio-312948723",
        Key: "resume/main/Ethan_Chen_Coop_Resume.pdf"
    });
    const url = await getSignedUrl(s3Client, command);
    return url;
}
