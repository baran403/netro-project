import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Background Video */}
        <section className="relative text-white py-20 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000"
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              {/* Fallback background image if video fails */}
            </video>
            
            {/* Static background as fallback */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000')`,
                zIndex: -1
              }}
            ></div>
          </div>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-navy bg-opacity-70 z-10"></div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Kaliteli İnşaat ve <span className="text-gold">Mühendislik</span> Hizmetleri
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Yılların deneyimi ve uzman kadromuzla hayalinizdeki projeleri gerçeğe dönüştürüyoruz.
                Her projede mükemmellik ve kalite anlayışımızla hizmet veriyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projeler">
                  <span className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3 rounded-lg transition-all duration-300 cursor-pointer inline-block text-center transform hover:scale-105">
                    Projelerimizi İnceleyin
                  </span>
                </Link>
                <Link href="/iletisim">
                  <span className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-8 py-3 rounded-lg transition-all duration-300 cursor-pointer inline-block text-center transform hover:scale-105">
                    İletişime Geçin
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                Neden Etiman Grup?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Sektörde edindiğimiz deneyim ve uzmanlığımızla sizlere en iyi hizmeti sunuyoruz
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Kalite Güvencesi</h3>
                <p className="text-gray-600">
                  Her projemizde en yüksek kalite standartlarını uygulayarak müşteri memnuniyetini garantiliyoruz.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Uzman Kadro</h3>
                <p className="text-gray-600">
                  Alanında uzman mühendis ve teknik kadromuzla projeleri en ince detayına kadar planlar ve uygularız.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">Zamanında Teslimat</h3>
                <p className="text-gray-600">
                  Planlanan sürelere uygun olarak projelerinizi zamanında ve eksiksiz şekilde teslim ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
