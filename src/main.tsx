import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import { Hero } from './sections/Hero';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>,
);
