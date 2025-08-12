import { NextRequest } from "next/server";
import getResumeSignedUrl from "@/utils/aws/getResumeSignedUrl"

export async function GET(req: NextRequest) {
    const url = await getResumeSignedUrl();
    return Response.json({ url });
}
