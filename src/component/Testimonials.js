import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Testi.css';


function Testimonials() {
  return (
   <div>


       



<Carousel controls={false} indicators={false}>




        
 
        <Carousel.Item interval={3500}>
         <h1 class="h1 text-center" id="pageHeaderTitle">Says About Us

Testimonials</h1><div class="postcard__bar"></div>
        


        <div class="container mt-5">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="testimonial-bg">
                <div id="testimonial-slider" >
                    <div class="testimonial">
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at augue sed elit eleifend tempus. Etiam malesuada vulputate justo quis bibendum. Nam maximus ultricies rhoncus. Ut non felis vel enim dapibus.
                        </p>
                        <div class="pic">
                            <img src="images\11.jpg" alt=""/>
                        </div>
                        <h3 class="title">name,</h3>
                       
                    </div></div>
            </div>
        </div>
    </div>
</div>

        </Carousel.Item>
        <Carousel.Item interval={3500}>
        <h1 class="h1 text-center" id="pageHeaderTitle">Says About Us

Testimonials</h1>

<div class="container mt-5">
<div class="row">
<div class="col-md-8 col-md-offset-2">
    <div class="testimonial-bg">
        <div id="testimonial-slider" >
            <div class="testimonial">
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at augue sed elit eleifend tempus. Etiam malesuada vulputate justo quis bibendum. Nam maximus ultricies rhoncus. Ut non felis vel enim dapibus.
                </p>
                <div class="pic">
                    <img src="images\ab.jpg" alt=""/>
                </div>
                <h3 class="title">name,</h3>
                <span class="post">profession</span>
            </div></div>
    </div>
</div>
</div>
</div>

</Carousel.Item>

      </Carousel>

    </div>
  )
}

export default Testimonials