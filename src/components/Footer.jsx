import { Link } from 'react-router-dom';
import logo from './../assets/weblearnai-logo.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        courses: [
            { name: 'Data Engineering', path: '/courses#data-engineering' },
            { name: 'Microsoft Fabric', path: '/courses#microsoft-fabric' },
            { name: 'Power BI', path: '/courses#power-bi' },
            { name: 'Cloud Training', path: '/courses#cloud' },
            { name: 'Cybersecurity', path: '/courses#cybersecurity' },
            { name: 'Python with Gen AI', path: '/courses#python-ai' },
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Mentors', path: '/mentors' },
            { name: 'Placements', path: '/placements' },
            { name: 'Roadmap', path: '/roadmap' },
            { name: 'FAQs', path: '/faqs' },
            { name: 'Contact Us', path: '/contact' },
        ],
        programs: [
            { name: 'Internships', path: '/internships' },
            { name: 'Certifications', path: '/certifications' },
            { name: 'Career Support', path: '/placements' },
        ],
    };

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-column">
                            <div className="footer-logo">
                                <img src={logo} alt="WeblearnA Academy" className="footer-logo-image" />
                            </div>
                            <p className="footer-description">
                                Transform your career with industry-leading IT training in Data Engineering,
                                Cloud, AI, and Cybersecurity. Learn from experts, build real-world projects,
                                and get hired.
                            </p>
                            <div className="social-links">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Popular Courses */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Popular Courses</h4>
                            <ul className="footer-links">
                                {footerLinks.courses.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Programs */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Programs</h4>
                            <ul className="footer-links">
                                {footerLinks.programs.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Company</h4>
                            <ul className="footer-links">
                                {footerLinks.company.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Get In Touch</h4>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <span className="contact-icon">📧</span>
                                    <a href="mailto:info@weblearnai.com" className="contact-link">
                                        info@weblearnai.com
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📱</span>
                                    <a href="tel:+919154255508" className="contact-link">
                                        +91 91542 55508
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <span className="contact-text" style={{ fontWeight: '600' }}>
                                            Hyderabad Office
                                        </span>
                                        <span className="contact-text" style={{ fontSize: '0.9rem', opacity: '0.9' }}>
                                            Near Uppel Metro Station
                                        </span>
                                        <span className="contact-text" style={{ fontSize: '0.9rem', opacity: '0.9' }}>
                                            Telangana, India
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} Weblearnai Trainings. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
                            <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
