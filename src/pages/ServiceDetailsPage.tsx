import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ServiceData {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  process: string[];
}

const servicesData: Record<string, ServiceData> = {
  'web-development': {
    title: 'Web App Development',
    description: 'We construct sophisticated internet packages that help drive business growth through innovative web solutions. Our web development services combine cutting-edge technology with user-centric design to create powerful, scalable applications.',
    features: [
      'Responsive Design',
      'Modern Frameworks',
      'SEO Optimization',
      'Performance Focused',
      'Custom CMS Integration',
      'E-commerce Solutions'
    ],
    benefits: [
      'Increased Online Presence',
      'Better User Engagement',
      'Improved Conversion Rates',
      'Scalable Architecture'
    ],
    process: [
      'Requirements Analysis',
      'UI/UX Design',
      'Development',
      'Testing & QA',
      'Deployment',
      'Maintenance & Support'
    ]
  },
  'software-development': {
    title: 'Software Development',
    description: 'Custom software development solutions for funded startups and enterprises. We create robust, scalable applications that solve complex business challenges and drive innovation.',
    features: [
      'Custom Solutions',
      'Scalable Architecture',
      'API Integration',
      'Cloud Deployment',
      'Database Design',
      'Security Implementation'
    ],
    benefits: [
      'Streamlined Operations',
      'Increased Efficiency',
      'Cost Reduction',
      'Competitive Advantage'
    ],
    process: [
      'Business Analysis',
      'Solution Design',
      'Development',
      'Testing',
      'Implementation',
      'Support'
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing services focused on boosting your online presence and driving quality traffic to your website. Our SEO strategies are designed to improve visibility and engagement.',
    features: [
      'SEO Strategy',
      'Content Marketing',
      'Social Media',
      'Analytics & Reporting',
      'PPC Campaigns',
      'Email Marketing'
    ],
    benefits: [
      'Increased Visibility',
      'Higher ROI',
      'Better Brand Awareness',
      'Targeted Traffic'
    ],
    process: [
      'Market Analysis',
      'Strategy Development',
      'Implementation',
      'Monitoring',
      'Optimization',
      'Reporting'
    ]
  },
  'maintenance-support': {
    title: 'Software Maintenance & Support',
    description: 'Comprehensive software maintenance and support services to ensure your applications run smoothly and efficiently. We provide continuous monitoring, updates, and technical support.',
    features: [
      '24/7 Monitoring',
      'Bug Fixes',
      'Performance Optimization',
      'Security Updates',
      'Technical Support',
      'Regular Maintenance'
    ],
    benefits: [
      'Reduced Downtime',
      'Enhanced Performance',
      'Proactive Maintenance',
      'Peace of Mind'
    ],
    process: [
      'System Analysis',
      'Issue Identification',
      'Solution Implementation',
      'Testing',
      'Deployment',
      'Monitoring'
    ]
  },
  'mobile-development': {
    title: 'Mobile App Development',
    description: 'Create powerful, user-friendly mobile applications that help your business thrive in the mobile-first world. We develop native and cross-platform apps that deliver exceptional user experiences.',
    features: [
      'iOS & Android',
      'Cross-Platform',
      'Native Performance',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    benefits: [
      'Wider Reach',
      'Enhanced User Experience',
      'Increased Engagement',
      'Brand Recognition'
    ],
    process: [
      'Concept Development',
      'UI/UX Design',
      'Development',
      'Testing',
      'App Store Submission',
      'Maintenance'
    ]
  },
  'development-teams': {
    title: 'Hire Development Teams',
    description: 'Access dedicated, skilled development teams that seamlessly integrate with your existing workflow. Our teams are carefully selected to match your project requirements and technical needs.',
    features: [
      'Dedicated Teams',
      'Flexible Scaling',
      'Project Management',
      'Quality Assurance',
      'Technical Expertise',
      'Agile Methodology'
    ],
    benefits: [
      'Cost Efficiency',
      'Faster Development',
      'Scalable Resources',
      'Technical Excellence'
    ],
    process: [
      'Team Selection',
      'Integration',
      'Project Planning',
      'Development',
      'Delivery',
      'Ongoing Support'
    ]
  }
};

const ServiceDetailsPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/services')}
            className="text-gray-600 hover:text-gray-800 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <button
              onClick={() => navigate('/services')}
              className="mb-8 text-gray-600 hover:text-gray-800 flex items-center justify-center"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Services
            </button>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 relative">
              {service.title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Process</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 md:block hidden"></div>
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  >
                    <div className="flex-1 p-6">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800">{step}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-gray-700 rounded-full relative z-10 mx-4 hidden md:block">
                      <div className="w-8 h-8 bg-gray-700/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    </div>
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-200 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105 relative overflow-hidden"
            >
              <span className="mr-2 font-semibold relative z-10">Contact Us Today</span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;