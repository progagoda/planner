'use client';

import { appWithTranslation } from 'next-i18next';
import { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../../widgets';

const App = () =>  {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const switchTheme = useCallback(()=>setIsLightTheme(!isLightTheme),[isLightTheme])

    return (
        <ThemeProvider theme={{mode: isLightTheme ? 'light': 'dark'}}>
            <Header switchTheme={switchTheme}/>
        </ThemeProvider>
    );
}

export default appWithTranslation(App) as ()=>never