import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CertificationsPage.css';

const Certifications = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const certificationTracks = [
        {
            name: 'Cloud Certifications',
            icon: '☁️',
            description: 'Microsoft Azure, AWS, Google Cloud, and Databricks certifications',
            detailedDescription: (
                <>
                    Validate your expertise in <strong className="highlight">cloud platforms</strong> and <strong className="highlight">big data technologies</strong>.
                </>
            ),
            color: '#0078D4',
            certs: [
                'Microsoft Azure Certifications (AZ-900, DP-203, AZ-104)',
                'Databricks Certifications (Data Engineer, ML Professional)',
                'AWS Certifications (Cloud Practitioner, Solutions Architect)',
                'Google Cloud Certifications (Associate Engineer, Data Engineer)'
            ]
        },
        {
            name: 'Project & Business Management',
            icon: '📊',
            description: 'PMP, ITIL, and CRISC certifications for management professionals',
            detailedDescription: (
                <>
                    Master <strong className="highlight">project management</strong> and <strong className="highlight">IT service delivery</strong> best practices.
                </>
            ),
            color: '#28A745',
            certs: [
                'PMP (Project Management Professional)',
                'ITIL (Information Technology Infrastructure Library)',
                'CRISC (Certified in Risk and Information Systems Control)'
            ]
        },
        {
            name: 'Business Platforms',
            icon: '💼',
            description: 'Salesforce and ServiceNow platform certifications',
            detailedDescription: (
                <>
                    Become an expert in <strong className="highlight">CRM</strong> and <strong className="highlight">enterprise service platforms</strong>.
                </>
            ),
            color: '#00A1E0',
            certs: [
                'Salesforce Certifications (Administrator, Developer, Architect)',
                'ServiceNow Certifications (Administrator, Developer, ITSM, HRSD)'
            ]
        },
        {
            name: 'Cybersecurity & Networking',
            icon: '🔐',
            description: 'CCNA, Cisco, CISA, CISM, and CompTIA security certifications',
            detailedDescription: (
                <>
                    Gain <strong className="highlight">security expertise</strong> and <strong className="highlight">network infrastructure</strong> skills.
                </>
            ),
            color: '#DD344C',
            certs: [
                'CCNA (Cisco Certified Network Associate)',
                'Cisco Certifications (CCNP, CCIE)',
                'CISA (Certified Information Systems Auditor)',
                'CISM (Certified Information Security Manager)',
                'CompTIA (Security+, Network+, Cloud+)'
            ]
        }
    ];

    return (
        <div className="certifications-page">
            {/* Hero Section */}
            <section className="course-hero cert-hero">
                <div className="course-hero-overlay"></div>
                <div className="container">
                    <div className="course-hero-content">
                        <div className="course-badge">Industry Recognized</div>
                        <h1>Professional Certifications</h1>
                        <p className="course-subtitle">
                            Gain globally recognized certifications that validate your expertise across multiple domains.
                            Hands-on skills and industry credentials in Cloud, Data Science, Cybersecurity, AI, and Management.
                        </p>
                        <div className="course-meta">
                            <span className="meta-item">🌍 Global Recognition</span>
                            <span className="meta-item">🎯 Expert Mentorship</span>
                            <span className="meta-item">📜 Industry Credentials</span>
                        </div>
                        <div className="course-cta">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Get Started
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                View Programs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Tracks */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Certification Programs</div>
                        <h2>Choose Your Certification Path</h2>
                        <p className="lead">
                            Select from industry-leading certifications across cloud, security, and business domains
                        </p>
                    </div>

                    {/* Backdrop */}
                    {expandedCard !== null && (
                        <div
                            className="card-backdrop"
                            onClick={() => setExpandedCard(null)}
                        ></div>
                    )}

                    <div className="tech-grid">
                        {certificationTracks.map((track, index) => (
                            <div
                                key={index}
                                className={`tech-card ${expandedCard === index ? 'expanded' : ''}`}
                                style={{ '--tech-color': track.color }}
                                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                            >
                                <button
                                    className="card-close-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedCard(null);
                                    }}
                                >
                                    ✕
                                </button>
                                <div className="tech-icon-wrapper">
                                    <div className="tech-icon-bg" style={{ backgroundColor: track.color }}>
                                        <svg className="tech-svg-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <text
                                                x="50"
                                                y="50"
                                                textAnchor="middle"
                                                dominantBaseline="central"
                                                className="tech-icon-text"
                                            >
                                                {track.icon}
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                                <h4>{track.name}</h4>
                                <p>{track.description}</p>
                                {track.detailedDescription && expandedCard === index && (
                                    <div className="tech-detailed-description">
                                        <p>{track.detailedDescription}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="section bg-light">
                <div className="container">
                    <div className="course-overview">
                        <h2>Certification Program Overview</h2>
                        <p>
                            Weblearnai's certification programs prepare you for real-world roles with practical training,
                            live projects, and expert mentorship. Our courses are designed to help you pass industry-standard
                            exams and gain hands-on experience with the latest technologies.
                        </p>

                        <div className="overview-grid">
                            <div className="overview-item">
                                <h3>🎯 What You'll Achieve</h3>
                                <ul>
                                    <li>Industry-recognized certifications</li>
                                    <li>Hands-on practical experience</li>
                                    <li>Real-world project portfolio</li>
                                    <li>Expert instructor guidance</li>
                                    <li>Exam preparation materials</li>
                                    <li>Career advancement opportunities</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>👨‍💻 Who Should Enroll</h3>
                                <ul>
                                    <li>IT professionals seeking advancement</li>
                                    <li>Career switchers to tech</li>
                                    <li>Recent graduates</li>
                                    <li>Cloud and security enthusiasts</li>
                                    <li>Aspiring data engineers</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>📚 Training Approach</h3>
                                <ul>
                                    <li>Live instructor-led classes</li>
                                    <li>Hands-on lab exercises</li>
                                    <li>Practice exams and quizzes</li>
                                    <li>Real-world case studies</li>
                                    <li>Study materials included</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>🎁 Program Benefits</h3>
                                <ul>
                                    <li>Flexible learning schedules</li>
                                    <li>Lifetime course access</li>
                                    <li>Expert mentorship</li>
                                    <li>Job placement assistance</li>
                                    <li>LinkedIn profile optimization</li>
                                    <li>Alumni network access</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Get Certified?</h2>
                        <p className="lead">
                            Start your certification journey today and boost your career with industry-recognized credentials.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Talk to Advisor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certifications;
