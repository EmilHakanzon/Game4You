export async function fetchGames() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/igdb`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        fields name, cover.url, summary, aggregated_rating;
        sort aggregated_rating desc;
        where rating > 93;
        limit 8;
      `,
    }),
    cache: "no-store",
  });
// console.log(JSON);
  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
}
