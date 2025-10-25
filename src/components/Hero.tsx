import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import soccerBall from '@/assets/soccer-ball.jpg';
import nightMatch from '@/assets/night-match.jpg';
import cleatBall from '@/assets/cleat-ball.jpg';

const Hero = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: nightMatch, alt: 'Youth match under floodlights' },
    { src: soccerBall, alt: 'Soccer ball on grass' },
    { src: cleatBall, alt: 'Player with ball' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const scrollToRegistration = () => {
    document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent drop-shadow-2xl">
              {t('hero.title1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-white to-white bg-clip-text text-transparent drop-shadow-2xl">
              {t('hero.title2')}
            </span>
            <span className="block text-accent mt-4 text-6xl md:text-8xl lg:text-9xl font-black italic [text-shadow:_0_0_30px_rgb(46_204_113_/_50%)]">
              {t('hero.title3')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-4 font-bold tracking-wide uppercase [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)]">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg md:text-xl text-accent font-semibold mb-10 tracking-widest">
            {t('hero.since')}
          </p>

          <Button
            size="lg"
            onClick={scrollToRegistration}
            className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl hover-lift group"
          >
            {t('hero.cta')}
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-24"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentImage ? 'bg-accent w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
