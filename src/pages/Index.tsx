import Hero from '@/components/Hero';
import ClubSection from '@/components/ClubSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClubSection />
      <RegistrationSection />
      <Footer />
      <Navbar />
    </div>
  );
};

export default Index;
