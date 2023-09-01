import React from 'react';
import LOGO from '../images/home_page/dumbell.png'
import '../style/footer.css'

const Footer = () => {

    return (
        <footer>
            <div className='footer__container'>
                <div className='footer_content_container'>
                    <div className='footer_box_container'>
                        <div className='footer_box'>
                            <button className="fitme__button gradient-text">
                                <img src={LOGO} alt="logo" className='logo'/>
                                FitMe
                            </button>   
                            <p>Take your health and fitness to the next level with our comprehensive program designed to help you reach your fitness goals</p>
                            
                            <div className='centering'>
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                                <a href="https://www.facebook.com/vikram.paul.mon.007" className="icon-button facebook"><i className="fab fa-facebook"></i><span></span></a>
                                <a href="https://twitter.com/worldofvicky007" className="icon-button twitter"><i className="fab fa-twitter"></i><span></span></a>
                                <a href="https://www.instagram.com/worldofvicky007/" className="icon-button instagram"><i className="fab fa-instagram"></i><span></span></a>
                                <a href="https://www.linkedin.com/in/vikram-paul-b27a1b11b/" className="icon-button linkedin"><i className="fab fa-linkedin"></i><span></span></a>
                                <hr />
                                <p className='rights'>© FitMe 2023. All Rights Reserved.</p>
                            </div>
                            
                        </div>

                        <div className='footer_box_2'>
                            <h3>Our Classes</h3>
                            <hr />
                            <a href="">Pilates Class</a><br />
                            <a href="">Yoga Class</a><br />
                            <a href="">Running Class</a><br />
                            <a href="">HIIT Class</a><br />
                            <a href="">Cycling Class</a><br />
                            <a href="">Weight Lifting Class</a>
                        </div>
                            
                        <div className='footer_box_2'>
                            <h3>Operating Hours</h3>
                            <hr />
                            <p><b>Monday - Saturday:</b></p>
                            <p>9 a.m. - 5 p.m.</p>

                            <p><b>Sunday:</b></p>
                            <p>9 a.m. - 3 p.m.</p>

                            <p><b>Holidays:</b></p>
                            <p><b>Closed for all Holidays</b></p>
                        </div>
                    </div>       
                </div>
            </div>
        </footer>
    );
    
};

export default Footer;
