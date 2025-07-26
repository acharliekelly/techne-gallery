// File: src/components/Header.jsx
import siteConfig from '../config/siteConfig';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1><Link to="/">{siteConfig.siteTitle}</Link></h1>
    </header>
  );
}