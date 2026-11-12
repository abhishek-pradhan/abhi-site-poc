import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayerProvider } from '@astryxdesign/core';
import { ToastViewport } from '@astryxdesign/core/Toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

const About = lazy(() => import('./components/About'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <LayerProvider>
      <Navbar />
      <main>
        <Suspense fallback={<div role="status">Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ToastViewport position="bottom-end" />
    </LayerProvider>
  );
}

export default App;
