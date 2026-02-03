import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wheat, Egg, Milk, Cookie } from 'lucide-react';

const ingredients = [
  { icon: Cookie, name: 'Butter', description: 'Rich French butter' },
  { icon: Egg, name: 'Eggs', description: 'Farm-fresh eggs' },
  { icon: Milk, name: 'Milk', description: 'Creamy whole milk' },
  { icon: Wheat, name: 'Flour', description: 'Fine pastry flour' },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-20 sm:py-28 lg:py-36 section-padding bg-cream"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-gold to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Main Image */}
              <div className="col-span-8">
                <div className="relative overflow-hidden rounded-elegant shadow-elegant-lg">
                  <img
                    src="/images/our-story/Art.png"
                    alt="Traditional crêpe making"
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Portrait Image */}
              <div className="col-span-4 flex items-end">
                <div className="relative overflow-hidden rounded-elegant shadow-elegant-lg -mb-8">
                  <img
                    src="/images/our-story/the-people.png"
                    alt="Catherine, our founder"
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="col-span-12 flex justify-end">
                <div className="w-32 h-32 border-2 border-gold/30 rounded-elegant -mt-16 mr-8" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-terracotta text-sm font-semibold uppercase tracking-widest mb-4 block"
            >
              Our Story
            </motion.span>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-playfair text-4xl sm:text-5xl text-navy mb-6"
            >
              A Taste of <span className="italic text-gold">Paris</span> in Every Bite
            </motion.h2>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 text-navy/80 leading-relaxed"
            >
              <p>
                Catherine's Crêperie was born from a simple dream: to share the authentic taste 
                of French crêpes with our community. Inspired by the charming crêperies of 
                Brittany and the bustling streets of Paris, we bring centuries of French 
                culinary tradition to your table.
              </p>
              <p>
                Our crêpes are made using time-honored recipes passed down through generations, 
                prepared with just four simple ingredients that create something truly magical. 
                Each crêpe is handcrafted to order, ensuring the perfect balance of delicate 
                texture and rich flavor.
              </p>
            </motion.div>

            {/* Pull Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pull-quote my-8"
            >
              "The beauty of a crêpe lies in its simplicity. With just butter, eggs, milk, 
              and flour, we create a little piece of Paris."
              <cite className="block mt-2 text-sm not-italic text-navy/60">
                — Catherine, Founder
              </cite>
            </motion.blockquote>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="font-playfair text-xl text-navy mb-4">
                Our Four Essential Ingredients
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ingredients.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center p-4 bg-white/60 rounded-elegant border border-parchment-dark/20"
                  >
                    <item.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                    <span className="block text-sm font-semibold text-navy">{item.name}</span>
                    <span className="text-xs text-navy/60">{item.description}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
