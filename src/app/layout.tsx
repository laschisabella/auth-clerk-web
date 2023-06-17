import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import { neobrutalism } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Example Clerk',
  description: 'Implementation example',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR} appearance={{baseTheme: neobrutalism}}>
      <html lang="en">
        <body className={inter.className}>
          <div className='flex items-center justify-center h-screen'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
