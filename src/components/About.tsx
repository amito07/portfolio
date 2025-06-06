"use client";

import { motion } from "framer-motion";
import { Heart, Target, User, Zap } from "lucide-react";

const About = () => {
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

  const highlights = [
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: "Passionate Developer",
      description:
        "I love creating digital solutions that make a real impact on users&apos; lives.",
    },
    {
      icon: <Target className="text-green-400" size={24} />,
      title: "Goal-Oriented",
      description:
        "Focused on delivering high-quality code and achieving project objectives efficiently.",
    },
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Fast Learner",
      description:
        "Always staying up-to-date with the latest technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <User className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About Me
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Building the Future, One Line at a Time
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I&apos;m a Software Engineer with 4 years of experience
                  specializing in backend development and scalable system
                  design. My core expertise lies in Node.js, Express, and
                  Next.js, and I&apos;ve also worked with Golang and Python to build
                  robust, high-performance services. I enjoy solving complex
                  architectural challenges, optimizing backend workflows, and
                  collaborating across teams to deliver reliable,
                  production-ready systems.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-slate-700/50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "4+", label: "Years Experience" },
              { number: "20+", label: "Technologies" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
