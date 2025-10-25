import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import soccerBall from '@/assets/soccer-ball.jpg';

const RegistrationSection = () => {
  const { t } = useTranslation();
  const ageCategories = [
    {
      category: 'U7',
      key: 'u7',
    },
    {
      category: 'U9',
      key: 'u9',
    },
    {
      category: 'U11',
      key: 'u11',
    },
    {
      category: 'U13',
      key: 'u13',
    },
    {
      category: 'U15',
      key: 'u15',
    },
  ];

  const handleRegistration = () => {
    // This would open a modal or redirect to registration form
    window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' });
  };

  return (
    <section id="registration" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('registration.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('registration.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Age Categories Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {ageCategories.map((cat, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                        {cat.category}
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg">{t(`registration.categories.${cat.key}.title`)}</h4>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{t(`registration.categories.${cat.key}.schedule`)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-accent">
                      <span>{t(`registration.categories.${cat.key}.price`)}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Card with Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-2xl">
              <div className="relative h-64">
                <img
                  src={soccerBall}
                  alt="Join Olympique Bournazel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              </div>
              <div className="p-8 bg-card">
                <h3 className="text-2xl font-bold mb-4 text-primary">{t('registration.cta')}</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{t('club.history.2024.desc')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">2024-2025</p>
                  </div>
                </div>
                <Button
                  size="lg"
                  onClick={handleRegistration}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold"
                >
                  {t('registration.cta')}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
