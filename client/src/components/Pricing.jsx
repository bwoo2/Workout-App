import React from 'react'
import '../style/pricing.css';

function Pricing() {
  return (
    <div className='home_pricing'>
      <h1>Exclusive Pricing Plans</h1>
      <p>Sign up now and get a <b>Free Trial</b> for 1 month!</p>
      <div className='content_container'>
          <div className='box_container'>
              <div className='box_pricing'>
                  <h2>Beginner</h2>
                  <h1>$119.99/mon</h1>
                  <ol className="yesno">
                      <li className="yes">Exercise List</li>
                      <li className="yes">Join Classes</li>
                      <li className="no">Personal Trainer</li>
                      <li className="no">Post Blogs</li>
                      <li className="no">Create Classes</li>
                      <li className="no">Become a Trainer</li>
                  </ol>
                  <button className='purchase_button'>Purchase Now</button>
              </div>

              <div className='box_pricing'>
                  <h2>Advanced</h2>
                  <h1>$249.99/mon</h1>
                  <ol className="yesno">
                      <li className="yes">Exercise List</li>
                      <li className="yes">Join Classes</li>
                      <li className="yes">Personal Trainer</li>
                      <li className="yes">Post Blogs</li>
                      <li className="no">Create Classes</li>
                      <li className="no">Become a Trainer</li>
                  </ol>
                  <button className='purchase_button'>Purchase Now</button>
              </div>
                  
              <div className='box_pricing'>
                  <h2>Professional</h2>
                  <h1>$399.99/mon</h1>
                  <ol className="yesno">
                      <li className="yes">Exercise List</li>
                      <li className="yes">Join Classes</li>
                      <li className="yes">Personal Trainer</li>
                      <li className="yes">Post Blogs</li>
                      <li className="yes">Create Classes</li>
                      <li className="yes">Become a Trainer</li>
                  </ol>
                  <button className='purchase_button'>Purchase Now</button>
              </div>
          </div>       
      </div>
    </div>
  )
}

export default Pricing