import { motion } from 'framer-motion';
import { Trophy, Heart, Users, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import fieldAerial from '@/assets/field-aerial.jpg';

const ClubSection = () => {
  const values = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Striving for the highest standards in every aspect of the game',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'Fostering love and enthusiasm for the beautiful game',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Teamwork',
      description: 'Building strong bonds and collaboration on and off the pitch',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Discipline',
      description: 'Developing character through commitment and dedication',
    },
  ];

  const timeline = [
    { year: '2014', event: 'Club Founded in Bournazel' },
    { year: '2016', event: 'First Youth Championship Win' },
    { year: '2019', event: 'Expanded to 6 Age Categories' },
    { year: '2023', event: 'New Training Facilities Opened' },
    { year: '2024', event: '120+ Active Players' },
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
            More Than a Club, We Are a Family
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            For a decade, we've been dedicated to nurturing young athletes in Bournazel, 
            teaching the beautiful game through passion, discipline, and respect.
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
            <h3 className="text-3xl font-bold text-primary mb-8">Our Journey</h3>
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
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Our Core Values</h3>
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
