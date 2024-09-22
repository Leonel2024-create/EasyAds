import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <p>&copy; 2024 EasyAds. Todos los derechos reservados.</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Términos y Condiciones</Link>
        </li>
        <li>
          <Link to="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Política de Privacidad</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
