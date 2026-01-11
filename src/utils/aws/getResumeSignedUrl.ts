import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// #region agent log
fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'getResumeSignedUrl.ts:4',message:'AWS env vars on module load',data:{hasAccessKey:!!process.env.AWS_ACCESS_KEY_ID,hasSecretKey:!!process.env.AWS_SECRET_ACCESS_KEY,hasSessionToken:!!process.env.AWS_SESSION_TOKEN,nodeEnv:process.env.NODE_ENV},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,D'})}).catch(()=>{});
// #endregion

const s3Client = new S3Client({ region: "us-east-1" });

// #region agent log
fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'getResumeSignedUrl.ts:9',message:'S3Client created',data:{region:'us-east-1',clientConfig:JSON.stringify(s3Client.config)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B'})}).catch(()=>{});
// #endregion

export default async function getResumeSignedUrl() {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'getResumeSignedUrl.ts:14',message:'Function entry',data:{bucket:'portfolio-312948723',key:'resume/main/Ethan_Chen_Coop_Resume.pdf'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    const command = new GetObjectCommand({
        Bucket: "portfolio-312948723",
        Key: "resume/main/Ethan_Chen_Coop_Resume.pdf"
    });
    
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'getResumeSignedUrl.ts:23',message:'Command created, calling getSignedUrl',data:{commandName:command.constructor.name},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    
    try {
        const url = await getSignedUrl(s3Client, command);
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'getResumeSignedUrl.ts:30',message:'Success: getSignedUrl returned',data:{urlLength:url.length,urlPrefix:url.substring(0,50)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B,C'})}).catch(()=>{});
        // #endregion
        return url;
    } catch (error) {
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'getResumeSignedUrl.ts:36',message:'Error: getSignedUrl failed',data:{errorName:error?.constructor?.name,errorMessage:error?.message,errorCode:error?.code,errorStack:error?.stack},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B,C,D,E'})}).catch(()=>{});
        // #endregion
        throw error;
    }
}
