import { Routes, Route } from 'react-router-dom';
import { LayerProvider } from '@astryxdesign/core';
import { ToastViewport } from '@astryxdesign/core/Toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <LayerProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ToastViewport position="bottom-end" />
    </LayerProvider>
  );
}

export default App;
