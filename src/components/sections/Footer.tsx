import { Facebook, Twitter, Instagram, Youtube, Phone } from "lucide-react";
import { footerLinks } from "@/constants/data";

export const Footer = () => {
  return (
    <footer className="bg-dental-navy text-white py-16">
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Clinic Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Rahim Dental Clinic
            </h3>
            <p className="text-white/80 leading-relaxed text-sm">
              Your trusted partner for comprehensive dental care. Creating beautiful,
              healthy smiles for the whole family in Madurai and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Get in Touch</h4>
            <div className="text-sm text-white/80 space-y-2">
              <p>Email: <a href="mailto:info@rahimdental.com" className="underline hover:text-white">info@rahimdental.com</a></p>
              <p>Phone: <a href="tel:+91987654321" className="underline hover:text-white">+91 987654321</a></p>
              <p>Emergency dental care available 24/7</p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <Youtube className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-sm text-white/60">
            © 2025 Rahim Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
