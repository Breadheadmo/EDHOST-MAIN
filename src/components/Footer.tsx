import { useNavigate } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/edhost_sa', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/edhostsa', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/edhost_sa', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/edhost', label: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: MapPin, text: '55 Richards Drive, Halfway House, Midrand, 1685' },
    { icon: Phone, text: '087 087 3213' },
    { icon: Mail, text: 'info@edhost.co.za' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <img 
                src="/public/images/Logo/Trim.png" 
                alt="EdHost Logo" 
                className="w-12 h-12 object-contain cursor-pointer hover:scale-105 transition-all duration-300"
              />
              <span className="text-white font-bold text-xl group-hover:text-gray-200 transition-colors duration-300">EdHost</span>
            </div>
            <p className="text-gray-400">
              Attracting Greatness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon size={20} className="text-gray-400 mt-1" />
                  <span className="text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} EdHost. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;