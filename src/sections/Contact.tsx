import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, MapPin, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

interface BusinessHours {
  day: string;
  hours: string;
}

const businessHours: BusinessHours[] = [
  { day: 'Monday - Tuesday', hours: 'Closed' },
  { day: 'Wednesday - Thursday', hours: '11:00 AM - 7:00 PM' },
  { day: 'Friday - Saturday', hours: '11:00 AM - 8:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 5:00 PM' },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-20 sm:py-28 lg:py-36 section-padding bg-gradient-to-b from-parchment-light to-cream"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-terracotta text-sm font-semibold uppercase tracking-widest mb-4 block">
            Visit Us
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-navy mb-4">
            Come Say <span className="italic text-gold">Bonjour</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            We'd love to welcome you to our little corner of Paris
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Hours */}
            <div className="bg-white/70 backdrop-blur-sm rounded-elegant p-6 sm:p-8 border border-parchment-dark/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-playfair text-2xl text-navy">Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((item, index) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex justify-between items-center py-2 border-b border-parchment-dark/20 last:border-b-0"
                  >
                    <span className="text-navy font-medium">{item.day}</span>
                    <span className={`${item.hours === 'Closed' ? 'text-terracotta' : 'text-navy/70'}`}>
                      {item.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/70 backdrop-blur-sm rounded-elegant p-6 sm:p-8 border border-parchment-dark/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-playfair text-2xl text-navy">Location</h3>
              </div>
              <div className="space-y-4">
                <p className="text-navy/80">
                  <strong className="text-navy">Catherine's Crêperie</strong><br />
                  200 Wool Street<br />
                  Folsom, CA 95630
                </p>
                
                {/* Embedded Google Map */}
                <div className="relative h-64 bg-parchment rounded-elegant overflow-hidden">
                  <iframe
                    title="Catherine's Crêperie Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.7!2d-121.176!3d38.678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad0f8a1234567%3A0x1234567890abcdef!2s200%20Wool%20St%2C%20Folsom%2C%20CA%2095630!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-elegant"
                  ></iframe>
                </div>
                
                <a
                  href="https://www.google.com/maps/search/?api=1&query=200+Wool+Street+Folsom+CA+95630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-terracotta hover:text-gold transition-colors text-sm font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/catherines_creperie/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-cream hover:bg-terracotta transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090312662794"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-cream hover:bg-terracotta transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-elegant p-6 sm:p-8 border border-parchment-dark/20 h-full">
              <h3 className="font-playfair text-2xl text-navy mb-2">Send Us a Message</h3>
              <p className="text-navy/60 mb-6">
                Have a question or want to make a reservation? We'd love to hear from you!
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="font-playfair text-2xl text-navy mb-2">Message Sent!</h4>
                  <p className="text-navy/60">Thank you for reaching out. We'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-parchment-dark/30 rounded-elegant text-navy placeholder-navy/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-parchment-dark/30 rounded-elegant text-navy placeholder-navy/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="jean@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-cream border border-parchment-dark/30 rounded-elegant text-navy placeholder-navy/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
