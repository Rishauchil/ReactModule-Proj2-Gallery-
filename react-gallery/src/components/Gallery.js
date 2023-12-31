// src/components/Gallery.js
import React, { useEffect } from 'react';
import { useGallery } from '../context/GalleryContext';
import axios from 'axios';

const Gallery = ({ category }) => {
  const { state, dispatch } = useGallery();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7f9b57a5c31f098cdf1ebca9dc238dbc&tags=${category}&format=json&nojsoncallback=1&per_page=10`
        );
        console.log('Flickr API Response:', response.data);
        dispatch({type:'SET_IMAGES', payload:response.data.photos.photo});
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };

    fetchImages();
  }, [category, dispatch]);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div>
        {state.images.map((photo) => (
          <img
            key={photo.id}
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
