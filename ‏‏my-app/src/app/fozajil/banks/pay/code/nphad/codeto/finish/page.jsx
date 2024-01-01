"use client"
import styles from './finish.module.css'

const Finish = ()=>{
    const handleClick = () => {
         alert("تم تأكيد العملية ")
    }
    return(
       <div className={styles.continer}>

          <h1> تهانينا تم تسجيل العملية بنجاح</h1>
          <p>لتأكيد العملية قم بلضغط على زر تاكيد</p>
          <p>سنقوم بمراسلتك عبر رقم الهاتف عند وصول الشحنة </p>
           <form><button onClick={handleClick}>تأكيد</button></form>
          
       </div>

)

}

export default Finish;
