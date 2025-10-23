import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./pages/HomePage";
import MyFeedPage from "./pages/MyFeedPage";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* Layout 컴포넌트가 공통 UI를 감싸고, 자식 페이지들이 Outlet으로 렌더링됨 */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="my-feed" element={<MyFeedPage />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
