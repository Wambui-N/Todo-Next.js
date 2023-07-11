import './globals.css'
import { Inter } from 'next/font/google'
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: { title: string, description: string } = {
  title: 'Todo App',
  description: 'A simple todo app',
}

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>
        {children}
      </body>
    </html>
  )
}
