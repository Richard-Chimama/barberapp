"use client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NextFont } from "next/dist/compiled/@next/font";

interface ClientThemeProviderProps {
  children: React.ReactNode;
  font: NextFont;
}

export default function ClientThemeProvider({ children, font }: ClientThemeProviderProps) {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ".mui-5c1adp-MuiContainer-root": {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
            marginLeft: "0 !important",
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
        },
      },
    },
    typography: {
      fontFamily: font.style.fontFamily,
    },
  });

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}</ThemeProvider>;
}
