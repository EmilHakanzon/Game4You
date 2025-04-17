// lib/searchFromIGDB.ts

type Category = "Games" | "Companies" | "Studios";

export async function searchFromIGDB(term: string, category: Category) {
  let query = "";

  switch (category) {
    case "Games":
      query = `
        search "${term}";
        fields name, cover.url, summary, aggregated_rating;
        limit 10;
      `;
      break;

    case "Companies":
      query = `
        search "${term}";
        fields name, country, description, developed.name;
        limit 10;
      `;
      break;

    case "Studios":
      query = `
        search "${term}";
        fields name, country, description, developed.name;
        where developed != null;
        limit 10;
      `;
      break;

    default:
      throw new Error("Ogiltig kategori");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/igdb`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Misslyckades att hämta data för ${category}`);
  return res.json();
}
