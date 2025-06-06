"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder, GitFork, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Tailwind",
      ],
      featured: true,
      stats: { stars: 127, forks: 45 },
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin analytics dashboard",
        "Mobile-responsive design",
      ],
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, team chat, and advanced filtering capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      featured: true,
      stats: { stars: 89, forks: 23 },
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "Real-time collaboration",
        "Advanced task filtering",
        "Team chat integration",
        "Drag & drop interface",
      ],
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with detailed forecasts, interactive maps, and location-based recommendations.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
      featured: false,
      stats: { stars: 64, forks: 18 },
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "7-day weather forecast",
        "Interactive weather maps",
        "PWA capabilities",
        "Location-based alerts",
      ],
    },
    {
      title: "Crypto Portfolio Tracker",
      description:
        "Real-time cryptocurrency portfolio tracking with advanced analytics and price alerts.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "CoinGecko API", "Chart.js", "LocalStorage"],
      featured: false,
      stats: { stars: 156, forks: 67 },
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "Real-time price tracking",
        "Portfolio analytics",
        "Price alerts",
        "Multiple exchanges",
      ],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with scheduling, analytics, and engagement tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Prisma", "OAuth", "Chart.js", "Vercel"],
      featured: false,
      stats: { stars: 92, forks: 31 },
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "Multi-platform integration",
        "Scheduled posting",
        "Analytics dashboard",
        "Engagement metrics",
      ],
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot with natural language processing and context-aware responses.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "OpenAI API", "FastAPI", "React", "WebSocket"],
      featured: false,
      stats: { stars: 203, forks: 89 },
      links: {
        live: "#",
        github: "#",
      },
      highlights: [
        "Natural language processing",
        "Context-aware responses",
        "Real-time messaging",
        "Customizable personalities",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Folder className="text-yellow-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and
            innovative solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <Star className="text-yellow-400" size={24} />
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-white/60 text-center">
                        <Folder size={48} className="mx-auto mb-2" />
                        <p className="text-sm">Project Screenshot</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.links.github}
                        className="p-2 bg-slate-900/80 rounded-lg text-white hover:text-blue-400 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.links.live}
                        className="p-2 bg-slate-900/80 rounded-lg text-white hover:text-green-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="text-white font-medium mb-3">
                        Key Features:
                      </h5>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-gray-400 text-sm flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Other Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Folder className="text-blue-400" size={24} />
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.links.github}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.links.live}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-700/50 text-gray-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <div className="flex items-center gap-1">
                        <Star size={12} />
                        <span>{project.stats.stars}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border border-white/20 rounded-full text-white font-medium hover:border-purple-500/50 transition-all duration-300"
          >
            View All Projects on GitHub
            <Github size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
