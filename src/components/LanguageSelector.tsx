'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface LanguageSelectorProps {
  onLanguageChange: (lang: string) => void;
}

export default function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flagText: 'EN' },
    { code: 'es', name: 'Español', flagText: 'ES' },
    { code: 'pt', name: 'Português', flagText: 'PT' },
  ];

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    onLanguageChange(lang);
    setIsOpen(false);
  };

  const renderFlagSVG = (code: string) => {
    switch (code) {
      case 'en':
        return (
          <svg className="w-4 h-3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <circle cx="256" cy="256" fill="#f0f0f0" r="256"/>
            <g fill="#0052b4">
              <path d="m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z"/>
              <path d="m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z"/>
              <path d="m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z"/>
              <path d="m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z"/>
              <path d="m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z"/>
              <path d="m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z"/>
              <path d="m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z"/>
              <path d="m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z"/>
            </g>
            <g fill="#d80027">
              <path d="m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z"/>
              <path d="m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z"/>
              <path d="m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z"/>
              <path d="m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z"/>
              <path d="m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z"/>
            </g>
          </svg>
        );
      case 'es':
        return (
          <svg className="w-4 h-3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="m0 256c0 31.314 5.633 61.31 15.923 89.043l240.077 22.261 240.077-22.261c10.29-27.733 15.923-57.729 15.923-89.043s-5.633-61.31-15.923-89.043l-240.077-22.261-240.077 22.261c-10.29 27.733-15.923 57.729-15.923 89.043z" fill="#ffda44"/>
            <g fill="#d80027">
              <path d="m496.077 166.957c-36.171-97.484-130.006-166.957-240.077-166.957s-203.906 69.473-240.077 166.957z"/>
              <path d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957z"/>
            </g>
          </svg>
        );
      case 'pt':
        return (
          <svg className="w-4 h-3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="m0 256c0 110.07 69.472 203.905 166.955 240.076l22.262-240.077-22.262-240.076c-97.483 36.172-166.955 130.006-166.955 240.077z" fill="#6da544"/>
            <path d="m512 256c0-141.384-114.616-256-256-256-31.314 0-61.311 5.633-89.045 15.923v480.154c27.734 10.291 57.731 15.923 89.045 15.923 141.384 0 256-114.616 256-256z" fill="#d80027"/>
            <circle cx="166.957" cy="256" fill="#ffda44" r="89.043"/>
            <path d="m116.87 211.478v55.652c0 27.662 22.424 50.087 50.087 50.087s50.087-22.424 50.087-50.087v-55.652z" fill="#d80027"/>
            <path d="m166.957 283.826c-9.206 0-16.696-7.49-16.696-16.696v-22.26h33.391v22.261c0 9.205-7.49 16.695-16.695 16.695z" fill="#f0f0f0"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
      >
        <Globe className="h-5 w-5 text-blue-600" />
        <span className="text-sm font-medium text-blue-600 flex items-center space-x-1">
          <span>{languages.find(l => l.code === currentLanguage)?.flagText}</span>
          {renderFlagSVG(currentLanguage)}
        </span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center space-x-3 ${
                currentLanguage === lang.code ? 'bg-blue-50 text-blue-900' : 'text-blue-600'
              }`}
            >
              <span className="font-medium">{lang.flagText}</span>
              {renderFlagSVG(lang.code)}
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
