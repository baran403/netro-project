import { Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-navy text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gold" />
              <a href="tel:+902165550123" className="hover:text-gold transition-colors">
                +90 216 555 01 23
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gold" />
              <a href="mailto:info@etimangroup.com" className="hover:text-gold transition-colors">
                info@etimangroup.com
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-white hover:text-gold transition-colors transform hover:scale-110 duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gold transition-colors transform hover:scale-110 duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gold transition-colors transform hover:scale-110 duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gold transition-colors transform hover:scale-110 duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}