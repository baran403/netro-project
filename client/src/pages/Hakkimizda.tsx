import { Link } from "wouter";
import { Users, Award, Calendar, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Hakkimizda() {
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
                <li className="text-white">Hakkımızda</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Hakkımızda</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Etiman Grup'un hikayesi, vizyonu ve değerlerini keşfedin.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <div className="flex items-center mb-6">
                    <Building className="w-8 h-8 text-gold mr-3" />
                    <h2 className="text-3xl font-bold text-navy">Şirket Tarihçesi</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Etiman Grup, 2009 yılında kuruluşundan bu yana inşaat sektöründe 
                    güvenilir ve kaliteli hizmet anlayışıyla faaliyet göstermektedir. 
                    İlk günden itibaren müşteri memnuniyetini ön planda tutarak, 
                    sektördeki yerini sağlamlaştırmıştır.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Küçük ölçekli konut projelerinden başlayarak bugün büyük ticari 
                    kompleksler, sanayi tesisleri ve kamu projelerine kadar geniş 
                    bir yelpazede hizmet vermekteyiz.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    15 yılı aşkın tecrübemizle, modern teknolojiler ve geleneksel 
                    işçiliği harmanlayarak müşterilerimizin beklentilerini aşan 
                    projeler gerçekleştiriyoruz.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="Etiman Grup ofis binası"
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Company Values */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Kalite</h3>
                  <p className="text-gray-600">
                    Her projemizde en yüksek kalite standartlarını uygulayarak 
                    müşteri memnuniyetini garantiliyoruz.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Güven</h3>
                  <p className="text-gray-600">
                    Şeffaf iş süreçleri ve dürüst yaklaşımımızla müşterilerimizin 
                    güvenini kazanıyoruz.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">Zamanında Teslimat</h3>
                  <p className="text-gray-600">
                    Planlanan sürelere uygun olarak projelerinizi zamanında 
                    ve eksiksiz şekilde teslim ediyoruz.
                  </p>
                </div>
              </div>

              {/* Team Info */}
              <div className="bg-light-gray p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-navy mb-4">Ekibimiz</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Alanında uzman 100'den fazla çalışanımızla her projede 
                    mükemmellik için çalışıyoruz.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gold mb-2">15+</div>
                    <div className="text-gray-600">Yıllık Deneyim</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold mb-2">100+</div>
                    <div className="text-gray-600">Uzman Çalışan</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold mb-2">50+</div>
                    <div className="text-gray-600">Tamamlanan Proje</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold mb-2">25+</div>
                    <div className="text-gray-600">Mutlu Müşteri</div>
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