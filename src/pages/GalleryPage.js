import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "../styles/GalleryPageStyle.css";
import md5 from "crypto-js/md5";

const publicKey = "bf51c91e83159509987139cc4fcafffe";
const privateKey = "29a56ccc916871a2cbc4b5ab1cfb219d36b3c5d6";
const characterId = "1009610"; // Spider-Man's character ID
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey).toString();

function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}/comics`, {
          params: {
            ts,
            apikey: publicKey,
            hash,
            limit: 30 // Adjust if needed
          },
        });
  
        // Filter out the broken image. This assumes broken images have a specific path you can check
        // For example, if the broken image's path ends with 'image_not_available'
        const validImages = response.data.data.results.filter(comic => 
          !comic.thumbnail.path.endsWith('image_not_available')
        ).map(comic => {
          const path = comic.thumbnail.path;
          const extension = comic.thumbnail.extension;
          return `${path}/detail.${extension}`;
        });
  
        setImages(validImages);
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
        <Carousel.Item key={index}>
          {" "}
          {/* Add a unique key for each item */}
          <img
            className="d-block w-100 carousel-image" // Use 'w-100' to make the image responsive
            src={image}
            alt={`Spider-Man Comic ${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default GalleryPage;
