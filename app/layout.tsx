import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModeToggle } from '@/components/mode-toggle';

import { ThemeProvider } from '@/components/theme-provider';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="hive-theme">
            <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
              <Link href="/" className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-1">
                  <Image 
                    src="/hive.svg" 
                    alt={"Hive"}
                    height="30"
                    width="30"/>
                </div>
                <p className="text-2xl font-medium tracking-tight">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text dark:from-yellow-400 dark:to-green-400">
                    Hive.io
                  </span>
                </p>

              </Link>
              <a href="https://github.com/Gaius-1/hive" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm">
                  <Github className="mr-2 h-4 w-4"/>Code
                </Button>
              </a>
            </div>
            <div className="flex flex-col">
              {/* ModeToggle component positioned at the far right corner */}
              <div className="flex-grow"></div>
              <div className="fixed bottom-9 right-4 z-50">
                <ModeToggle />
              </div>
            </div>
            {children}
            <div className="flex space-x-4 fixed bottom-2 right-4">
              <Link href="/support" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 text-sm">
                Support
              </Link>
              <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 text-sm" href="/privacy" target="_blank" rel="noreferrer">
                Privacy Policy
              </Link>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
