import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayerProvider, Text } from '@astryxdesign/core';
import { AppShell } from '@astryxdesign/core/AppShell';
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
      <AppShell
        height="auto"
        contentPadding={0}
        topNav={<Navbar />}
        variant="wash"
      >
        <Suspense fallback={<Text role="status">Loading page...</Text>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AppShell>
      <Footer />
      <ToastViewport position="bottom-end" />
    </LayerProvider>
  );
}

export default App;
