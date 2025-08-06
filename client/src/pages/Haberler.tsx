import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Haberler() {
  const news = [
    {
      title: "Yeni Ataşehir Projemiz Başladı",
      date: "15 Aralık 2024",
      excerpt: "Ataşehir bölgesinde yeni bir iş merkezi projesi için çalışmalara başladık. Modern tasarımı ile dikkat çeken proje...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Sürdürülebilir İnşaat Sertifikamız",
      date: "8 Aralık 2024",
      excerpt: "Çevre dostu inşaat teknikleri konusundaki uzmanlığımız uluslararası sertifika ile tescillendi. Bu sertifika ile...",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "İzmir Sanayi Tesisi Projesinde İlerleme",
      date: "2 Aralık 2024",
      excerpt: "İzmir'de inşa ettiğimiz sanayi tesisi projesinin ilk etabı tamamlandı. Çevre dostu teknolojilerle donatılan tesis...",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Takım Genişlemesi",
      date: "25 Kasım 2024",
      excerpt: "Artan proje kapasitemiz ile birlikte ekibimizi genişletiyoruz. Deneyimli mühendis ve teknisyenlerden oluşan...",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Ankara AVM Projesi Tamamlandı",
      date: "18 Kasım 2024",
      excerpt: "Ankara'da inşa ettiğimiz alışveriş merkezi projesi başarıyla tamamlandı. 80.000 m² kapalı alana sahip kompleks...",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Yeni Teknoloji Yatırımı",
      date: "10 Kasım 2024",
      excerpt: "İnşaat süreçlerimizi daha verimli hale getirmek için son teknoloji ekipmanlar edindik. Bu yatırım ile proje...",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
  ];

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
                <li className="text-white">Haberler</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Haberler</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Etiman Grup'tan son haberler, proje güncellemeleri ve 
                sektörel gelişmelerden haberdar olun.
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((article, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="text-sm text-gold font-medium mb-2">{article.date}</div>
                      <h3 className="text-xl font-semibold text-navy mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-4">
                        <span className="text-navy font-medium text-sm cursor-pointer hover:text-gold transition-colors">
                          Devamını oku →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}