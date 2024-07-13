import {
  ClerkProvider,
} from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes';

import './global.css';

export const metadata = {
  title: 'FormBuilder',
  description: 'The Formbuilder project from Amir Ali Azimloo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </body>
      </html>
    </ClerkProvider>
  );
}