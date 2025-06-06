"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Code, Database, Palette, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Programming Languages",
      description: "Core programming languages I work with",
      color: "blue",
      skills: [
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Go", icon: "logos:gopher" },
        { name: "Python", icon: "logos:python" },
        { name: "C++", icon: "logos:c-plusplus" }
      ],
    },
    {
      icon: <Palette className="text-pink-400" size={32} />,
      title: "Frontend Development",
      description: "Modern frontend frameworks and libraries",
      color: "pink",
      skills: [
        { name: "React", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "SASS", icon: "logos:sass" },
        { name: "Bootstrap", icon: "logos:bootstrap" },
        { name: "Framer Motion", icon: "simple-icons:framer" },
      ],
    },
    {
      icon: <Server className="text-green-400" size={32} />,
      title: "Backend Development",
      description: "Server-side technologies and frameworks",
      color: "green",
      skills: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express.js", icon: "simple-icons:express" },
        { name: "Nest.js", icon: "devicon:nestjs" },
        { name: "FastAPI", icon: "devicon:fastapi" },
        { name: "Gin", icon: "simple-icons:gin" },
        { name: "Sequelize", icon: "logos:sequelize" },
        { name: "GraphQL", icon: "logos:graphql" },
        { name: "REST API", icon: "logos:postman-icon" },
      ],
    },
    {
      icon: <Database className="text-purple-400" size={32} />,
      title: "Databases",
      description: "Database technologies and ORM tools",
      color: "purple",
      skills: [
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "Redis", icon: "logos:redis" },
        { name: "Prisma", icon: "simple-icons:prisma" },
        { name: "Supabase", icon: "logos:supabase-icon" },
      ],
    },
    {
      icon: <Wrench className="text-orange-400" size={32} />,
      title: "Tools & Technologies",
      description: "Development tools and cloud platforms",
      color: "orange",
      skills: [
        { name: "Git", icon: "logos:git-icon" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "AWS", icon: "logos:aws" },
        { name: "Vercel", icon: "logos:vercel-icon" },
        { name: "Figma", icon: "logos:figma" },
        { name: "VS Code", icon: "logos:visual-studio-code" },
        { name: "Postman", icon: "logos:postman-icon" },
        { name: "Webpack", icon: "logos:webpack" },
      ],
    },
  ];

  const TechTag = ({
    skill,
    index,
  }: {
    skill: { name: string; icon: string };
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg hover:border-blue-400/30 transition-all duration-300 cursor-pointer group"
    >
      <Icon
        icon={skill.icon}
        width={24}
        height={24}
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Skills & Technologies
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories Cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className={`bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-${
                category.color
              }-400/30 hover:bg-slate-800/70 transition-all duration-300 group ${
                categoryIndex === 4 ? "lg:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {category.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <TechTag key={skillIndex} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              I'm constantly expanding my skill set and staying up-to-date with
              the latest trends in web development. Currently exploring AI/ML
              integration, DevOps, and Cloud Architecture.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "AI/ML Integration",
                "Microservices",
                "DevOps",
                "Cloud Architecture"
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="px-4 py-2 bg-slate-700/50 border border-white/10 rounded-full text-gray-300 text-sm hover:border-purple-400/30 hover:text-white transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
