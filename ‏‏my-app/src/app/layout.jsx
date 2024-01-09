
import { Tajawal } from 'next/font/google'
import  './globals.css'
import styles from './page.module.css'
import logo from '../../public/logo.svg'
import trk from '../../public/Trc.jpeg'
import menu from '../../public/icons8-menu.svg'
import Image from 'next/image'
import Footer from '@/compnante/Footer'
import { Analytics } from '@vercel/analytics/react';

// import { useState } from 'react'

const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'Zajil Express',
  description: 'اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية',
  image:{trk},
}

export default function RootLayout({ children }) {
  // const [NTrack,SetNtrack] = useState("milad");
  return (
    <html lang="ar" dir='rtl'>
    <link rel="icon" href="../../public/icon.svg" />
     <meta property="og:image" content="https://zajil-express-2030.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage1.c162e9a7.png&w=640&q=75" />
      <body className={tajawal.className}>
      <div className={styles.nav}>
        <Image
          src={logo}
          alt='Logo Zajil'
          width={50}
         />
         <Image
          src={menu}
          alt='icon menu'
          width={50}
          
         />
      </div>
      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
          {children}
      {/* </NumTrack.Provider> */}
        
        <Footer />
        <Analytics />
        
        </body>
    </html>
  )
}
