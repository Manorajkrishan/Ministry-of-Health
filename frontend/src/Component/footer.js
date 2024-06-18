import React from 'react';
import "./footer.css"
import logo from "./Assets/logo.png"
import logofb from "./Assets/logofb.png"
import logowhatsapp from "./Assets/logowhatsapp.png"
import logoinsta from "./Assets/logoinsta.png"
import location from "./Assets/location.png"
import mail from "./Assets/mail.png"
import phone from "./Assets/telephone.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footerr">
        <div className="mohLogo">
        <a href='/'><img src={logo} className="App-logo" alt="logo" style={{ width: '100px', height: '140px', marginLeft: '20px' }} /></a>
        </div>
        <div className="listTitle">
            <h2 className="About">About</h2>
                <a href="/home" className="term">Sri Lanka Ministry Of Health</a>
                <p></p>
                <div className='details'>
                    <div><img src={location} className="App-logo" alt="logo" style={{ width: '15px', height: '15px' }} /></div>
                    <div>
                        Suwasiripaya, No. 385, <br></br>
                        Rev. Baddegama Wimalawansa Thero Mawatha,<br></br>
                        Colombo 10, Sri Lanka.
                    </div>
                </div>

        </div>
        <div className='listTitle'>
            <h2 className="About">Contact Us</h2>
            <div className="term">
                <div className='details'>
                <div><img src={mail} className="App-logo" alt="logo" style={{ width: '15px', height: '15px' }} /></div>
                    <div>
                        <a href="#" className="term">ministryofhealth@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="term">
            <div className='details'>
                <div><img src={phone} className="App-logo" alt="logo" style={{ width: '15px', height: '15px' }} /></div>
                <div>
                     <a href="#" className="term">075 461 6471</a>
                </div>
                </div>
            </div>
        </div>
        <div className='listTitle'>
            <h2 className="About">Legal</h2>
            <div className="term">
                <a href="#" className="term">Privacy Policy</a>
            </div>
            <div className="term">
                <a href="#" className="term">terms & Conditions</a>
            </div>
        </div>
     </div>
      <hr/>
      <div className="lowerfoot">
        <div className="copyrights">
          © 2024 <a href="#" className="term">Ministry Of Health</a>
        </div>
        <div className='social-icons'>
            <div className='social'>
                <a href='/'><img src={logowhatsapp} className="App-logo" alt="logo" style={{ width: '30px', height: '30px' }} /></a>
            </div>
            <div className='social'>
                <a href='https://www.facebook.com/MoHNIMSriLanka/'><img src={logofb} className="App-logo" alt="logo" style={{ width: '30px', height: '30px'}} /></a>
            </div>
            <div className='social'>
                <a href='https://www.instagram.com/explore/locations/104701551035974/ministry-of-health---sri-lanka/'><img src={logoinsta} className="App-logo" alt="logo" style={{ width: '30px', height: '30px' }} /></a>
            </div>
        </div>
    </div>
        
    </footer>
  );
}

export default Footer;