import { Inter } from "next/font/google";
import "./globals.css";
import MyNavbar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/system";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <MyNavbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

