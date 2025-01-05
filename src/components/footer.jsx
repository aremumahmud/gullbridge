import logo from "../assets/c74f6086-4422-48d1-a29a-cc494bebdbc1_-_Copy-removebg-preview.png";
import footer from '../assets/footer.jpg'
import "../css/footer.css";
import Button from "./button";
function Footer() {
  return (
    <div className="footer_wrap" id="contact">
      {" "}
      <div className="footer">
        <div className="section1_">
            <div>
                 <img src={logo} alt="" />
                 <p className="footer_title">
                 Stay ahead with cutting-edge insights
                    </p>
                    <a style={{marginLeft:'0'}} href="#"><Button /></a>
            </div>
         
          
            <img src={footer} alt="" />
         
        </div>
        <div className="linksection">
            <ul>
                <li>Quick Links</li>
                <li><a href="#">Home</a> </li>
                <li>About Us</li>
                <li><a href="#news"> Products</a></li>
                {/* <li><a href="/career">Careers</a></li> */}
            </ul>
            {/* <ul>
                <li>Our Business</li>
                <li><a href="/asset/management">Gullbridge Asset Management</a></li>
                <li><a href="/private/equity">Private Equity</a></li>
                <li><a href="/real/estate">Real Estate</a></li>
                <li>Renewable Power & Transition</li>
                <li><a href="/technology/and">Technology</a></li>
                <li><a href="/finance/and">Finance & Credit </a></li>
            </ul> */}
            {/* <ul>
                <li>Public Investors</li>
                <li>Gullbridge Co-operation</li>
                <li><a href="/asset/management">Gullbridge Asset Management</a> </li>
                <li>Gullbridge Reinsurance</li>
                <li>Gullbridge Real Estate Partners</li>
                <li>Gullbridge Renewable Partners</li>
                <li>Gullbridge Bussiness Partners</li>
            </ul> */}
            {/* <ul>
                <li>Private</li>
                <li>Institutional Investors</li>
                <li>Financial Advisors</li>
                
            </ul> */}
            <ul>
                <li>Get in Touch</li>
                <li>
+1 424-268-2507</li>
                {/* <li>Our Office</li> */}
                <li>ONE BRYANT PARK NEW YORK, NY 10036</li>
                {/* <li></li> */}
            </ul>
        </div>
        <div className="section2_">
          {/* <div className="footer_sec">
            <p className="title">Our Address</p>
            <p>Valentin, Street Road 24, New York, USA - 67452</p>
          </div> */}
          <div className="footer_sec">
            <p className="title">Contact Us</p>
            <p>info@supplysphereinternational.com</p>
          
          </div>
          {/* <div className="footer_sec"><p className="title">Our Socials</p></div> */}
        </div>
        {/* <hr /> */}
      </div>
      <hr style={{ margin: "1rem", opacity: ".8" }} />
      <div className="separate" style={{ margin: "1rem", opacity: ".8" }}>
        <p>Copyright © 2025 Supply Sphere, All Rights Reserved.</p>
        <p>Terms & Conditions | Private Policy</p>
      </div>
      <br />
    </div>
  );
}

export default Footer;
