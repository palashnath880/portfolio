import { Lato, Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Palash Nath',
  description: 'Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-primary`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
