import {Inter} from "next/font/google";
import "./styles/globals.css";
import { ScrollProgressBar } from "@/components";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: "Price Scanner",
  description: "The Price Scanner tracks prices of various products and notifies users whenever prices decrease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
         className={`${inter.variable}antialiased`}
      >
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
