import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  figma,
  docker,

  linkedin,
  github,
  cv,
  link,

  meta,
  starbucks,
  tesla,
  shopify,
  classhook,
  skyit,

  carrent,
  jobit,
  tripguide,

  codecraft,
  flexai,
  streamify,
  promanage,
  techtrove,
  goatnotes,
  warriorsgo,
  vert,
  pacman,
  maintenance,

  shahab,
  alexander,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ryanhui30/"
  },
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/ryanhui30"
  },
  {
    title: "Resume",
    icon: cv,
    link: "https://flowcv.com/resume/aqs0s1aojc"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "ClassHook",
    icon: classhook,
    iconBg: "#383E56",
    date: "June 2023 - October 2023",
    points: [
      "Implemented UI improvements and security enhancements for ClassHook that increased user monetization and retention.",
    ],
  },
  {
    title: "Backend Engineer Intern",
    company_name: "SkyIT Services",
    icon: skyit,
    iconBg: "#E6DEDD",
    date: "June 2024 - September 2024",
    points: [
      "Developing and optimizing backend software for SkyIT’s cloud-based fleet management solution, increasing software effectiveness.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of hiring Ryan as a software engineering intern at ClassHook. He demonstrated curiosity, an eagerness to learn, coachability, and accountability over his work. I would recommend Ryan to any prospective employer considering working with him.",
    name: "Alexander Deeb",
    designation: "CEO",
    company: "ClassHook",
    image: alexander,
  },
  {
    testimonial:
      "Ryan’s technical proficiency in backend technologies, including Django REST framework, Firebase, JavaScript, and Python, was evident from day one. Ryans’s ability to adapt to new technologies, coupled with their problem-solving skills, marked them as a standout member of our team.",
    name: "Shahab Seyedi",
    designation: "Executive Director",
    company: "SkyIT Services",
    image: shahab,
  },
];

const projects = [
    {
      name: "Code Craft",
      description:
        "Collaborative cloud IDE for developers to write, execute, and share code in real-time. Join code discussions and unlock new languages and features with paid pro plan.",
      tags: [
        { name: "next.js", color: "blue-text-gradient" },
        { name: "convex", color: "green-text-gradient" },
        { name: "clerk", color: "pink-text-gradient" },
        { name: "tailwind", color: "orange-text-gradient" },
        { name: "lemon squeezy", color: "purple-text-gradient" },
        { name: "SaaS", color: "blue-text-gradient" }
      ],
      image: codecraft,
      source_code_link: "https://github.com/ryanhui30/code-craft",
      deployed_link: "https://code-craft-kappa-lyart.vercel.app/",
    },
    {
      name: "Flex AI",
      description: "Your AI-powered personal fitness coach that designs custom workout and nutrition plans through natural voice conversations, adapting to your progress in real-time.",
      tags: [
        { name: "next.js", color: "blue-text-gradient" },
        { name: "react", color: "green-text-gradient" },
        { name: "vapi", color: "pink-text-gradient" },
        { name: "convex", color: "orange-text-gradient" },
        { name: "gemini AI", color: "purple-text-gradient" },
        { name: "clerk", color: "blue-text-gradient" },
        { name: "shadcn", color: "green-text-gradient" }
      ],
      image: flexai,
      source_code_link: "https://github.com/ryanhui30/flex-ai",
      deployed_link: "https://flex-ai-six.vercel.app/",
    },
    {
      name: "Streamify",
      description: "Global language learning platform with real-time chat and voice calling that scales to millions of users. Features friend connections, notifications, and full profile customization with multiple themes.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "express.js", color: "green-text-gradient" },
        { name: "node.js", color: "pink-text-gradient" },
        { name: "mongodb", color: "orange-text-gradient" },
        { name: "tanstack query", color: "purple-text-gradient" },
        { name: "stream API", color: "blue-text-gradient" },
        { name: "render", color: "green-text-gradient" }
      ],
      image: streamify,
      source_code_link: "https://github.com/ryanhui30/streamify",
      deployed_link: "https://streamify-2zxt.onrender.com/"
    },
    {
      name: "Goat Notes",
      description: "AI-enhanced note-taking that automatically generates summaries, key points, and study aids using ChatGPT integration.",
      tags: [
        { name: "next.js", color: "blue-text-gradient" },
        { name: "react", color: "green-text-gradient" },
        { name: "supabase", color: "pink-text-gradient" },
        { name: "shadcn", color: "orange-text-gradient" },
        { name: "prisma", color: "purple-text-gradient" },
        { name: "chatgpt AI", color: "blue-text-gradient" },
      ],
      image: goatnotes,
      source_code_link: "https://github.com/ryanhui30/goat-notes",
      deployed_link: "https://goat-notes-mu.vercel.app/"
    },
    {
      name: "Tech Trove",
      description: "E-commerce platform with product management, 13 customizable themes, and real-time inventory controls. Features security protection and admmin controls.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "express.js", color: "green-text-gradient" },
        { name: "postgreSQL", color: "pink-text-gradient" },
        { name: "node.js", color: "orange-text-gradient" },
        { name: "arcjet", color: "purple-text-gradient" },
        { name: "neon", color: "blue-text-gradient" },
        { name: "daisyUI", color: "green-text-gradient" }
      ],
      image: techtrove,
      source_code_link: "https://github.com/ryanhui30/tech-trove",
      deployed_link: "https://tech-trove-mkvw.onrender.com/",
    },
    {
      name: "Pro Manage",
      description: "Full-stack project management app featuring real-time team collaboration, intuitive drag-and-drop workflows, and powerful performance analytics.",
      tags: [
        { name: "next.js", color: "blue-text-gradient" },
        { name: "typescript", color: "green-text-gradient" },
        { name: "AWS", color: "pink-text-gradient" },
        { name: "tailwind", color: "orange-text-gradient" },
        { name: "redux", color: "purple-text-gradient" },
      ],
      image: promanage,
      source_code_link: "https://github.com/ryanhui30/pro-manage",
      deployed_link: "https://main.d1pqkryapw8kiy.amplifyapp.com/"
    },
    {
      name: "Warriors Go",
      description: "Real-time Warriors fan app delivering live scores, advanced statistics, fan discussions, and breaking news updates.",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "bootstrap", color: "green-text-gradient" },
        { name: "flutter", color: "pink-text-gradient" },
        { name: "javascript", color: "orange-text-gradient" },
        { name: "firebase", color: "purple-text-gradient" },
      ],
      image: warriorsgo,
      source_code_link: "https://github.com/ryanhui30/warriors-go",
      deployed_link: "https://warriors-go.vercel.app/"
    },
    {
      name: "AI Pacman",
      description: "Classic Pacman enhanced with advanced AI pathfinding algorithms that optimize routes and evolve strategic gameplay decisions.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "AI/ML algorithms", color: "green-text-gradient" },
        { name: "pathfinding", color: "pink-text-gradient" },
      ],
      image: pacman,
      source_code_link: "https://github.com/ryanhui30/ai-pacman",
    }
];

export { services, technologies, experiences, testimonials, projects };
