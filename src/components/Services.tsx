import { useEffect, useState, useRef } from 'react';
import { Code, Smartphone, Search, Wrench, Globe, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Web App Development',
      description: 'Construct internet packages to help drive business growth.',
      delay: 0,
      id: 'web-development'
    },
    {
      icon: <Code size={32} />,
      title: 'Software Development',
      description: 'Solving custom software development problems for funded startups and enterprises.',
      delay: 100,
      id: 'software-development'
    },
    {
      icon: <Search size={32} />,
      title: 'Digital Marketing',
      description: 'Search Engine Optimization (SEO)…boosting quality & quantity of site visitors.',
      delay: 200,
      id: 'digital-marketing'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Software Maintenance & Support',
      description: 'Continuously manage, support, improve and extend your software.',
      delay: 300,
      id: 'maintenance-support'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'True value‑added mobile apps that help your business grow and thrive.',
      delay: 400,
      id: 'mobile-development'
    },
    {
      icon: <Users size={32} />,
      title: 'Hire Development Teams',
      description: 'Hire a superior, dedicated and managed engineering team for all your software needs.',
      delay: 500,
      id: 'development-teams'
    }
  ];

  const navigate = useNavigate();

  const handleLearnMore = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section id="services" ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We create sophisticated high‑tech solutions, including whole goods (IT outsourcing) and team building (outstaffing).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 hover:border-gray-300 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 relative overflow-hidden ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${service.delay}ms` }}
              >
                <div className="text-gray-700 mb-4 group-hover:text-gray-900 transition-all duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <button 
                  onClick={() => handleLearnMore(service.id)}
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-all duration-300 group-hover:translate-x-1 relative"
                >
                  <span className="border-b border-gray-300 group-hover:border-gray-700 transition-colors duration-300">
                    Learn More
                  </span>
                  
                  {/* Enhanced Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12"></div>
                </button>
                {/* Card Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;