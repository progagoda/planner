import styled from "styled-components";

import { currentTheme } from "../Colors";

export const Scrollable = styled.div<{height: number}>`
    overflow: auto;
    height: ${props=> props.height}vh;
    color-scheme: ${currentTheme};
    scrollbar-width: thin;
`