import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './CertificationsPage.css';
import texamCertifications from '../assets/texam-certifications.png';
import azureTechGroup from '../assets/azure-tech-group.png';
import certLogosWall from '../assets/certification-logos-wall.png';

const Certifications = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const certificationTracks = [
        {
            name: 'Cloud Certifications',
            icon: '☁️',
            description: 'Microsoft Azure, AWS, Google Cloud, and Databricks certifications',
            color: '#0078D4',
            detailedPoints: [
                {
                    title: 'Microsoft Azure Certifications (AZ-900, DP-203, AZ-104, etc.)',
                    description: 'Validate skills in cloud fundamentals, data engineering, administration, and solution architecture within the Azure ecosystem.'
                },
                {
                    title: 'Databricks Certifications (Data Engineer Associate/Professional, ML Professional)',
                    description: 'Focus on big data, Spark, Delta Lake, and machine learning for scalable data solutions.'
                },
                {
                    title: 'AWS Certifications (Cloud Practitioner, Solutions Architect, Data Engineer)',
                    description: 'Recognize expertise in cloud design, deployment, and operations on Amazon Web Services.'
                },
                {
                    title: 'Google Cloud Certifications (Associate Cloud Engineer, Professional Data Engineer, Architect)',
                    description: 'Demonstrate skills in GCP services, data pipelines, and cloud-native application development.'
                }
            ]
        },
        {
            name: 'Project & Business Management',
            icon: '📊',
            description: 'PMP, ITIL, and CRISC certifications for management professionals',
            color: '#28A745',
            detailedPoints: [
                {
                    title: 'PMP (Project Management Professional)',
                    description: 'Global standard certification for project management, covering methodologies, frameworks, and leadership.'
                },
                {
                    title: 'ITIL (Information Technology Infrastructure Library)',
                    description: 'Focus on IT service management best practices, service delivery, and governance.'
                },
                {
                    title: 'CRISC (Certified in Risk and Information Systems Control)',
                    description: 'Validates expertise in IT risk management and control implementation.'
                }
            ]
        },
        {
            name: 'Business Platforms',
            icon: '💼',
            description: 'Salesforce and ServiceNow platform certifications',
            color: '#00A1E0',
            detailedPoints: [
                {
                    title: 'Salesforce Certifications (Administrator, Developer, Architect)',
                    description: 'Validate skills in CRM platform management, app development, and Salesforce cloud solutions.'
                },
                {
                    title: 'ServiceNow Certifications (Administrator, Developer, ITSM, HRSD)',
                    description: 'Prove expertise in workflow automation, IT service management, and enterprise service delivery.'
                }
            ]
        },
        {
            name: 'Cybersecurity & Networking',
            icon: '🔐',
            description: 'CCNA, Cisco, CISA, CISM, and CompTIA security certifications',
            color: '#DD344C',
            detailedPoints: [
                {
                    title: 'CCNA (Cisco Certified Network Associate)',
                    description: 'Foundational certification in networking, routing, switching, and security fundamentals.'
                },
                {
                    title: 'Cisco Certifications (CCNP, CCIE)',
                    description: 'Advanced-level certifications in networking, security, and enterprise infrastructure.'
                },
                {
                    title: 'CISA (Certified Information Systems Auditor)',
                    description: 'Focus on auditing, governance, risk management, and compliance.'
                },
                {
                    title: 'CISM (Certified Information Security Manager)',
                    description: 'Management-focused certification for information security governance and strategy.'
                },
                {
                    title: 'CompTIA (Security+, Network+, Cloud+)',
                    description: 'Entry-to-mid-level certifications covering IT security, networking, and cloud technologies.'
                }
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
                            Weblearnai offers globally recognized certifications that validate your expertise across multiple domains.
                            Gain hands-on skills and industry credentials in Cloud Computing, Data Science, Cybersecurity, AI, and Project Management.
                            Our certification programs prepare you for real-world roles with practical training, live projects, and expert mentorship.
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
                        {/* Back to Home Button */}
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <Link to="/" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem 1.5rem',
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(10px)',
                                color: 'white',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: '500',
                                fontSize: '0.95rem',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                transition: 'all 0.3s ease'
                            }} onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }} onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}>
                                <span style={{ fontSize: '1.1rem' }}>←</span>
                                Back to Home
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



                    <div className="cert-tracks-list">
                        {certificationTracks.map((track, index) => (
                            <div
                                key={index}
                                className="cert-track-item card"
                                style={{ '--track-color': track.color }}
                            >
                                <div className="cert-track-icon-col">
                                    <div className="cert-track-icon-wrapper" style={{ backgroundColor: track.color }}>
                                        <span className="cert-track-emoji">{track.icon}</span>
                                    </div>
                                </div>
                                <div className="cert-track-content-col">
                                    <h3>{track.name}</h3>
                                    <p className="track-main-desc">{track.description}</p>

                                    {track.detailedPoints && (
                                        <ul className="cert-points-list">
                                            {track.detailedPoints.map((point, pIdx) => (
                                                <li key={pIdx}>
                                                    <div className="point-header">
                                                        <span className="point-dot" style={{ backgroundColor: track.color }}></span>
                                                        <strong>{point.title}</strong>
                                                    </div>
                                                    <p className="point-desc">{point.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supported Certifications Showcase */}
            <section className="section bg-white">
                <div className="container">
                    <div className="cert-showcase-container">
                        <div className="section-header text-center">
                            <div className="badge">Our Ecosystem</div>
                            <h2>Comprehensive Industry Certifications</h2>
                            <p className="lead">We prepare you for a wide range of globally recognized cloud and technology credentials</p>
                        </div>

                        <div className="cert-showcase-grid">
                            <div className="cert-image-wrapper card">
                                <img
                                    src={certLogosWall}
                                    alt="Certification Ecosystem"
                                    className="cert-showcase-image"
                                />
                                <div className="img-caption">Global Certification Vouchers Available</div>
                            </div>

                            <div className="cert-image-wrapper card">
                                <img
                                    src={azureTechGroup}
                                    alt="Azure & Data Engineering Ecosystem"
                                    className="cert-showcase-image"
                                />
                                <div className="img-caption">Azure Data Engineering Stack</div>
                            </div>

                            <div className="cert-image-wrapper card">
                                <img
                                    src={texamCertifications}
                                    alt="TEXAM Certified Technologies"
                                    className="cert-showcase-image"
                                />
                                <div className="img-caption">Professional Career Tracks</div>
                            </div>
                        </div>
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
