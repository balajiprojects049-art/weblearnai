import { useState, useEffect } from 'react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqCategories = [
        {
            category: 'Program',
            items: [
                {
                    question: 'Who is eligible for weblearnai Academy?',
                    answer: 'This program is perfect for working professionals from both tech and non-tech backgrounds. It’s also great for graduates or anyone from other fields who are ready to work hard and build a career in Data Engineering.'
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
            category: 'Teaching and Mentors',
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
            category: 'Placement Support',
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
        <div className="faqs-page" style={{ paddingTop: '80px' }}>
            <section className="course-hero cert-hero" style={{ padding: '6rem 0', textAlign: 'center', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', position: 'relative' }}>
                <div className="container">
                    <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
                    <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '700px', margin: '0 auto' }}>
                        Everything you need to know about our programs, teaching methodology, and career support.
                    </p>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container" style={{ maxWidth: '900px' }}>
                    {faqCategories.map((category, catIndex) => (
                        <div key={catIndex} style={{ marginBottom: '4rem' }}>
                            <h2 style={{
                                fontSize: '1.75rem',
                                color: '#1e293b',
                                marginBottom: '2rem',
                                paddingLeft: '1rem',
                                borderLeft: '4px solid #3b82f6'
                            }}>
                                {category.category}
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {category.items.map((faq, itemIndex) => {
                                    const uniqueIndex = `${catIndex}-${itemIndex}`;
                                    const isOpen = openIndex === uniqueIndex;

                                    return (
                                        <div
                                            key={itemIndex}
                                            className={`faq-item ${isOpen ? 'active' : ''}`}
                                            style={{
                                                background: 'white',
                                                borderRadius: '16px',
                                                boxShadow: isOpen ? '0 10px 25px -5px rgba(0,0,0,0.1)' : '0 4px 6px -1px rgba(0,0,0,0.05)',
                                                border: isOpen ? '1px solid #3b82f6' : '1px solid #e5e7eb',
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
                                                    color: isOpen ? '#2563eb' : '#1f2937',
                                                }}
                                            >
                                                <span>{faq.question}</span>
                                                <span style={{
                                                    fontSize: '1.2rem',
                                                    transition: 'transform 0.3s ease',
                                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    color: isOpen ? '#2563eb' : '#9ca3af'
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

                    <div className="text-center" style={{
                        marginTop: '6rem',
                        padding: '4rem',
                        background: 'white',
                        borderRadius: '24px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Still have questions?</h3>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                            Our team is here to help you make the right decision for your career.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-large" style={{ padding: '1rem 3rem' }}>
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
