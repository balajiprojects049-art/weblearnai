import { useState, useEffect } from 'react';
import certBadges from '../assets/cert-badges.png';
import aboutHero from '../assets/about-hero.jpg';
import aboutPortrait from '../assets/about-portrait.jpg';
import pranayPortrait from '../assets/pranay-portrait.jpg';
import geethaPortrait from '../assets/geetha-portrait.png';
import './About.css';

const About = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mentors = [
        {
            name: 'Munavath',
            image: aboutPortrait,
            role: 'Co-founder of weblearnai / Certified Professional Coach',
            description: "Hi, I'm Munavath, a Senior Data Engineer skilled in designing and building data pipelines, integrating complex data systems, and delivering real-world analytics solutions across multiple domains. I'm passionate about helping aspiring professionals kickstart their Data Engineering journey by turning complex topics simple and hands-on by practical approach.",
            expertise: "Microsoft and Databricks certified professional with credentials in:",
            certs: [
                'Microsoft Certified: Azure Fundamentals',
                'Databricks Fundamentals',
                'Databricks Certified Data Engineer Associate'
            ],
            theme: '#f0f9ff' // Light blue
        },
        {
            name: 'Pranay Kumar Sikilambatla',
            image: pranayPortrait,
            role: 'Data Engineer / Ex. Microsoft',
            description: "Hi, I'm Pranay,Senior Data Engineer with 9+ years of extensive experience in architecting robust data pipelines and enterprise-scale ETL workflows. Pranay has successfully delivered high-performance data solutions across Finance, Healthcare, and Analytics domains, emphasizing automation, system reliability, and operational efficiency to drive business value.",
            expertise: "Skilled in advanced data infrastructure including:",
            certs: [
                'Python & SQL Expert',
                'PySpark & Databricks',
                'AWS & Azure Cloud',
                'Hadoop, Kafka & Airflow'
            ],
            theme: '#fdf2f8', // Light pink
            credentialImage: certBadges
        },
        {
            name: 'Geetha',
            image: geethaPortrait,
            role: 'Senior Data Engineer / Azure Expert',
            description: "Hi, I'm Geetha, a Senior Data Engineer dedicated to designing and implementing enterprise-grade data architectures. My expertise lies in orchestrating complex cloud data pipelines, optimizing ingestion workflows, and delivering scalable ETL/ELT solutions that transform raw data into critical business assets with high efficiency and reliability.",
            expertise: "Core specialization in Azure data stack:",
            certs: [
                'Azure Data Factory',
                'Azure Databricks',
                'ETL/ELT Architecture',
                'Cloud Orchestration'
            ],
            theme: '#ecfdf5' // Light green
        }
    ];

    const faqCategories = [
        {
            category: 'Program Knowledge',
            items: [
                {
                    question: 'Who is eligible for weblearnai Academy?',
                    answer: 'This program is perfect for working professionals from both tech and non-tech backgrounds. It\'s also great for graduates or anyone from other fields who are ready to work hard and build a career in Data Engineering.'
                },
                {
                    question: 'When are the live classes held?',
                    answer: 'Live classes are conducted daily, with batches available in the morning and evening hours.'
                },
                {
                    question: 'What is the Duration of the Program?',
                    answer: 'The program spans approximately 50 to 65 days, depending on the learning pace and class schedule.'
                },
                {
                    question: 'Does weblearnai give certificates?',
                    answer: 'Yes, Weblearnai Academy provides certificates upon successful completion of its programs.'
                }
            ]
        },
        {
            category: 'Teaching & Expertise',
            items: [
                {
                    question: 'What is the role of the Instructors?',
                    answer: 'Our Instructors would teach you the concepts mentioned in the course curriculum and would take live classes 6 times a week.'
                },
                {
                    question: 'What is profiles of instructor?',
                    answer: 'Our instructor is currently working as a Senior Data Engineer in a product-based company. He holds industry-recognized certifications from Microsoft and Databricks, bringing real-world experience and practical insights to the classroom.'
                }
            ]
        },
        {
            category: 'Career & Placement',
            items: [
                {
                    question: 'What kind of placement support will I be given?',
                    answer: [
                        'We provide three kinds of placement support:',
                        '• Leveraging our extensive network of hundreds of employer partners, we provide you with access to job opportunities to accelerate your career or transition to a new company.',
                        '• Our student, Instructor, and mentor community frequently posts job opportunities from their network as well.',
                        '• Preparation assistance via mock interviews, resume reviews, etc.',
                        '• With the right teaching, curriculum, and guidance, we are confident you will achieve your goals.'
                    ]
                },
                {
                    question: 'Will there be mock interviews?',
                    answer: 'Yes! We strive to prepare you for the career of your dreams. Thus, we have added multiple expert mock interviews to help you overcome pre-interview jitters and get you industry-ready.'
                }
            ]
        }
    ];

    const toggleFAQ = (catIndex, itemIndex) => {
        const uniqueIndex = `${catIndex}-${itemIndex}`;
        setOpenIndex(openIndex === uniqueIndex ? null : uniqueIndex);
    };

    return (
        <div className="about-page">
            <section className="about-hero" style={{
                backgroundImage: `url(${aboutHero})`,
                backgroundPosition: 'center 45%',
                backgroundSize: 'cover'
            }}>
                <div className="container">
                    <h1>About Weblearnai Academy</h1>
                    <p className="lead">
                        Empowering careers through world-class IT training and expert mentorship.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#111827', marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8' }}>
                                At Weblearnai Trainings, we are committed to transforming careers by providing industry-leading
                                training in Data Engineering, Cloud Computing, AI, and Cybersecurity. Our mission is to bridge
                                the gap between academic learning and industry requirements.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#111827', marginBottom: '1.5rem' }}>Who We Are</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.8' }}>
                                We are a team of passionate educators and industry experts with decades of combined experience
                                from top tech companies. Our instructors are working Senior Data Engineers who understand
                                exactly what product-based companies are looking for.
                            </p>
                        </div>
                    </div>

                    {/* Expert Mentors Section - spotlight layout */}
                    <div className="mentors-section-about" style={{ marginBottom: '8rem' }}>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <div className="badge" style={{ background: '#eff6ff', color: '#3b82f6' }}>Our Leadership</div>
                            <h2 style={{ fontSize: '2.5rem', color: '#111827', marginTop: '1rem' }}>Learn from Industry Experts</h2>
                            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Direct mentorship from builders of modern data platforms</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {mentors.map((mentor, index) => (
                                <div key={index} className="mentor-profile-layout">
                                    {/* Left: Portrait Card with Overlay */}
                                    <div className="mentor-portrait-card">
                                        {mentor.image ? (
                                            <img
                                                src={mentor.image}
                                                alt={mentor.name}
                                                className="mentor-portrait-image"
                                            />
                                        ) : (
                                            <div className="mentor-portrait-avatar">
                                                {mentor.avatar}
                                            </div>
                                        )}
                                        <div className="mentor-portrait-overlay">
                                            <h3 className="mentor-portrait-name">{mentor.name}</h3>
                                            <div className="mentor-portrait-role">{mentor.role}</div>
                                        </div>
                                    </div>

                                    {/* Right: Content & Bio */}
                                    <div className="mentor-details-col">
                                        <p className="mentor-bio">
                                            {mentor.description}
                                        </p>

                                        <div className="mentor-credentials">
                                            <p className="mentor-credentials-title">
                                                {mentor.expertise}
                                            </p>

                                            {mentor.credentialImage && (
                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <img src={mentor.credentialImage} alt="Credentials" style={{ maxWidth: '100%', borderRadius: '12px', height: 'auto', border: '1px solid #e5e7eb' }} />
                                                </div>
                                            )}

                                            <div className="mentor-badges">
                                                {mentor.certs.map((cert, cIdx) => (
                                                    <span key={cIdx} className="mentor-badge">
                                                        🏆 {cert}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="faq-section-about" style={{ marginTop: '6rem' }}>
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <div className="badge" style={{ background: '#ecfdf5', color: '#059669' }}>Got Questions?</div>
                            <h2 style={{ fontSize: '2.5rem', color: '#111827', marginTop: '1rem' }}>Frequently Asked Questions</h2>
                            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Everything you need to know about our training program</p>
                        </div>

                        {faqCategories.map((category, catIndex) => (
                            <div key={catIndex} style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    color: '#059669',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <span style={{ width: '30px', height: '2px', background: '#059669' }}></span>
                                    {category.category}
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {category.items.map((faq, itemIndex) => {
                                        const uniqueIndex = `${catIndex}-${itemIndex}`;
                                        const isOpen = openIndex === uniqueIndex;

                                        return (
                                            <div
                                                key={itemIndex}
                                                style={{
                                                    background: 'white',
                                                    borderRadius: '16px',
                                                    boxShadow: isOpen ? '0 10px 25px -5px rgba(0,0,0,0.1)' : '0 4px 6px -1px rgba(0,0,0,0.05)',
                                                    border: isOpen ? '1px solid #10b981' : '1px solid #e5e7eb',
                                                    overflow: 'hidden',
                                                    transition: 'all 0.3s ease',
                                                }}
                                            >
                                                <button
                                                    onClick={() => toggleFAQ(catIndex, itemIndex)}
                                                    style={{
                                                        width: '100%',
                                                        padding: '1.5rem',
                                                        background: 'none',
                                                        border: 'none',
                                                        textAlign: 'left',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        fontSize: '1.1rem',
                                                        fontWeight: 600,
                                                        color: isOpen ? '#059669' : '#1f2937',
                                                    }}
                                                >
                                                    <span>{faq.question}</span>
                                                    <span style={{
                                                        transition: 'transform 0.3s ease',
                                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                        color: isOpen ? '#059669' : '#9ca3af'
                                                    }}>
                                                        ▼
                                                    </span>
                                                </button>
                                                {isOpen && (
                                                    <div
                                                        style={{
                                                            padding: '0 1.5rem 1.75rem',
                                                            color: '#4b5563',
                                                            lineHeight: 1.8,
                                                            fontSize: '1.05rem',
                                                            animation: 'slideUpFade 0.4s ease forwards',
                                                        }}
                                                    >
                                                        {Array.isArray(faq.answer) ? (
                                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                                {faq.answer.map((line, lIdx) => (
                                                                    <p key={lIdx} style={{ margin: 0, paddingLeft: line.startsWith('•') ? '1rem' : '0' }}>
                                                                        {line}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            faq.answer
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-box" style={{ marginTop: '6rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', borderRadius: '30px', padding: '4rem', textAlign: 'center' }}>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                            Join hundreds of successful graduates who have transformed their careers with us.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="/contact" className="btn btn-primary" style={{ background: 'white', color: '#059669', padding: '1rem 3rem', fontWeight: 'bold' }}>
                                Enroll Now
                            </a>
                            <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary" style={{ background: 'transparent', border: '2px solid white', color: 'white', padding: '1rem 3rem', fontWeight: 'bold' }}>
                                Talk to Expert
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
