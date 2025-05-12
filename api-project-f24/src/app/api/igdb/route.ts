import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Hämta OAuth token från Twitch
    const authRes = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.TWITCH_CLIENT_ID!,
        client_secret: process.env.TWITCH_CLIENT_SECRET!,
        grant_type: "client_credentials",
      }),
    });

    const authData = await authRes.json();
    const { query, endpoint } = await request.json(); // Hämta `endpoint` från request body

    // Hämta data från IGDB API
    const igdbRes = await fetch(
      `${process.env.NEXT_PUBLIC_IGDB_BASE_URL}/${endpoint}`, // Använd dynamiskt endpoint
      {
        method: "POST",
        headers: {
          "Client-ID": process.env.TWITCH_CLIENT_ID!,
          Authorization: `Bearer ${authData.access_token}`,
          "Content-Type": "text/plain",
        },
        body: query, // Skicka SQL-liknande frågan för att hämta specifika data
      },
    );

    const igdbData = await igdbRes.json();

    return NextResponse.json(igdbData);
  } catch (error) {
    console.error("IGDB API Error:", error);
    return NextResponse.json({ error: "IGDB API Error" }, { status: 500 });
  }
}
