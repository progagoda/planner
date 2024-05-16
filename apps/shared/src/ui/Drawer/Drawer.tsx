/* eslint-disable @typescript-eslint/no-empty-interface */
import { Drawer as AntDrawer} from 'antd';
import styled from 'styled-components';

import { borderColor, hoverBackgroundColor, textColor } from '../Colors';


export const Drawer = styled(AntDrawer)`
&.ant-drawer-content {
      background-color: ${hoverBackgroundColor};
      color: ${textColor};
}

.ant-drawer-header {
  border-bottom: 1px solid ${borderColor};
  .ant-drawer-title{
    color: ${textColor};
  }
  .ant-drawer-close{
    color: ${textColor};
  }
}
`