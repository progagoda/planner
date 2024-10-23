/* eslint-disable @typescript-eslint/no-empty-interface */
import { Popconfirm as AntPopconfirm } from 'antd';
import styled from 'styled-components';

import { backgroundColor } from '../Colors';


export const Popconfirm = styled(AntPopconfirm)`
  .ant-popover-content {
    border-radius: 50px;
    background-color: ${backgroundColor};
  }
  :hover {
     background: rgba(50,50,50,0.64);
     border-radius: 2px;
  }
`