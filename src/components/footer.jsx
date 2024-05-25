import logo from "../assets/logo1.jpg";
import footer from '../assets/footer.jpg'
import "../css/footer.css";
function Footer() {
  return (
    <div className="footer_wrap">
      {" "}
      <div className="footer">
        <div className="section1_">
            <div>
                 <img src={logo} alt="" />
                 <p>
                 Gullbridge is a distinguished firm renowned for its diverse portfolio and strategic presence across multiple industries. With a commitment to innovation, sustainable practices, and impactful leadership, the firm has emerged as a global force shaping the future of business and industries.
                    </p>
            </div>
         
          
            <img src={footer} alt="" />
         
        </div>
        <div className="linksection">
            <ul>
                <li>Quick Links</li>
                <li>The Firm</li>
                <li>Leadership</li>
                <li>News & Insights</li>
                <li>Careers</li>
            </ul>
            <ul>
                <li>Our Business</li>
                <li>Gullbridge Asset Management</li>
                <li>Private Equity</li>
                <li>Real Estate</li>
                <li>Renewable Power & Transition</li>
                <li>Technology</li>
                <li>Finance</li>
            </ul>
            <ul>
                <li>Public Investors</li>
                <li>Gullbridge Co-operation</li>
                <li>Gullbridge Asset Management</li>
                <li>Gullbridge Reinsurance</li>
                <li>Gullbridge Real Estate Partners</li>
                <li>Gullbridge Renewable Partners</li>
                <li>Gullbridge Bussiness Partners</li>
            </ul>
            <ul>
                <li>Private</li>
                <li>Institutional Investors</li>
                <li>Financial Advisors</li>
                {/* <li></li>
                <li></li> */}
            </ul>
            <ul>
                <li>Get in Touch</li>
                <li>Contact Us</li>
                <li>Our Office</li>
                <li>Limited Partner Login</li>
                {/* <li></li> */}
            </ul>
        </div>
        <div className="section2_">
          <div className="footer_sec">
            <p className="title">Our Address</p>
            <p>Valentin, Street Road 24, New York, USA - 67452</p>
          </div>
          <div className="footer_sec">
            <p className="title">Contact Us</p>
            <p>contact@gullbridge.com</p>
          </div>
          {/* <div className="footer_sec"><p className="title">Our Socials</p></div> */}
        </div>
        {/* <hr /> */}
      </div>
      <hr style={{ margin: "1rem", opacity: ".8" }} />
      <div className="separate" style={{ margin: "1rem", opacity: ".8" }}>
        <p>Copyright © 2023 GULLBRIDGE, All Rights Reserved.</p>
        <p>Terms & Conditions | Private Policy</p>
      </div>
      <br />
    </div>
  );
}

export default Footer;
