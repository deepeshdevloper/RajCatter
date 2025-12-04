import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      variant="ghost" 
      onClick={toggleLanguage}
      className="fixed top-24 right-4 z-50 bg-black/50 backdrop-blur-md border border-gold/30 text-gold hover:bg-black/80 rounded-full px-3 py-1 text-sm font-serif"
    >
      {i18n.language === 'en' ? 'हिंदी' : 'English'}
    </Button>
  );
}