import { createGlobalStyle } from 'styled-components';

import Exwayer from './Exwayer.ttf'

export default createGlobalStyle`
@font-face {
    font-family: 'Exwayer';
    src: url(${Exwayer});
  }
  `