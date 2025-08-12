import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import logoImage from '../images/Logo/Trim.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Contact Us', url: '/contact', icon: Mail }
  ];

  const handleNavClick = (item: any) => {
    navigate(item.url);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="relative">
          <img 
            src={logoImage}
            alt="EdHost Logo" 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center flex-grow">
          <NavBar 
            items={navItems} 
            onItemClick={handleNavClick}
            currentPath={location.pathname}
            className={`transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl' : ''}`}
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 animate-fade-in-down">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="flex items-center gap-3 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 px-2 rounded transition-colors"
              onClick={() => {
                handleNavClick(item);
                setIsMobileMenuOpen(false);
              }}
            >
              <item.icon className="text-gray-600" size={18} />
              <span className={`font-medium ${location.pathname === item.url ? 'text-blue-600' : 'text-gray-700'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;