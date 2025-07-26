// File: src/pages/Home.jsx
import { useGallery } from "../context/GalleryContext";

export default function Home() {
  const { artworks, loading } = useGallery();

  if (loading) return <p>Loading gallery...</p>;

  return (
    <main>
      <h1>Welcome to my Gallery</h1>
      <ul>
        {artworks.map((img) => (
          <li key={img.public_id}>{img.public_id}</li>
        ))}
      </ul>
    </main>
  );
}