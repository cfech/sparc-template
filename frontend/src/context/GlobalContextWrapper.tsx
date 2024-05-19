import React from "react";

import { ThemeContextWrapper } from "./contextWrappers/ThemeContextWrapper.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface GlobalContextProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes in milliseconds
    },
  },
});
// Normal react component
export const GlobalContextWrapper = ({ children }: GlobalContextProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextWrapper>{children}</ThemeContextWrapper>
    </QueryClientProvider>
  );
};
