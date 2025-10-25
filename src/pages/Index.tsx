import Hero from '@/components/Hero';
import ClubSection from '@/components/ClubSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClubSection />
      <RegistrationSection />
      <Footer />
      <Navbar />
    </div>
  );
};

export default Index;
