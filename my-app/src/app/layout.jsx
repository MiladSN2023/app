import { Tajawal } from 'next/font/google'
import  './globals.css'
import styles from './page.module.css'
import logo from '../../public/logo.svg'
import trk from '../../public/Trc.jpeg'
import menu from '../../public/icons8-menu.svg'
import Image from 'next/image'
import Footer from '@/compnante/Footer'
import { Analytics } from '@vercel/analytics/react';
const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'Zajil Express',
  description: 'اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا الاحترافية وشبكتنا اللوجستية العالمية',
  image:{trk},
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='rtl'>
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
        {children}
        <Footer />
        <Analytics />
        
        </body>
    </html>
  )
}
