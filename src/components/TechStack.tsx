import { useEffect, useState, useRef } from 'react';

const TechStack = () => {
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

  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: '/images/tech/react.svg' },
        { name: 'Vue.js', icon: '/images/tech/vue.svg' },
        { name: 'Angular', icon: '/images/tech/angular.svg' },
        { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
        { name: 'Python', icon: '/images/tech/python.svg' },
        { name: 'Java', icon: '/images/tech/java.svg' },
        { name: '.NET', icon: '/images/tech/dotnet.svg' },
      ]
    },
    {
      category: 'Mobile',
      items: [
        { name: 'React Native', icon: '/images/tech/react-native.svg' },
        { name: 'Flutter', icon: '/images/tech/flutter.svg' },
        { name: 'Swift', icon: '/images/tech/swift.svg' },
        { name: 'Kotlin', icon: '/images/tech/kotlin.svg' },
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', icon: '/images/tech/mongodb.svg' },
        { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg' },
        { name: 'MySQL', icon: '/images/tech/mysql.svg' },
        { name: 'Redis', icon: '/images/tech/redis.svg' },
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Tech Stack</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and efficient solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 relative overflow-hidden ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Category Card Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12 pointer-events-none"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{tech.category}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {tech.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Tech Item Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12 pointer-events-none"></div>
                      <div className="w-12 h-12 mb-2 transform group-hover:scale-125 transition-all duration-300">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;