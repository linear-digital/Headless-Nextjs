import { ThemeProvider } from 'next-themes';
import React from 'react';

const DefaultLayout = () => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            
        </ThemeProvider>
    );
};

export default DefaultLayout;