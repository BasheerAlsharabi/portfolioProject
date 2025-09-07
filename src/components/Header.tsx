import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { locale } from "../config/i18n";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("locale") || "en");
  const location = useLocation();

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    if (link.startsWith("#")) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLangChange = () => {
    const newLang = lang === "en" ? "ar" : "en";
    locale.toggleLocales();
    setLang(newLang);
  };

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isAdminPage
          ? "bg-black/80 backdrop-blur-md border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Willie Garrett
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-6 flex items-baseline space-x-8">
              {!isAdminPage &&
                links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.link)}
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}

              {/* Admin Navigation Button */}
              {isAdminPage ? (
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                >
                  View Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <Link
                  to="/admin"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                >
                  Admin
                </Link>
              )}
            </div>
            {/* Language Switch Button */}
            <button
              onClick={handleLangChange}
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-purple-400 focus:outline-none focus:text-purple-400 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2 border border-purple-500/20">
              {!isAdminPage &&
                links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.link)}
                    className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                ))}

              {/* Mobile Admin Navigation */}
              {isAdminPage ? (
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View Portfolio
                </Link>
              ) : (
                <Link
                  to="/admin"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white block px-3 py-2 text-base font-medium w-full text-center rounded-lg mt-2 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
              {/* Language Switch Button (Mobile) */}
              <button
                onClick={handleLangChange}
                className="w-full mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
