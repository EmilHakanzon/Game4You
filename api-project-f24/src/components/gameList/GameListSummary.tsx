type Props = {
  games: {
    status: "Completed" | "Still Playing" | "Not Started";
    timeSpent?: number;
  }[];
};

const GameListSummary = ({ games }: Props) => {
  const completed = games.filter((g) => g.status === "Completed");
  const stillPlaying = games.filter((g) => g.status === "Still Playing");
  const notStarted = games.filter((g) => g.status === "Not Started");
  const totalHours = completed.reduce((sum, g) => sum + (g.timeSpent || 0), 0);

  return (
    <div className="mb-4 text-sm text-[#3B82F6] pl-20">
      {completed.length > 0 && <p>{completed.length} Completed games</p>}
      {stillPlaying.length > 0 && <p>{stillPlaying.length} Still playing</p>}
      {notStarted.length > 0 && <p>{notStarted.length} Not started</p>}
      {totalHours > 0 && <p>{totalHours} hours spent</p>}
    </div>
  );
};

export default GameListSummary;
