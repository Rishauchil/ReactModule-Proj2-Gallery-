// src/components/Search.js
import React, { useState } from 'react';
import { useGallery } from '../context/GalleryContext';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const { dispatch } = useGallery();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7f9b57a5c31f098cdf1ebca9dc238dbc&text=${query}&format=json&nojsoncallback=1&per_page=10`
      );
      dispatch({ type: 'SET_IMAGES', payload: response.data.photos.photo });
    } catch (error) {
      console.error('Error searching images', error);
    }
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
