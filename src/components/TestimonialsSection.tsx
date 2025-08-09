'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      company: "The Garden Bistro",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Andre delivered our restaurant website in just 3 days! The online ordering system has increased our sales by 40%. Professional, fast, and exactly what we needed.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Fitness Coach",
      company: "FitLife Studio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The booking system on my website is amazing. Clients can schedule sessions easily, and it's saved me hours every week. Highly recommend!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      role: "Boutique Owner",
      company: "Style Haven",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "My e-commerce site looks professional and works perfectly. Andre understood exactly what I needed and delivered beyond expectations. Highly recommend!",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-300" />
                <p className="text-gray-700 italic pl-6">"{testimonial.text}"</p>
              </div>
              
              <p className="text-sm text-gray-500 mt-2">{testimonial.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
