import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20">
      {/* Floating particles for extra ambiance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gray-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-gray-500/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-gray-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-gray-400/30 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-gray-800 backdrop-blur-sm">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <div className="flex h-full flex-col lg:flex-row">
              {/* Left content */}
              <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-6">
                  We create sophisticated
                  <br />
                  <span className="text-gray-300">high‑tech solutions</span>
                </h1>
                
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed">
                  Empowering businesses with custom software, web apps, mobile apps, digital marketing, and comprehensive support services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    onClick={scrollToServices}
                    className="group inline-flex items-center px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 w-fit relative overflow-hidden"
                  >
                    <span className="mr-2 font-semibold">Explore Our Services</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
                  </button>

                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="group inline-flex items-center px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:scale-105 w-fit relative overflow-hidden"
                  >
                    <span className="font-semibold">Get In Touch</span>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
                  </button>
                </div>

                {/* Global reach indicator */}
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Professional services available</span>
                  </div>
                  <div className="w-1 h-4 bg-gray-600"></div>
                  <span>24/7 Support Available</span>
                </div>
              </div>

              {/* Right content - 3D Scene */}
              <div className="flex-1 relative min-h-[300px] lg:min-h-full">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;