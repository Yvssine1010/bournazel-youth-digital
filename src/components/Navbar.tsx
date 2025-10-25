import { Home, Users, ClipboardList, Mail } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const navItems = [
    {
      title: t('nav.home'),
      icon: <Home className='h-full w-full text-primary' />,
      href: '#hero',
    },
    {
      title: t('nav.club'),
      icon: <Users className='h-full w-full text-primary' />,
      href: '#club',
    },
    {
      title: t('nav.registration'),
      icon: <ClipboardList className='h-full w-full text-primary' />,
      href: '#registration',
    },
    {
      title: t('nav.contact'),
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
