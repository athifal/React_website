import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Servicelite.css'
import './Serviceslite..scss'

function Serviceslite() {
  return (
    <div class=" mt-5" >
<Carousel controls={false} indicators={false}>

 
        <Carousel.Item interval={1500}>
       
        
	<div class="container py-4">
    <h1 class="h1 text-center" id="pageHeaderTitle">our services</h1>
    
		
		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="images\ab.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue"><a href="#">service title</a></h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				
			</div></article></div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>


       
	<div class="container py-4">
    <h1 class="h1 text-center" id="pageHeaderTitle">our services</h1>
    

		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="images\abc.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue"><a href="#">services title</a></h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				
			</div></article></div>
         

          
        </Carousel.Item>
        
        <Carousel.Item interval={1500}>
        
	<div class="container py-4 mt-5">
	<h1 class="h1 text-center" id="pageHeaderTitle">our services</h1>
    

		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="images\a.jpg" alt="Image Title" />
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue"><a href="#">services title</a></h1>
				
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				
			</div></article></div>
          
        </Carousel.Item>
      </Carousel>


        </div>
  )
}

export default Serviceslite