import type { Game } from "@/types/types";

export const GameModalMedia = ({ game }: { game: Game }) => {
  const { cover, screenshots, name } = game;

  return (
    <div className="flex gap-4">
      {cover?.url && (
        <img
          src={cover.url.replace("t_thumb", "t_cover_big")}
          alt={name}
          className="rounded mb-4 pt-1"
        />
      )}
      {screenshots?.length > 0 && (
        <div className="flex flex-col gap-2 w-1/2">
          {screenshots.slice(0, 3).map((s, index) => (
            <img
              key={index}
              src={s.url.replace("t_thumb", "t_screenshot_med")}
              className="rounded pt-1 mb-4"
            />
          ))}
        </div>
      )}
    </div>
  );
};
