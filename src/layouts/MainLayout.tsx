import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck, Menu, X } from 'lucide-react';
import clsx from 'clsx';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Über uns', path: '/' },
    { name: 'Unser Fuhrpark', path: '/fuhrpark' },
    { name: 'Agrarprodukte', path: '/agrarprodukte' },
    { name: 'Spedition & Logistik', path: '/spedition-logistik' },
    { name: 'Zertifikate', path: '/zertifikate' },
    { name: 'Kontakt', path: '/kontakt' },
    { name: 'Impressum', path: '/impressum' },
    { name: 'Datenschutzerklärung', path: '/datenschutzerklaerung' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-secondary bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Truck className="w-12 h-12 text-secondary" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter leading-none border-2 border-secondary px-2 py-1">
                  KOLB-TRANSPORTE
                </span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-wrap justify-end gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    "text-sm uppercase tracking-wide font-semibold hover:text-primary transition-colors pb-1 border-b-2 border-transparent",
                    location.pathname === item.path && "text-primary border-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    "px-4 py-3 border-b text-sm uppercase font-semibold",
                    location.pathname === item.path ? "bg-gray-50 text-primary" : "text-secondary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p className="mb-2">
            Proudly powered by WordPress | Theme: Radiate Pro by ThemeGrill.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Franz Kolb GmbH & Co. KG
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
