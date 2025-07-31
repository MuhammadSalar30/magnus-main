import React from 'react';
import MobileMenu from './MobileMenu';

interface NavigationProps {
  isScrolled: boolean;
  currentPage: string;
  onNavigateToPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  currentPage,
  onNavigateToPage
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'landlords', label: 'Landlords' },
    { id: 'multifamily', label: 'Multi-Family' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between p-6">
          {/* Logo and Brand */}
          <div 
            onClick={() => onNavigateToPage('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img 
              src="Magnus/magnus.png" 
              alt="Magnus & Co" 
              className="h-8 w-8"
            />
            <span className={`text-3xl font-extrabold tracking-tight transition-colors ${
              isScrolled ? 'text-[#0B0B0B]' : 'text-[#0B0B0B]'
            } group-hover:text-[#C09D68]`}>
              Magnus & Co
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item) => (
         <button
         key={item.id}
         onClick={() => onNavigateToPage(item.id)}
         className={`px-4 py-2 rounded-md text-base font-semibold transition-all duration-300 ${
          currentPage === item.id
            ? 'bg-black/80 text-[#C09D68]'
            : isScrolled 
              ? 'text-gray-700 hover:text-[#C09D68]' 
              : 'bg-black/50 text-white hover:text-[#C09D68]'
        }`}
        
       >
         {item.label}
       </button>
       
            ))}
            
            <button
              onClick={() => onNavigateToPage('contact')}
              className="bg-[#C09D68] text-white px-7 py-3 rounded-lg font-semibold text-base hover:bg-[#A89F91] transition-all duration-300 shadow-md"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
            {/* Mobile Menu */}
            <div className="md:hidden">
            <MobileMenu
              navItems={navItems}
              currentPage={currentPage}
              onNavigateToPage={onNavigateToPage}
              isScrolled={isScrolled}
            />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
