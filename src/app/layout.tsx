import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import Provider from './auth/Provider'
import { QueryClientProvider } from '@tanstack/react-query'
import ClientProvider from './ClientProvider'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Humane.AI',
  description: 'From silence to being heard. Connecting authorities to victims of abuse, fraud and danger while breaking language barriers with AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(lexend.className, 'antialiased min-h-screen border-none outline-none', 'scrollbar scrollbar-thumb scrollbar-thumb-white scrollbar-track-slate-700 bg-gradient-to-br from-rose-400 to-orange-300 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-600')} suppressHydrationWarning={true}>
        <ClientProvider>
          <Provider>
            <ThemeProvider 
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
              <Navbar/>
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
        </ClientProvider>
      </body>
    </html>
  )
}
