/* eslint-disable @typescript-eslint/no-empty-interface */
import styled from 'styled-components';

import { Modal } from '../Modal';
import { backgroundColor, borderColor, textColor } from '../Colors';


export const InfoModal = styled(Modal).attrs({footer: null})`
  .ant-typography-edit-content {
    textarea {
        background: ${borderColor};
        color: ${textColor}
    }
  }

  textarea {
    border: none;
    color: ${textColor};
    background: ${backgroundColor};
  }

  textarea:hover, textarea:focus {
        border: 1px solid ${borderColor};
        background: ${borderColor};
        color: ${textColor};
  }
  
`