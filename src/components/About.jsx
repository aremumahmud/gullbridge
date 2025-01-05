
import { useEffect, useState } from 'react';
import aboutImg from '../assets/hero1.jpg'
import "../css/aboutus.css";
import Button from './button';



function AboutUs() {


  let headtxt = ["Premium Sourcing Expertise","End-to-End Bulk Procurement","Global Presence, Personalized Service"]
  let text = [
    
  `With nearly a decade of experience, we excel in helping businesses procure top-tier products directly from factories, ensuring quality and cost-efficiency.`,
  `Our tailored solutions cover every step of the procurement process, from factory sourcing to on-time delivery, making your supply chain seamless.`,
  `Operating across borders for over 10 years, we provide global procurement solutions with a focus on personalized service for each client.`
]

let animations = [
  "animate__animated animate__fadeInUp",
  "animate__animated animate__fadeInDown",
  "animate__animated animate__fadeInUp"
]
let [hero , setHero] = useState(0)
useEffect(()=>{
     
  let interval = setInterval(()=>{
    
    setHero(onting => onting >= 2 ? 0: (onting + 1))
  } , 5000)

  return ()=>clearInterval(interval)
}, [])


  return (
    <section  style={{paddingLeft:'4.5rem'}} className="about-section" id="about">
     <br />
      <div className="container">
        <div className="row clearfix" style={{ display: "flex", alignItems:'center' }}>
          <div
            className="content-column col-md-6 col-sm-12 col-xs-12 up"
            style={{ width: "50%" }}>
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Us</div>
                
                <h2 className={'titi ' + animations[hero]}>
               {headtxt[hero]}

                </h2>
              </div>
              <div className={"text " + animations[hero]}>
                {text[hero]}

              </div>
              {/* <div className="email">
                Request Quote:{" "}
                <span className="theme_color">freequote@gmail.com</span>
              </div> */}
             <a className='bout' style={{marginLeft:'0'}} href="https://forms.gle/5WFuiwxC4BC7jTbs5"><Button /></a>
            </div>
          </div>

          <div className="image-column col-md-6 col-sm-12 col-xs-12 up">
            <div
              className="inner-column "
              data-wow-delay="0ms"
              data-wow-duration="1500ms">
              <div className="image">
                <img src={aboutImg }alt="" />
                <div className="overlay-box">
                  <div className="year-box">
                    <span className="number">9</span>
                    <div style={{color:'rgb(251 251 251)'}}>
                     Tested <br />&{" "}
                    <br />Trusted
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
