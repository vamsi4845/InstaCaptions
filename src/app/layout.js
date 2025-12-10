import './globals.css'
import VideoIcon from '@/components/VideoIcon';
import SparklesIcon from "@/components/VideoIcon";
import { Inter } from 'next/font/google'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'InstaCaptions',
  description: 'Generated Instant Captions for your Videos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-900 min-h-screen text-white"}>
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-2 sm:my-8">
            <Link href="/" className="flex gap-1">
              <VideoIcon />
              <span>InstaCaptions</span>
            </Link>
            <nav className="flex items-center gap-2 sm:gap-6 text-white/80 text-sm sm:text-bas">
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
