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
    const [darkMode, setDarkMode] = useState(null);

    useEffect(() => {
        const themeLocalStorage = window.localStorage.getItem('theme');
        if (themeLocalStorage !== null) {
            setDarkMode(themeLocalStorage === 'dark');
        } else {
            setDarkMode(
                window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
            );
        }
        const modeMe = (e) => {
            const dark = !!e.matches;
            setDarkMode(dark);
            window.localStorage.setItem('theme', dark ? 'dark' : 'light');
        };
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', modeMe);
        return window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', modeMe);
    }, []);

    const setThemeLocalStorage = () => {
        console.log('setThemeLocalStorage');
        const dark = !darkMode;
        window.localStorage.setItem('theme', dark ? 'dark' : 'light');
        setDarkMode(dark);
    };

    return (
        <div>
            {darkMode !== null && (
                <Context.Provider value={{ darkMode, setThemeLocalStorage }}>
                    <ThemeProvider
                        theme={
                            !darkMode
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
