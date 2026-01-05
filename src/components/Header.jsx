import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './../assets/weblearnai-logo.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Courses',
      path: '/courses',
      subLinks: [
        { name: 'Recorded Course', path: '/courses/recorded' },
        { name: 'Real Time Program', path: '/courses/real-time' }
      ]
    },
    { name: 'Internships', path: '/internships' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="WebLearnAI Academy" className="logo-image" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.name} className="nav-item-dropdown">
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
                  >
                    {link.name} <span style={{ fontSize: '0.8em', marginLeft: '4px' }}>▼</span>
                  </Link>
                  <div className="dropdown-menu">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className="dropdown-item"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="header-actions">
            <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-primary">
              Book Consultation
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="nav-mobile">
            {navLinks.map((link) => (
              <div key={link.name} style={{ display: 'flex', flexDirection: 'column' }}>
                <Link
                  to={link.path}
                  className={`nav-link-mobile ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.subLinks && link.subLinks.map((subLink) => (
                  <Link
                    key={subLink.name}
                    to={subLink.path}
                    className="dropdown-item"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
