import { Link } from "wouter";
import { MapPin, User, Calendar } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    return status === "Biten" ? "bg-green-500" : "bg-blue-500";
  };

  return (
    <Link href={`/projeler/${project.slug}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute top-4 right-4">
            <span className={`${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {project.status}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-navy mb-3">
            {project.title}
          </h3>
          <div className="text-gray-600 space-y-2">
            <p className="flex items-center">
              <MapPin className="w-4 h-4 text-gold mr-2" />
              <span>{project.location}</span>
            </p>
            <p className="flex items-center">
              <User className="w-4 h-4 text-gold mr-2" />
              <span>{project.client}</span>
            </p>
            <p className="flex items-center">
              <Calendar className="w-4 h-4 text-gold mr-2" />
              <span>{project.date}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
