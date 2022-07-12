import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from 'use-local-storage';
import {
    lightTheme,
    darkTheme,
    GlobalStyles,
    sharedTheme,
} from '../themes/themes';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [defaultDark, setDefaultDark] = useState(null);
    const [theme, setTheme] = useLocalStorage(
        'theme',
        defaultDark ? 'dark' : 'light'
    );

    const [themeLight, setThemeLight] = useState(theme === 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setThemeLight(!themeLight);
    };

    useEffect(() => {
        const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        console.log(dark);

        setDefaultDark(dark);
        // setTheme(useLocalStorage('theme', dark ? 'dark' : 'light'));
        setThemeLight(!dark);
    }, []);

    return (
        <div>
            {defaultDark !== null && (
                <Context.Provider
                    value={{ themeLight, setThemeLight, switchTheme }}
                >
                    <ThemeProvider
                        theme={
                            themeLight
                                ? { ...lightTheme, ...sharedTheme }
                                : { ...darkTheme, ...sharedTheme }
                        }
                    >
                        <GlobalStyles />
                        {children}
                    </ThemeProvider>
                </Context.Provider>
            )}
        </div>
    );
};

export const useStateContext = () => useContext(Context);
