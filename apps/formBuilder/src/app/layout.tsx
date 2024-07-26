import {
  ClerkProvider,
} from '@clerk/nextjs'

import './global.css';
import { ThemeProvider } from '@form-builder/providers';
import {DesignerContextProvider} from '@form-builder/contexts';
import NextTopLoader from "nextjs-toploader";
import { Metadata, Viewport } from 'next';


export const metadata: Metadata = {
  applicationName: "FormBuilder",
  title: {
    default: "FormBuilder",
    template: "APP_TITLE_TEMPLATE",
  },
  description: "The Formbuilder project from Amir Ali Azimloo",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FormBuilder",
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "APP_NAME",
    title: {
      default: "FormBuilder",
      template: "APP_TITLE_TEMPLATE",
    },
    description: "The Formbuilder project from Amir Ali Azimloo",
  },
  twitter: {
    card: "summary",
    title: {
      default: "FormBuilder",
      template: "APP_TITLE_TEMPLATE",
    },
    description: "The Formbuilder project from Amir Ali Azimloo",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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