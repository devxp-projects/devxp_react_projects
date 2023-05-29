import { InputProps } from "../types/components.types"
import { InputBase } from '@mui/material';

export const Search = ({ onChange, onFocus, onBlur, placeholder, padding, border, borderRadius, width, maxWidth, inputRef }: InputProps) => {
    return (
        <InputBase
            onChange={(event) => onChange && onChange(event)}
            onFocus={(event) => onFocus && onFocus(event)}
            onBlur={(event) => onBlur && onBlur(event)}
            placeholder={placeholder}
            inputRef={inputRef}
            sx={{ padding: padding, border: border, borderRadius: `${borderRadius}px`, width: width, maxWidth: maxWidth }}
        ></InputBase>
    )
}