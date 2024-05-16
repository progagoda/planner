/* eslint-disable @typescript-eslint/no-empty-interface */
import { TimePicker as AntTimePicker, TimeRangePickerProps, } from 'antd';
import styled from 'styled-components';

import { hoverBackgroundColor, textColor } from '../Colors';


export const StyledTimeRangePicker = styled(AntTimePicker.RangePicker)`
  &.ant-picker {
    background: ${hoverBackgroundColor};
    color: ${textColor};
    border: 1px solid ${textColor};
    .ant-picker-outlined .ant-picker-status-error:not(.ant-picker-disabled) {
      background: ${hoverBackgroundColor};
    }
  }
  .ant-picker-input {
      color: ${textColor};
      input::placeholder{
        color: ${textColor};
      }
    }
  .ant-picker-suffix{
      color: ${textColor};
  }
  .ant-picker-clear, .ant-picker-clear:hover{
      color: ${textColor};
  }
  }
  .ant-picker-separator{
    color: ${textColor}
  }
`
type TTimeRangePickerProps = TimeRangePickerProps & {
  theme?: {
    mode: string;
  }
}
const format = 'HH:mm';
export const TimeRangePicker = (props: TTimeRangePickerProps)=> <StyledTimeRangePicker {...props} format ={format}/>