import type { ProjectProps } from "@/types/projects";

/* images for projects */

// 1. sgc:
import loginSGC from "@/assets/project-carousel-images/sgc/login.png";
import homeSGC from "@/assets/project-carousel-images/sgc/home.png";
import hiringRequestsSGC from "@/assets/project-carousel-images/sgc/all-hiring-requests.png";
import newHiringRequestSGC from "@/assets/project-carousel-images/sgc/hiring-request.png";
import candidateHRSGC from "@/assets/project-carousel-images/sgc/hiring-request-candidate.png";
import candidatesSGC from "@/assets/project-carousel-images/sgc/candidates.png";
import initialFormSGC from "@/assets/project-carousel-images/sgc/initial-form.png";

// 2. csg:
import loginCSG from "@/assets/project-carousel-images/csg/login.png";
import allPurchases from "@/assets/project-carousel-images/csg/all-purchases.png";
import newPurchases from "@/assets/project-carousel-images/csg/new-purchase.png";
import allSales from "@/assets/project-carousel-images/csg/all-sales.png";
import newSale1 from "@/assets/project-carousel-images/csg/new-sale1.png";
import newSale2 from "@/assets/project-carousel-images/csg/new-sale2.png";
import newSale3 from "@/assets/project-carousel-images/csg/new-sale3.png";
import detailsSale from "@/assets/project-carousel-images/csg/details-sale.png";
import allItems from "@/assets/project-carousel-images/csg/all-items.png";
import allCustomers from "@/assets/project-carousel-images/csg/all-customers.png";
import newCustomer from "@/assets/project-carousel-images/csg/new-customer.png";

const sgcImages: string[] = [
  loginSGC,
  homeSGC,
  hiringRequestsSGC,
  newHiringRequestSGC,
  candidateHRSGC,
  candidatesSGC,
  initialFormSGC
];

const csgImages: string[] = [
  loginCSG,
  allPurchases,
  newPurchases,
  allSales,
  newSale1,
  newSale2,
  newSale3,
  detailsSale,
  allItems,
  allCustomers,
  newCustomer,
];

export const projects: ProjectProps[] = [
  {
    title: "Sistema de gestión de contrataciones para la FIA-UES",
    description:
      "Plataforma para automatizar el proceso de contratación de docentes en la FIA-UES.",
    problem:
      "El sistema existente estaba obsoleto, era deficiente en funcionalidad y propenso a errores, lo que producía  dificultades e insatisfacción durante la gestión del proceso.",
    solution:
      "El desarrollo de una nueva plataforma web que incorpore la amplia gama de funcionalidades solicitadas y solvente los problemas existentes.",
    impact:
      "El nuevo sistema mejoró la satisfacción de los usuarios al proporcionar muchas nuevas funcionalidades, más control e información de cada etapa del proceso y una experiencia más fluida y transparente.",
    functionalities: [
      "Gestión de solicitudes para servicios profesionales, tiempo adicional y tiempo integral.",
      "Evaluación de la solicitud en cada etapas por el personal de la facultad.",
      "Evaluación de la información y documentos de candidatos por el personal de la facultad.",
      "Gestión de 20 módulos entre ellos bancos, escalafones, facultades, escuelas, actividades de docentes, cargos, carga académica, grupos académicos.",
      "Generación de contratos.",
      "Generación de reportes.",
      "Notificaciones automáticas.",
      "Bitacora de acciones.",
      "Seguridad y control de acceso basado en roles."
    ],
    learning: 
      "Adquirí experiencia en el desarrollo de sistemas de gran escala utilizando React y Laravel. Al trabajar estrechamente con otros desarrolladores fortalecí mis habilidad de trabajo en equipo. La comunicación con los stakeholders mejoró mi capacidad de traducir sus necesidades en implementaciones validas. Y obtuve experiencia en el proceso de reporte y corrección de bugs.",
    images: sgcImages,
    technologies: ["React", "TypeScript", "React Router", "Redux", "Formik", "Laravel", "PostgreSQL"],
  },
  {
    title: "Sistema de inventario, compras y ventas para empresa CSGARAGE",
    description:
      "Plataforma de gestión de inventario PEPS, registro de compras y ventas que reflejan costos y utilidades precisas al momento.",
    problem: 
      "La empresa enfrentaba dificultades para gestionar manualmente su inventario, realizar un seguimiento de las compras y ventas, y calcular los costos y beneficios de manera precisa, lo que afectaba su eficiencia operativa y rentabilidad.",
    solution:
      "El desarrollo de una plataforma web que permita al personal la gestión del inventario, el registro de compras y ventas, y el cálculo automáticamente costos y ganancias usando el método de valuación de inventario PEPS.",
    impact:
      "La herramienta mejoró la eficiencia operativa de la empresa ya que facilitó la gestión del inventario y las transacciones, lo que resultó en una mejor toma de decisiones y aumento de la rentabilidad.",
    functionalities: [
      "Gestión de inventario.",
      "Registro de compras y ventas.",
      "Cálculo automático de costos y beneficios.",
      "Gestión de otros catalogos: categorías, marcas, servicios, productos, clientes y proveedores.",
      "Seguridad y control de acceso basado en roles."
    ],
    learning: 
      "Reforzamiento mi conocimiento de Java y Spring Boot para el backend y aprendí el uso de Thymeleaf para el frontend, además de mejorar mis habilidades en gestión de proyectos y comunicación con stakeholders.",
    images: csgImages,
    technologies: ["Spring Boot", "Spring MVC", "Spring Security", "Spring JPA - Hibernate", "Thymeleaf", "PostgreSQL"],
    //liveUrl: "https://example.com",
    //githubUrl: "https://github.com/username/ai-taskmanager",
  },
];