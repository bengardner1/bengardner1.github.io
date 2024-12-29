import React, { useState } from 'react';

const ImageCarousel = () => {
  // List of images for the carousel
  const images = [
    "/Pics/photos_of_me/duck.jpeg",
    "/Pics/photos_of_me/bigben.jpeg",
    "/Pics/photos_of_me/br.jpeg",
    "/Pics/photos_of_me/burger.jpeg",
    "/Pics/photos_of_me/cheese.jpeg",
    "/Pics/photos_of_me/grad.jpeg",
    "/Pics/photos_of_me/lost.jpeg",
    "/Pics/photos_of_me/mirror.jpeg",
    "/Pics/photos_of_me/sax.jpeg",
    "/Pics/photos_of_me/uke.jpeg"
  ];
  

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ width: '100%', cursor: 'pointer' }}
        onClick={nextImage}
        className='img-thumbnail'
      />
    </div>
  );
};

export default ImageCarousel;
