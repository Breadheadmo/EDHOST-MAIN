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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center">
        {/* Logo */}
        <div className="relative">
          <img 
            src="/public/images/Logo/Trim.png" 
            alt="EdHost Logo" 
            className="w-24 h-24 object-contain cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Centered Navigation */}
        <div className="flex-grow flex justify-center">
          <NavBar 
            items={navItems} 
            onItemClick={handleNavClick}
            currentPath={location.pathname}
            className={`transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl' : ''}`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;