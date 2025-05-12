export async function GET(req) {
  // Läs antalet besökare från en databas eller en enkel lagring (kan vara en fil eller databas)
  const visitorCount = parseInt(process.env.VISITOR_COUNT || "0") + 1;

  // Uppdatera räknaren (t.ex. i miljövariabler eller databas)
  process.env.VISITOR_COUNT = visitorCount;

  // Svara utan att skicka tillbaka besökartalet direkt till frontend
  return new Response(JSON.stringify({ message: "Visitor tracked" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
