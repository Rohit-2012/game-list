import controller from "../assets/images/controller.png";
import { LuSearch } from "react-icons/lu";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const setLight = () => {
    setTheme('light')
    localStorage.setItem('theme', 'light')
  }
  const setDark = () => {
    setTheme('dark')
    localStorage.setItem('theme', 'dark')
  }
  
  
    const toggleDarkMode = () => {
      theme === 'light' ? setDark() : setLight()
    }

  return (
    <header className="flex items-center min-w-full justify-between p-4 gap-2 box-border">
      <img src={controller} alt="logo" className="w-12 h-12"/>
      <div className="w-full flex items-center gap-2 p-2 rounded-full bg-slate-200">
        <LuSearch />
        <input
          type="text"
          placeholder="Search Games..."
          className="bg-transparent w-full outline-none"
        />
      </div>
      <div>
        {theme === 'dark' ? (
          <BsMoonFill className="text-[35px] bg-slate-200 text-black p-2 rounded-full cursor-pointer" onClick={toggleDarkMode}/>
        ) : (
          <BsSunFill className="text-[35px] bg-slate-200 text-black p-2 rounded-full cursor-pointer" onClick={toggleDarkMode}/>
        )}
      </div>
    </header>
  );
};

export default Header;
