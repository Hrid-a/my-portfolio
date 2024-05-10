import {
  Work_Sans,
  Spline_Sans_Mono
} from "next/font/google";
import clsx from "clsx";

import { LIGHT_TOKENS, DARK_TOKENS } from "@/constant";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata = {
  title: "Ahmed HRID",
  description: "my protfolio to show my skills in web development",
};

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export default function RootLayout({ children }) {

  const theme = 'light';

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body
      >
        <Header theme={theme} />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
