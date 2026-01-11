import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { fromEnv } from "@aws-sdk/credential-provider-env";

// #region agent log
console.log('[DEBUG] AWS env check:', {
    hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
    hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
    hasSessionToken: !!process.env.AWS_SESSION_TOKEN,
    accessKeyPrefix: process.env.AWS_ACCESS_KEY_ID?.substring(0, 10) + '...',
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
});
// #endregion

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

// #region agent log
console.log('[DEBUG] S3Client created with explicit credentials (no session token)');
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
            urlPrefix: url.substring(0, 80),
            hasCredentials: url.includes('X-Amz-Credential'),
            hasSecurityToken: url.includes('X-Amz-Security-Token'),
            securityTokenLength: url.match(/X-Amz-Security-Token=([^&]*)/)?.[1]?.length || 0,
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
