import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Tailwind via CDN */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script
        src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"
        strategy="beforeInteractive"
      />

      {/* React + ReactDOM CDN (not recommended for Next.js) */}
      {/* Next.js already bundles React internally, no need to include these */}

      {/* Babel Standalone (only needed if you want to compile JSX in browser) */}
      {/* Normally not used in Next.js projects */}
      <Script
        src="https://unpkg.com/@babel/standalone/babel.min.js"
        strategy="lazyOnload"
      />

      {/* Lucide React UMD build */}
      <Script
        src="https://cdn.jsdelivr.net/npm/lucide-react@0.294.0/dist/umd/lucide-react.min.js"
        strategy="lazyOnload"
      />

      <Component {...pageProps} />
    </>
  );
}
