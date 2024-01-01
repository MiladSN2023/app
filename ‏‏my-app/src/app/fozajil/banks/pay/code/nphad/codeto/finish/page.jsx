

const Finish = ()=>{
    const handleClick = () => {
         alert("تم تأكيد العملية ")


}
    return(
       <div className={styles.continer}>

          <h1> تهانينا تم تسجيل العملية بنجاح</h1>
          <p>لتأكيد العملية قم بلضغط على زر تاكيد</p>
          <p>سنقوم بمراسلتك عبر رقم الهاتف عند وصول الشحنة </p>
          <button onClick={handleClick}>تأكيد</button>
       </div>

)

}