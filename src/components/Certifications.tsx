"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Shield, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Software Engineer Certificate",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "A6B908E3D6F4",
      icon: "simple-icons:hackerrank",
      verifyUrl: "https://www.hackerrank.com/certificates/a6b908e3d6f4",
      level: "Expert",
      color: "orange",
      description:
        "Earned the HackerRank Software Engineer Certificate by demonstrating strong problem-solving skills, algorithmic thinking, and coding proficiency through a timed technical assessment.",
    },
    {
      id: 2,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      date: "2025",
      credentialId: "f80447cb5ae75e045c8991a38b483491",
      icon: "logos:coursera",
      verifyUrl: "https://coursera.org/share/f80447cb5ae75e045c8991a38b483491",
      level: "Basic",
      color: "green",
      description:
        "Completed the 'Supervised Machine Learning: Regression and Classification' course, gaining hands-on experience with fundamental ML algorithms, model training, and evaluation techniques.",
    },
    {
      id: 3,
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      issuer: "DeepLearning.AI",
      date: "2020",
      credentialId: "6f7cd2381a72eb5a89edaf2ac2536c78",
      icon: "logos:coursera",
      verifyUrl: "https://coursera.org/share/6f7cd2381a72eb5a89edaf2ac2536c78",
      level: "Advanced",
      color: "blue",
      description:
        "Completed 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization' with practical knowledge in enhancing model performance through advanced training techniques and best practices.",
    },
    {
      id: 4,
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "2020",
      credentialId: "5fed1a51a0b3bc3be9e44c3ec3b8f74f",
      icon: "logos:coursera",
      verifyUrl: "https://coursera.org/share/5fed1a51a0b3bc3be9e44c3ec3b8f74f",
      level: "Advanced",
      color: "blue",
      description:
        "Completed 'Neural Networks and Deep Learning,' gaining a solid foundation in deep learning concepts, including forward/backward propagation, activation functions, and building neural network architectures.",
    },
    {
      id: 5,
      title: "Server-side Development with NodeJS, Express and MongoDB",
      issuer: "The Hong Kong University of Science and Technology",
      date: "2021",
      credentialId: "6f1f09d0152c0969c1b0516defeb430b",
      icon: "logos:coursera",
      verifyUrl: "https://coursera.org/share/6f1f09d0152c0969c1b0516defeb430b",
      level: "Basic",
      color: "blue",
      description:
        "Completed 'Server-side Development with NodeJS, Express, and MongoDB,' focusing on building RESTful APIs, managing databases, and developing full-stack web applications using the MERN stack.",
    },
  ];

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Expert":
        return <Star className="w-4 h-4 text-yellow-400" />;
      case "Professional":
        return <Shield className="w-4 h-4 text-purple-400" />;
      case "Advanced":
        return <Award className="w-4 h-4 text-blue-400" />;
      default:
        return <Award className="w-4 h-4 text-green-400" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Professional":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Advanced":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      default:
        return "bg-green-500/20 text-green-300 border-green-500/30";
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-64 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            <Award className="text-yellow-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Certifications
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and
            commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 hover:bg-slate-800/70 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-slate-700/70 transition-colors duration-300">
                    <Icon
                      icon={cert.icon}
                      width={32}
                      height={32}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium ${getLevelColor(
                      cert.level
                    )}`}
                  >
                    {getLevelIcon(cert.level)}
                    {cert.level}
                  </div>
                </div>
              </div>

              {/* Title and Issuer */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-blue-400 font-medium mb-3">{cert.issuer}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                {cert.description}
              </p>

              {/* Date and Credential */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400">Issued {cert.date}</span>
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  ID: {cert.credentialId}
                </div>
              </div>

              {/* Verify Button */}
              <motion.a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-green-500/20 border border-yellow-500/30 rounded-lg text-yellow-400 text-sm font-medium hover:from-yellow-500/30 hover:to-green-500/30 hover:border-yellow-400/50 transition-all duration-300"
              >
                <Shield className="w-4 h-4" />
                Verify Certificate
                <ExternalLink className="w-3 h-3" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          {/* <div className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Certification Statistics
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  6+
                </div>
                <div className="text-gray-400 text-sm">
                  Total Certifications
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4</div>
                <div className="text-gray-400 text-sm">Cloud Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-400 text-sm">Professional Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  2024
                </div>
                <div className="text-gray-400 text-sm">Latest Achievement</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-300 max-w-2xl mx-auto">
                Continuously pursuing new certifications to stay current with
                evolving technologies and industry best practices.
              </p>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
