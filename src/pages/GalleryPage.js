import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import "../styles/GalleryPageStyle.css"
import md5 from 'crypto-js/md5'; 

const publicKey = 'bf51c91e83159509987139cc4fcafffe';
const privateKey = '29a56ccc916871a2cbc4b5ab1cfb219d36b3c5d6';
const characterId = '1009610'; // Spider-Man's character ID
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey).toString();

function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}`, {
          params: {
            ts,
            apikey: publicKey,
            hash,
          },
        });

        const imagePath = response.data.data.results[0].thumbnail.path;
        const imageExtension = response.data.data.results[0].thumbnail.extension;
        const imageUrl = `${imagePath}/detail.${imageExtension}`;

        setImages([imageUrl]); 
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel data-bs-theme="dark">
      {images.map((image, index) => (
        <Carousel.Item>
        <img
          className="d-block mx-auto carousel-image"
          src={image}
          alt={`Slide ${index}`}
        />
      </Carousel.Item>
      ))}
    </Carousel>
  );
}


export default GalleryPage