import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from 'next/font/google';
import { ModalProvider } from "./context/ModalContext";

import { Anton, Plus_Jakarta_Sans  } from 'next/font/google';
import BeeCursor from "./curser/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
    weights: ['400', '500', '600', '700', '800'],

});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton only has 400
});
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weights: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});
export const metadata = {
   title: "Beeyoond Gaming | AR/VR, 2D/3D Animation, Blockchain & Video Editing",
  description: "At Beeyoond, we create immersive AR/VR gaming experiences that connect with real world machines. We use powerful 2D and 3D animations to show natural movement and machine action, and we produce high quality videos that clearly explain how equipment works. Whether you're building an interactive game or showcasing a product, we help businesses create exciting digital experiences that feel real and keep users engaged.",
    keywords: [
    "Beeyoond",
    "AR/VR gaming",
    "2D animation",
    "3D animation",
    "blockchain development",
    "fitness technology",
    "interactive games",
    "metaverse games",
    "AI experiences",
    "crypto gaming",
    "DeFi development",
    "motion tracking games",
    "animation"
  ],
    authors: [{ name: "Beeyoond Gaming Team", url: "https://beeyoondgamingdemo.netlify.app" }],
  metadataBase: new URL("https://beeyoondgamingdemo.netlify.app"),
openGraph: {
    title: "Beeyoond Gaming",
    description: "Immersive 2D/3D animation , AR/VR gaming with real-world equipment, and blockchain tech.",
    url: "https://beeyoondgamingdemo.netlify.app",
    siteName: "Beeyoond Gaming",
    images: [
      {
        url: "/images/back-banner.jpg", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "Beeyoond Gaming Banner",
      },
    ],
    type: "website",
  },
  icons: {
    icon: '/images/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} 
       ${poppins.variable}  ${anton.variable}  ${plusJakarta.variable} `}>
        <ModalProvider>
        {children}
        </ModalProvider>
        <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="light"
      />
        {/* <BeeCursor /> */}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        
      </body>
    </html>
  );
}
