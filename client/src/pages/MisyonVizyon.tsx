import { Link } from "wouter";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MisyonVizyon() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-navy text-white py-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/">
                    <span className="text-gold hover:text-white transition-colors cursor-pointer">Anasayfa</span>
                  </Link>
                </li>
                <li className="text-gray-300">/</li>
                <li>
                  <Link href="/kurumsal">
                    <span className="text-gold hover:text-white transition-colors cursor-pointer">Kurumsal</span>
                  </Link>
                </li>
                <li className="text-gray-300">/</li>
                <li className="text-white">Misyon & Vizyon</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Misyon & Vizyon</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Geleceğe yönelik hedeflerimiz ve değerlerimiz.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Mission */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-gold" />
                  </div>
                  <h2 className="text-4xl font-bold text-navy mb-4">Misyonumuz</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Kaliteli inşaat ve mühendislik hizmetleri sunarak, müşterilerimizin 
                      hayallerini gerçeğe dönüştürmek. Her projede mükemmellik anlayışımızla, 
                      sürdürülebilir ve güvenli yapılar inşa etmek.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Modern teknolojiler ve geleneksel işçiliği harmanlayarak, 
                      çevre dostu yaklaşımlarla sektöre değer katmak ve toplumsal 
                      kalkınmaya katkı sağlamak.
                    </p>
                    <div className="bg-light-gray p-6 rounded-lg">
                      <h4 className="font-semibold text-navy mb-3">Temel İlkelerimiz:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Heart className="w-4 h-4 text-gold mr-2" />
                          Müşteri memnuniyeti odaklılık
                        </li>
                        <li className="flex items-center">
                          <Heart className="w-4 h-4 text-gold mr-2" />
                          Kalite ve güvenlik standartları
                        </li>
                        <li className="flex items-center">
                          <Heart className="w-4 h-4 text-gold mr-2" />
                          Çevre duyarlılığı
                        </li>
                        <li className="flex items-center">
                          <Heart className="w-4 h-4 text-gold mr-2" />
                          Sürekli gelişim ve yenilik
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                      alt="Misyon görseli"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-10 h-10 text-navy" />
                  </div>
                  <h2 className="text-4xl font-bold text-navy mb-4">Vizyonumuz</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Türkiye'nin ve bölgenin önde gelen inşaat firmalarından biri olarak, 
                      inovatif çözümler ve çevre dostu yaklaşımlarla sektöre öncülük etmek.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Uluslararası standartlarda hizmet vererek, global pazarda 
                      Türk inşaat sektörünü en iyi şekilde temsil etmek ve 
                      gelecek nesillere yaşanabilir mekanlar bırakmak.
                    </p>
                    <div className="bg-navy text-white p-6 rounded-lg">
                      <h4 className="font-semibold text-gold mb-3">2030 Hedeflerimiz:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Lightbulb className="w-4 h-4 text-gold mr-2" />
                          100+ tamamlanmış proje
                        </li>
                        <li className="flex items-center">
                          <Lightbulb className="w-4 h-4 text-gold mr-2" />
                          Uluslararası pazar genişlemesi
                        </li>
                        <li className="flex items-center">
                          <Lightbulb className="w-4 h-4 text-gold mr-2" />
                          %100 sürdürülebilir projeler
                        </li>
                        <li className="flex items-center">
                          <Lightbulb className="w-4 h-4 text-gold mr-2" />
                          Sektör liderliği
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                      alt="Vizyon görseli"
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="bg-light-gray p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-navy mb-4">Değerlerimiz</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Her kararımızda ve eylemimizde rehber olan temel değerlerimiz
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-gold font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-navy mb-2">Dürüstlük</h4>
                    <p className="text-sm text-gray-600">Şeffaf ve güvenilir iş yapma anlayışı</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-gold font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-navy mb-2">Yenilik</h4>
                    <p className="text-sm text-gray-600">Sürekli gelişim ve teknoloji odaklılık</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-gold font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-navy mb-2">Sorumluluk</h4>
                    <p className="text-sm text-gray-600">Çevre ve topluma karşı bilinçli yaklaşım</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-gold font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-navy mb-2">Mükemmellik</h4>
                    <p className="text-sm text-gray-600">Her projede en iyi sonucu hedefleme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}