import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    <>
      {/* Logo positioned independently */}
      <div className="fixed top-4 left-4 z-50">
        <img 
          src="/public/images/Logo/Trim.png" 
          alt="EdHost Logo" 
          className="w-12 h-12 object-contain cursor-pointer hover:scale-105 transition-all duration-300"
          onClick={() => navigate('/')}
        />
      </div>

      {/* Tubelight Navigation */}
      <NavBar 
        items={navItems} 
        onItemClick={handleNavClick}
        currentPath={location.pathname}
        className={`transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl' : ''
        }`}
      />
    </>
  );
};

export default Header;