import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const TemporaryNotFound: React.FC = () => (
  <main
    style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: '24px',
      background: '#ffffff',
      color: '#0D0D0D',
      fontFamily: '"Manrope", sans-serif',
      textAlign: 'center',
    }}
  >
    <div>
      <h1 style={{ margin: 0, fontSize: 'clamp(48px, 10vw, 96px)', lineHeight: 1, fontWeight: 700 }}>
        404 — NOT FOUND
      </h1>
      <p style={{ margin: '20px 0 0', fontSize: '16px', lineHeight: 1.6, fontWeight: 400 }}>
        This page doesn&apos;t exist or has been deleted by the owner.
      </p>
    </div>
  </main>
);

const App: React.FC = () => (
  <BrowserRouter>
    <TemporaryNotFound />
  </BrowserRouter>
);

export default App;
