import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://palashnath.netlify.app/"),
  title: "Palash Nath | Web Developer",
  description: `Hire Palash Nath, a skilled MERN developer crafting innovative websites that convert & delight. Explore my portfolio for MERN stack and full stack development & let's discuss your vision!`,
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicons/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title: "Palash Nath | Web Developer",
    description:
      "Hello, I'm Palash Nath, a passionate web developer with a knack for turning ideas into digital realities. From pixel-perfect design to seamless functionality, I specialize in creating immersive and dynamic web experiences.",
    url: new URL("https://palashnath.netlify.app/"),
    type: "website",
    images: "/images/palashnath880.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-[#f0f3fa]`}
        style={{ fontFamily: `${oswald.style.fontFamily}` }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
