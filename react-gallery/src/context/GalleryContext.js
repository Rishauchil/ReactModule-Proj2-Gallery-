// src/context/GalleryContext.js
import React, { createContext, useContext, useReducer } from 'react';

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const initialState = {
    images: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_IMAGES':
        return { ...state, images: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GalleryContext.Provider value={{ state, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
