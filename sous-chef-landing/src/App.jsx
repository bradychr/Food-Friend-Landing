import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';
import WaveDivider from './components/common/WaveDivider';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <Layout>
        <Hero />
        <WaveDivider color="text-white" />
        <Features />
        <WaveDivider color="text-accent-50" flip />
        <HowItWorks />
        <WaveDivider color="text-secondary-50" />
        <FAQ />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
