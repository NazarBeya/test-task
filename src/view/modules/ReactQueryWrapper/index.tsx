import React, {ReactNode, useRef} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

type Props = {
  children: ReactNode;
};

function ReactQueryWrapper({children}: Props) {
  const {current: queryClient} = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
          retry: false,
          staleTime: Infinity,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <>
        {children}
      </>
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
