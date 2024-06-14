/* eslint-disable @typescript-eslint/ban-ts-comment */
import { antIcons,Header as UIHeader, Switch } from '@shared/ui';

import { StyledFlexButton, StyledLogo } from './styles';
import { LangSwitcher } from '../lang-switcher';
import { UserInfo } from './UserInfo';


const { MoonOutlined, SunOutlined } = antIcons

/* eslint-disable-next-line */
export interface HeaderProps {
  switchTheme: ()=> void;
}

export const Header = (props: HeaderProps) => {
    return (
        <UIHeader style={{ height: '7.9vh' }} data-testid='header'>
            <StyledLogo>PLANNER</StyledLogo>
            <StyledFlexButton>
                <LangSwitcher/>
                <Switch data-testid ={'theme-switcher'} defaultChecked checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />}onClick={props.switchTheme}></Switch>
                <UserInfo key='userInfo'/>
            </StyledFlexButton>
        </UIHeader>
    )
};
