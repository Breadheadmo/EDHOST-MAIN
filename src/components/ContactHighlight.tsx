import { Mail, ArrowRight } from 'lucide-react';

const ContactHighlight = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@edhost.co.za';
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-200 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Ready to elevate your tech?
            </h3>
            <p className="text-gray-600">Contact us today!</p>
          </div>
          
          <button
            onClick={handleEmailClick}
            className="group inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Mail size={20} className="mr-2" />
            <span className="mr-2">info@edhost.co.za</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -skew-x-12"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHighlight;