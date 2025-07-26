// File: src/pages/ArtworkDetail.jsx
import { useParams } from 'react-router-dom';

export default function ArtworkDetail() {
  const { slug } = useParams();
  return <main><h2>Artwork: {slug}</h2></main>;
}