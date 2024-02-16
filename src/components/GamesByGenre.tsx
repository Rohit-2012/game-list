import { GameListProps } from "./TrendingGames";

const GamesByGenre = ({ gameList, selectedGenreName }: GameListProps) => {
  return (
    <div>
      <h2 className="text-[30px] font-bold mt-5">{selectedGenreName} Games</h2>
      <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item) => (
          <div
            key={item.id}
            className="bg-slate-300 dark:bg-slate-600 p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-lg object-cover"
            />
            <h2 className="text-[20px] font-bold">
              {item.name}{" "}
              <span className="bg-teal-50 text-green-500 text-[14px] p-1 rounded-sm">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-700">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenre;
