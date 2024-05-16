/* eslint-disable @typescript-eslint/no-empty-interface */
import { Card as AntCard } from 'antd';
import styled from 'styled-components';

import { hoverBackgroundColor, textColor } from '../Colors';


export const Card = styled(AntCard)`
  background: ${hoverBackgroundColor};
  color: ${textColor};
  border: 1px solid ${hoverBackgroundColor};
  border-radius: 4px;
  width: 50vh;
`
