import { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalAPI from "../services/GlobalAPI";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenre from "../components/GamesByGenre";

const Home = () => {
  const [allGameList, setAllGameList] = useState<any[]>([]);
  const [gameListByGenre, setGameListByGenre] = useState<any[]>([]);
  const [selectedGenreName, setSelectedGenreName] = useState('Action')

  useEffect(() => {
    getAllGamesList();
    getGameListByGenre(4)
  }, []);

  const getAllGamesList = () => {
    GlobalAPI.getAllGames.then((response) => {
      setAllGameList(response.data.results);
    });
  };

  const getGameListByGenre = (id: number) => {
    GlobalAPI.getGameListByGenre(id).then(response => setGameListByGenre(response.data.results))
  }

  return (
    <div className="grid grid-cols-4 dark:text-white px-5">
      <section className="hidden md:block">
        <GenreList setGenreId={(id:number)=> {getGameListByGenre(id)}} selectedGenre={(name) => setSelectedGenreName(name)} />
      </section>
      <section className="col-span-4 md:col-span-3 p-2">
        {allGameList.length > 0 && gameListByGenre.length > 0 && (
          <div>
            <Banner game={allGameList[Math.floor(Math.random() * 20)]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenre gameList={gameListByGenre} selectedGenreName={selectedGenreName} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
