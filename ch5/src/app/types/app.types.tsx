type ShowSearchResultsType = boolean

export type ContextType = {
    showSearchResults: ShowSearchResultsType
    setShowSearchResults: React.Dispatch<React.SetStateAction<ShowSearchResultsType>>
}

export type ContextProviderProps = {
    children: React.ReactNode
}

export type DummyDataProps = {
    date: string
    title: string
    description: string
    id: number
}[];