import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5" />
      <span className="ml-2 text-sm font-semibold">
        {i18n.language === 'fr' ? 'EN' : 'FR'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
