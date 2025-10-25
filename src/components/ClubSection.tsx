import { motion } from 'framer-motion';
import { Trophy, Heart, Users, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import fieldAerial from '@/assets/field-aerial.jpg';

const ClubSection = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('club.values.passion.title'),
      description: t('club.values.passion.desc'),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('club.values.discipline.title'),
      description: t('club.values.discipline.desc'),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('club.values.respect.title'),
      description: t('club.values.respect.desc'),
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: t('club.values.excellence.title'),
      description: t('club.values.excellence.desc'),
    },
  ];

  const timeline = [
    { year: '2014', event: t('club.history.2014.desc') },
    { year: '2016', event: t('club.history.2016.desc') },
    { year: '2019', event: t('club.history.2019.desc') },
    { year: '2024', event: t('club.history.2024.desc') },
  ];

  return (
    <section id="club" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('club.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('club.intro')}
          </p>
        </motion.div>

        {/* Split Layout - Timeline & Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary mb-8">{t('club.history.title')}</h3>
            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-lg text-foreground">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={fieldAerial}
              alt="Olympique Bournazel training facility aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </motion.div>
        </div>

        {/* Values Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-12">{t('club.values.title')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover-lift hover:border-accent transition-all h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-primary">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClubSection;
