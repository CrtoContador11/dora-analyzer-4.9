import React from 'react';
import { Activity } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  version: string;
  userName: string;
  language: 'es' | 'pt';
  setLanguage: (lang: 'es' | 'pt') => void;
}

const Header: React.FC<HeaderProps> = ({ version, userName, language, setLanguage }) => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-2 shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="flex items-center mb-2 sm:mb-0">
          <Activity className="w-6 h-6 mr-2 text-blue-300" />
          <h1 className="text-xl font-bold">DORA Analyzer</h1>
          <span className="ml-2 text-xs font-medium bg-blue-700 px-2 py-1 rounded-full">{version}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs">{language === 'es' ? 'Usuario' : 'Usuário'}: {userName}</span>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;