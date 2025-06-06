// Portfolio Configuration
// Update this file with your personal information

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Amit Mandal",
    title: "Software Engineer",
    subtitle: "Full Stack Developer",
    description:
      "Passionate about creating scalable applications and beautiful user interfaces. Specialized in React, Next.js, and modern JavaScript ecosystem.",
    location: "San Francisco, CA",
    email: "mandal.amit.o171@gmail.com",
    phone: "+1 (312) 66-2716",
    website: "https://mandalamit.dev",
  },

  // Social Media Links
  social: {
    github: "https://github.com/amito07",
    linkedin: "https://www.linkedin.com/in/mandal-amit",
    // portfolio: "https://alexjohnson.dev",
  },

  // Navigation Items
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  // About Section Stats
  stats: [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ],

  // Skills Configuration
  skills: {
    categories: [
      {
        title: "Frontend Development",
        icon: "Code",
        skills: [
          { name: "React/Next.js", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Tailwind CSS", level: 85 },
          { name: "Vue.js", level: 80 },
        ],
      },
      {
        title: "Backend Development",
        icon: "Server",
        skills: [
          { name: "Node.js", level: 90 },
          { name: "Python", level: 85 },
          { name: "Express.js", level: 88 },
          { name: "GraphQL", level: 75 },
        ],
      },
      {
        title: "Database & Cloud",
        icon: "Database",
        skills: [
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "AWS", level: 75 },
          { name: "Docker", level: 70 },
        ],
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Git",
      "Figma",
      "Tailwind CSS",
    ],
  },

  // Experience Data
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description:
        "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting cloud-based solutions.",
      highlights: [
        "Led a team of 5 developers in building a customer portal used by 10k+ users",
        "Improved application performance by 40% through code optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected microservices infrastructure using Docker and AWS",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
    // Add more experience entries...
  ],

  // Theme Configuration
  theme: {
    colors: {
      primary: "blue",
      secondary: "purple",
      accent: "pink",
    },
    gradients: {
      main: "from-slate-900 via-purple-900 to-slate-900",
      hero: "from-blue-400 via-purple-500 to-pink-500",
      button: "from-blue-500 to-purple-600",
    },
  },
};

export default portfolioConfig;
