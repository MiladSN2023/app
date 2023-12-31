"use client"

import styles from './page.module.css'
import Image from 'next/image'
import img1 from "../../public/image1.png"
import img2 from "../../public/image2.jpg"
import img3 from "../../public/image3.png"
import img4 from "../../public/image4.png"
import postive from "../../public/icons8-positive-dynamic-26.png"
import database from "../../public/icons8-database-48.png"
import tick from "../../public/icons8-tick-64.png"
import pointer from "../../public/icons8-pointer-48.png"
import { useRouter } from 'next/navigation'
import { useState } from 'react'






export default function Home() {
  const router = useRouter();
 
  const [track,setTrack]=useState();
  const handlerout = ()=>{
    if(track == ""){
      alert('من فضلك قم بملى الحقول')
    }else{
      
      router.push(`/fozajil?name=${track}`)
    }
  }

  return (
    
    <main className={styles.main}>
    
      <div className={styles.sec1}>
        <div>
        <h3>حلول لوجستية سهلة وموثوقة وبأسعار تنافسية</h3>
        <p>قم بزيادة أرباحك وتنمية أعمالك من خلال حلولنا الاحترافية</p>
        <form action='/fozajil'>
            <input type="number" onChange={(e) => setTrack(e.target.value)} placeholder='ادخل رقم تتبع الشحنة' required/>
            <button onClick={handlerout}>تتبع الشحنة</button>
        </form>
        </div>
      
      </div>

      <div className={styles.sec2}>
        <div>
          <Image
            src={img1}
            width={250}
          />
          <p>نقل البضائع من مكان لآخر ومن دولة إلى أخرى إما عن طريق الشحن البحري عبر الموانئ بواسطة السفن أو الشحن الجوي عبر المطارات بواسطة الطائرات أو الشحن البري بواسطة الشاحنات والقطارات</p>
        </div>
        <div>
        <Image
            src={img2}
            width={250}
          />
          <p>هل تبحث عن شبكة توصيل سريعة تجمع بين جودة الخدمة وكفاءة الخبير؟
كل يوم ، تعمل فرقنا للشحن بكد لضمان تسليم المنصات الخاصة بك في الوقت المناسب إلى المكان المناسب – والتي قد تكون قريبة من المنزل أو على الجانب الآخر من منطقة الخليج . يتحمل خبراؤنا المسؤولية الكاملة عن المواعيد النهائية والميزانيات وصورة العلامة التجارية الخاصة بكم.</p>
        </div>
        <div>
        <Image
            src={img3}
            width={250}
          />
          <p>هل تبحث عن شبكة توصيل سريعة تجمع بين جودة الخدمة وكفاءة الخبير؟
كل يوم ، تعمل فرقنا للشحن بكد لضمان تسليم المنصات الخاصة بك في الوقت المناسب إلى المكان المناسب – والتي قد تكون قريبة من المنزل أو على الجانب الآخر من منطقة الخليج . يتحمل خبراؤنا المسؤولية الكاملة عن المواعيد النهائية والميزانيات وصورة العلامة التجارية الخاصة بكم.</p>
        </div>
        <div>
        <Image
            src={img4}
            width={250}
          />
          <p>هل تبحث عن شبكة توصيل سريعة تجمع بين جودة الخدمة وكفاءة الخبير؟
كل يوم ، تعمل فرقنا للشحن بكد لضمان تسليم المنصات الخاصة بك في الوقت المناسب إلى المكان المناسب – والتي قد تكون قريبة من المنزل أو على الجانب الآخر من منطقة الخليج . يتحمل خبراؤنا المسؤولية الكاملة عن المواعيد النهائية والميزانيات وصورة العلامة التجارية الخاصة بكم.</p>
        </div>
      </div>

       <div className={styles.sec3}>
          <div>
            <Image 
              src={postive}
              width={50}
            />
            <h2>تحديد ومراقبة أهداف الجودة الخاصة بك</h2>
          </div>

          <div>
            <Image 
              src={database}
              width={50}
            />
            <h2>الوصول إلى المعلومات وإدارتها</h2>
          </div>

          <div>
            <Image 
              src={tick}
              width={50}
            />
            <h2>
تحسين جودة الخدمة التي نقدمها للعملاء</h2>
          </div>

          <div>
            <Image 
              src={pointer}
              width={50}
            />
            <h2>كيف ندير ميزانيتك</h2>
          </div>
      </div> 
    </main>
  )
  
}


