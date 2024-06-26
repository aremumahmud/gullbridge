import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

function Question({q, a}){

    let [show , setShow] = useState(false)

    return (
        <div className="questions_pane">
        <div className="quest">
            <div className="questTitle">
                <p>{q}</p>
                {
                    show ?<FaArrowDown onClick={()=>setShow(d=>!d)} />: <FaArrowUp  onClick={()=>setShow(d=>!d)} />
                }
                
            </div>
            {
                show && <div className="question_content">
                {a}
            </div>
            }
           
        </div>
    </div>
    )
}

export default Question