// import '../css/companyvalues.css'
import '../css/team.css'
import svg1 from '../assets/IMG-20250101-WA0154.jpg'
import svg2 from '../assets/IMG-20240525-WA0061.jpg'
import svg4 from '../assets/IMG-20240525-WA0059.jpg'
import svg3 from '../assets/IMG-20240525-WA0060.jpg'
import svg5 from '../assets/IMG-20250101-WA0147.jpg'
import svg6 from '../assets/IMG-20250101-WA0151.jpg'
// import '../assets/IMG-20240526-WA0130.jpg'
// import '../assets/IMG-20240526-WA0133.jpg'

function OurTeam(){
 
    return (
<div className="team">
<p className="title">Our Leadership </p>
<div className="values_">
    <div className="value_">
                    <div className="img up">
                        <img src={svg1} alt="" />
{/* <FaIndustry color='#1c202b' size={50} /> */}
        </div>
       <div className="">
<p><b> Charles Moore E.</b>
</p>
<p>Executive Director</p>
       </div>
    </div>
    <div className="value_">
                    <div className="img up">
                        <img src={svg6} alt="" />
              {/* <FaBoxesStacked color='#1c202b' size={50} /> */}
            </div>
       <div className="content up">
                        <p>
                            <b> Whales Josie L.</b>
     </p>
        <p>Managing Director</p>
       </div>
    </div>
    <div className="value_">
                    <div className="img up">
                        <img src={svg5} alt="" />
            {/* <FaStar color='#1c202b' size={50} /> */}
            </div>
            <div className="content up">
        <p>
      <b> Moore Charles E.</b> </p>
        <p>CEO</p>
        </div>
    </div>
   
</div>
</div>
    )
}

export default OurTeam