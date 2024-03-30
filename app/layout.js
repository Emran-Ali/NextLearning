import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-2">
      <body className={inter.className}>
        <nav className="w-full bg-cyan-500">
          <button className="m-2 p-2 border-2 rounded-xl">
            <Link href="/"> Home </Link>
          </button>
          <Link href="/about">
            <button className="m-2 p-2 border-2 rounded-xl">About</button>
          </Link>
          <Link href="/blog">
            <button className="m-2 p-2 border-2 rounded-xl">Blogs</button>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
