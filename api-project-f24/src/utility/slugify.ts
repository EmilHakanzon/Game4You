export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Ersätt mellanslag med bindestreck
    .replace(/[^\w-]+/g, ""); // Ta bort icke-alfanumeriska tecken
}

export function deslugify(slug: string): string {
  return slug.replace(/-/g, " "); 
}
