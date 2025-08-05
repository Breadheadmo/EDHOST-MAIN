import { useEffect, useState, useRef, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';

const ContactDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      content: '55 Richards Drive, Halfway House, Midrand, 1685',
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
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
                  </button>
                  {formStatus === 'success' && (
                    <div className="text-green-600 text-center animate-fade-in">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information and Map */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group flex items-start space-x-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 ${
                      isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
                    }`}
                    style={{ transitionDelay: `${info.delay}ms` }}
                  >
                    <div className="text-gray-700 mt-1 group-hover:scale-110 transition-transform duration-300">
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
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.3654564641443!2d28.120!3d-26.014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95739c7a0a2a57%3A0x6ec26f1f3f5f1fa9!2s55%20Richards%20Dr%2C%20Halfway%20House%2C%20Midrand%2C%201685!5e0!3m2!1sen!2sza!4v1625097600000"
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
      </div>
    </section>
  );
};

export default ContactDetails;