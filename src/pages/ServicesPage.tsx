import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Search, Wrench, Globe, Users, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe size={48} />,
      title: 'Web App Development',
      description: 'Construct internet packages to help drive business growth.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized', 'Performance Focused'],
      delay: 0
    },
    {
      icon: <Code size={48} />,
      title: 'Software Development',
      description: 'Solving custom software development problems for funded startups and enterprises.',
      features: ['Custom Solutions', 'Scalable Architecture', 'API Integration', 'Cloud Deployment'],
      delay: 100
    },
    {
      icon: <Search size={48} />,
      title: 'Digital Marketing',
      description: 'Search Engine Optimization (SEO)…boosting quality & quantity of site visitors.',
      features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'Analytics & Reporting'],
      delay: 200
    },
    {
      icon: <Wrench size={48} />,
      title: 'Software Maintenance & Support',
      description: 'Continuously manage, support, improve and extend your software.',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Performance Optimization', 'Security Updates'],
      delay: 300
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'True value‑added mobile apps that help your business grow and thrive.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Optimization'],
      delay: 400
    },
    {
      icon: <Users size={48} />,
      title: 'Hire Development Teams',
      description: 'Hire a superior, dedicated and managed engineering team for all your software needs.',
      features: ['Dedicated Teams', 'Flexible Scaling', 'Project Management', 'Quality Assurance'],
      delay: 500
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project roadmap.',
      icon: <Search size={24} />
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates intuitive designs and develops robust solutions.',
      icon: <Code size={24} />
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards.',
      icon: <CheckCircle size={24} />
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support.',
      icon: <Wrench size={24} />
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gray-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-400/10 rounded-full animate-bounce"></div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: service.delay / 1000 }}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 hover:border-gray-300 relative overflow-hidden"
              >
                <div className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300 group-hover:scale-110 transform">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="group/btn inline-flex items-center text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium">
                  <span className="border-b border-gray-300 group-hover/btn:border-gray-700 transition-colors duration-300">
                    Learn More
                  </span>
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50/30 to-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-grid-gray-800/5 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 inline-block">Our Process</h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="group text-center relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 hover:border-gray-300/50 relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-gray-100/50">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-800 mb-4 transition-all duration-300">
                    {step.step}
                  </div>
                  
                  <div className="text-gray-700 mb-4 transition-colors duration-300 flex justify-center transform group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                    {step.description}
                  </p>
                  
                  {/* Enhanced Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12 animate-pulse"></div>
                </div>

                {/* Animated Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 items-center transform -translate-y-1/2">
                    <div className="w-2 h-2 rounded-full bg-gray-400/50 animate-pulse"></div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-400/50 to-gray-300/30"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300/30 animate-pulse"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-200 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that drives your business forward.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="group inline-flex items-center px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden"
            >
              <span className="mr-2 font-semibold relative z-10">Get a Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;