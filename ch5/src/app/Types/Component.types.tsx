export type CardProps = {
    padding?: number
    borderRadius?: number
}

export type FlexProps = {
    toRow?: boolean
    toColumn?: boolean
    children?: React.ReactNode
    justifyContent?: string
    alignItems?: string
    gap?: number
    padding?: number
    borderBottom?: string
}

export type TypographyProps = {
    fontName?: string 
    fontSize?: number
    fontWeight?: string
    textAlign?: string
    overFlow?: string
    color?: string
    margin?: number
}