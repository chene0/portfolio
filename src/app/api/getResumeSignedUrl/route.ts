import { NextRequest } from "next/server";
import getResumeSignedUrl from "@/utils/aws/getResumeSignedUrl"

export async function POST(req: NextRequest) {
    // #region agent log
    console.log('[DEBUG] API route called:', {
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString()
    });
    // #endregion
    
    try {
        const url = await getResumeSignedUrl();
        // #region agent log
        console.log('[DEBUG] Success, returning URL to client');
        // #endregion
        return new Response(JSON.stringify({ url }), {
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    } catch (error: any) {
        // #region agent log
        console.error('[DEBUG] Error in route handler:', {
            errorName: error?.constructor?.name,
            errorMessage: error?.message,
            timestamp: new Date().toISOString()
        });
        // #endregion
        return new Response(JSON.stringify({ error: error?.message || 'Unknown error' }), {
            status: 500,
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    }
}
