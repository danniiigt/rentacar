import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "Rentacar",
  description: "Alquila coches en la península al mejor precio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
          enableColorScheme
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
