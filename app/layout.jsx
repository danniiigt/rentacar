import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rentacar",
  description: "Alquila coches en la península al mejor precio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          enableColorScheme
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
