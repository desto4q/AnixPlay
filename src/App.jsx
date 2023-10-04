import React from "react";
import "./App.scss";
import Page_router from "./Router/Page_router";
import webfontloader from "webfontloader";
import { ContextMaker } from "./context/Context";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  webfontloader.load({
    google: {
      families: ["Montserrat"],
    },
  });
  return (
    <ContextMaker
      child={
        <QueryClientProvider client={queryClient}>
          <div className="app">
          <Page_router />
        </div>
        </QueryClientProvider>
      }
    />
  );
}

export default App;
