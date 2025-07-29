// File: src/pages/ArtworkDetail.jsx
import { useParams } from 'react-router-dom';
import { useGallery } from '../context/GalleryContext';

export default function ArtworkDetail() {
  const { slug } = useParams();
  const { artworks } = useGallery();

  const artwork = artworks.find(a => a.public_id === slug);

  if (!artwork) return <main><h2>Artwork not found</h2></main>;

  return (
    <main>
      <h2>{artwork.public_id}</h2>
      <img
        src={`https://res.cloudinary.com/${artwork.cloud_name}/image/upload/${artwork.public_id}.jpg`}
        alt={artwork.public_id}
      />
    </main>
  );
}