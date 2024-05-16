import {Layout} from 'antd';
import styled from 'styled-components';

import { backgroundColor, borderColor } from '../Colors';
const { Sider: AntSider } = Layout;



export const Sider = styled(AntSider)`
&.ant-layout-sider {
    background-color: ${backgroundColor};
    border-right: 1px solid ${borderColor};
}
&.ant-layout-sider-trigger{
    background: ${backgroundColor};
  }
`