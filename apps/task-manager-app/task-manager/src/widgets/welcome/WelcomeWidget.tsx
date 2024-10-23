import { Flex } from "antd"
import { AuthFeature } from '@/features';
import { AboutApp } from "./_ui/AboutApp"
import { Features } from "./_ui/Features";

export const WelcomeWidget = () => {
    const {SignInButton} = AuthFeature
    
    return (
        <Flex vertical justify="center" align="center" style={{height: '100%'}} gap={50}> 
            <AboutApp/>
            <SignInButton size="large"/>
            <Features/>
        </Flex>
    )
}