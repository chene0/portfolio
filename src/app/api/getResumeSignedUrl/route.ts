import { NextRequest } from "next/server";
import getResumeSignedUrl from "@/utils/aws/getResumeSignedUrl"

export async function GET(req: NextRequest) {
    const url = await getResumeSignedUrl();
    return new Response(JSON.stringify({ url }), {
        headers: {
            'Cache-Control': 'no-store'
        }
    });
}
