import styled from "styled-components";
import { TypographyProps } from "../types/components.types";
import { Fonts, Colors } from "../configs/app";

export const Text = styled.p<TypographyProps>`
    Fonts-family: ${(props) => props.fontName || 'Roboto'};
    font-size: ${(props) => props.fontSize || Fonts.size.base}rem;
    font-weight: ${(props) => props.fontWeight || 600};
    line-height: 1.25rem;
    text-align: ${(props) => props.textAlign || 'left'};
    overflow: ${(props) => props.overFlow || 'hidden'};
    color: ${(props) => props.color || Colors.base};
    text-overflow: ellipsis;
    margin: ${(props) => props.margin || 0}rem;
`

export const H1 = styled.h1<TypographyProps>`
    font-family: ${(props) => props.fontName || 'Roboto'};
    font-size: ${Fonts.size.large}rem;
    font-weight: ${Fonts.weight.bold};
    line-height: 1.5rem;
    text-align: ${(props) => props.textAlign || 'left'};
    margin: ${(props) => props.margin || 0}rem;
`
export const H4 = styled.h4<TypographyProps>`
    font-family: ${(props) => props.fontName || 'Roboto'};
    font-size: ${Fonts.size.small}rem;
    font-weight: ${Fonts.weight.medium};
    line-height: 1.125rem;
    text-align: ${(props) => props.textAlign || 'left'};
    margin: ${(props) => props.margin || 0}rem;
`
export const P = styled.p<TypographyProps>`
    font-family: ${(props) => props.fontName || 'Roboto'};
    font-size: ${Fonts.size.base}rem;
    font-weight: 600;
    line-height: 1.25rem;
    text-align: ${(props) => props.textAlign || 'left'};
    margin: ${(props) => props.margin || 0}rem;
`