import ContentData from "../data/content";
import '../css/content.css'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/q1.jpg'
import a3 from '../assets/q2.jpg'
import a4 from '../assets/q3.jpg'
import a5 from '../assets/q4.jpg'

let images = [
    a1, a4 , a3 ,a2, a5
]
function Content(){
    return (
        <>
        {
            ContentData.map((data , i) => (
                 <div key={i} className="content">
                    <img src={images[i]} alt="" />
<div>
     <p className="content_title">{data.title}</p>
            <div className="content_content">{data.content}</div>
</div>
           
        </div>
            ))
        }
        
        </>
       
    )
}


export default Content