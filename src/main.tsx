import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills/Skills';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hero />
    <Skills />
  </React.StrictMode>,
);
