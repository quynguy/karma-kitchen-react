import React, { useState } from 'react'

const Gallery = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "bowl-1.png",
        "bowl-2.png",
        "bowl-3.png",
        "bowl-4.png",
        "bowl-5.png",
    ];

    const prevImg = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImg = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    };
    return (
        <div id="gallery" className="gallery">
          <button className="btn btn-left" onClick={prevImg}>&#10094;</button>
          <img className="gallery-img" src={`/images/${images[currentImageIndex]}`} alt="Gallery Image" />
          <button className="btn btn-right" onClick={nextImg}>&#10095;</button>
        </div>
    );
      
}

export default Gallery;