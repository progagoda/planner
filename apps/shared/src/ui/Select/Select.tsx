/* eslint-disable @typescript-eslint/no-empty-interface */
import { Select as AntSelect, type SelectProps} from 'antd';
import styled from 'styled-components';

import { backgroundColor, borderColor, hoverBackgroundColor, placeholderColor, textColor } from '../Colors';


const StyledSelect = styled(AntSelect)`

 .ant-select-selector {
  background: ${hoverBackgroundColor} !important;
  border: 1px solid ${borderColor};
  color: ${textColor}
  }
  .ant-select-selection-placeholder{
    color: ${placeholderColor};
  }
  .ant-select-selection-item {
    background: ${hoverBackgroundColor} !important;
    border: 1px solid ${textColor} !important;
    
    .ant-select-selection-item-remove {
      color: ${textColor};
    }
  }
  .ant-select-dropdown {
    background-color: ${backgroundColor} !important;
    border: 1px solid ${borderColor};
    color: ${textColor};
  }
  .ant-select-arrow {
    color: ${textColor};
  }
  .ant-select-item-option-content{
    color: ${textColor} !important;
  }
`;

type TSelectProps = SelectProps & {
  theme?: { mode: string;}
}
export const Select = (props: TSelectProps)=> <StyledSelect {...props} dropdownStyle={{
  // background: 'red',
  // color: 'white'
}}/> 