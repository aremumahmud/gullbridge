import "../css/hero.css";

import { useEffect, useState } from "react";

import Button from "./button";

function Hero() {
  // useEffect(() => {
  //   // Configure the scroll reveal animation
  //   ScrollReveal().reveal(".up", {
  //     delay: 200,
  //     origin: "bottom",
  //     duration: 800,
  //     scale: 1,
  //   });
  // });

  let [hero , setHero] = useState(0)
  
let tests = ["Unlock the Power of Diversification with Our Asset Management Solutions"," Invest Confidently: Absolute Returns with Robust Risk Management",'Unlock Market Insights: Stay Ahead with Gullbridge’s Expert Strategies']
let animations = [
  "animate__animated animate__fadeInLeft",
  "animate__animated animate__fadeInDown",
  "animate__animated animate__fadeInLeft"
]
  useEffect(()=>{
     
    let interval = setInterval(()=>{
      
      setHero(onting => onting >= 2 ? 0: (onting + 1))
    } , 5000)

    return ()=>clearInterval(interval)
}, [])

  return (
    <>
      {" "}
      <div className="hero">
        <div className="section1">

          <p className={"main up "+ animations[hero]}>
            {console.log(hero)}
           {tests[hero]}
          </p>
          <p className="write_up up">
            <div className="line"></div>
            <span> Start and grow your business with GULLBRIDGE&apos;s expert guidance and innovative solutions. From setup to expansion, we provide the tools and support for your success.</span>
         
          </p>
          <Button />
          <br />
        </div>
        {/* <br /> */}
      </div>
    </>
  );
}

export default Hero;
