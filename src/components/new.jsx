import '../css/new.css'
import img from '../assets/pexels-alexander-isreb-880417-1797428.jpg'

function New(){
    return (
        <div className="new">
            <div className="content">
                <div className="circle">
                    100 <sup>%</sup>
                </div>
                <div className="text">
                Sourcing premium products in bulk, direct from factories.
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default New