import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Project } from "@shared/schema";

export default function Home() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  // Get first 5 projects for homepage display
  const featuredProjects = projects?.slice(0, 5) || [];

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
              <h1 className="hero-title text-4xl lg:text-6xl font-bold mb-6">
                Kaliteli İnşaat ve <span className="text-gold">Mühendislik</span> Hizmetleri
              </h1>
              <p className="body-text text-xl text-gray-300 leading-relaxed mb-8">
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
              <h2 className="section-title text-3xl lg:text-4xl font-bold text-navy mb-4">
                Neden Etiman Grup?
              </h2>
              <p className="body-text text-gray-600 text-lg max-w-2xl mx-auto">
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
                <p className="body-text text-gray-600">
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
                <p className="body-text text-gray-600">
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
                <p className="body-text text-gray-600">
                  Planlanan sürelere uygun olarak projelerinizi zamanında ve eksiksiz şekilde teslim ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title text-3xl lg:text-4xl font-bold text-white mb-4">
                PROJELER
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="body-text text-gray-300 text-lg max-w-2xl mx-auto">
                Gerçekleştirdiğimiz projelerimizden örnekler
              </p>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="aspect-square bg-gray-700 rounded-lg animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {featuredProjects.map((project, index) => (
                  <Link key={project.id} href={`/projeler/${project.slug}`}>
                    <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                          <h3 className="font-semibold text-sm mb-2">{project.title}</h3>
                          <p className="text-xs text-gray-300">{project.location}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            <div className="text-center mt-12">
              <Link href="/projeler">
                <span className="bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 cursor-pointer inline-block transform hover:scale-105">
                  Tüm Projeleri Görüntüle
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
