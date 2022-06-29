import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import { Studies } from './sections';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Experiences } from './sections/Experiences';
import { Portfolio } from './sections/Portfolio';
import { Footer } from './sections/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hero />
    <Skills />
    <Studies />
    <Experiences />
    <Portfolio />
    <Footer />
  </React.StrictMode>,
);
