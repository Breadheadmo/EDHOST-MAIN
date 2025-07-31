import { useEffect, useState, useRef } from 'react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "EdHost transformed our digital presence completely. Their web development team delivered a sophisticated solution that exceeded our expectations and helped us scale our business effectively.",
      name: "Motheo Modisaesi",
      designation: "CEO at TechFlow Solutions",
      src: "/images/testimonials/Mo!.jpg"
    },
    {
      quote: "The mobile app development service was outstanding. EdHost's team understood our vision and created an app that our users love. The support throughout the process was exceptional.",
      name: "Zandile",
      designation: "CTO at InnovateSphere",
      src: "/images/testimonials/Zandile.jpg"
    },
    {
      quote: "Their digital marketing expertise boosted our online visibility significantly. The SEO strategies implemented by EdHost resulted in a 300% increase in organic traffic within six months.",
      name: "Katleho Watson",
      designation: "Marketing Director at CloudScale",
      src: "/images/testimonials/Kat.jpg"
    },
    {
      quote: "EdHost's software maintenance and support services have been invaluable. Their proactive approach keeps our systems running smoothly, allowing us to focus on growing our business.",
      name: "Onalerona Maine",
      designation: "Operations Manager at DataPro",
      src: "/images/testimonials/Stake.jpg"
    },
    {
      quote: "Working with EdHost's development team has been a game-changer. Their expertise in custom software development helped us streamline our operations and improve efficiency by 40%.",
      name: "Neo Sekaleli",
      designation: "Carbo Softwre",
      src: "/images/testimonials/Neo.jpg"
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how EdHost has helped businesses transform their digital presence and achieve remarkable growth through our innovative solutions.
            </p>
          </div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;