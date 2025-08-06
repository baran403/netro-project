import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Referanslar() {
  const references = [
    { name: "ABC Holding", sector: "Ticari Yapılar", projects: 12 },
    { name: "XYZ İnşaat", sector: "Konut Projeleri", projects: 8 },
    { name: "Capital AVM", sector: "Alışveriş Merkezleri", projects: 3 },
    { name: "Sağlık Bakanlığı", sector: "Kamu Projeleri", projects: 5 },
    { name: "Endüstri A.Ş.", sector: "Sanayi Tesisleri", projects: 7 },
    { name: "Antalya Üniversitesi", sector: "Eğitim Yapıları", projects: 4 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-navy text-white py-16">
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
                <li className="text-white">Referanslar</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Referanslarımız</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Güvenilir iş ortaklarımız ve başarıyla tamamladığımız projelerle 
                sektördeki yerimizi sağlamlaştırıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* References Grid */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {references.map((reference, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-navy">{reference.name}</h3>
                      <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-medium">
                        {reference.projects} Proje
                      </span>
                    </div>
                    <p className="text-gray-600">{reference.sector}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Aktif İş Ortağı
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy mb-12">Rakamlarla Etiman Grup</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">50+</div>
                  <div className="text-gray-600">Tamamlanan Proje</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">25+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">15</div>
                  <div className="text-gray-600">Yıllık Deneyim</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">100+</div>
                  <div className="text-gray-600">Uzman Çalışan</div>
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