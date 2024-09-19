/* eslint-disable @typescript-eslint/no-empty-interface */
import { Form  } from 'antd';
import styled from 'styled-components';

import { textColor } from '../../Colors';


export const FormItem = styled(Form.Item)`
 &.ant-form-item .ant-form-item-label >label {
      color: ${textColor};
      font-weight: 600
  }
`
