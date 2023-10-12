import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  const images = [
    'forgotImage.png',
    'loginImage.png',
    'registerImage.jpg',
    'resetImage.png'
  ];

  return (
    <Carousel interval={500}>
      {images.map((image) => (
        <Carousel.Item key={image}>
          <img src={image} alt="Slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;