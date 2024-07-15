import {
  ClerkProvider,
} from '@clerk/nextjs'

import './global.css';
import { ThemeProvider } from '@form-builder/providers';
import {DesignerContextProvider} from '@form-builder/contexts';
import NextTopLoader from "nextjs-toploader";

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
      <NextTopLoader />
      <DesignerContextProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
      </DesignerContextProvider>
      </body>
      </html>
    </ClerkProvider>
  );
}