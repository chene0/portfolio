import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// #region agent log
console.log('[DEBUG] AWS env check:', {
    hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
    hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
    hasSessionToken: !!process.env.AWS_SESSION_TOKEN,
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
});
// #endregion

const s3Client = new S3Client({ region: "us-east-1" });

// #region agent log
console.log('[DEBUG] S3Client created with region:', 'us-east-1');
// #endregion

export default async function getResumeSignedUrl() {
    // #region agent log
    console.log('[DEBUG] getResumeSignedUrl called:', {
        bucket: 'portfolio-312948723',
        key: 'resume/main/Ethan_Chen_Coop_Resume.pdf',
        timestamp: new Date().toISOString()
    });
    // #endregion
    
    const command = new GetObjectCommand({
        Bucket: "portfolio-312948723",
        Key: "resume/main/Ethan_Chen_Coop_Resume.pdf"
    });
    
    // #region agent log
    console.log('[DEBUG] GetObjectCommand created, calling getSignedUrl...');
    // #endregion
    
    try {
        const url = await getSignedUrl(s3Client, command);
        // #region agent log
        console.log('[DEBUG] Success! Generated signed URL:', {
            urlLength: url.length,
            urlPrefix: url.substring(0, 60),
            hasCredentials: url.includes('X-Amz-Credential'),
            timestamp: new Date().toISOString()
        });
        // #endregion
        return url;
    } catch (error: any) {
        // #region agent log
        console.error('[DEBUG] Error generating signed URL:', {
            errorName: error?.constructor?.name,
            errorMessage: error?.message,
            errorCode: error?.code,
            errorStack: error?.stack,
            timestamp: new Date().toISOString()
        });
        // #endregion
        throw error;
    }
}
