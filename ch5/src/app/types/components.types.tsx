export type InputProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => void
    inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
    placeholder: string
    padding?: string
    border?: string
    borderRadius?: number
    width?: string
    maxWidth?: string
}

