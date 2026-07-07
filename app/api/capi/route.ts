import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event_id, fbp, fbc, page_url } = body;

    const webhookUrl = process.env.N8N_CAPI_WEBHOOK;
    if (!webhookUrl) {
      return Response.json({ ok: false, error: "webhook not configured" }, { status: 200 });
    }

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_id,
        fbp,
        fbc,
        page_url,
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
      }),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 200 });
  }
}
