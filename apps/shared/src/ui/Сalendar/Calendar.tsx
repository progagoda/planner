/* eslint-disable @typescript-eslint/no-empty-interface */
import { Calendar as AntCalendar} from 'antd';
import styled from 'styled-components';

import { backgroundColor, currentTheme, hoverBackgroundColor, textColor } from '../Colors';


export const Calendar = styled(AntCalendar)`
    background: ${backgroundColor};
    overflow: auto;
    height: 92vh;
    color-scheme: ${currentTheme};
    .ant-picker-body, .ant-picker-content, .ant-picker-panel {
        background: ${backgroundColor};
        th {
            color: ${textColor};
        }
        .ant-picker-cell {
            :hover {
                background:${hoverBackgroundColor};
            }
            color: ${textColor};
            .ant-picker-calendar-date-value {
                color: ${textColor} ;
            };
            .events{
                padding-left: 1px;
                color: ${textColor};
            }
        }
    }
    .ant-picker-calendar-date-today{
        background: ${backgroundColor} !important;
    }

`