'use client';

import { ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#A100ff',
        },
    },
});

export function AppThemeProvider({ children }: { children: ReactNode }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}