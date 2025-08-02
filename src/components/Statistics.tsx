import { useEffect, useState, useRef } from 'react';
import { Users, Star, Code2, Award } from 'lucide-react';

const Statistics = () => {
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

  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      value: '500+',
      label: 'Happy Clients',
      description: 'Trusted by businesses worldwide',
      gradient: 'from-blue-500 via-blue-400 to-cyan-400'
    },
    {
      icon: <Star className="w-10 h-10" />,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback',
      gradient: 'from-purple-500 via-purple-400 to-pink-400'
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      value: '1000+',
      label: 'Projects Completed',
      description: 'Across various industries',
      gradient: 'from-orange-500 via-orange-400 to-red-400'
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: '50+',
      label: 'Industry Awards',
      description: 'Recognition for excellence',
      gradient: 'from-green-500 via-green-400 to-emerald-400'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Delivering exceptional results and creating lasting impact for businesses around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>

                {/* Glass Effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  <div className="space-y-3">
                    <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
                      {stat.value}
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white">
                      {stat.label}
                    </h3>
                    
                    <p className="text-gray-300 text-lg">
                      {stat.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;