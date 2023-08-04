import React from 'react'
import '../style/pricing.css';

function Pricing() {
  return (
    <div className='home_pricing'>
      <h1>Exclusive Pricing Plans</h1>
      <div className='content_container'>
          <div className='box_container'>
              <div className='box_pricing'>
                  <h2>Beginner</h2>
                  <h1>$119.99/mon</h1>
                  <ol class="yesno">
                      <li class="yes">Exercise List</li>
                      <li class="yes">Join Classes</li>
                      <li class="no">Personal Trainer</li>
                      <li class="no">Post Blogs</li>
                      <li class="no">Create Classes</li>
                      <li class="no">Become a Trainer</li>
                  </ol>
                  <button className='purchase_button'>Purchase Now</button>
              </div>

              <div className='box_pricing'>
                  <h2>Advanced</h2>
                  <h1>$249.99/mon</h1>
                  <ol class="yesno">
                      <li class="yes">Exercise List</li>
                      <li class="yes">Join Classes</li>
                      <li class="yes">Personal Trainer</li>
                      <li class="yes">Post Blogs</li>
                      <li class="no">Create Classes</li>
                      <li class="no">Become a Trainer</li>
                  </ol>
                  <button className='purchase_button'>Purchase Now</button>
              </div>
                  
              <div className='box_pricing'>
                  <h2>Professional</h2>
                  <h1>$399.99/mon</h1>
                  <ol class="yesno">
                      <li class="yes">Exercise List</li>
                      <li class="yes">Join Classes</li>
                      <li class="yes">Personal Trainer</li>
                      <li class="yes">Post Blogs</li>
                      <li class="yes">Create Classes</li>
                      <li class="yes">Become a Trainer</li>
                  </ol>
                  <button className='purchase_button'>Purchase Now</button>
              </div>
          </div>       
      </div>
      <h2>Free Trial</h2>
      <p>Sign up now for a free 7 Days!</p>
    </div>
  )
}

export default Pricing