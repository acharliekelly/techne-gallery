// File: src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtworkDetail from './pages/ArtworkDetail';
import NotFound from './pages/NotFound';
import Header from './components/Header';

export default function App() {
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