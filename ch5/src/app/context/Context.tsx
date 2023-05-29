import { createContext, useState } from "react"

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [showSearchResults, setShowSearchResults] = useState<ShowSearchResultsType>(false);

    return (
        <Context.Provider value={{ showSearchResults, setShowSearchResults }}>{children}</Context.Provider>
    )
}