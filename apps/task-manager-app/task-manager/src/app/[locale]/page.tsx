'use client';

import { useCallback, useState } from 'react';
import { Header } from '../../widgets';
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';

export const App = () =>  {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const switchTheme = useCallback(()=>setIsLightTheme(!isLightTheme),[isLightTheme])

    return (
        <ThemeProvider theme={{mode: isLightTheme ? 'light': 'dark'}}>
            <Header switchTheme={switchTheme}/>
        </ThemeProvider>
    );
}

export default appWithTranslation(App)