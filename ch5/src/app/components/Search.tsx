import { InputProps } from "../types/components.types"


export const Search = ({placeholder, onChange} : InputProps) => {
    return (
        <input placeholder={placeholder} onChange={(event) => onChange(event)}></input>
    )
}