'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Smartphone, 
  Globe, 
  BarChart3,
  ShoppingCart,
  Calendar,
  Edit3,
  Search,
  Shield,
  Zap,
  Users,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import QuoteCalculator from '@/components/QuoteCalculator';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LanguageSelector from '@/components/LanguageSelector';
import { LanguageProvider, useTranslation } from '@/contexts/LanguageContext';
import AppointmentScheduler from '@/components/AppointmentScheduler';
import ContactSection from '@/components/ContactSection';


function HomeContent() {
  const { t, language, setLanguage } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-blue-900">{t('Navigation.title')}</h1>
              <p className="text-sm text-gray-600">{t('Navigation.subtitle')}</p>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-4">
              <a href="#services" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">{t('Navigation.services')}</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">{t('Navigation.portfolio')}</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">{t('Contact')}</a>
         
              <LanguageSelector onLanguageChange={setLanguage} />
            </div>
            
            <div className="md:hidden">
              <LanguageSelector onLanguageChange={setLanguage} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                {t('Hero.headline')}
                <span className="text-yellow-500"> — {t('Hero.subheadline')}</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8">
                {t('Hero.description')}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  {t('Hero.getQuote')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-colors"
                >
                  {t('Hero.viewPortfolio')}
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="FastWeb - AI Website Specialist"
                  className="rounded-2xl shadow-2xl mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-bold">
                  {t('Hero.deliveryBadge')}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="h-12 w-12 text-blue-900 mb-2" />
              <h3 className="font-semibold text-blue-900">{t('Trust.aiPowered')}</h3>
              <p className="text-sm text-gray-600">{t('Trust.aiDescription')}</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Smartphone className="h-12 w-12 text-blue-900 mb-2" />
              <h3 className="font-semibold text-blue-900">{t('Trust.mobileOptimized')}</h3>
              <p className="text-sm text-gray-600">{t('Trust.mobileDescription')}</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Clock className="h-12 w-12 text-blue-900 mb-2" />
              <h3 className="font-semibold text-blue-900">{t('Trust.fastDelivery')}</h3>
              <p className="text-sm text-gray-600">{t('Trust.deliveryDescription')}</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Search className="h-12 w-12 text-blue-900 mb-2" />
              <h3 className="font-semibold text-blue-900">{t('Trust.seoReady')}</h3>
              <p className="text-sm text-gray-600">{t('Trust.seoDescription')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                {t('About.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('About.description')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">{t('About.consult')}</h4>
                    <p className="text-gray-600">{t('About.consultDescription')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">{t('About.build')}</h4>
                    <p className="text-gray-600">{t('About.buildDescription')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">{t('About.launch')}</h4>
                    <p className="text-gray-600">{t('About.launchDescription')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop" 
                alt="Website development process"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
    
        
          
          
   

      {/* Portfolio Section */}
      
      <PortfolioSection t={t} />
      <ContactSection t={t} />
      {/* Testimonials Section */}
      <TestimonialsSection t={t} />

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('CTA.title')}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {t('CTA.description')}
            </p>
            <a 
              href="#quote" 
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              {t('CTA.startProject')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('Navigation.title')}</h3>
              <p className="text-gray-400">{t('Navigation.subtitle')}</p>
              <p className="text-gray-400 mt-2">{t('Hero.deliveryBadge')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('Footer.services')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('Features.responsive')}</li>
                <li>{t('Features.ecommerce')}</li>
                <li>{t('Features.booking')}</li>
                <li>{t('Features.seo')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('Footer.contact')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  andre@andresilva.dev
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Available Worldwide
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('Footer.follow')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>{t('Footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}