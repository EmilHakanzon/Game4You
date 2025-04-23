export async function searchFromIGDB(term: string) {
  const query = `
    search "${term}";
    fields name, cover.url, involved_companies.company.name, aggregated_rating, summary, genres.name, platforms.name, release_dates.date, release_dates.platform.name, screenshots.url;
    limit 50;
  `;
  const endpoint = "games";

  const res = await fetch("/api/igdb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, endpoint }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to get any games...");
  return res.json();
}
