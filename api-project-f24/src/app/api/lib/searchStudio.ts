export async function searchStudios(term: string) {
  const query = `
    search "${term}";
    fields name, country, description, developed.name;
    where developed != null;
    limit 10;
  `;
  const endpoint = "companies"; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/igdb`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, endpoint }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Misslyckades att hämta studios");
  return res.json();
}
