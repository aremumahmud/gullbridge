import '../css/why.css'
import a1 from '../assets/pexels-wendywei-1656663.jpg'
import a2 from '../assets/pexels-lex-ger-2021617-3642618.jpg'
import a3 from '../assets/pexels-johnnymckane-237950.jpg'
import a4 from '../assets/pexels-pixabay-159298.jpg'
import a5 from '../assets/pexels-mart-production-7089304.jpg'
import a6 from '../assets/pexels-mikhail-nilov-6969654.jpg'

import 'animate.css'

function Why(){

   

    return (
        <div className="why_us" id='services'>
          <p className="title_Y">Products We Supply</p>
          <div className="images">
            <div className="image up">
                <div className="text">
                    <p>Industrial Machinery</p>
                    <p>Supplying state-of-the-art equipment to power industries worldwide.</p>
                </div>
                <img src={a4} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Medical Equipment</p>
                <p>Delivering high-quality medical tools and devices for healthcare excellence</p>
            </div>
                <img src={a5} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Consumer Electronics</p>
                <p>Providing the latest gadgets and electronics for modern living.</p>
            </div>
                <img style={{height:"340px"}} src={a6} alt="" />
            </div>
          </div>
          <br />
          <div className="images">
            <div className="image up">
                <div className="text">
                    <p> Agricultural Products</p>
                    <p>Ensuring a steady supply of farm equipment and essentials to boost productivity.</p>
                </div>
                <img style={{height:"340px"}}  src={a1} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Automotive Parts
</p>
                <p>Delivering precision-engineered components to keep vehicles running smoothly </p>
            </div>
                <img  src={a2} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Construction Materials
</p>
               
                <p style={{top:'83%'}}>Transporting durable and reliable materials for building projects of any scale.</p>
            </div>
                <img  style={{height:"340px"}} src={a3} alt="" />
            </div>
          </div>
        </div>
    )
}

export default Why