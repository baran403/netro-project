import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

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
                <li className="text-white">Projeler</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Projelerimiz</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Yılların deneyimi ve uzman kadromuzla gerçekleştirdiğimiz projelerimizi keşfedin. 
                Her biri kalite ve mükemmellik anlayışımızın bir yansımasıdır.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            {error && (
              <div className="text-center py-12">
                <p className="text-red-600 text-lg">Projeler yüklenirken bir hata oluştu.</p>
              </div>
            )}

            {isLoading ? (
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <Skeleton className="w-full h-64" />
                    <div className="p-6 space-y-3">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : projects && projects.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Henüz proje bulunmamaktadır.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
