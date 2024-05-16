import { cookies } from "next/headers";
import {
  Work_Sans,
  Spline_Sans_Mono
} from "next/font/google";
import clsx from "clsx";

import { LIGHT_TOKENS, DARK_TOKENS } from "@/constant";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import MotionConfigWrapper from "@/components/MotionConfigWrapper";


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
  const savedTheme = cookies().get('theme-color')?.value;

  const theme = savedTheme || 'light';

  return (
    <MotionConfigWrapper>

      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme}
        style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body
        >
          <Header initialTheme={theme} />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </MotionConfigWrapper>
  );
}
