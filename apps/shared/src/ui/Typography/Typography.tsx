
import {Typography as AntTypography} from 'antd';
import styled from 'styled-components';

import { textColor, warningTextColor, placeholderColor } from '../Colors';

export const Typography = styled(AntTypography)<{textWarning?: boolean}>`
color: ${props=> props.textWarning ? warningTextColor : textColor}
`
export const Title = styled(AntTypography.Title)`
    color: ${textColor} !important;
    margin: 0px;
`

export const Text = styled(AntTypography.Text)`
    color: ${textColor} !important;
`

export const SecondaryText = styled(AntTypography.Text)`
  color: ${placeholderColor} !important;
`