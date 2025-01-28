import styled from "styled-components";
import { Flex, hoverBackgroundColor } from "@shared/ui";

export const CreateColumnFlex = styled(Flex)`
    padding: 5px;
    width: 20vh;
    height: max-content;
    background-color: white;
    box-shadow: 0 0 10px 0 ${hoverBackgroundColor};
    opacity: 0.8; 
    border-radius: 5px;
    сursor: pointer;
 `

export const CreateColumnInputFlex = styled(Flex)`
    padding: 10px;
    background-color: black;
    border-radius: 5px;
    width: 20vh;
    height: max-content;
 `