export const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mohitsingh4716/",
    icon: "/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/mohitsingh4716",
    icon: "/github-icon.svg",
    label: "GitHub",
  },
];

export const skills = [
  { name: "HTML5", icon: "/skillLogo/html.png", size: 40, category: "Frontend" },
  { name: "CSS3", icon: "/skillLogo/css.png", size: 40, category: "Frontend" },
  { name: "JavaScript", icon: "/skillLogo/js.png", size: 34, category: "Frontend" },
  { name: "TypeScript", icon: "/skillLogo/ts.png", size: 40, category: "Frontend" },
  { name: "React", icon: "/skillLogo/react.png", size: 40, category: "Frontend" },
  { name: "Next.js", icon: "/skillLogo/next.png", size: 40, category: "Framework" },
  { name: "Tailwind CSS", icon: "/skillLogo/tailwind.png", size: 40, category: "Styling" },
  { name: "Framer Motion", icon: "/skillLogo/framer.png", size: 40, category: "Animation" },
  { name: "Redux", icon: "/skillLogo/redux.png", size: 40, category: "State" },
  { name: "Node.js", icon: "/skillLogo/node-js.png", size: 40, category: "Backend" },
  { name: "Express", icon: "/skillLogo/express.png", size: 40, category: "Backend" },
  { name: "MongoDB", icon: "/skillLogo/mongodb.png", size: 32, category: "Database" },
  { name: "PostgreSQL", icon: "/skillLogo/postger.png", size: 40, category: "Database" },
  { name: "MySQL", icon: "/skillLogo/mysql.png", size: 40, category: "Database" },
  { name: "Prisma", icon: "/skillLogo/prisma.webp", size: 40, category: "ORM" },
  { name: "Vercel", icon: "/skillLogo/vercel.svg", size: 40, category: "Deployment" },
];

export interface Project {
  image: string;
  title: string;
  description: string;
  year: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

export const projects: Project[] = [
  {
    image: "/project4.png",
    title: "TurboPay",
    year: "2025",
    description:
      "A scalable wallet and payments platform with secure P2P transfers, bank-to-wallet transactions, JWT authentication, and a real-time dashboard experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "JWT", "Turborepo"],
    githubLink: "https://github.com/mohitsingh4716/turbopay",
    liveLink: "https://turbopay.vercel.app",
  },
  {
    image: "/project1.jpg",
    title: "SpendPath",
    year: "2024",
    description:
      "An AI-powered finance platform that simplifies planning, tracking, and financial insights with a clean product-led interface and scalable architecture.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Prisma", "Supabase", "Clerk", "Vercel"],
    githubLink: "https://github.com/mohitsingh4716/spendpath",
    liveLink: "https://spend-path.vercel.app",
  },
  {
    image: "/project2.png",
    title: "Medium Clone",
    year: "2024",
    description:
      "A rich-text blogging platform with secure JWT auth, clean reading flows, and a backend designed for scalable publishing and personalized experiences.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Cloudflare Workers"],
    githubLink: "https://github.com/mohitsingh4716/medium_blog",
    liveLink: "https://medium-blog-pi-ivory.vercel.app",
  },
  {
    image: "/project3.jpg",
    title: "GlitchFlix GPT",
    year: "2023",
    description:
      "A Netflix-inspired streaming interface with GPT-powered recommendations, rich browsing flows, and API-driven content discovery.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Redux", "TMDB API", "Vercel"],
    githubLink: "https://github.com/mohitsingh4716/glitchflix-gpt",
    liveLink: "https://github.com/mohitsingh4716/glitchflix-gpt",
  },
];
