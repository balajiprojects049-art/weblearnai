import { useState } from 'react';

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Who can enroll in these courses?',
            answer: 'Anyone with basic computer knowledge can enroll. Our courses cater to fresh graduates, working professionals, and career switchers from both IT and non-IT backgrounds.',
        },
        {
            question: 'What are the class schedules?',
            answer: 'We offer flexible batches including weekend batches (Saturday-Sunday) and weekday evening batches (7 PM - 9 PM IST). You can choose based on your availability.',
        },
        {
            question: 'How long do the programs last?',
            answer: 'Course durations vary from 6 weeks (internships) to 14 weeks (comprehensive programs). Each program is designed to provide thorough coverage of the subject matter.',
        },
        {
            question: 'Will I get a certificate?',
            answer: 'Yes! You will receive a completion certificate from Weblearnai Trainings. Many of our courses also prepare you for industry certifications like Microsoft, AWS, and CompTIA.',
        },
        {
            question: 'Do you provide placement support?',
            answer: 'Absolutely! We offer comprehensive placement support including resume reviews, mock interviews, job referrals, and direct connections to our network of 500+ hiring partners.',
        },
        {
            question: 'Can I switch batches?',
            answer: 'Yes, batch flexibility is available. If you miss a class or need to change your schedule, you can switch to another batch with prior intimation.',
        },
        {
            question: 'Do you offer EMI options?',
            answer: 'Yes, we offer flexible payment plans and EMI options to make our courses accessible. Contact our admissions team for details.',
        },
        {
            question: 'Will I have lifetime access to course materials?',
            answer: 'Yes! Once enrolled, you get lifetime access to all course recordings, materials, projects, and future updates.',
        },
        {
            question: 'What if I miss a live class?',
            answer: 'All live sessions are recorded and available within 24 hours. You can watch the recording at your convenience and still submit assignments.',
        },
        {
            question: 'Do I need prior programming experience?',
            answer: 'For beginner-level courses like Power BI and cloud fundamentals, no prior programming is required. Intermediate courses may require basic SQL/Python knowledge, which we can help you build.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="gradient-bg-dark" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Frequently Asked Questions</h1>
                    <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                        Got questions? We've got answers
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'white',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '2px solid var(--gray-100)',
                                    overflow: 'hidden',
                                    transition: 'all var(--transition-base)',
                                }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
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
                                        fontSize: '1.125rem',
                                        fontWeight: 600,
                                        color: 'var(--gray-900)',
                                    }}
                                >
                                    <span>{faq.question}</span>
                                    <span style={{ fontSize: '1.5rem', transition: 'transform var(--transition-base)', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        ▼
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div
                                        style={{
                                            padding: '0 1.5rem 1.5rem',
                                            color: 'var(--gray-700)',
                                            lineHeight: 1.7,
                                            animation: 'slideDown 0.3s ease-out',
                                        }}
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <h3>Still have questions?</h3>
                        <p style={{ marginBottom: '2rem' }}>Our team is here to help you make the right decision</p>
                        <a href="/contact" className="btn btn-primary btn-large">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
