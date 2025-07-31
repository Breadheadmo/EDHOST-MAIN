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
      icon: <Users className="w-8 h-8" />,
      value: '500+',
      label: 'Happy Clients',
      description: 'Trusted by businesses worldwide',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      value: '1000+',
      label: 'Projects Completed',
      description: 'Across various industries',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '50+',
      label: 'Industry Awards',
      description: 'Recognition for excellence',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Delivering exceptional results and creating lasting impact for businesses around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {stat.value}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white">
                      {stat.label}
                    </h3>
                    
                    <p className="text-gray-300">
                      {stat.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8 group-hover:scale-150 transition-transform duration-500"></div>
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