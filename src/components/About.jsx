
import aboutImg from '../assets/hero1.jpg'
import "../css/aboutus.css";
import Button from './button';



function AboutUs() {

  return (
    <section  style={{paddingLeft:'4.5rem'}} className="about-section" id="about">
     <br />
      <div className="container">
        <div className="row clearfix" style={{ display: "flex", alignItems:'center' }}>
          <div
            className="content-column col-md-6 col-sm-12 col-xs-12 up"
            style={{ width: "50%" }}>
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Us</div>
                <h2 className='titi'>
                If your goal is to become
financially secure make money
to spend money.

                </h2>
              </div>
              <div className="text">
              For 6+ years, we&apos;ve been dedicated to providing efficient loan and funding solutions tailored to your needs. Our extensive experience ensures that we understand the unique challenges you face and can offer expert guidance every step of the way. Trust us to help you secure the financial support necessary to achieve your goals and thrive in today&apos;s dynamic business landscape.
              </div>
              {/* <div className="email">
                Request Quote:{" "}
                <span className="theme_color">freequote@gmail.com</span>
              </div> */}
             <a className='bout' style={{marginLeft:'0'}} href="https://forms.gle/5WFuiwxC4BC7jTbs5"><Button /></a>
            </div>
          </div>

          <div className="image-column col-md-6 col-sm-12 col-xs-12 up">
            <div
              className="inner-column "
              data-wow-delay="0ms"
              data-wow-duration="1500ms">
              <div className="image">
                <img src={aboutImg }alt="" />
                <div className="overlay-box">
                  <div className="year-box">
                    <span className="number">6</span>
                    <div style={{color:'rgb(251 251 251)'}}>
                     Tested <br />&{" "}
                    <br />Trusted
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
