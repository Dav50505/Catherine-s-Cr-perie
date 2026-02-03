import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChefHat } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface BuildYourOwnSection {
  type: 'build-your-own';
  note: string;
  categories: {
    title: string;
    items: string[];
  }[];
  footer?: string;
}

type MenuSection = MenuItem[] | BuildYourOwnSection;

const savoryCrepes: MenuItem[] = [
  {
    name: "Catherine's Signature Crêpe",
    description: 'Double Cheddar, Basil Pesto, Pine Nuts and Slices of Black Forest Ham or Sliced Salmon • Add Sun Dried Tomatoes +$2',
    price: '$13.95',
  },
  {
    name: 'Smoked Salmon',
    description: 'Smoked Salmon, Brie Cheese, Capers and Fresh Arugula • Add Sun Dried Tomatoes +$2',
    price: '$14.95',
  },
  {
    name: 'Ham and Swiss',
    description: 'Black Forest Ham and Imported Swiss Cheese • Add Sun Dried Tomatoes +$2',
    price: '$10.95',
  },
  {
    name: 'Pizza Crêpe',
    description: 'Marinara Sauce topped with a Blend of Mozzarella, Cheddar Cheese and Pepperoni • Add Dried Basil or Fresh Arugula +50¢ Each',
    price: '$11.95',
  },
  {
    name: 'Gouda Pesto',
    description: 'Melted Gouda with Basil Pesto and Roasted Walnuts • Add Sun Dried Tomatoes +$2',
    price: '$10.95',
  },
  {
    name: 'Goat and Fig',
    description: 'Goat Cheese, Mission Figs and Strawberry Jam • Add Sun Dried Tomatoes +$2',
    price: '$13.95',
  },
  {
    name: 'Brie Honey Walnut',
    description: 'Caramelized Brie Cheese and Ground Walnuts • Add Sun Dried Tomatoes +$2',
    price: '$12.95',
  },
];

const buildYourOwnSavory: BuildYourOwnSection = {
  type: 'build-your-own',
  note: 'Comes with 1 filling. Each additional filling is +$, unless noted otherwise.',
  categories: [
    {
      title: 'Proteins',
      items: [
        'Black Forest Ham + Gouda Cheese',
        'Pepperoni',
        'Apple Smoked Bacon',
        'Turkey Breast',
        'Smoked Salmon +$3',
      ],
    },
    {
      title: 'Cheeses',
      items: [
        'Imported Swiss',
        'Cheddar',
        'Mozzarella and Cheddar Blend +$2',
        'French Brie Cheese +$2',
        'Goat Cheese +$2',
      ],
    },
    {
      title: 'Nuts',
      items: [
        'Ground Walnuts',
        'Roasted Pine Nuts',
        'Sliced Almonds',
      ],
    },
    {
      title: 'Greens',
      items: [
        'Fresh Arugula',
        'Capers',
        'Sun Dried Tomatoes +$2',
      ],
    },
    {
      title: 'Sauces',
      items: [
        'Basil Pesto',
        'Marinara',
        'Sour Cream',
        'Balsamic Glaze +.50¢',
      ],
    },
    {
      title: 'Sweet on Your Savory',
      items: [
        'Honey',
        'Raspberry Jam',
        'Strawberry Jam',
        'Fig Coulis +$2',
      ],
    },
  ],
  footer: 'Crêpes are cooked to match with all allergens. Catherine\'s Crêperie - 200 Wool Street, Folsom, CA 95630',
};

const sweetCrepes: MenuItem[] = [
  {
    name: 'Nutella',
    description: 'Add Freshly Sliced Banana +$',
    price: '$8.95',
  },
  {
    name: 'Lemon Sugar',
    description: 'Caramelized Sugar with Fresh Lemon Sugar',
    price: '$10.95',
  },
  {
    name: 'Honey Walnut',
    description: 'Honey with Ground Walnuts',
    price: '$10.95',
  },
  {
    name: 'Maple Strawberry Banana Jelly',
    description: "Susan's Flavour Butler with Streusans Grape Jelly",
    price: '$10.95',
  },
  {
    name: 'Salted Caramel',
    description: 'Add Freshly Sliced Banana +$',
    price: '$11.95',
  },
  {
    name: 'Nutella, Salted Caramel and Ground Walnuts',
    description: '',
    price: '$11.95',
  },
];

