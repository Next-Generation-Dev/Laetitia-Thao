// pages/_app.tsx
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;
