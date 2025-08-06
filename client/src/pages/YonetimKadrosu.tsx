import { Link } from "wouter";
import { User, Mail, Phone, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function YonetimKadrosu() {
  const management = [
    {
      name: "Ahmet ETİMAN",
      position: "Genel Müdür",
      experience: "20+ yıl deneyim",
      specialty: "Proje Yönetimi & Stratejik Planlama",
      email: "ahmet.etiman@etimangroup.com",
      phone: "+90 216 555 0123",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Fatma KORKMAZ",
      position: "İnsan Kaynakları Müdürü",
      experience: "15+ yıl deneyim",
      specialty: "İnsan Kaynakları & Organizasyon",
      email: "fatma.korkmaz@etimangroup.com",
      phone: "+90 216 555 0124",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612d4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Mehmet YILMAZ",
      position: "Teknik Müdür",
      experience: "18+ yıl deneyim",
      specialty: "İnşaat Mühendisliği & Teknik Çözümler",
      email: "mehmet.yilmaz@etimangroup.com",
      phone: "+90 216 555 0125",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Ayşe KAYA",
      position: "Mali İşler Müdürü",
      experience: "12+ yıl deneyim",
      specialty: "Finansal Yönetim & Muhasebe",
      email: "ayse.kaya@etimangroup.com",
      phone: "+90 216 555 0126",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
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
                <li>
                  <Link href="/kurumsal">
                    <span className="text-gold hover:text-white transition-colors cursor-pointer">Kurumsal</span>
                  </Link>
                </li>
                <li className="text-gray-300">/</li>
                <li className="text-white">Yönetim Kadrosu</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Yönetim Kadrosu</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Etiman Grup'u yöneten deneyimli ve uzman kadromuz.
              </p>
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4">Deneyimli Kadromuz</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Sektörde yılların verdiği deneyim ve uzmanlıkla şirketimizi yöneten 
                  profesyonel kadromuzla tanışın.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {management.map((member, index) => (
                  <div key={index} className="bg-light-gray rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
                        <p className="text-gold font-semibold mb-2">{member.position}</p>
                        <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                        <p className="text-sm text-gray-700 mb-4">{member.specialty}</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="w-4 h-4 mr-2 text-gold" />
                            <a href={`mailto:${member.email}`} className="hover:text-navy transition-colors">
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="w-4 h-4 mr-2 text-gold" />
                            <a href={`tel:${member.phone}`} className="hover:text-navy transition-colors">
                              {member.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Organization Structure */}
              <div className="bg-navy text-white p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Organizasyon Yapısı</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Şirketimizin etkin yönetimi için organize edilmiş departman yapımız
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-navy font-bold text-lg">GM</span>
                    </div>
                    <h4 className="font-semibold text-gold mb-2">Genel Müdürlük</h4>
                    <p className="text-sm text-gray-300">Stratejik yönetim ve koordinasyon</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-navy font-bold text-lg">TM</span>
                    </div>
                    <h4 className="font-semibold text-gold mb-2">Teknik Müdürlük</h4>
                    <p className="text-sm text-gray-300">Proje tasarım ve uygulama</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-navy font-bold text-lg">İK</span>
                    </div>
                    <h4 className="font-semibold text-gold mb-2">İnsan Kaynakları</h4>
                    <p className="text-sm text-gray-300">Personel yönetimi ve gelişim</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-navy font-bold text-lg">MI</span>
                    </div>
                    <h4 className="font-semibold text-gold mb-2">Mali İşler</h4>
                    <p className="text-sm text-gray-300">Finansal planlama ve kontrol</p>
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