// File: src/components/ArtworkGrid.jsx
import { useState, useEffect } from 'react';
import Image from '@cloudinary/react';

/**
 * ArtworkGrid
 * displays grid of thumbnails
 */
export default function ArtworkGrid({ artworks }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    // refresh grid
  }, [artworks]);

  return (
    <div className='container'>
      {artworks.map((pic, idx) => (
        <Image 
          key={pic.public_id}
          public_id={pic.public_id}
          className={selectedIndex === idx && 'selected'}
          onClick={() => setSelectedIndex(idx)}
          width={200}
        />
      ))}
    </div>
  )
}