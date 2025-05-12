// pages/api/trackVisitors.js
export default async function handler(req, res) {
  // Läs antalet besökare från en databas eller en enkel lagring (kan vara en fil eller databas)
  const visitorCount = parseInt(process.env.VISITOR_COUNT || "0") + 1;

  // Uppdatera räknaren (t.ex. i miljövariabler eller databas)
  process.env.VISITOR_COUNT = visitorCount;

  // Du kan också här logga till en extern databas om du vill lagra mer långsiktigt.

  // Svara utan att skicka tillbaka besökartalet direkt till frontend
  res.status(200).json({ message: "Visitor tracked" });
}
