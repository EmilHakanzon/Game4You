export async function fetchGamesByList(listId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/igdb`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      endpoint: "games",
      query: `
        fields name, cover.url, involved_companies.company.name, aggregated_rating, summary, genres.name, platforms.name, release_dates.date, release_dates.platform.name, screenshots.url;
        where listName = "${listId}";
        limit 50;
      `,
    }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch games for list: ${listId}`);
  return res.json();
}