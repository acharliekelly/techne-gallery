// File: src/context/GalleryContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import cloudinaryConfig from '../config/cloudinary';

const GalleryContext = createContext();

export function GalleryProvider({children}) {
  const [artworks, setArtworks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const url = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/list/${cloudinaryConfig.folder}.json`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArtworks(data.resources || []);
      } catch (error) {
        console.error('Failed to fetch artwork:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <GalleryContext.Provider value={{ artworks, loading, selectedIndex }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  return useContext(GalleryContext);
}