/* eslint-disable @typescript-eslint/no-empty-interface */
import { Input as AntInput } from 'antd';
import styled from 'styled-components';

import { backgroundColor, borderColor, hoverBackgroundColor, placeholderColor, textColor } from '../Colors';


export const Input = styled(AntInput)`
    color: ${textColor};
    background: ${backgroundColor};
    border: 1px solid ${backgroundColor};
    border-bottom: 1px solid red;
    &:hover,:focus {
        background: ${backgroundColor};
        border: 1px solid ${borderColor};
        border-bottom: 1px solid red;
    };
    &.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled), :focus-within{
        background: ${backgroundColor};
    }
    ::placeholder{
        color: ${hoverBackgroundColor};
    }
`
export const FormInput = styled(AntInput)`
    color: ${textColor};
    background: ${hoverBackgroundColor};
    border: 1px solid ${textColor};
    &:hover,:focus {
        background: ${hoverBackgroundColor};
        border: 1px solid ${textColor};
    };
    &.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled), :focus-within{
        background: ${hoverBackgroundColor};
    }
    ::placeholder{
        color: ${placeholderColor}
    }
`

export const FormPassword = styled(AntInput.Password)`
    color: ${textColor};
    background: ${backgroundColor};
    border: 1px solid ${backgroundColor};
    border-bottom: 1px solid red;
    &:hover,:focus {
        background: ${backgroundColor};
        border: 1px solid ${borderColor};
        border-bottom: 1px solid red;
    };
    &.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled), :focus-within{
        background: ${backgroundColor};
    }
    .ant-input::placeholder {
        color: ${hoverBackgroundColor};
    }
    .ant-input-password-icon {
        color: ${hoverBackgroundColor} !important;
    }
`