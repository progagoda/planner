import styled from "styled-components";
import { Card } from "@shared/ui";


export const StyledCard = styled(Card)< {backgroundURL: string; }>`
    background-position: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${props=>props.backgroundURL});
    background-size: 400px 300px;
    .ant-typography {
            color: #ececef;
    }
    .anticon-ellipsis{
      color: #ececef;
      padding: 1px 10px;
      :hover {
        background: rgba(50,50,50,0.64);
        border-radius: 2px;
      }
    }
    min-height: 15vh;
    cursor: pointer;
`