import '../css/companyvalues.css'
import '../css/team.css'
import svg1 from '../assets/team-img-01.jpg'
import svg2 from '../assets/team-img-02.jpg'
import svg4 from '../assets/team-img-03.jpg'
import svg3 from '../assets/team-img-04.jpg'

function OurTeam(){
 
    return (
<div className="values_wrap team">
<p className="title_v up">Our Team of Experts</p>
<div className="values">
    <div className="value">
        <div className="img up">
 <img src={svg1} alt="" />
        </div>
        <br />
        <div className="content_">
            <p>Edward Smith </p><p>Legal Officer</p>
        </div>
     
    </div>
    <div className="value">
    <div className="img up">
              <img src={svg2} alt="" />
            </div>
            <br />
            <div className="content_">
            <p>Julia Taylor </p><p>Finance Advisor</p>
        </div>
    </div>
    <div className="value">
    <div className="img up">
             <img src={svg3} alt="" />
            </div>
            <br />
            <div className="content_">
            <p>Paula Den </p><p>Tax Examiner</p>
        </div>
            
    </div>
    <div className="value">
    <div className="img up">
             <img src={svg4} alt="" />
            </div>
            <br />
            <div className="content_">
            <p>Paula Hall </p><p>Bussiness Manager</p>
        </div>
            
    </div>
</div>
<br /><br /><br />
</div>
    )
}

export default OurTeam