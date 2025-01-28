import styled from "styled-components";
import { backgroundColor, Flex } from "@shared/ui";

export const StyledFlex = styled(Flex)<{background: string}>`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${props => props.background});
    background-size: cover; 
    background-position: center;
 `

export const StyledFlexList = styled(Flex)`
    padding: 10px;
    background-color: ${backgroundColor};
    border-radius: 5px;
    height: max-content;
`