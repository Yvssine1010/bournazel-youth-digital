import { MapPin, Phone, Mail, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import obLogo from '@/assets/ob-logo.jpg';

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={obLogo} alt="Olympique Bournazel Logo" className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-bold text-xl">O.B. CFA</h3>
                <p className="text-sm text-primary-foreground/80">Since 2014</p>
              </div>
            </div>
            <p className="text-primary-foreground/90">
              Forging future talents and building character through the beautiful game.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#club" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  The Club
                </a>
              </li>
              <li>
                <a href="#registration" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/90 text-sm">
                  Hay Bournazel<br />
                  Casablanca<br />
                  Morocco
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+212610822126" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm">
                  0610-822126
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="https://wa.me/212610822126" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-accent transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:kamalnassib2@gmail.com" className="text-primary-foreground/90 hover:text-accent transition-colors text-sm">
                  kamalnassib2@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Message</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                required
              />
              <Textarea
                placeholder="Your message"
                rows={3}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                required
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Olympique Bournazel CFA. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Olympiquebournazel/?ref=_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/212610822126"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:kamalnassib2@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-2xl h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7878786754567!2d-7.6532!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d284b6b8c59d%3A0x7c6e5f2c5e8f8c8f!2sHay%20Bournazel%2C%20Casablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Olympique Bournazel Location"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
