"use client";
import { createTheme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
    interface PaletteOptions {
    medalGold: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      dark: "#102649",
      main: "#16325B",
      light: "#5c708c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#29A6E5",
      light: "#69c1ed",
      dark: "#1f95de",
      contrastText: "#fff",
    },
    background: {
      default: "#e7eff1",
    },
    text: {
      primary: "#2F4858",
    },
    medalGold:{
      main: '#FFD700'
    }
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: { fontSize: "3rem" },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.5rem" },
    h4: { fontSize: "1.3rem" },
    h5: { fontSize: "1rem" },
  },
});

export { theme };

declare module "@mui/material/styles" {
  interface Theme {}
  // allow configuration using `createTheme`
  interface ThemeOptions {}
}
