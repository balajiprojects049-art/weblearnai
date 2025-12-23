import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        topicInterest: '', // Course selection
        studentStatus: '', // College Student, Working Professional, Graduated but not working
        studentDetails: '', // For College Student: Fresher, 2024, 2023, etc.
        experienceYears: '', // For Working Professional: 0-1, 1-3, 3-5, 5+
        graduatedDetails: '', // For Graduated but not working: Year of graduation
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

        // Create submission object with timestamp
        const submission = {
            id: Date.now().toString(),
            ...formData,
            timestamp: new Date().toLocaleString('en-IN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            })
        };

        // Save to localStorage
        const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        existingSubmissions.unshift(submission); // Add to beginning of array (newest first)
        localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

        setStatus('Message sent successfully! We\'ll get back to you soon.');
        console.log('Form submitted and saved:', submission);

        // Reset form
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                topicInterest: '',
                studentStatus: '',
                studentDetails: '',
                experienceYears: '',
                graduatedDetails: '',
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
                                    <label>1. Your Topic of interest? *</label>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="topicInterest"
                                                value="Data Engineering - Azure & Databricks"
                                                checked={formData.topicInterest === 'Data Engineering - Azure & Databricks'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Data Engineering - Azure & Databricks</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="topicInterest"
                                                value="Microsoft Fabric Data Engineer"
                                                checked={formData.topicInterest === 'Microsoft Fabric Data Engineer'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Microsoft Fabric Data Engineer</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="topicInterest"
                                                value="Full Stack Power BI"
                                                checked={formData.topicInterest === 'Full Stack Power BI'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Full Stack Power BI</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="topicInterest"
                                                value="Cybersecurity & Python with Gen AI"
                                                checked={formData.topicInterest === 'Cybersecurity & Python with Gen AI'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Cybersecurity & Python with Gen AI</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="topicInterest"
                                                value="Cloud Engineering"
                                                checked={formData.topicInterest === 'Cloud Engineering'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Cloud Engineering</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="topicInterest"
                                                value="Python with Generative AI"
                                                checked={formData.topicInterest === 'Python with Generative AI'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Python with Generative AI</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="topicInterest"
                                                value="Cloud Internships"
                                                checked={formData.topicInterest === 'Cloud Internships'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Cloud Internships</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>2. Are you a College Student or Working Professional or Graduated but not working? *</label>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="studentStatus"
                                                value="College Student"
                                                checked={formData.studentStatus === 'College Student'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>College Student</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="studentStatus"
                                                value="Working Professional"
                                                checked={formData.studentStatus === 'Working Professional'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Working Professional</span>
                                        </label>
                                        <label className="checkbox-label">
                                            <input
                                                type="radio"
                                                name="studentStatus"
                                                value="Graduated but not working"
                                                checked={formData.studentStatus === 'Graduated but not working'}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span>Graduated but not working</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Conditional follow-up for College Student */}
                                {formData.studentStatus === 'College Student' && (
                                    <div className="form-group follow-up-field">
                                        <label htmlFor="studentDetails">When did/will you pass out? *</label>
                                        <select
                                            id="studentDetails"
                                            name="studentDetails"
                                            value={formData.studentDetails}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="Fresher (Currently Studying)">Fresher (Currently Studying)</option>
                                            <option value="2025">2025</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="Before 2021">Before 2021</option>
                                        </select>
                                    </div>
                                )}

                                {/* Conditional follow-up for Working Professional */}
                                {formData.studentStatus === 'Working Professional' && (
                                    <div className="form-group follow-up-field">
                                        <label htmlFor="experienceYears">How many years of experience do you have? *</label>
                                        <select
                                            id="experienceYears"
                                            name="experienceYears"
                                            value={formData.experienceYears}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select years of experience</option>
                                            <option value="0-1 years">0-1 years</option>
                                            <option value="1-3 years">1-3 years</option>
                                            <option value="3-5 years">3-5 years</option>
                                            <option value="5-8 years">5-8 years</option>
                                            <option value="8+ years">8+ years</option>
                                        </select>
                                    </div>
                                )}

                                {/* Conditional follow-up for Graduated but not working */}
                                {formData.studentStatus === 'Graduated but not working' && (
                                    <div className="form-group follow-up-field">
                                        <label htmlFor="graduatedDetails">When did you graduate? *</label>
                                        <select
                                            id="graduatedDetails"
                                            name="graduatedDetails"
                                            value={formData.graduatedDetails}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select graduation year</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="Before 2020">Before 2020</option>
                                        </select>
                                    </div>
                                )}

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
