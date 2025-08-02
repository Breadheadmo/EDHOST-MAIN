import { useEffect, useState, useRef } from 'react';
import { IconCloud } from "./ui/interactive-icon-cloud";

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

  const slugs = [
    "typescript",
    "javascript",
    "react",
    "vuedotjs",
    "angular",
    "nextdotjs",
    "nodedotjs",
    "python",
    "java",
    "dotnet",
    "flutter",
    "swift",
    "kotlin",
    "mongodb",
    "postgresql",
    "mysql",
    "redis",
    "docker",
    "git",
    "amazonaws",
    "firebase",
    "vercel"
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

          <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;