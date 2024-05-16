import { Layout  } from "antd";
import styled from "styled-components";

import { backgroundColor, borderColor } from "../Colors";


const {Header: AntHeader} = Layout;

export const Header = styled(AntHeader)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${borderColor};
    &.ant-layout-header{
        background-color: ${backgroundColor}
    }`
