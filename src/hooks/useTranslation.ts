'use client';

import { useState, useEffect } from 'react';
import enMessages from '../../messages/en.json';
import esMessages from '../../messages/es.json';
import ptMessages from '../../messages/pt.json';

const messages = {
  en: enMessages,
  es: esMessages,
  pt: ptMessages,
};

export function useTranslation() {
  const [language, setLanguage] = useState('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let result = messages[language as keyof typeof messages];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k as keyof typeof result];
      } else {
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return { t, language, setLanguage };
}
