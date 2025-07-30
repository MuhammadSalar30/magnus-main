import React, { useState } from 'react';

interface MobileMenuProps {
  navItems: { id: string; label: string; icon?: React.ReactNode }[];
  currentPage: string;
  onNavigateToPage: (page: string) => void;
  isScrolled: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navItems,
  currentPage,
  onNavigateToPage,
  isScrolled
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-b from-white/80 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 py-3">
        <div />
        <button
          className="p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="bg-white border-t shadow-md animate-fade-in-down">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setOpen(false);
                onNavigateToPage(item.id);
              }}
              className={`w-full text-left px-6 py-4 flex items-center gap-3 hover:bg-gray-100 transition ${
                currentPage === item.id ? 'bg-gray-200 font-semibold' : ''
              }`}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label == 'Contact' ? "Let's Talk" : item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
