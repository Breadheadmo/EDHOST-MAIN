import { useEffect, useState, useRef } from 'react';
import { Shield, Zap, Clock, Award, Gem, HeartHandshake } from 'lucide-react';

const Features = () => {
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

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures and reliable infrastructure for your peace of mind.',
      gradient: 'from-gray-200/50 to-gray-300/50'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'High Performance',
      description: 'Optimized solutions that deliver lightning-fast performance and seamless user experience.',
      gradient: 'from-gray-200/50 to-gray-300/50'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Quick Turnaround',
      description: 'Efficient development process ensuring timely delivery without compromising quality.',
      gradient: 'from-gray-200/50 to-gray-300/50'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Best Practices',
      description: 'Following industry standards and best practices for sustainable, scalable solutions.',
      gradient: 'from-gray-200/50 to-gray-300/50'
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Delivering exceptional quality in every aspect of our development process.',
      gradient: 'from-gray-200/50 to-gray-300/50'
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Client Satisfaction',
      description: 'Committed to exceeding client expectations with personalized solutions and support.',
      gradient: 'from-gray-200/50 to-gray-300/50'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with innovative thinking to deliver exceptional results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-500 hover:shadow-lg relative overflow-hidden ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full group-hover:before:animate-[shimmer_2s_infinite] before:transition-transform before:duration-1000`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-gray-700 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-gray-200 rounded-2xl group-hover:border-transparent transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;