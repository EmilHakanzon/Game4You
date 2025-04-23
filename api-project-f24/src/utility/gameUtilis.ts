import type { Game } from "@/types/types";

export const getDevelopers = (
  involved_companies: Game["involved_companies"],
) => {
  return involved_companies
    ?.filter((comp) => comp.developer)
    .map((comp) => comp.company.name)
    .join(", ");
};

export const getValidRelease = (release_dates: Game["release_dates"]) => {
  return release_dates?.find((r) => typeof r.date === "number");
};
