import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from './styles/themes';
import GlobalStyle from './components/Main/styles';
import ThemeContext from './styles/themes/context';
import Main from './components/Main';

function App() {
    const [theme, SetTheme] = useState(themes.dark);

    function toggleTheme() {
        SetTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <ThemeContext.Consumer>
                    {(themeSwitcher) => (
                        <ThemeProvider theme={themeSwitcher}>
                            <Main toggleTheme={toggleTheme} />
                            <GlobalStyle />
                        </ThemeProvider>
                    )}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
        </>
    );
}

export default App;
