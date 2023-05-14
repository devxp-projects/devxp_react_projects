export type InputProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder: string
    padding?: string
    border?: string
    borderRadius?: number
    width?: string
}

export type DummyDataProps = {
    date: string
    title: string
    description: string
    id: number
}[]
