export type Game = {
  id: number;
  name: string;
  cover: { url: string };
  summary: string;
  rating: number;
  aggregated_rating: number;
  genres: { name: string }[];
  platforms: { name: string }[];
  involved_companies: {
    company: { name: string };
    developer: boolean;
  }[];
  release_dates: {
    date?: number; 
    platform: { name: string }; 
  }[];
};
