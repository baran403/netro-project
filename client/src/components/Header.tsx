import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import TopBar from "./TopBar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const navigation = [
    { name: "Anasayfa", href: "/" },
    { 
      name: "Kurumsal", 
      href: "/kurumsal",
      dropdown: [
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Misyon & Vizyon", href: "/misyon-vizyon" },
        { name: "Yönetim Kadrosu", href: "/yonetim-kadrosu" },
      ]
    },
    { 
      name: "Projeler", 
      href: "/projeler",
      dropdown: [
        { name: "Tüm Projeler", href: "/projeler" },
        { name: "Devam Eden Projeler", href: "/projeler/devam-eden" },
        { name: "Tamamlanan Projeler", href: "/projeler/tamamlanan" },
      ]
    },
    { name: "Referanslar", href: "/referanslar" },
    { name: "Haberler", href: "/haberler" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <TopBar />
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="text-2xl font-bold text-navy">
                <span>ETIMAN</span>
                <span className="text-gold">GRUP</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="group"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div
                      className={`flex items-center transition-all duration-200 cursor-pointer transform hover:scale-105 ${
                        isActiveLink(item.href)
                          ? "text-navy font-semibold border-b-2 border-gold pb-1"
                          : "text-gray-600 hover:text-navy"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </div>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.dropdown.map((subItem) => (
                          <Link key={subItem.name} href={subItem.href}>
                            <span className="block px-4 py-2 text-gray-700 hover:bg-gold hover:text-navy transition-all duration-200 cursor-pointer transform hover:translate-x-1">
                              {subItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href}>
                    <span
                      className={`transition-all duration-200 cursor-pointer transform hover:scale-105 ${
                        isActiveLink(item.href)
                          ? "text-navy font-semibold border-b-2 border-gold pb-1"
                          : "text-gray-600 hover:text-navy"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy text-xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="py-4 border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="py-2">
                      <div
                        className={`flex items-center justify-between transition-colors cursor-pointer ${
                          isActiveLink(item.href)
                            ? "text-navy font-semibold"
                            : "text-gray-600 hover:text-navy"
                        }`}
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      {openDropdown === item.name && (
                        <div className="mt-2 ml-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href}>
                              <span 
                                className="block py-2 text-gray-600 hover:text-navy transition-all duration-200 cursor-pointer transform hover:translate-x-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <span
                        className={`block py-2 transition-colors cursor-pointer ${
                          isActiveLink(item.href)
                            ? "text-navy font-semibold"
                            : "text-gray-600 hover:text-navy"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
