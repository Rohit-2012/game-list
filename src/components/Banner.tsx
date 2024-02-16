
const Banner = ({ game}:any) => {
  return (
      <div className="relative">
          <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-lg">
              <h2 className="text-[24px] text-white font-bold">{game.name }</h2>
              <button className="bg-blue-700 text-white px-3 py-2 rounded-lg font-bold">Get Now</button>
          </div>
      <img src={game.background_image} className="md:h-[320px] w-full h-full object-cover object-top rounded-lg" />
    </div>
  )
}

export default Banner
