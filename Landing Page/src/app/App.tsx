import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
