export async function fetchGames() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/igdb`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        fields name, cover.url, summary, aggregated_rating, platforms;
        sort aggregated_rating desc;
        where platforms = (48) & aggregated_rating != null;
        limit 8;
      `,
    }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
}
