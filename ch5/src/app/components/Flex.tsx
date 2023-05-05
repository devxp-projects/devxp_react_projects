import styled from "styled-components"
import { FlexProps } from "../types/components.types"

export const Flex = styled.div<FlexProps>`
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    align-items: ${(props) => props.alignItems || 'normal'};
    gap: ${(props) => props.gap || 0}rem;
    padding: ${(props) => props.padding || 0}rem;
    border-bottom: ${(props) => props.borderBottom || 'none'}
`
export const Row = styled(Flex)`
    flex-direction: row;

    @media screen and (max-width: 1024px){
        flex-direction: ${(props) => props.toColumn && 'column'};
    }
`
export const Column = styled(Flex)`
    flex-direction: column;
    
    @media screen and (max-width: 1024px){
        flex-direction: ${(props) => props.toRow && 'row'};
    }
`