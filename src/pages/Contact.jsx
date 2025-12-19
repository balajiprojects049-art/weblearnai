import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent successfully! We\'ll get back to you soon.');
        // Here you would integrate with your backend/email service
        console.log('Form submitted:', formData);

        // Reset form
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                course: '',
                message: '',
            });
            setStatus('');
        }, 3000);
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero gradient-bg-secondary">
                <div className="container">
                    <div className="text-center">
                        <h1 style={{ color: 'white' }}>Get In Touch</h1>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                            Have questions? We're here to help you choose the right career path
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <div className="contact-form-container">
                            <h2>Book Your Free Career Consultation</h2>
                            <p className="form-description">
                                Fill out the form below and our career advisors will reach out to you within 24 hours
                            </p>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="course">Interested Course</label>
                                    <select
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a course</option>
                                        <option value="data-engineering">Data Engineering - Azure & Databricks</option>
                                        <option value="microsoft-fabric">Microsoft Fabric Data Engineer</option>
                                        <option value="power-bi">Full Stack Power BI</option>
                                        <option value="cybersecurity">Cybersecurity & Python with Gen AI</option>
                                        <option value="cloud">Cloud Engineering</option>
                                        <option value="python-ai">Python with Generative AI</option>
                                        <option value="internship">Cloud Internships</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your career goals and any questions you have..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-large">
                                    Send Message
                                </button>

                                {status && (
                                    <div className="form-status">
                                        {status}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-container">
                            <div className="contact-info-box">
                                <h3>Contact Information</h3>

                                <div className="info-item">
                                    <div className="info-icon">📧</div>
                                    <div>
                                        <div className="info-label">Email</div>
                                        <a href="mailto:info@weblearnai.com" className="info-value">
                                            info@weblearnai.com
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">📱</div>
                                    <div>
                                        <div className="info-label">Phone</div>
                                        <a href="tel:+919876543210" className="info-value">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">💬</div>
                                    <div>
                                        <div className="info-label">WhatsApp</div>
                                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="info-value">
                                            Chat with us
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">📍</div>
                                    <div>
                                        <div className="info-label">Address</div>
                                        <div className="info-value">
                                            MG Road, Bangalore<br />
                                            Karnataka 560001, India
                                        </div>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon">⏰</div>
                                    <div>
                                        <div className="info-label">Office Hours</div>
                                        <div className="info-value">
                                            Mon - Sat: 9:00 AM - 7:00 PM<br />
                                            Sunday: Closed
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="quick-links-box">
                                <h4>Quick Links</h4>
                                <ul className="quick-links">
                                    <li><a href="/courses">Browse All Courses</a></li>
                                    <li><a href="/internships">Internship Programs</a></li>
                                    <li><a href="/mentors">Meet Our Mentors</a></li>
                                    <li><a href="/faqs">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-container">
                    <iframe
                        title="Weblearnai Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.948204178704!2d77.60350431482185!3d12.971598990861024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
};

export default Contact;
