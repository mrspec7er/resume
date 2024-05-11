import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kusuma Sandi",
  description:
    "Hi there, I'm Sandi. I'm a dedicated software developer, working as a backend engineer for a living. I enjoy solving problems and building new things.",
  keywords: [
    "kusuma sandi",
    "software developer",
    "resume",
    "personal website",
    "blog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="images/favicon.ico" sizes="any" />
      <body className={inter.className + " bg-zinc-900 text-gray-200"}>
        {children}
      </body>
    </html>
  );
}
