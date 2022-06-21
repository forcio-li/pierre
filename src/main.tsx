import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import { Studies } from './sections';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills/Skills';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hero />
    <Skills />
    <Studies />
  </React.StrictMode>,
);
