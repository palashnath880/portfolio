import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'


const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Palash Nath | Web Developer',
  description: `Hire Palash Nath, a skilled MERN developer crafting innovative websites that convert & delight. Explore my portfolio for MERN stack and full stack development & let's discuss your vision!`,
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicons/apple-touch-icon.png',
    },
  ],
  openGraph: {
    title: 'Palash Nath | Web Developer',
    description: "Hello, I'm Palash Nath, a passionate web developer with a knack for turning ideas into digital realities. From pixel-perfect design to seamless functionality, I specialize in creating immersive and dynamic web experiences.",
    url: 'https://palashnath.netlify.app/',
    type: 'website',
    image: {
      url: 'https://palashnath.netlify.app/_next/image?url=%2Fimages%2Fpalashnath880.webp&w=640&q=75',
      width: 1200,
      height: 900,
    },
  },
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
