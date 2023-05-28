import React from 'react';
import './slider.css';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card } from 'react-bootstrap';
import { products } from './prodlist';


export function CardsSlider() {
 
  return (
    <div className='container d-flex'>
      {products.map((product) => (
        <div className="card border-0" key={product.id}>
          <div className="carousel-wrapper ">
          <div className="FavoriteBorderOutlinedIcon  d-flex flex-column " style={{ zIndex: 3, cursor: 'pointer' }} ><i class="bi bi-heart"></i>
                   </div>
            <Carousel controls={false}>
             
              {product.images.map((image) => (
                <Carousel.Item key={image.num}>

                  <img className="d-block w-100" src={image.src} alt={image.alt} ></img>
                  
                  <div className="caption position-absolute bottom-0 w-100  p-3">
                    <p className='mb-0'>This item is added to your cart</p>
                    <div className="d-flex justify-content-center align-content-center gap-1">
                      {image.size.map((size, index) => (
                       <button style={{ zIndex: 3, cursor: 'pointer' }} key={index} className="btn btn-outline-secondary">{size}</button> 
                      ))}
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="card-body d-flex flex-column align-items-start ">
            <Card.Title className='mb-0 '>{product.productname}</Card.Title>
            <Card.Text className='mb-0'>Price: {product.price}</Card.Text>
            <Card.Text>Quantity: {product.color}</Card.Text>
          </div>
        </div>
      ))}
    </div>
  );
}
