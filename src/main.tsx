import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Header />
      <App />
      <Footer />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
