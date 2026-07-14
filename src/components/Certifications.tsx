import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  url: string;
};

const certifications: Certification[] = [
  { title: 'GenAI Powered Data Analytics Job Simulation', issuer: 'Tata, Forage', date: 'Jul 2026', url: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a460f19515132a0f9c760f7_1783079144414_completion_certificate.pdf' },
  { title: 'Machine Learning Training Program', issuer: 'Larsen & Toubro Residential Program', date: 'Jun 2025', url: '/certificates/l&t-ml-program.jpg' },
  { title: 'Software Testing with Generative AI', issuer: 'Simplilearn', date: 'Sep 2025', url: 'https://simpli-web.app.link/e/Ro4fSjWTLWb' },
  { title: 'Artificial Intelligence for Business', issuer: 'Simplilearn', date: 'Sep 2025', url: 'https://simpli-web.app.link/e/TC7g6ilyLWb' },
  { title: 'Big Data', issuer: 'Infosys Springboard', date: 'Aug 2025', url: '/certificates/big-data-infosys.jpg' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(262_90%_68%_/_0.03)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 mb-6">
            <code className="text-sm text-muted-foreground">certifications</code>
            <span className="text-primary font-mono">verified</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Programs and simulations supporting my AI, data, and software engineering foundation.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <motion.a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" variants={itemVariants} whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }} className="group h-full rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(262_90%_68%_/_0.1)] transition-all duration-500 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                  <Award className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold font-mono mb-2 text-foreground group-hover:text-gradient transition-all duration-500">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">Issued by {cert.issuer}</p>
              <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-mono">
                {cert.date}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
