import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Chat Assistant - 智能对话助手',
  description: '体验下一代AI对话助手，让智能对话为您开启新的思维方式',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning data-darkreader="disabled">
      <head>
        <meta name="darkreader" content="disabled" />
        <meta name="darkreader-lock" />
        <style>{`
          [data-darkreader-inline-bgcolor],
          [data-darkreader-inline-bgimage],
          [data-darkreader-inline-color],
          [data-darkreader-inline-border],
          [data-darkreader-inline-border-bottom],
          [data-darkreader-inline-border-left],
          [data-darkreader-inline-border-right],
          [data-darkreader-inline-border-top],
          [data-darkreader-inline-boxshadow],
          [data-darkreader-inline-fill],
          [data-darkreader-inline-stroke],
          [data-darkreader-inline-outline] {
            all: initial !important;
          }
        `}</style>
      </head>
      <body 
        className={`${inter.className} antialiased`} 
        suppressHydrationWarning 
        data-darkreader="disabled"
      >
        {children}
      </body>
    </html>
  )
} 