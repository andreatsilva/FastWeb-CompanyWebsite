'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, Smartphone, Globe, ShoppingCart, Calendar, Edit3, Search, Shield, Zap } from 'lucide-react';

export default function QuoteCalculator() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [basePrice] = useState(500);

  const features = [
    { id: 'pages', name: 'Number of Pages', price: 100, icon: Globe, description: 'Up to 5 pages included' },
    { id: 'responsive', name: 'Mobile Responsive', price: 150, icon: Smartphone, description: 'Works on all devices' },
    { id: 'seo', name: 'SEO Optimization', price: 200, icon: Search, description: 'Google-ready optimization' },
    { id: 'ecommerce', name: 'E-commerce', price: 300, icon: ShoppingCart, description: 'Online store functionality' },
    { id: 'booking', name: 'Booking System', price: 250, icon: Calendar, description: 'Appointment scheduling' },
    { id: 'blog', name: 'Blog Setup', price: 150, icon: Edit3, description: 'Content management system' },
    { id: 'ssl', name: 'SSL Certificate', price: 100, icon: Shield, description: 'Security & encryption' },
    { id: 'speed', name: 'Speed Optimization', price: 200, icon: Zap, description: 'Fast loading times' },
  ];

  const calculatePrice = () => {
    const total = selectedFeatures.reduce((sum, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, basePrice);
    return total;
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const getPreviewTemplate = () => {
    const hasEcommerce = selectedFeatures.includes('ecommerce');
    const hasBooking = selectedFeatures.includes('booking');
    
    if (hasEcommerce) return 'ecommerce';
    if (hasBooking) return 'booking';
    return 'business';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="bg-white rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">
          Interactive Quote Calculator
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                selectedFeatures.includes(feature.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => toggleFeature(feature.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start">
                <feature.icon className="h-6 w-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900">{feature.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <p className="text-lg font-bold text-blue-900">${feature.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-700">Base Price:</span>
            <span className="text-lg font-bold text-blue-900">$500</span>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-700">Selected Features:</span>
            <span className="text-lg font-bold text-blue-900">
              ${selectedFeatures.reduce((sum, id) => {
                const feature = features.find(f => f.id === id);
                return sum + (feature?.price || 0);
              }, 0)}
            </span>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-700">Total:</span>
              <span className="text-3xl font-bold text-blue-900">${calculatePrice()}</span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-black mb-4">Website Preview</h4>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                Based on your selections, your website will include:
              </p>
              <ul className="mt-2 space-y-1 text-shadow-black text-sm">
                {selectedFeatures.map(id => {
                  const feature = features.find(f => f.id === id);
                  return feature ? <li className='text-black' key={id}>✓ {feature.name}</li> : null;
                })}
              </ul>
            </div>
          </div>

          <motion.button 
            className="w-full mt-6 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Quote - ${calculatePrice()}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
