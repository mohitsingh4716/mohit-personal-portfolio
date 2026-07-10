export const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Tech Stack" },
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
  {
    href: "mailto:mohitsingh4716@gmail.com",
    icon: "/email.svg",
    label: "Email",
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
  overview: string;
  problemSolved: string;
  features: string[];
  architecture: string;
  challenges: string;
  learnings: string;
  contribution: string;
  gallery: string[];
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
    overview: "TurboPay is a high-performance digital wallet and peer-to-peer (P2P) payments platform. Designed to simulate a production-grade banking dashboard, it supports secure transfers, real-time transaction updates, and multiple accounts management under a modern workspace framework.",
    problemSolved: "Simulating secure banking operations in web apps usually suffers from concurrency errors and database race conditions. TurboPay addresses this by implementing strict PostgreSQL transaction blocks (Prisma $transaction) that lock records during transfers, guaranteeing no money is ever double-spent or lost in transit.",
    features: [
      "Instant P2P fund transfers via phone number searches",
      "Simulated bank-to-wallet transactions with transaction safety locks",
      "Interactive analytics dashboard showing dynamic balance graphs and histories",
      "Secure JWT-based session authentication and custom cookies handling",
      "Modular workspace code organization utilizing Turborepo architecture"
    ],
    architecture: "Next.js frontend communicating with a modular backend API structure. Connected to a cloud PostgreSQL database on Supabase via Prisma ORM for type-safe database schemas and operations.",
    challenges: "Handling database concurrency when multiple users sent payments simultaneously, resulting in potential race conditions.",
    learnings: "Deepened my knowledge of transaction isolation levels in SQL, row-level locks, and multi-package dependency management inside monorepos.",
    contribution: "Designed and engineered the full-stack database schema, transaction APIs, and built the responsive frontend dashboard.",
    gallery: ["/project4.png", "/project1.jpg", "/project2.png"]
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
    overview: "SpendPath is an AI-enhanced financial analytics platform that helps users organize budgets, capture expenses, and receive smart, automated recommendations on spending optimizations.",
    problemSolved: "Traditional budget spreadsheets require tedious manual entry and provide little insight. SpendPath leverages generative AI to automatically categorize transactions and offer actionable suggestions that guide users toward healthier financial habits.",
    features: [
      "AI financial advisory powered by Gemini / OpenAI API prompts",
      "Clean visual layout displaying automated categorization charts",
      "Multi-account management support tracking multiple credit/debit logs",
      "Secure third-party authentication syncs handled via Clerk",
      "Custom monthly threshold triggers and budget alerts"
    ],
    architecture: "Next.js App Router for frontend layout, styling with Tailwind CSS, Supabase database for transaction logs, and Clerk for authentication.",
    challenges: "Structuring dynamic API prompts to ensure response speeds are fast and output formats align perfectly with chart visual structures.",
    learnings: "Mastered structured JSON extraction from LLMs, optimizing PostgreSQL query performance, and handling webhooks safely.",
    contribution: "Built the AI integration endpoints, designed the user dashboard chart layouts, and integrated the auth webhooks flow.",
    gallery: ["/project1.jpg", "/project4.png", "/project3.jpg"]
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
    overview: "Medium Clone is a modern content publishing platform designed to mimic Medium's reading and editing flows, prioritizing low latency and high accessibility.",
    problemSolved: "CMS platforms are historically slow, heavy, and expensive to scale. By hosting the backend on edge workers, pages and articles render instantly, and database load is dramatically minimized through regional edge caching.",
    features: [
      "Interactive rich-text blog post creator supporting inline images",
      "Serverless REST APIs operating under sub-100ms edge routing times",
      "Lightweight tags taxonomy filtering posts dynamically",
      "Responsive readability layouts optimized for mobile and desktop",
      "Author follow patterns and profile analytics screens"
    ],
    architecture: "React client communicating with serverless Node.js endpoints running on Cloudflare Workers edge nodes, utilizing Prisma connection pooling to interface with PostgreSQL.",
    challenges: "Adapting traditional SQL pooling libraries to fit within the memory and time limits of serverless edge execution containers.",
    learnings: "Developed a deep understanding of Cloudflare Workers lifecycles, Prisma Accelerate setup, and content CDN edge caching strategies.",
    contribution: "Developed the entire serverless worker backend, designed routing endpoints, and crafted the responsive React text editor UI.",
    gallery: ["/project2.png", "/project1.jpg", "/project4.png"]
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
    overview: "GlitchFlix GPT combines movie discovery catalogs with natural language recommendation models, suggesting movies that fit specific user mood prompts.",
    problemSolved: "Overwhelmed by massive catalogs, users spend significant time selecting content. GlitchFlix GPT allows users to write natural descriptions like 'comfort food movies for rainy days' and yields accurate results instantly.",
    features: [
      "Semantic movie recommendations powered by GPT APIs",
      "Live trailer embeds fetched via TMDB API integration",
      "Centralized state management with Redux slices",
      "Firebase user logins and custom watchlist settings",
      "Highly responsive movie sliders with smooth drag animations"
    ],
    architecture: "React SPA application powered by Redux Toolkit, TMDB APIs, hosted on Firebase Hosting with built-in Firebase user authentication.",
    challenges: "Managing asynchronous state flows across different APIs (OpenAI and TMDB) while avoiding rate limit flags and keeping searches lag-free.",
    learnings: "Polished Redux slice creation, TMDB query pagination methods, and advanced visual layout design with Tailwind.",
    contribution: "Integrated the OpenAI movie semantic search, configured TMDB API mapping, and implemented state caching via Redux.",
    gallery: ["/project3.jpg", "/project2.png", "/project1.jpg"]
  }
];

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  link?:string;
}

export const experiences: Experience[] = [
  {
  company: "Teesta : Travel Arrangements",
  duration: "Mar 2025 – Aug 2025",
  role: "Full Stack Developer Intern",
  responsibilities: [
    "Built and enhanced a dynamic travel booking platform for hotel, flight, and experience reservations using Next.js, focusing on modular architecture, high performance, and a seamless user experience across devices.",
    "Integrated the Razorpay payment gateway to enable secure, reliable, and scalable online payment processing for booking transactions.",
    "Designed and developed RESTful APIs for automated WhatsApp and Email notifications, delivering booking confirmations, invoices, and partner communications after successful reservations.",
    "Implemented Firebase Authentication for secure user registration, login, session management, and protected application access.",
    // "Collaborated on optimizing frontend performance, improving reusable component architecture, and enhancing the overall booking workflow to provide a faster and more intuitive user experience."
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Firebase",
    "REST APIs",
    "Razorpay"
  ]
},
  {
    company: "Freelance Project – Be Fit Gym",
    duration: "Mar 2026 – Apr 2026",
    role: "Full Stack Developer",
    responsibilities: [
      "Designed and developed a responsive gym management platform using Next.js to streamline membership operations.",
      "Built a secure registration workflow for members and integrated Firebase for authentication and user management.",
      "Integrated Cloudinary for remote media assets upload and optimized site SEO using custom metadata tags.",
      "Automated WhatsApp registration updates for new members using external service integration."
    ],
    technologies: ["Next.js", "Firebase", "Cloudinary", "SEO", "WhatsApp API"],
    link:"https://www.be-fit-gym.in/"
  }
];
