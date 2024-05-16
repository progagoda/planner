import {Modal as AntModal} from 'antd'
import styled from 'styled-components';

import { backgroundColor, hoverBackgroundColor, textColor } from '../Colors';


export const Modal = styled(AntModal)`
button {
  background: ${backgroundColor};
  color: ${textColor};
}
.ant-modal-title{
  background: ${backgroundColor};
  color: red;
}
  .ant-modal-content {
    background: ${backgroundColor};
    color: ${textColor};
    border: 1px solid ${textColor};
    .ant-btn-primary {
        background: ${backgroundColor};
        border: 1px solid ${textColor};
    }
    .ant-btn-primary:hover {
      background: ${hoverBackgroundColor};
      border: 1px solid red;
    }
    .ant-modal-close-x{
      color: ${textColor}
    }
    .ant-btn-default:hover {
      background: ${hoverBackgroundColor};
      border: 1px solid red;
      color: ${textColor}
    }
  }
`
