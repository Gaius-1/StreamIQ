import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hive",
  description: "The Hive revolutionizes education with live streaming. Users can watch or create courses, engage with fellow learners, and join communities based on shared interests. Dive into diverse content, from programming to talk shows, for an enriching and interactive learning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" forcedTheme="dark" storageKey="hive-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
