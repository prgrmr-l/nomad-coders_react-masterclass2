import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);

// 혹시 root 때문에 에러나시는 분
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// 이거로 변경해보세요
