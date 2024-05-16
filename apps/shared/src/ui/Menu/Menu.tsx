import {Menu as AntMenu} from 'antd';
import styled from 'styled-components';

import { backgroundColor, borderColor, hoverBackgroundColor, textColor } from '../Colors';


export const Menu = styled(AntMenu)`
&.ant-menu-light .ant-menu-item{
    color: ${textColor};
 }
 
&.ant-menu{
    background-color: ${backgroundColor};
    border-right: 1px solid ${borderColor}
}

&.ant-menu-light .ant-menu-item-selected{
  background-color: ${borderColor};
}
&.ant-menu-light:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):hover{
  background: ${hoverBackgroundColor};
  color: ${textColor};
}
&.ant-menu-active{
  border: 1px solid ${hoverBackgroundColor};
}
`