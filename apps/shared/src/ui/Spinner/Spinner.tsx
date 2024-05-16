import { LoadingOutlined } from '@ant-design/icons';
import { Spin, SpinProps } from 'antd';
import styled from 'styled-components';



const StyledSpin = styled(Spin)`
    height: 150px;
`
type TSpinnner = SpinProps & {
    theme?:{
        mode: 'light'|'dark'
    }
}
export const Spinner = (props: TSpinnner) => <StyledSpin indicator={<LoadingOutlined spin />} {...props} />;