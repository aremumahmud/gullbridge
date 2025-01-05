import '../css/companyvalues.css'
import svg1 from '../assets/gea.png'
import svg2 from '../assets/grow-removebg-preview.png'
import svg4 from '../assets/bussiness.png'
import svg3 from '../assets/message-removebg-preview.png'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { FaBoxesStacked, FaDollarSign, FaGlobe, FaIndustry, FaLocationArrow, FaLocationPinLock, FaMapPin, FaShip, FaStar } from 'react-icons/fa6'

function CompanyValues(){
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal(".up", {
          delay: 200,
          origin: "bottom",
          duration: 800,
          scale: 1,
        });
    })
    return (
<div className="values_wrap">
{/* <p className="title_v up">Our Company Values</p> */}
<div className="values">
    <div className="value">
        <div className="img up">
<FaIndustry color='#1c202b' size={50} />
        </div>
       <div className="content up">
<p>
 Direct Factory Access</p>
<p>Gain exclusive access to premium-quality products directly from trusted factories, ensuring unbeatable value.</p>
       </div>
    </div>
    <div className="value">
    <div className="img up">
              <FaBoxesStacked color='#1c202b' size={50} />
            </div>
       <div className="content up">
        <p>
       Bulk Procurement Expertise</p>
        <p>With a decade of experience, we simplify bulk sourcing, ensuring smooth transactions and timely delivery.</p>
       </div>
    </div>
    <div className="value">
    <div className="img up">
            <FaStar color='#1c202b' size={50} />
            </div>
            <div className="content up">
        <p>
      Unmatched Product Quality </p>
        <p>We prioritize premium quality, sourcing only the best products that meet your business standards.</p>
        </div>
    </div>
    <div className="value">
    <div className="img up">
             <FaDollarSign color='#1c202b' size={50}/>
            </div>
            <div className="content up">
        <p> Cost-Effective Solutions</p>
        <p>Benefit from factory-direct pricing that saves you money while maintaining superior quality.</p>
        </div>
    </div>
</div>
</div>
    )
}

export default CompanyValues