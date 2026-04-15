'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';
import { Toaster } from '@/components/ui/sonner';
import { CommandPalette } from '@/components/shared/command-palette';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <CommandPalette />
        <Toaster position="top-center" richColors />
      </NextThemesProvider>
    </Provider>
  );
}
