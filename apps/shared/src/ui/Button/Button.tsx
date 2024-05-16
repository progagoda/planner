/* eslint-disable @typescript-eslint/no-empty-interface */
import { Button as AntButton } from 'antd';
import styled from 'styled-components';

import { backgroundColor, borderColor, hoverBackgroundColor, textColor } from '../Colors';


export const Button = styled(AntButton)`
 background: ${backgroundColor};
 color: ${textColor};
 border: 1px solid ${borderColor};

 &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover{
  background: ${hoverBackgroundColor};
  border: 1px solid ${borderColor};
  color: ${textColor}
  }

&.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
    background: ${hoverBackgroundColor};
    border: 1px solid ${borderColor};
    color: ${textColor}
    }
`
export const FormButton = styled(AntButton)`
 background: ${hoverBackgroundColor};
 color: ${textColor};
 border: 1px solid ${textColor};

 &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover{
  background: ${hoverBackgroundColor};
  border: 1px solid red;
  color: ${textColor}
  }

&.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
    background: ${hoverBackgroundColor};
    border: 1px solid ${borderColor};
    color: ${textColor}
    }
`