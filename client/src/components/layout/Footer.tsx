import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="text-3xl font-serif font-bold text-primary mb-6 block hover:text-primary/80 transition-colors">
              Raj Catters
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Luxury catering that turns every celebration into a royal experience. Serving unforgettable food, flawless décor & seamless event management in Bhopal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Luxury Catering</li>
              <li className="text-gray-400">Wedding Decoration</li>
              <li className="text-gray-400">Corporate Events</li>
              <li className="text-gray-400">Live Food Counters</li>
              <li className="text-gray-400">Theme Parties</li>
              <li className="text-gray-400">Destination Weddings</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Phone className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-400">7999859833</p>
                  <p className="text-gray-400">9229658667</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <p className="text-gray-400">Bhopal, Madhya Pradesh, India</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary shrink-0 mt-1" size={18} />
                <p className="text-gray-400">info@rajcatters.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Raj Catters. All rights reserved. Designed for Raj Catters – Luxury Catering, Bhopal.
          </p>
        </div>
      </div>
    </footer>
  );
}