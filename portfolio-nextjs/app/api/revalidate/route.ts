import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Wire this up as a Sanity webhook (Manage → API → Webhooks) pointed at
 * https://your-site.vercel.app/api/revalidate, with the secret set as
 * SANITY_REVALIDATE_SECRET in both Sanity and Vercel env vars.
 * Trigger on: create, update, delete — dataset: production.
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Missing _type" }, { status: 400 });
    }

    revalidateTag(body._type, "max");

    return NextResponse.json({ revalidated: true, type: body._type, now: Date.now() });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
