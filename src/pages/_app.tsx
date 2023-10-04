import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Inter } from "next/font/google";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--poppins-font",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </main>
  );
}
