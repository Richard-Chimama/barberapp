import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ClientThemeProvider from "./ClientThemeProvider/ClientThemeProvider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './globals.css';


const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Barber App",
  description: "Barbershop management app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title as string}</title>
      </head>
      <body className={`${roboto.className} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ClientThemeProvider font={roboto}>{children}</ClientThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
