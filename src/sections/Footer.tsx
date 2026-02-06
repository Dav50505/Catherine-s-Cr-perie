import { Instagram, Facebook, Heart, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-cream py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="inline-block mb-4"
            >
              <span className="font-playfair text-2xl">
                Catherine's
                <span className="italic text-gold"> Crêperie</span>
              </span>
            </a>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Authentic French crêpes crafted with passion and tradition. 
              Experience a taste of Paris in every bite.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/catherines_creperie/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090312662794"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Menu', href: '#menu' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Menu Highlights</h4>
            <nav className="space-y-2">
              {[
                "Catherine's Signature",
                'Smoked Salmon',
                'Nutella',
                'Salted Caramel',
                'Build Your Own',
              ].map((item) => (
                <a
                  key={item}
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#menu');
                  }}
                  className="block text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/70">
                  200 Wool Street<br />
                  Folsom, CA 95630
                </span>
              </div>
              <a
                href="tel:+19162984820"
                className="flex items-center gap-3 text-sm text-cream/70 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>(916) 298-4820</span>
              </a>
              <a
                href="mailto:bonjour@catherinescreperie.com"
                className="flex items-center gap-3 text-sm text-cream/70 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>bonjour@catherinescreperie.com</span>
              </a>
            </div>

            {/* Hours Summary */}
            <div className="mt-6 pt-6 border-t border-cream/10">
              <h5 className="text-sm font-semibold mb-2">Hours</h5>
              <p className="text-cream/70 text-sm">
                Wed - Thu: 11AM - 7PM<br />
                Fri - Sat: 11AM - 8PM<br />
                Sun: 10AM - 5PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm text-center sm:text-left">
              {currentYear} Catherine's Crêperie. All rights reserved.
            </p>
            <p className="text-cream/50 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-terracotta fill-terracotta" /> in Paris
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
