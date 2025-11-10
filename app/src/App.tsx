import { BrowserRouter } from "react-router";
import Router from "./utils/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Auth0ProviderComponent from "./components/Auth0ProviderComponent";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // np. retry: false
      },
    },
    // 🚀 ważne: od v5 musisz jawnie włączyć experimental features
    experimental: {
      prefetchInRender: true,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Auth0ProviderComponent>
          <Router></Router>
        </Auth0ProviderComponent>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
