import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import TrainerHead from '../images/trainers/Ropes.png';
import '../style/contact.css';

import { BsChatDots, BsTelephone, BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <GetInTouch />
  );
}

const center = { lat: 40.730508883252746, lng: -74.0031876783894 };

function GetInTouch() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='contact_container'>
      <div className='image_head_container'>
        <img src={TrainerHead} alt="" className='trainer_head' />
      </div>
      <h1>Get in Touch</h1>

      <div className='contact_details'>
        <div className="grid-container">
          <div className="grid-item">
            <p className='contact_topic'><BsChatDots /> Chat</p>
            <p className='supported'>What's supported?</p>
            <p>FitMe's online services</p>
            <button className="button-17" role="button">Chat</button>
          </div>
          <div className="grid-item">
            <p className='contact_topic'><BsPhone /> Text Message</p>
            <p className='supported'>What's supported?</p>
            <p>Fitme's online services</p>
            <button className="button-17" role="button">Message</button>
          </div>
          <div className="grid-item">
            <p className='contact_topic'><BsTelephone /> Phone</p>
            <p className='supported'>What's supported?</p>
            <p>All FitMe services</p>
            <button className="button-17" role="button">Phone</button>
          </div>
          <div className="grid-item">
            <p className='contact_topic'><AiOutlineMail /> Email</p>
            <p className='supported'>What's supported?</p>
            <label className="select" htmlFor="slct">
              <select id="slct" required onChange={handleOptionChange}>
                <option value="">Varies by topic selected</option>
                <option value="">Booking Classes</option>
                <option value="">Class Cancellations</option>
                <option value="">Account Recovery</option>
                <option value="">Billing Issues</option>
                <option value="">Subscription Management</option>
                <option value="">Promotions</option>
                <option value="">Trouble Shooting/Bug Reports</option>               
              </select>
              <svg width="20" height="20">
                <use xlinkHref="#select-arrow-down"></use>
              </svg>
            </label>
            <button className="button-17" role="button">Email</button>
          </div>
        </div>
        <svg className="sprites" style={{display: "none"}}>
          <symbol id="select-arrow-down" viewBox="0 0 10 6">
            <polyline points="1 1 5 5 9 1"></polyline>
          </symbol>
        </svg>

        <GoogleMap 
          zoom={13} 
          center={center}
          mapContainerClassName="map-container"
        >
          <MarkerF position={center}/>
        </GoogleMap>

        <div className='FAQ_container'>
          <h2>Frequently Asked Questions (FAQ)</h2>

          <div className='faq-box'>
            <h3>Question 1: What is FitMe?</h3>
            <p>FitMe is a holistic health and wellness platform designed to empower individuals to live healthier lives through a range of personalized exercise plans, nutrition guidance, and mental wellness resources.</p>
          </div>

          <div className='faq-box'>
            <h3>Question 2: How do I sign up?</h3>
            <p>Signing up is simple and straightforward. Click the "Sign Up" button on the top right corner of our website, fill in the required fields, and follow the on-screen instructions to create your account.</p>
          </div>

          <div className='faq-box'>
            <h3>Question 3: What services do you offer?</h3>
            <p>We offer a variety of services tailored to your health and wellness needs. This includes personalized workout programs, one-on-one virtual coaching, and community support to help you achieve your fitness goals.</p>
          </div>

          <div className='faq-box'>
            <h3>Question 4: Is FitMe suitable for all fitness levels?</h3>
            <p>Absolutely. Our platform caters to all fitness levels, from beginners to advanced athletes. Our personalized plans adapt to your level of experience and capabilities.</p>
          </div>

          <div className='faq-box'>
            <h3>Question 5: How can I cancel my subscription?</h3>
            <p>You can cancel your subscription at any time through the "Account" section on our platform. Navigate to the "Subscription" tab and click the "Cancel Subscription" button. Note that cancellations will take effect at the end of your current billing cycle.</p>
          </div>

          <div className='faq-box'>
            <h3>Question 6: Do you offer refunds?</h3>
            <p>We offer a 30-day money-back guarantee if you're not satisfied with our services. To request a refund, please contact our customer support within the first 30 days of your subscription.</p>
          </div>

          <div className='faq-box'>
            <h3>Question 7: How can I contact customer support?</h3>
            <p>You can reach out to our customer support team via email, phone call/message, or live chat. We aim to respond to all inquiries within 24 hours.</p>
          </div>
        </div>

        <div className='reach_out_now'>
            <h2>Ready for a healthier you? Reach out now!</h2>
            <h2>CALL NOW +(123) 456-7890</h2>
        </div> 
      </div>
    </div>
  );
}

export default Contact;
