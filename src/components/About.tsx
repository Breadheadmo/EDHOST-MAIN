import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

    return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Section */}
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-700"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
                  <img
                    src="/images/about/office.jpg"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-700"></div>
              </div>
              
              {/* Content Section */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
                    About Us
                  </h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                
                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                  <p className="text-lg leading-relaxed">
                    We are a forward-thinking tech corporation committed to empowering businesses with cutting-edge technological solutions. Our mission is to transform digital aspirations into reality through innovation and expertise.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With a team of passionate professionals, we specialize in delivering tailored solutions that drive growth, enhance efficiency, and create lasting impact for our clients.
                  </p>
                </div>
                
                {/* Key Points */}
                <div className="grid grid-cols-2 gap-6 mt-12">
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">10+</div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">Years</div>
                        <div className="text-sm text-gray-600">Industry Experience</div>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">500+</div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 group-hover:text-purple-600 transition duration-300">Projects</div>
                        <div className="text-sm text-gray-600">Successfully Delivered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;