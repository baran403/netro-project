import { type User, type InsertUser, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  getProjectBySlug(slug: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private projects: Map<string, Project>;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.initializeProjects();
  }

  private initializeProjects() {
    const sampleProjects: Project[] = [
      {
        id: randomUUID(),
        title: "Ataşehir İş Merkezi",
        slug: "atasehir-is-merkezi",
        status: "Biten",
        location: "İstanbul, Ataşehir",
        client: "ABC Holding",
        date: "2024",
        description: "Ataşehir İş Merkezi projesi, modern iş dünyasının gereksinimlerini karşılamak üzere tasarlanmış çok fonksiyonlu bir komplekstir. 45.000 m² toplam alana sahip proje, A+ sınıfı ofis standartlarında inşa edilmiştir. Projenin tasarım aşamasından teslim aşamasına kadar her adımında, sürdürülebilirlik ve enerji verimliliği ön planda tutulmuştur.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        gallery: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        ],
        scope: ["Yapısal tasarım ve mühendislik", "İnşaat yönetimi", "Kalite kontrol ve denetim", "Anahtar teslim çözüm"]
      },
      {
        id: randomUUID(),
        title: "Beylikdüzü Rezidans Projesi",
        slug: "beylikduzu-rezidans-projesi",
        status: "Devam Eden",
        location: "İstanbul, Beylikdüzü",
        client: "XYZ İnşaat",
        date: "2024-2025",
        description: "Modern yaşam standartlarını karşılayan lüks rezidans projesi. Yeşil alanlarla çevrili, çevre dostu teknolojiler kullanılarak inşa edilmekte olan proje, 300 daire kapasiteli olup, sosyal tesisleri ile dikkat çekmektedir.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        gallery: [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        ],
        scope: ["Rezidans inşaatı", "Peyzaj düzenlemesi", "Sosyal tesis yapımı", "Altyapı çalışmaları"]
      },
      {
        id: randomUUID(),
        title: "Ankara AVM Projesi",
        slug: "ankara-avm-projesi",
        status: "Biten",
        location: "Ankara, Çankaya",
        client: "Capital AVM",
        date: "2023",
        description: "Modern alışveriş deneyimi sunan çok katlı AVM projesi. 80.000 m² kapalı alana sahip kompleks, 200 mağaza kapasitesi ile bölgenin en büyük alışveriş merkezlerinden biri haline gelmiştir.",
        image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        gallery: [
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          "https://images.unsplash.com/photo-1519872775884-9558de7958f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        ],
        scope: ["AVM inşaatı", "Mağaza düzenlemesi", "Ortak alan tasarımı", "Güvenlik sistemleri"]
      },
      {
        id: randomUUID(),
        title: "İzmir Sanayi Tesisi",
        slug: "izmir-sanayi-tesisi",
        status: "Devam Eden",
        location: "İzmir, Çiğli",
        client: "Endüstri A.Ş.",
        date: "2024",
        description: "Modern üretim teknolojileri ile donatılacak sanayi tesisi projesi. Çevre dostu üretim süreçleri ve enerji verimliliği ön planda tutularak tasarlanan tesis, bölge ekonomisine önemli katkı sağlayacaktır.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        gallery: [
          "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          "https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        ],
        scope: ["Sanayi tesisi inşaatı", "Makine montajı", "Elektrik altyapısı", "Çevre düzenlemesi"]
      },
      {
        id: randomUUID(),
        title: "Bursa Şehir Hastanesi",
        slug: "bursa-sehir-hastanesi",
        status: "Biten",
        location: "Bursa, Nilüfer",
        client: "Sağlık Bakanlığı",
        date: "2023",
        description: "1.000 yatak kapasiteli modern şehir hastanesi projesi. En son teknoloji ile donatılan hastane, bölge halkına kaliteli sağlık hizmeti sunmak amacıyla inşa edilmiştir.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        gallery: [
          "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        ],
        scope: ["Hastane inşaatı", "Tıbbi cihaz kurulumu", "Altyapı sistemleri", "Peyzaj düzenlemesi"]
      },
      {
        id: randomUUID(),
        title: "Antalya Üniversite Kampüsü",
        slug: "antalya-universite-kampusu",
        status: "Devam Eden",
        location: "Antalya, Kepez",
        client: "Antalya Üniversitesi",
        date: "2024-2026",
        description: "20.000 öğrenci kapasiteli modern üniversite kampüsü projesi. Eğitim binaları, yurtlar, sosyal tesisler ve spor kompleksi ile kapsamlı bir akademik yaşam alanı oluşturulmaktadır.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        gallery: [
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        ],
        scope: ["Kampüs inşaatı", "Eğitim binası yapımı", "Yurt inşaatı", "Sosyal tesis yapımı"]
      }
    ];

    sampleProjects.forEach(project => {
      this.projects.set(project.id, project);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    return Array.from(this.projects.values()).find(
      (project) => project.slug === slug,
    );
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
