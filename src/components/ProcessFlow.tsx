import { useEffect, useState, useRef } from 'react';
import { Lightbulb, Code, TestTube, Rocket, Settings, Users } from 'lucide-react';

const ProcessFlow = () => {
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

  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project roadmap.',
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-200/50 to-gray-300/50',
      borderColor: 'border-gray-300/20'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development',
      description: 'Our expert team brings your vision to life with clean, efficient code.',
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-200/50 to-gray-300/50',
      borderColor: 'border-gray-300/20'
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures your solution meets the highest quality standards.',
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-200/50 to-gray-300/50',
      borderColor: 'border-gray-300/20'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Deployment',
      description: 'Smooth deployment process with zero downtime and minimal disruption.',
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-200/50 to-gray-300/50',
      borderColor: 'border-gray-300/20'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Maintenance',
      description: 'Ongoing support and updates to keep your solution running optimally.',
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-200/50 to-gray-300/50',
      borderColor: 'border-gray-300/20'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Training & Support',
      description: 'Comprehensive training and dedicated support for your team.',
      color: 'text-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-200/50 to-gray-300/50',
      borderColor: 'border-gray-300/20'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative rounded-xl p-6 transition-all duration-500 hover:shadow-lg ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background & Border */}
                <div className={`absolute inset-0 ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full group-hover:before:animate-[shimmer_2s_infinite] before:transition-transform before:duration-1000`}></div>
                <div className={`absolute inset-0 border ${step.borderColor} rounded-xl`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`${step.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-sm font-semibold mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Connector Line (except for last items in each row) */}
                  {index % 3 !== 2 && index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;