import styled from "styled-components";
import { backgroundColor, Flex, hoverBackgroundColor } from "@shared/ui";

export const CreateCardFlex = styled(Flex)`
    padding: 5px;
    width: 20vh;
    height: max-content;
    background-color: white;
    box-shadow: 0 0 10px 0 ${hoverBackgroundColor};
    opacity: 0.8; 
    border-radius: 5px;
    сursor: pointer;
 `

export const CreateCardInputFlex = styled(Flex)`
    padding: 10px;
    background-color: ${backgroundColor};
    border-radius: 5px;
    width: 20vh;
    height: max-content;
 `