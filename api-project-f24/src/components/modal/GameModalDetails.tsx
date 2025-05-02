import { getDevelopers, getValidRelease } from "@/utility/gameUtilis";
import type { Game } from "@/types/types";
import EditableStars from "../../ui/EditableStars";
import { useRatingStore } from "@/store/ratingState";
import GameModalList from "./GameModalList";

export const GameModalDetails = ({ game }: { game: Game }) => {
  const {
    summary,
    aggregated_rating,
    platforms,
    genres,
    release_dates,
    involved_companies,
    id,
  } = game;

  const release = getValidRelease(release_dates);
  const developers = getDevelopers(involved_companies);

  const { ratings, addRating } = useRatingStore();

  const getExistingRating = () => {
    const existing = ratings.find((r) => r.gameId === game.id.toString());
    return existing ? existing.rating : 0; // Returnera 0 om ingen rating finns
  };

  const handleRatingChange = (newRating: number) => {
    addRating(game.id.toString(), newRating, game.cover.url, game.name);
  };

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

      <div className="pt-4 pl-[3px]">
        <EditableStars
          currentRating={getExistingRating()}
          onRatingChange={handleRatingChange}
        />
      </div>
      {/*List*/}
      <GameModalList game={{ id: game.id.toString(), name: game.name, image: game.cover.url }} />
    </div>
  );
};
