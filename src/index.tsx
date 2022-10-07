import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

// 혹시 root 때문에 에러나시는 분
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// 이거로 변경해보세요
