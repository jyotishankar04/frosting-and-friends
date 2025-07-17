import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">
                Antonio
              </div>
              <div className="text-sm text-caramel">🍰</div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Crafting beautiful, delicious cakes for your special moments. 
              Made with love, served with care.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:text-caramel hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-caramel hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-caramel hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-white/80">
              {["Home", "About Us", "Our Menu", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-caramel transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3 text-white/80">
              {["Custom Cakes", "Birthday Cakes", "Wedding Cakes", "Corporate Orders", "Cake Classes"].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-caramel transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-caramel mt-0.5 flex-shrink-0" />
                <span>123 Baker Street, Sweet City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-caramel flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-caramel flex-shrink-0" />
                <span>hello@antonio.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-caramel mt-0.5 flex-shrink-0" />
                <div>
                  <div>Mon-Sat: 8AM-9PM</div>
                  <div>Sunday: 10AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2024 Antonio Bakery. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-caramel transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-caramel transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-caramel transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;