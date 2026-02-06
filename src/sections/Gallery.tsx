import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  span: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/gal1.png',
    alt: 'Freshly made savory crêpe with ham and melted cheese at Catherine\'s Crêperie',
    title: 'Savory Crêpe',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/gallery/gal2.png',
    alt: 'Sweet Nutella and banana crêpe topped with powdered sugar',
    title: 'Nutella Banana Crêpe',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/gallery/gal3.png',
    alt: 'Traditional French crêpe with fresh strawberries and whipped cream',
    title: 'Strawberry Crêpe',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/gallery/gal4.png',
    alt: 'Catherine\'s signature crêpe with brie, pesto, and pine nuts',
    title: 'Catherine\'s Signature',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/gallery/gal5.png',
    alt: 'Handcrafted sweet crêpe with salted caramel drizzle',
    title: 'Salted Caramel Crêpe',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/gallery/gal6.png',
    alt: 'Classic French lemon sugar crêpe served at Catherine\'s Crêperie in Folsom',
    title: 'Lemon Sugar Crêpe',
    span: 'col-span-1 row-span-1',
  },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="gallery"
      className="relative py-20 sm:py-28 lg:py-36 section-padding bg-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-terracotta text-sm font-semibold uppercase tracking-widest mb-4 block">
            Gallery
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-navy mb-4">
            A Feast for the <span className="italic text-gold">Eyes</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Each crêpe is a work of art, crafted with precision and passion
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-elegant cursor-pointer group ${image.span}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-navy/60 transition-opacity duration-300 flex flex-col items-center justify-center ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ZoomIn className="w-8 h-8 text-cream mb-2" />
                {image.title && (
                  <span className="font-playfair text-cream text-lg">{image.title}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                loading="lazy"
                className="max-w-full max-h-[80vh] object-contain rounded-elegant"
              />
              {selectedImage.title && (
                <div className="text-center mt-4">
                  <span className="font-playfair text-cream text-2xl">{selectedImage.title}</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
