import "../css/proffesion.css";
import "../css/client.css";
import "../css/stats.css";
import {
  FaBriefcase,
  FaCoins,
  FaHandsClapping
} from "react-icons/fa6";
// import { FaWandMagicSparkles } from "react-icons/fa6";
import ScrollReveal from "scrollreveal";
import { useState } from "react";

function Stats() {
 
  let [four, setFour] = useState(0);

  function stopwatch(data) {
    data.forEach((dt) => {
      let { limit, changer } = dt;
      let limit_reached = 0;
      let n = setInterval(() => {
        if (limit === limit_reached ||  limit_reached > limit ) return clearInterval(n);
        changer((prev) => {
          limit_reached++;
          return prev + 1;
        });
      }, .5);
    });
  }

  // useEffect(() => {
  //   // Configure the scroll reveal animation
  //   ScrollReveal().reveal(".up", {
  //     delay: 200,
  //     origin: "bottom",
  //     duration: 800,
  //     scale: 1,
  //   });

    ScrollReveal().reveal(".upto", {
      delay: 200,
      origin: "bottom",
      duration: 800,
      scale: 1,
      beforeReveal: ()=> stopwatch([
        { limit: 9000, changer: setFour },
      ]),
    });
  return (
    <div className="profession client stat">
      <p className="client_title up">Our Professional Statistics.</p>
      <div className="some_summary">
        <div className="some_wrapper stats upto">
          <div className="some">
            <div className="stt">
              <div className="count">{four}+</div>
              <div>
                <FaHandsClapping color="brown" /> Customer Satisfaction
              </div>
            </div>
            
            <div className="stt">
              <div className="count">Quick</div>
              <div>
                <FaBriefcase color="green" /> Loan Approvals
              </div>
            </div>
            <div className="stt">
              <div className="count">No</div>
              <div>
                <FaCoins color="grey" />Prepayment or
hidden fees
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
