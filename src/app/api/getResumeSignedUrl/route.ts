import { NextRequest } from "next/server";
import getResumeSignedUrl from "@/utils/aws/getResumeSignedUrl"

export async function POST(req: NextRequest) {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:6',message:'API route entry',data:{method:req.method,url:req.url},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    
    try {
        const url = await getResumeSignedUrl();
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:13',message:'Success: returning URL',data:{urlLength:url?.length},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        return new Response(JSON.stringify({ url }), {
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    } catch (error) {
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/457ef73b-bdc3-441f-a1fb-e5ee684845a5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'route.ts:24',message:'Error caught in route',data:{errorName:error?.constructor?.name,errorMessage:error?.message},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B,C,D,E'})}).catch(()=>{});
        // #endregion
        throw error;
    }
}
