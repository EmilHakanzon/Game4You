import type { Game } from "@/types/types";

export const GameModalMedia = ({ game }: { game: Game }) => {
  const { cover, screenshots, name } = game;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Cover Image */}
      {cover?.url && (
        <img
          src={cover.url.replace("t_thumb", "t_cover_big")}
          alt={name}
          className="rounded mb-4 pt-1 w-full md:w-auto"
        />
      )}

      {/* Screenshots */}
      {screenshots?.length > 0 && (
        <div className="flex flex-wrap gap-2 w-full md:w-1/2">
          {screenshots.slice(0, 3).map((s, index) => (
            <img
              key={index}
              src={s.url.replace("t_thumb", "t_screenshot_med")}
              alt={`Screenshot ${index + 1}`}
              className="rounded pt-1 mb-4 w-full sm:w-[48%] md:w-auto"
            />
          ))}
        </div>
      )}
    </div>
  );
};
