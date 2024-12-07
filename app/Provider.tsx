"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode, useState } from "react";
import { SSRProvider } from "react-query-ssr";

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <SSRProvider>{children}</SSRProvider>
    </QueryClientProvider>
  );
};
