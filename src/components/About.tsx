import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Code, Brain, Award } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      icon: GraduationCap,
      title: "CSIT Student",
      description: "Pursuing Computer Science and Information Technology degree",
      year: "2025-Present",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and interactive web applications",
      year: "",
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Exploring machine learning and AI technologies",
      year: "",
    },
    {
      icon: Award,
      title: "Projects & Certifications",
      description: "Completed multiple projects and earned certifications",
      year: "",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Computer Science and Information Technology student with a deep interest in creating 
              innovative web solutions and exploring the exciting world of artificial intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey in technology began with a curiosity about how things work, which evolved into a commitment 
              to building impactful applications that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me learning about the latest tech trends, contributing to open-source 
              projects, or experimenting with new frameworks and tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <milestone.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <span className="text-sm text-primary">{milestone.year}</span>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
