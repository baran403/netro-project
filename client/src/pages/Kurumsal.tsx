import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Kurumsal() {
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
                <li className="text-white">Kurumsal</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Kurumsal</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Etiman Grup olarak, sektörde edindiğimiz deneyim ve uzmanlığımızla 
                müşterilerimize en kaliteli hizmeti sunmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-navy mb-6">Hakkımızda</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Etiman Grup, inşaat sektöründe yılların deneyimi ile kaliteli ve güvenilir 
                    hizmet sunan önde gelen firmalardan biridir. Kuruluşumuzdan bu yana, 
                    müşteri memnuniyetini ön planda tutarak sayısız başarılı projeye imza attık.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Modern teknolojiler ve geleneksel işçiliği bir araya getirerek, 
                    konut projelerinden ticari yapılara kadar geniş bir yelpazede hizmet veriyoruz.
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

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-light-gray p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy mb-4">Misyonumuz</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kaliteli inşaat ve mühendislik hizmetleri sunarak, müşterilerimizin hayallerini 
                    gerçeğe dönüştürmek. Her projede mükemmellik anlayışımızla, sürdürülebilir ve 
                    güvenli yapılar inşa etmek.
                  </p>
                </div>
                
                <div className="bg-light-gray p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy mb-4">Vizyonumuz</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Türkiye'nin ve bölgenin önde gelen inşaat firmalarından biri olarak, 
                    inovatif çözümler ve çevre dostu yaklaşımlarla sektöre öncülük etmek.
                  </p>
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