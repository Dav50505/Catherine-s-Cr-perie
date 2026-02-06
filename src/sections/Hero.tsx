import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero/hero-img.png"
          alt="Authentic French crêpes at Catherine's Crêperie in Folsom, California"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-cream" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-4 tracking-tight"
        >
          Catherine's
          <span className="block italic text-gold">Crêperie</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-cream/90 font-light mb-2 max-w-2xl mx-auto"
        >
          Authentic French Crêpes, Crafted with Passion
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base text-cream/70 mb-10 max-w-xl mx-auto"
        >
          Experience the taste of Paris with our traditional recipes passed down through generations
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="https://order.toasttab.com/online/catherines-creperie-200-wool-street?diningOption=takeout&rwg_token=ACgRB3fo3vf8GINDGq9DL0BU4mkFb97yl6rKetvuSVdUhlolvhq_aYVrKXwDESpkwJMlqRbnpol3VKM00Gbj-H_kCRynEnRGqQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-lg"
          >
            Order Online
          </a>
          <a
            href="https://www.doordash.com/store/catherine's-creperie-folsom-38735170/89917953/?pickup=true&utm_campaign=gpa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 text-lg"
          >
            Order for Delivery
          </a>
          <button
            onClick={scrollToAbout}
            className="flex items-center gap-2 px-8 py-3 border-2 border-cream/50 text-cream rounded-elegant font-medium transition-all duration-300 hover:bg-cream/10 hover:border-cream"
          >
            <MapPin className="w-5 h-5" />
            Find Us
          </button>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-2 text-cream/60 text-sm"
        >
          <MapPin className="w-4 h-4" />
          <span>200 Wool Street, Folsom, CA 95630</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-cream/60 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
