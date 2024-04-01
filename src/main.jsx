import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const chakraTheme = extendTheme({
  colors: {
    brands: {
      primary: " #eee",
      secondary: " #00adb5",
      bg: " #222831",
      dark: " #393e46",
      light: " #fff",
      danger: " #dc3545",
      success: " #44f759",
      info: " #19a8be",
      warning: " #fccf49",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={createTheme()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
