import React from 'react';  
import './Gallery.css'; 

const images = [  
  '/images/pic1.jpg',  
  '/images/pic2.jpg',  
  '/images/pic3.jpg',
  '/images/pic4.jpg',
  '/images/pic5.jpg',
  '/images/pic6.jpg',
];  

const Gallery = () => {  
  return (  
    <div className="gallery-container">  
      <h2 className="text-center">My Gallery</h2>  
      <div className="gallery">  
        {images.map((src, index) => (  
          <img key={index} src={src} alt={`Gallery pic ${index + 1}`} className="gallery-image" />  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Gallery;