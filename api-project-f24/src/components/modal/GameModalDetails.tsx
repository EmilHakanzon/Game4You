import { getDevelopers, getValidRelease } from "@/utility/gameUtilis";
import type { Game } from "@/types/types";

export const GameModalDetails = ({ game }: { game: Game }) => {
  const {
    summary,
    aggregated_rating,
    platforms,
    genres,
    release_dates,
    involved_companies,
  } = game;

  const release = getValidRelease(release_dates);
  const developers = getDevelopers(involved_companies);

  return (
    <div className="text-sm text-zinc-300 space-y-2 mb-4">
      {summary && <p>{summary}</p>}
      {release && (
        <p>
          <span className="font-semibold">Release Date:</span>{" "}
          {new Date(release.date! * 1000).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
      {developers && (
        <p>
          <span className="font-semibold">Developer:</span> {developers}
        </p>
      )}
      {aggregated_rating && (
        <p>
          <span className="font-semibold">Rating:</span>{" "}
          {aggregated_rating.toFixed(1)} / 100
        </p>
      )}
      {platforms?.length > 0 && (
        <p>
          <span className="font-semibold">Platforms:</span>{" "}
          {platforms.map((p) => p.name).join(", ")}
        </p>
      )}
      {genres?.length > 0 && (
        <p>
          <span className="font-semibold">Genres:</span>{" "}
          {genres.map((g) => g.name).join(", ")}
        </p>
      )}
    </div>
  );
};
