export async function searchCompanies(term: string) {
  const query = `
    search "${term}";
    fields name, logo.url, country;
    where logo != null;  // Ensure the company has a logo
    limit 10;
    sort name asc;       // Sort results alphabetically by name
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

  if (!res.ok) throw new Error("Failed to fetch companies");
  const data = await res.json();

  // Filter results to ensure they match the search term more accurately
  const filteredData = data.filter((company: any) =>
    company.name.toLowerCase().includes(term.toLowerCase()),
  );

  return filteredData;
}
