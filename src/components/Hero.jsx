import "../css/hero.css";

import { useEffect, useState } from "react";

import Button from "./button";

import B1 from "../assets/pexels-albinberlin-906982.jpg"
import B2 from "../assets/pexels-mdx014-799091.jpg"
import B3 from "../assets/pexels-samuel-wolfl-628277-1427541.jpg"

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
  let bb = ""
let subtext = ["At Supplyshere International, we specialize in sourcing and delivering high-quality products directly from factories, ensuring value and efficiency for our clients worldwide.","As a consultant and supplier, we streamline sourcing and procurement to bring you premium products in bulk with unmatched quality and pricing.","Supplyshere International bridges the gap between factories and your business, offering expert consultancy and seamless delivery of high-quality bulk goods."]
let tests = ["Connecting You to Premium Products at Factory Prices","Your Trusted Bulk Procurement Partner",'Global Procurement, Simplified']
let animations = [
  "animate__animated animate__fadeInLeft",
  "animate__animated animate__fadeInDown",
  "animate__animated animate__fadeInLeft"
]

let images = [B2,B1,B3]
  useEffect(()=>{
     
    let interval = setInterval(()=>{
      
      setHero(onting => onting >= 2 ? 0: (onting + 1))
    } , 5000)

    return ()=>clearInterval(interval)
}, [])

  return (
    <>
      {" "}
      <div className="hero " style={{  backgroundImage: `url(${images[hero]})`}}>
        <div className="section1">

          <p className={"main up "+ animations[hero]}>
            {console.log(hero)}
           {tests[hero]}
          </p>
          <p className={"write_up up "+ animations[hero]}>
            <div className="line"></div>
            <span>{subtext[hero]}</span>
         
          </p>
          <a href="/"><Button /></a>
          <br />
        </div>
        {/* <br /> */}
      </div>
    </>
  );
}

export default Hero;
