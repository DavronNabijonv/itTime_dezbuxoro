import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Animation({children,animation = "fade-right" }) {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
  },[])
  return (
    <div data-aos={animation}>{children}</div>
  )
}
