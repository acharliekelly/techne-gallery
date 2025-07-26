// File: src/components/Gallery.jsx

import { useState, useEffect } from 'react';
import { Image, Transformation } from 'cloudinary-react';

import './gallery.scss';

export default function Gallery({
  galleryImagesArray,
  onSelectThumbnail,
  currentImageIndex,
  thumbSize
}) {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  
  function clickImage(index) {
    setCurrentIndex(index);
    onSelectThumbnail(index);
  }

  function imgClass(idx) {
    const cls = ['responsive', 'thumbnail'];
    if (idx === currentIndex) {
      cls.push('selected');
    }
    return cls.join(' ');
  }

  useEffect(() => {
    setCurrentIndex(currentImageIndex)
  }, [currentImageIndex]);

  return (
    <div className='gallery'>
      {galleryImagesArray.map((thumb, index) => (
        <Image key={index}
          className={imgClass(index)}
          title="TODO: lookup caption"
          publicId={thumb.public_id}
          onClick={() => clickImage(index)}>
            <Transformation height={thumbSize} width={thumbSize} crop="fill" />
          </Image>
      ))}
    </div>
  )

  
}