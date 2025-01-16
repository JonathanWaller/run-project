// import { ChakraProvider, extendTheme, ChakraProviderProps } from "@chakra-ui/react";
// import { Provider } from "@/components/ui/provider";

import { Provider } from "@/components/ui/provider"

import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Run-Project",
  description: "App to track endurance running",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  );
}
