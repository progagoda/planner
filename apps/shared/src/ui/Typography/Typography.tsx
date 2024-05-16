
import {Typography as AntTypography} from 'antd';
import styled from 'styled-components';

import { textColor, warningTextColor } from '../Colors';

export const Typography = styled(AntTypography)<{textWarning?: boolean}>`
color: ${props=> props.textWarning ? warningTextColor : textColor}
`
export const Title = styled(AntTypography.Title)`
    color: ${textColor} !important;
`