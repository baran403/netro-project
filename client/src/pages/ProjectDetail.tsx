import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { MapPin, User, Calendar, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

export default function ProjectDetail() {
  const { slug } = useParams();
  
  const { data: project, isLoading, error } = useQuery<Project>({
    queryKey: ["/api/projects", slug],
  });

  const getStatusColor = (status: string) => {
    return status === "Biten" ? "bg-green-500" : "bg-blue-500";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {error && (
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Proje Bulunamadı</h1>
              <p className="text-gray-600 mb-8">Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>
              <Link href="/projeler">
                <a className="bg-navy text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                  Projelere Dön
                </a>
              </Link>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <Skeleton className="w-full h-80 rounded-lg mb-8" />
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </div>
          </div>
        ) : project ? (
          <>
            {/* Breadcrumb */}
            <section className="bg-gray-50 py-6">
              <div className="container mx-auto px-4">
                <nav className="text-sm">
                  <ol className="flex items-center space-x-2">
                    <li>
                      <Link href="/">
                        <a className="text-gold hover:text-navy transition-colors">Anasayfa</a>
                      </Link>
                    </li>
                    <li className="text-gray-400">/</li>
                    <li>
                      <Link href="/projeler">
                        <a className="text-gold hover:text-navy transition-colors">Projeler</a>
                      </Link>
                    </li>
                    <li className="text-gray-400">/</li>
                    <li className="text-gray-700">{project.title}</li>
                  </ol>
                </nav>
              </div>
            </section>

            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Project Hero */}
                <div className="relative mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-navy bg-opacity-40 rounded-lg flex items-end">
                    <div className="p-8 text-white">
                      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                      <p className="text-xl">Modern proje çözümleri</p>
                    </div>
                  </div>
                </div>

                {/* Project Info Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-light-gray p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-navy mb-4">Proje Bilgileri</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          Konum:
                        </span>
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Müşteri:
                        </span>
                        <span className="font-medium">{project.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Durum:</span>
                        <span className={`${getStatusColor(project.status)} text-white px-2 py-1 rounded text-sm`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Tarih:
                        </span>
                        <span className="font-medium">{project.date}</span>
                      </div>
                    </div>
                  </div>

                  {project.scope && project.scope.length > 0 && (
                    <div className="bg-light-gray p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-navy mb-4">Proje Kapsamı</h3>
                      <ul className="space-y-2 text-gray-700">
                        {project.scope.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Project Description */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-navy mb-6">Proje Açıklaması</h3>
                  <div className="prose max-w-none text-gray-700 leading-relaxed">
                    {project.description.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Project Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-navy mb-6">Proje Galerisi</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${project.title} galeri ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
}
