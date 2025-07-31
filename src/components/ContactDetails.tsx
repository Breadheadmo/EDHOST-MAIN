import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactDetails = () => {
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

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      content: 'BG8, Block B, 688 Gallagher Avenue, Gallagher Business Exchange, Halfway House, Midrand 1685',
      delay: 0
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '087 087 3213',
      delay: 100
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'info@edhost.co.za',
      delay: 200
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 ${
                    isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
                  }`}
                  style={{ transitionDelay: `${info.delay}ms` }}
                >
                  <div className="text-gray-700 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'}`}>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.3654564641443!2d28.125847!3d-26.084278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95739c7a0a2a57%3A0x3c7e5e2d4a8d7b8c!2sGallagher%20Business%20Exchange%2C%20Halfway%20House%2C%20Midrand!5e0!3m2!1sen!2sza!4v1625097600000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                  title="EdHost Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;