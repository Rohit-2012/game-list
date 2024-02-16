import { useEffect, useState } from "react"
import GlobalAPI from "../services/GlobalAPI"

type SetGenreIdProps = {
    setGenreId: (id:number) => void,
    selectedGenre: (name: string) => void,
}


const GenreList = ({ setGenreId, selectedGenre}: SetGenreIdProps) => {

    const [genreList, setGenreList] = useState<any[]>([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        getGenreList()
    }, [])

    const getGenreList = () => {
        GlobalAPI.getGenreList.then(response => setGenreList(response.data.results))
    }
  return (
    <div>
          <h2 className="text-[30px] font-bold">Genre</h2>
          {
              genreList.map((item, index) => (
                  <div key={item.id} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group ${activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : null}`}
                      onClick={() => {
                          setActiveIndex(index);
                          setGenreId(item.id)
                          selectedGenre(item.name)
                      }}>
                      <img src={item['image_background']} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex === index ? 'scale-105': null}`} />
                      <h3 className={`text-[18px] group-hover:font-bold transition-all duration-300 ${activeIndex === index ? 'font-bold': null}`}>{item.name}</h3>
                  </div>
              ))
          }
    </div>
  )
}

export default GenreList
