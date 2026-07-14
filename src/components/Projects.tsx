import { motion } from 'framer-motion';
import { Github, BrainCircuit, FlaskConical, LineChart, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  date: string;
  description: string[];
  tech: string[];
  icon: typeof BrainCircuit;
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'CropScan - Explainable AI Crop Disease Detection Platform',
    date: 'Apr 2026',
    description: [
      'End-to-end Computer Vision pipeline using EfficientNet-B4 with transfer learning, classifying 16 crop disease classes.',
      'Explainable diagnosis pipeline via Grad-CAM for interpretability and prediction transparency.',
      'RAG-based advisory system with LangChain, ChromaDB, and LLaVA multimodal LLM generating grounded treatment recommendations.',
      'Deployed with FastAPI backend and React frontend for real-time inference.',
    ],
    tech: ['Computer Vision', 'EfficientNet-B4', 'Grad-CAM', 'LangChain', 'ChromaDB', 'LLaVA', 'FastAPI', 'React'],
    icon: BrainCircuit,
    github: 'https://github.com/Hussain-Anajwala',
  },
  {
    title: 'Savour - AI-Powered Multimodal Recipe Discovery Platform',
    date: 'Apr 2026',
    description: [
      'Multimodal recipe discovery through image, voice, and text-based ingredient search.',
      'Ingredient detection via YOLOv8n and CLIP ViT-B/32; voice search via OpenAI Whisper and spaCy.',
      'Semantic recommendation engine using all-MiniLM-L6-v2 embeddings and ChromaDB for personalized recommendations.',
      'Automated dietary classification with facebook/bart-large-mnli; 15+ REST APIs with JWT auth, RBAC, MongoDB Atlas, deployed on Vercel.',
    ],
    tech: ['YOLOv8n', 'CLIP', 'Whisper', 'spaCy', 'ChromaDB', 'MongoDB Atlas', 'JWT/RBAC'],
    icon: FlaskConical,
    github: 'https://github.com/Hussain-Anajwala',
    demo: 'https://savour.hussainanajwala.dev/',
  },
  {
    title: 'E-Commerce Intelligence Suite - Predictive Analytics Platform',
    date: 'Nov 2025',
    description: [
      'Processed and analyzed 100K+ transaction records with Pandas and NumPy.',
      'Apriori association rule mining and ARIMA forecasting for cross-selling and inventory demand prediction.',
      'Interactive analytics dashboard with Streamlit and Plotly visualizing sales trends and forecasts.',
    ],
    tech: ['Pandas', 'NumPy', 'Apriori', 'ARIMA', 'Streamlit', 'Plotly'],
    icon: LineChart,
    github: 'https://github.com/Hussain-Anajwala',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(188_95%_56%_/_0.03)_0%,_transparent_50%)]" />

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
            <BrainCircuit className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-primary font-mono">featured.projects</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI applications spanning Computer Vision, multimodal search, recommendation systems, and analytics.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.4, ease: 'easeOut' } }} className="group relative">
              <div className="h-full rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-[0_0_40px_hsl(262_90%_68%_/_0.1)] transition-all duration-500">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">project-{index + 1}.md</span>
                  <span className="ml-auto text-xs text-muted-foreground font-mono">{project.date}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500" whileHover={{ rotate: 5, scale: 1.05 }}>
                      <project.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </motion.div>
                    <div className="flex items-center gap-2">
                      {project.demo && (
                        <motion.a href={project.demo} aria-label={`Open ${project.title} live demo`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      <motion.a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all duration-300">
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-mono mb-4 text-foreground group-hover:text-gradient transition-all duration-500">
                    {project.title}
                  </h3>
                  <ul className="space-y-2 mb-5">
                    {project.description.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-accent mt-0.5">&gt;</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 * techIndex, duration: 0.3 }} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
