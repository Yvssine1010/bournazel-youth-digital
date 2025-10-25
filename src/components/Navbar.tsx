import { Home, Users, ClipboardList, Mail } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import obLogo from '@/assets/ob-logo.jpg';

const Navbar = () => {
  const navItems = [
    {
      title: 'Home',
      icon: <Home className='h-full w-full text-primary' />,
      href: '#hero',
    },
    {
      title: 'The Club',
      icon: <Users className='h-full w-full text-primary' />,
      href: '#club',
    },
    {
      title: 'Registration',
      icon: <ClipboardList className='h-full w-full text-primary' />,
      href: '#registration',
    },
    {
      title: 'Contact',
      icon: <Mail className='h-full w-full text-primary' />,
      href: '#contact',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='fixed bottom-4 left-0 right-0 z-50 flex justify-center'>
      <Dock className='items-end pb-3'>
        <DockItem className='aspect-square rounded-full overflow-hidden bg-white border-2 border-primary shadow-lg'>
          <img src={obLogo} alt="Olympique Bournazel Logo" className="w-full h-full object-cover" />
        </DockItem>
        {navItems.map((item, idx) => (
          <div key={idx} onClick={() => scrollToSection(item.href)}>
            <DockItem className='aspect-square rounded-full bg-accent/10 hover:bg-accent/20 transition-colors'>
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </div>
        ))}
      </Dock>
    </nav>
  );
};

export default Navbar;
