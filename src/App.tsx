import { useContext } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null} min-h-[100vh]`}>
        <Header />
        <Home />
      </div>
  )
}

export default App
