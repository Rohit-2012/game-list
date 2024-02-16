import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

export type ThemeContextType = {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
}

type ThemeContextProviderProps = {
    children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme')||'light')

    return <ThemeContext.Provider value={{ theme, setTheme }}>{ children}</ThemeContext.Provider>
}
