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
let subtext = ["Our Asset Management Solutions are designed to optimize your portfolio's potential and safeguard your investments across various markets and asset classes. Let's diversify together for a stronger, more resilient financial future.","Our robust risk management strategies ensure absolute returns, empowering you to navigate market fluctuations with peace of mind. Let's build a resilient investment plan together.","Our expert strategies provide you with the edge needed to navigate dynamic markets. Let's harness these insights together for your investment success."]
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
          <p className={"write_up up "+ animations[hero]}>
            <div className="line"></div>
            <span>{subtext[hero]}</span>
         
          </p>
          <a href="https://forms.gle/5WFuiwxC4BC7jTbs5"><Button /></a>
          <br />
        </div>
        {/* <br /> */}
      </div>
    </>
  );
}

export default Hero;
