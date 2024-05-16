import { Typography } from "antd";
import styled from "styled-components";

import { backgroundColor } from "../Colors";



export const Logo = styled(Typography)`
  font-weight: normal;
  font-family: 'Exwayer';
  background: ${backgroundColor};
  background: linear-gradient(90deg, rgba(236,57,57,1) 0%, 
    rgba(131,58,180,1) 22%, 
    rgba(63,226,197,1) 46%, 
    rgba(85,220,63,1) 83%, 
    rgba(255,47,234,1) 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`