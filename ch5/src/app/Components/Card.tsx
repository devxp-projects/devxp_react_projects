import { CardProps } from '../Types/Component.types';
import styled from "styled-components";

export const Card = styled.div<CardProps>`
  padding: ${(props) => props.padding || 0}rem;
  border-radius: ${(props) => props.borderRadius || 0}rem;
`;
