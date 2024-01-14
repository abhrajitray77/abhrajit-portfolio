"use client";
import { ThemeProvider } from "next-themes";
import { ApolloWrapper } from "./lib/apollo-provider";

type Props = {};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloWrapper>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </ApolloWrapper>
  );
};
