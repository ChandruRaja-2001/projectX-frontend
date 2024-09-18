import { NextRequest, NextResponse } from "next/server";

const EXPRESS_SERVER_URL = "http://localhost:9001/server";

export async function GET(req: NextRequest) {
  const url = `${EXPRESS_SERVER_URL}${req.nextUrl.pathname.replace("/api/express", "")}`;
  try {
    const proxyRes = await fetch(url, {
      method: "GET",
      headers: req.headers,
    });

    if (!proxyRes.ok) {
      return new NextResponse(`Error: ${proxyRes.statusText}`, {
        status: proxyRes.status,
      });
    }

    const body = await proxyRes.json();
    return new NextResponse(JSON.stringify(body), {
      status: proxyRes.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error(`Error in proxy: ${error.message}`);
    return new NextResponse(`Error: ${error.message}`, { status: 500 });
  }
}
