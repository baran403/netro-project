import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span>ETIMAN</span>
              <span className="text-gold">GRUP</span>
            </div>
            <p className="text-gray-300 mb-4">
              Yılların deneyimi ile kaliteli inşaat ve mühendislik hizmetleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-gold transition-colors">Anasayfa</a></li>
              <li><a href="/kurumsal" className="text-gray-300 hover:text-gold transition-colors">Kurumsal</a></li>
              <li><a href="/projeler" className="text-gray-300 hover:text-gold transition-colors">Projeler</a></li>
              <li><a href="/referanslar" className="text-gray-300 hover:text-gold transition-colors">Referanslar</a></li>
              <li><a href="/haberler" className="text-gray-300 hover:text-gold transition-colors">Haberler</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <svg className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Ataşehir Bulvarı No: 142<br />Ataşehir / İstanbul</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+90 216 555 0123</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@etimangroup.com</span>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">KVKK</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Çerez Politikası</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Kullanım Şartları</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Etiman Grup. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
