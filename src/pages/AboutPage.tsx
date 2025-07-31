import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap, Globe, Code } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <Award size={24} /> },
    { number: '25+', label: 'Happy Clients', icon: <Users size={24} /> },
    { number: '5+', label: 'Years Experience', icon: <Target size={24} /> },
    { number: '24/7', label: 'Support Available', icon: <Zap size={24} /> }
  ];

  const values = [
    {
      icon: <Code size={32} />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions to deliver cutting-edge results.',
      delay: 0
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'We work closely with our clients, ensuring their vision becomes reality through transparent communication.',
      delay: 100
    },
    {
      icon: <Target size={32} />,
      title: 'Excellence',
      description: 'Quality is never an accident. We maintain the highest standards in every project we undertake.',
      delay: 200
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Reach',
      description: 'Our solutions are designed to scale globally while maintaining local relevance and cultural sensitivity.',
      delay: 300
    }
  ];


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">


        {/* Floating particles for extra ambiance */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-gray-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-gray-500/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-16 w-3 h-3 bg-gray-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-gray-400/30 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/80 text-gray-700 text-sm rounded-full border border-gray-300/50 backdrop-blur-sm shadow-lg">
                🌍 Global Technology Partner
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 relative">
              About EdHost
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connecting businesses worldwide through innovative technology solutions and exceptional digital experiences.
            </p>
            
            {/* Global reach indicator */}
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Serving clients across 6 continents</span>
              </div>
              <div className="w-1 h-4 bg-gray-400"></div>
              <span>Global network of partnerships</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300 relative overflow-hidden">
                  <div className="text-gray-700 mb-3 group-hover:text-gray-900 transition-colors duration-300 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-white/80 text-gray-700 text-sm rounded-full border border-gray-300/50 backdrop-blur-sm shadow-sm mb-4">
                Our Journey
              </span>
              <h2 className="text-5xl font-bold text-gray-800 mb-6 relative inline-block">
                Our Story
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>
              
              <div className="space-y-16 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex items-center group"
                >
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 relative overflow-hidden">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Beginning</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Founded with a vision to bridge the gap between innovative technology and business success, EdHost has grown from a small team of passionate developers into a comprehensive technology solutions provider.
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12"></div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-1/2"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex items-center group"
                >
                  <div className="w-1/2"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 relative overflow-hidden">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Journey</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our journey began with a simple belief: every business deserves access to world-class technology solutions that drive growth and create meaningful connections with their customers.
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex items-center group"
                >
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 relative overflow-hidden">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Today & Beyond</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Today, we continue to push boundaries, embrace new technologies, and deliver exceptional results for businesses across various industries. Our commitment to excellence and innovation remains at the heart of everything we do.
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12"></div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 + value.delay / 1000 }}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 hover:border-gray-300 relative overflow-hidden"
              >
                <div className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors duration-300 group-hover:scale-110 transform">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
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
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how EdHost can help you achieve your technology goals and drive your business forward.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="group inline-flex items-center px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden"
            >
              <span className="mr-2 font-semibold relative z-10">Get Started Today</span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;