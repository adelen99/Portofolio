import {
  backend,
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
  university,
  azimut,
  udemy,
  python,
  next,
  zustand,
  mysql,
  mgtec,
  sneakerheads,
  transilvaniacars,
  livechat,
} from "../assets";

// Define types for each object in the arrays
interface NavLink {
  id: string;
  title: string;
}

interface Service {
  title: string;
  icon: string;
}

interface Technology {
  name: string;
  icon: string;
}

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  link_to_website?: string;
}

// Define arrays with proper types
export const navLinks: NavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services: Service[] = [
  { title: "Web Development", icon: web },
  { title: "UI/UX Design", icon: backend },
];

export const technologies: Technology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: next },
  { name: "Python", icon: python },
  { name: "Redux Toolkit", icon: redux },
  { name: "Zustand", icon: zustand },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];
export const experiences: Experience[] = [
  {
    title: "Bachelor's Degree - Robotics",
    company_name: "Technical University of Cluj-Napoca",
    icon: university,
    iconBg: "#000000",
    date: "Oct 2018 - Jul 2022",
    points: [
      "Designed and built a robotic arm capable of performing a pick-and-place operation based on the color of objects.",
      "Used CATIA software to design the robotic arm model, followed by 3D printing the components for assembly.",
      "Programmed the robotic arm using Arduino Uno, integrating functionality for object sorting.",
      "Implemented a color sensor for sorting objects based on their color, enhancing automation and efficiency.",
    ],
  },
  {
    title: "Web Development Fundamentals Course",
    company_name: "Azimut Vision",
    icon: azimut,
    iconBg: "white",
    date: "Sep 2022 - Mar 2023",
    points: [
      "Acquired in-depth knowledge of HTML, including semantic tags, forms, and accessibility best practices.",
      "Mastered CSS for styling web pages, focusing on layout techniques such as Flexbox and Grid.",
      "Developed proficiency in JavaScript, understanding core concepts such as variables, functions, loops, and events.",
      "Explored DOM (Document Object Model) manipulation to dynamically modify content and structure of web pages using JavaScript.",
      "Gained hands-on experience in building responsive and interactive user interfaces using HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "React.js & Next.js Development",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "white",
    date: "Jul 2023 - Dec 2023",
    points: [
      "Mastered React.js concepts, including JSX, component-based architecture, and virtual DOM.",
      "Utilized React Hooks (useState, useEffect) for state management in functional components.",
      "Proficient in Redux for large-scale state management and predictable app behavior.",
      "Built dynamic, responsive UIs with Tailwind CSS and gained experience with DaisyUI for customizable components.",
      "Explored Next.js for server-side rendering, static site generation, routing, and optimizing performance/SEO.",
      "Used **ShadCN** for creating elegant, reusable components in Next.js applications.",
    ],
  },
  {
    title: "Master's Degree - Artificial Intelligence",
    company_name: "Technical University of Cluj-Napoca",
    icon: university,
    iconBg: "#000000",
    date: "Oct 2024 - Ongoing",
    points: [
      "Studying Python for data analysis, machine learning, and automation.",
      "Learning MySQL for database management and integration in AI applications.",
      "Exploring machine learning techniques to build smarter and more efficient systems.",
      "Researching AI-driven solutions for automation and optimization in various fields.",
      "Focusing on the development and application of AI models and algorithms.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Mgtec Industry",
    icon: mgtec,
    iconBg: "#fff",
    date: "Nov 2024 - Ongoing",
    points: [
      "Managing and maintaining SQL databases, ensuring data integrity and optimization.",
      "Modifying and updating existing websites using React to improve performance and functionality.",
      "Developing desktop applications with Python and Tkinter for internal use within the company.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
export const projects: Project[] = [
  {
    name: "Sneaker Heads",
    description:
      "Web platform for sneaker enthusiasts to search, buy, and manage collections. Users can log in, order, and securely pay with credit/debit cards via Stripe integration, offering a smooth and safe shopping experience for rare sneakers.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: sneakerheads, // Replace with the appropriate image
    source_code_link: "https://github.com/adelen99/SneakerHeads",
    link_to_website: "https://reactsneakerheads.netlify.app/",
  },
  {
    name: "Transilvania Cars",
    description:
      "Showcases rental cars in Transylvania with light/dark mode and search by name. Users can browse detailed vehicle info, filter by type, and book rentals from local providers through a simple and clean interface for seamless navigation.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "prisma", color: "" },
      { name: "shadcn", color: "pink-text-gradient" },
    ],
    image: transilvaniacars, // Replace with the appropriate image
    source_code_link: "https://github.com/adelen99/TransilvaniaCarsNext", // Add the actual link to your repository
    link_to_website: "https://transilvania-cars-next.vercel.app/",
  },

  {
    name: "Livechat AI",
    description:
      "AI-powered live chat for real-time support, using Firebase, React, Python, and OpenAI 4.0 API. Users select their native language during registration, and all text and voice interactions are translated automatically for smooth communication.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
      { name: "firebase", color: "" },
    ],
    image: livechat, // Replace with the appropriate image
    source_code_link: "https://github.com/adelen99/RebelDot", // Add the actual link to your repository
  },
];
