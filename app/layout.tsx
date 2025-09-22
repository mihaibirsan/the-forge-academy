import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Transformă-ți viitorul în Tech - Academia The Forge',
  description: 'Devino dezvoltator web full-stack în 3–6 luni! Academia The Forge oferă un curs intensiv de web full-stack care îți dezvoltă competențele necesare pentru a crea aplicații web complete și îți formează gândirea analitică orientată spre soluții.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-PKV26L0X9E" />
      </body>
    </html>
  )
}