const buildYourOwnSweet: BuildYourOwnSection = {
  type: 'build-your-own',
  note: 'Comes with 1 filling (each included) filling is +$, unless noted otherwise.',
  categories: [
    {
      title: 'Spreads',
      items: [
        'Nutella',
        'Raspberry Jam',
        'Salted Caramel',
        'Strawberry Jam',
        'Coconut Biscoff',
        'Peanut Butter',
      ],
    },
    {
      title: 'Toppings',
      items: [
        'Bananas',
        'Strawberries +$2',
        'Strawberry Jam',
        'Lemon',
        'Coconut Shavings',
        'Cocoa Biscuits',
      ],
    },
    {
      title: 'Nuts',
      items: [
        'Ground Walnuts +$2',
        'Sliced Almonds',
      ],
    },
    {
      title: 'Sweet Extras',
      items: [
        'Honey',
        'Maple Syrup',
      ],
    },
  ],
};

function MenuColumn({
  title,
  subtitle,
  content,
  isInView,
  delay,
}: {
  title: string;
  subtitle?: string;
  content: MenuSection;
  isInView: boolean;
  delay: number;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isBuildYourOwn = !Array.isArray(content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className="bg-white/70 backdrop-blur-sm rounded-elegant p-6 sm:p-8 border border-parchment-dark/20"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ChefHat className="w-6 h-6 text-gold" />
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl text-navy mb-2">{title}</h3>
        {subtitle && <p className="text-navy/60 text-sm">{subtitle}</p>}
        <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
      </div>

      {/* Menu Items or Build Your Own */}
      {isBuildYourOwn ? (
        <div className="space-y-4">
          <p className="text-sm text-navy/70 italic text-center">{content.note}</p>
          
          {content.categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.1 + catIndex * 0.05 }}
              className="mb-4"
            >
              <h4 className="font-playfair text-base text-navy font-semibold mb-2">
                {category.title}
              </h4>
              <ul className="space-y-1">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-navy/70 pl-4 relative before:content-['•'] before:absolute before:left-0">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {content.footer && (
            <p className="text-xs text-navy/50 text-center mt-6 pt-4 border-t border-parchment-dark/20">
              {content.footer}
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-1">
          {content.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.1 + index * 0.05 }}
              className={`menu-item cursor-pointer transition-all duration-300 ${
                hoveredIndex === index ? 'bg-parchment/30 -mx-4 px-4' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex-1">
                <span className="font-playfair text-lg text-navy">{item.name}</span>
                {item.description && (
                  <p className="text-sm text-navy/60 mt-1">{item.description}</p>
                )}
              </div>
              <span className="font-playfair text-lg text-gold font-semibold ml-4">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="menu"
      className="relative py-20 sm:py-28 lg:py-36 section-padding bg-gradient-to-b from-cream to-parchment-light"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-terracotta text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Menu
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-navy mb-4">
            Discover Our <span className="italic text-gold">Creations</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            From classic Parisian favorites to innovative combinations, each crêpe is 
            handcrafted with love and the finest ingredients
          </p>
        </motion.div>

        {/* Menu Grid - 4 Sections */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <MenuColumn
            title="Savory Crêpes"
            content={savoryCrepes}
            isInView={isInView}
            delay={0.2}
          />
          <MenuColumn
            title="Build Your Own Savory - $9.95"
            content={buildYourOwnSavory}
            isInView={isInView}
            delay={0.3}
          />
          <MenuColumn
            title="Sweet Crêpes"
            content={sweetCrepes}
            isInView={isInView}
            delay={0.4}
          />
          <MenuColumn
            title="Build Your Own Sweet - $9.95"
            content={buildYourOwnSweet}
            isInView={isInView}
            delay={0.5}
          />
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-navy/50 mt-8"
        >
          All crêpes and galettes are made to order. Gluten-free options available upon request.
        </motion.p>
      </div>
    </section>
  );
}
