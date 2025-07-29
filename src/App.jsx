// File: src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtworkDetail from './pages/ArtworkDetail';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { Cloudinary } from "@cloudinary/url-gen";
import cloudConfig from './config/cloudinary';

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudConfig.cloudName
    }
  });

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/art/:slug" element={<ArtworkDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}