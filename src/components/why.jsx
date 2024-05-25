import '../css/why.css'
import a1 from '../assets/s1.jpg'
import a2 from '../assets/s2.jpg'
import a3 from '../assets/s3.jpg'
import a4 from '../assets/s4.jpg'
import a5 from '../assets/s5.jpg'
import a6 from '../assets/s6.jpg'

import 'animate.css'

function Why(){

   

    return (
        <div className="why_us">
          <p className="title_Y">We offer great number of
finance services</p>
          <div className="images">
            <div className="image up">
                <div className="text">
                    <p>Inventory Management</p>
                    <p>25 years of industry expertise, guiding you with seasoned knowledge.</p>
                </div>
                <img src={a4} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Consulting Service</p>
                <p>Dependable solutions, ensuring your financial journey stays secure. </p>
            </div>
                <img src={a5} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Bussiness Planning</p>
                <p>Our promise: satisfaction and success every step of the way.</p>
            </div>
                <img src={a6} alt="" />
            </div>
          </div>
          <br />
          <div className="images">
            <div className="image up">
                <div className="text">
                    <p>Wealth Management</p>
                    <p>25 years of industry expertise, guiding you with seasoned knowledge.</p>
                </div>
                <img src={a1} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Treasury Instruments</p>
                <p>Dependable solutions, ensuring your financial journey stays secure. </p>
            </div>
                <img src={a2} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Capital Restructuring</p>
                <p>Our promise: satisfaction and success every step of the way.</p>
            </div>
                <img src={a3} alt="" />
            </div>
          </div>
        </div>
    )
}

export default Why