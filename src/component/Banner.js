import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
 





function Banner() {

 

  return (

      
    <div>
      <div class=" mx-4 ">
    
      <Carousel controls={false} indicators={false}>
        
 
        <Carousel.Item interval={1500}>
          <img class="img-fluid imagess"
            // className="d-block w-100 img-fluid shadow-4"
src="images\11.jpg"
            alt="Image One"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img class="img-fluid imagess"
            // className="d-block w-100"
src="images\22.jpg"
            alt="Image Two"
          />
          
        </Carousel.Item>
        
        <Carousel.Item interval={1500}>
          <img class="img-fluid imagess"
            // className="d-block w-100"
src="images\33.jpg"
            alt="Image Two"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
    </div>

  )
}

export default Banner