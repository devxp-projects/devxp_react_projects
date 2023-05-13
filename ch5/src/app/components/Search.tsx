import { InputProps } from "../types/components.types"
import { Input } from '@mui/material';

export const Search = ({ onChange, placeholder, padding, border, borderRadius, width }: InputProps) => {
    return (
        <Input onChange={(event) => onChange(event)} placeholder={placeholder} sx={{ padding: padding, border: border, borderRadius: `${borderRadius}px`, width: width}} ></Input>
    )
}