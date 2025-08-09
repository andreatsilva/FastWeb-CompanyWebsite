'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Smartphone, Globe, ShoppingCart, Calendar, Edit3 } from 'lucide-react';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Modern Restaurant Website",
      category: "business",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
      description: "Complete restaurant website with online ordering system and table booking.",
      features: ["Responsive Design", "Online Ordering", "Booking System", "SEO Optimized"],
      link: "#",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 2,
      title: "E-commerce Fashion Store",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      description: "Full-featured online store with product catalog, cart, and payment processing.",
      features: ["Product Catalog", "Shopping Cart", "Payment Processing", "Mobile Responsive"],
      link: "#",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Fitness Studio Booking",
      category: "booking",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      description: "Professional fitness website with class scheduling and member management.",
      features: ["Class Scheduling", "Member Management", "Mobile App", "Payment Integration"],
      link: "#",
      color: "from-green-400 to-blue-500"
    },
    {
      id: 4,
      title: "Professional Blog",
      category: "blog",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&crop=center",
      description: "Content-focused blog with SEO optimization and social media integration.",
      features: ["SEO Optimization", "Social Media", "Content Management", "Fast Loading"],
      link: "#",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            See what we've built for businesses like yours
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 space-x-4">
          {['all', 'business', 'ecommerce', 'booking', 'blog'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.category}</span>
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
