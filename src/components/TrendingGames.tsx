export type GameListProps = {
    gameList: any[];
    selectedGenreName?:string
};
const TrendingGames = ({ gameList }: GameListProps) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px]">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div key={item.id} className="bg-slate-300 dark:bg-slate-600 p-2 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer mt-5">
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-lg object-cover"
                />
                <h2 className="text-[20px] font-bold">{item.name}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
