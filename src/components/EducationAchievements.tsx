import { motion } from 'framer-motion';
import { Award, GraduationCap, Sparkles } from 'lucide-react';

const achievements = [
  'Maintained a cumulative CGPA of 8.935/10 while specializing in AI & ML.',
  'Completed the Larsen & Toubro Residential Machine Learning Program covering supervised learning, regression, classification, and data preprocessing.',
  'Built multiple end-to-end AI applications spanning Computer Vision, Recommendation Systems, Multimodal AI, and RAG.',
];

export const EducationAchievements = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(188_95%_56%_/_0.03)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 mb-6">
            <GraduationCap className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-primary font-mono">education.records</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut' }} className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold font-mono mb-2">Vidyalankar Institute of Technology, Mumbai</h3>
            <p className="text-muted-foreground mb-4">B.Tech, Computer Engineering (2023-2027)</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-primary font-mono">Specialization:</span> Artificial Intelligence & Machine Learning</p>
              <p><span className="text-primary font-mono">Honours:</span> Generative AI</p>
              <p><span className="text-primary font-mono">CGPA:</span> 8.935/10</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold font-mono mb-4">Achievements</h3>
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
