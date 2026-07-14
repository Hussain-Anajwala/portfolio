import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Database, GitBranch, Layers, Network, Server, Wrench } from 'lucide-react';

const skillGroups = [
  { category: 'Languages', icon: Code2, items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++'] },
  { category: 'AI/ML', icon: BrainCircuit, items: ['PyTorch', 'YOLOv8n', 'EfficientNet-B4', 'CLIP', 'Whisper', 'LangChain', 'LangGraph', 'LLaVA', 'ChromaDB', 'Scikit-learn'] },
  { category: 'Web', icon: Layers, items: ['React.js', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Databases', icon: Database, items: ['MongoDB Atlas', 'SQL', 'SQLite'] },
  { category: 'Tools', icon: Wrench, items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Cloudinary'] },
  { category: 'Core CS', icon: Network, items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(262_90%_68%_/_0.03)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 mb-6"
          >
            <GitBranch className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-primary font-mono">skills.map</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Technical <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and foundations I use to build AI systems, APIs, and product-facing applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-[0_0_30px_hsl(262_90%_68%_/_0.1)] transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                  <group.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-mono font-semibold text-foreground mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
