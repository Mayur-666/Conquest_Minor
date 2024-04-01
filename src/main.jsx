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
      bg:"#0b0C10",
      pri: "#45A29E",
      sec: "#66FCF1",
      light:"#C5C6C7",
      dark: "#1f2833",
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
