import React from 'react';
import '../style/blog.css';

import TrainerHead from '../images/trainers/Ropes.png';

function Blog() {
  return (
    <div className='blog_container'>
      <div className='image_head_container'>
        <img src={TrainerHead} alt="" className='trainer_head'/>
      </div>
      <h1>Blogs</h1>

      <div class="ag-format-container">
        <div class="ag-courses_box">
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                UI/Web&amp;Graph design for teenagers 11-17&#160;years old
              </div>

              <div class="ag-courses-item_date-box">
                Start:
                <span class="ag-courses-item_date">
                  04.11.2022
                </span>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                UX/UI Web-Design&#160;+ Mobile Design
              </div>

              <div class="ag-courses-item_date-box">
                Start:
                <span class="ag-courses-item_date">
                  04.11.2022
                </span>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Annual package "Product+UX/UI+Graph designer&#160;2022"
              </div>

              <div class="ag-courses-item_date-box">
                Start:
                <span class="ag-courses-item_date">
                  04.11.2022
                </span>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Graphic Design
              </div>

              <div class="ag-courses-item_date-box">
                Start:
                <span class="ag-courses-item_date">
                  04.11.2022
                </span>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Motion Design
              </div>

              <div class="ag-courses-item_date-box">
                Start:
                <span class="ag-courses-item_date">
                  30.11.2022
                </span>
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Front-end development&#160;+ jQuery&#160;+ CMS
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg">
              </div>
              <div class="ag-courses-item_title">
                Digital Marketing
              </div>
            </a>
          </div>

          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Interior Design
              </div>

              <div class="ag-courses-item_date-box">
                Start:
                <span class="ag-courses-item_date">
                  31.10.2022
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Blog