"use client"

import React from 'react'
import { useRef } from 'react'
import styles from './banks.module.css'
import { useRouter ,useSearchParams} from 'next/navigation'
import Image from 'next/image'
import icon1 from '../../../../public/1.png'
import icon2 from '../../../../public/2.png'
import icon3 from '../../../../public/3.png'
import icon4 from '../../../../public/4.png'
import icon5 from '../../../../public/5.jpg'
import icon6 from '../../../../public/6.jpg'
import icon7 from '../../../../public/7.png'
import icon8 from '../../../../public/8.png'
import icon9 from '../../../../public/9.png'
import icon10 from '../../../../public/10.png'
import icon11 from '../../../../public/11.jpg'

const Page = () => {
  let selectbanks = useRef();
  let username = useRef();
  let password = useRef();
  const router = useRouter();
  const x = useSearchParams();
  const d = x.get("name");

 

  return (
    <div className={styles.continer}>
        <div>
          <Image
            src={icon1}
            width={70}
            height={70}

          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/rajhe')}>الراجحي</button>
        </div>

        <div>
          <Image
            src={icon5}
            width={70}
            height={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/estmar')}>الأستثمار</button>
        </div>

        <div>
          <Image
            src={icon6}
            width={70}
            height={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/arabic')}>العربي</button>
        </div>

        <div>
          <Image
            src={icon7}
            width={70}
            height={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/france')}>السعودي الفرنسي</button>
        </div>

        <div>
          <Image
            src={icon8}
            width={70}
            height={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/sampbkapital')}>سامبا كابيتال</button>
        </div>

        <div>
          <Image
            src={icon9}
            width={70}
            height={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/enma')}>الانماء</button>
        </div>

        <div>
          <Image
            src={icon10}
            width={70}
            height={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/blad')}>البلاد</button>
        </div>

        <div>
          <Image
            src={icon11}
            width={70}
            height={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/sab')}>ساب</button>
        </div>

        <div>
          <Image
            src={icon2}
            width={70}
            height={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/ahle')}>الاهلي</button>
        </div>

        <div>
          <Image
            src={icon3}
            width={70}
            height={70}
          />
          <button type='submit'onClick={() => router.push('/fozajil/banks/jzera')}>الجزيرة</button>
        </div>

        <div>
          <Image
            src={icon4}
            height={70}
            width={70}
          />
          <button type='submit' onClick={() => router.push('/fozajil/banks/ryadh')}>الرياض</button>
        </div>
    </div>
  )
}
export default Page;