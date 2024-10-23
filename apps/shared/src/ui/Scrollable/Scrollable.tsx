import styled from "styled-components";

import { currentTheme } from "../Colors";

export const Scrollable = styled.div<{height?: number}>`
    overflow: auto;
    height: ${props=> props?.height ? props.height+'vh': 'max-content'};
    color-scheme: ${currentTheme};
    scrollbar-width: thin;
`