import React from "react";
import ReactDOM from "react-dom/client";
import {StyledEngineProvider, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import ReactQueryWrapper from "./view/modules/ReactQueryWrapper";
import theme from "./view/theme";
import {SocketProvider} from "./context/SocketContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SocketProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ReactQueryWrapper>
            <CssBaseline />
            <App />
          </ReactQueryWrapper>
        </ThemeProvider>
      </StyledEngineProvider>
    </SocketProvider>
  </React.StrictMode>,
);
