import { useAuth } from '@clerk/nextjs';
import Link from 'next/link'
import { antIcons,Header as UIHeader, Switch } from '@shared/ui';
import { LangSwitcher } from '../lang-switcher';
import { UserInfo } from './_ui/UserInfo';
import { StyledFlexButton, StyledLogo } from './styles';
import { homePageURL, welcomePageURL } from '@/configs/constants';

const { MoonOutlined, SunOutlined } = antIcons

export interface HeaderProps {
  switchTheme: ()=> void;
  isDarkTheme: boolean;
}

export const Header = (props: HeaderProps) => {
    const {userId} = useAuth()
 
    const homeLink = userId ? homePageURL : welcomePageURL

    return (
        <UIHeader style={{ height: '7.9vh' }} data-testid='header'>
            <Link href={homeLink}>
                <StyledLogo>PLANNER</StyledLogo>
            </Link>
            <StyledFlexButton>
                <LangSwitcher/>
                <Switch data-testid ={'theme-switcher'} defaultChecked={props.isDarkTheme} checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />} onClick={props.switchTheme} />
                <UserInfo key='userInfo'/>
            </StyledFlexButton>
        </UIHeader>
    )
};