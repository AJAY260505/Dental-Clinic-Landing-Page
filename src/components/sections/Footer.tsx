import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { footerLinks } from "@/constants/data";

export const Footer = () => {
  return (
    <footer className="bg-dental-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-poppins">
              Rahim Dental Clinic
            </h3>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for comprehensive dental care. 
              Creating beautiful, healthy smiles for the whole family.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-white/80 hover:text-white transition-colors">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-white/80 hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="mt-6">
              <p className="text-white/80 text-sm">
                Emergency Dental Care Available<br />
                Call (+91) 987654321 for immediate assistance
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Rahim Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};