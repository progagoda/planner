/* eslint-disable @typescript-eslint/no-empty-interface */
import { Dropdown as AntDropdown } from 'antd';
import styled from 'styled-components';

import { backgroundColor, hoverBackgroundColor, textColor } from '../Colors';

  
export const Dropdown = styled(AntDropdown)`
  &.css-dev-only-do-not-override-17seli4 {
    .ant-dropdown {
      .ant-dropdown-menu {
        color: ${backgroundColor};
        background: ${backgroundColor};
      }
    }
  }
`
