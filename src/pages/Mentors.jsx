const Mentors = () => {
    const mentors = [
        {
            name: 'Vikram Singh',
            avatar: '👨‍💼',
            role: 'Senior Data Engineer',
            experience: '15+ years',
            companies: 'Microsoft, Amazon',
            specialization: 'Azure, Databricks, Data Engineering',
            certifications: ['Azure Solutions Architect', 'Databricks Certified'],
        },
        {
            name: 'Sneha Reddy',
            avatar: '👩‍💻',
            role: 'Power BI Architect',
            experience: '12+ years',
            companies: 'Accenture, Deloitte',
            specialization: 'Power BI, DAX, Data Modeling',
            certifications: ['PL-300', 'Microsoft Fabric Expert'],
        },
        {
            name: 'Arjun Mehta',
            avatar: '👨‍🔬',
            role: 'Cloud Solutions Architect',
            experience: '10+ years',
            companies: 'Google, Meta',
            specialization: 'AWS, Azure, GCP, Kubernetes',
            certifications: ['AWS Solutions Architect', 'Azure & GCP Certified'],
        },
        {
            name: 'Priya Sharma',
            avatar: '👩‍💼',
            role: 'Cybersecurity Expert',
            experience: '11+ years',
            companies: 'IBM, Cisco',
            specialization: 'Ethical Hacking, Security Operations',
            certifications: ['CEH', 'CISM', 'CompTIA Security+'],
        },
        {
            name: 'Rahul Verma',
            avatar: '👨‍💻',
            role: 'AI/ML Engineer',
            experience: '8+ years',
            companies: 'Amazon, Flipkart',
            specialization: 'Python, Generative AI, LangChain',
            certifications: ['TensorFlow Certified', 'AWS ML Specialty'],
        },
    ];

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="gradient-bg-dark" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Meet Our Expert Mentors</h1>
                    <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                        Learn from industry veterans with decades of combined experience
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-3">
                        {mentors.map((mentor, index) => (
                            <div key={index} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>{mentor.avatar}</div>
                                <h3>{mentor.name}</h3>
                                <p style={{ color: 'var(--primary-blue)', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    {mentor.role}
                                </p>
                                <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                    {mentor.experience} | {mentor.companies}
                                </p>
                                <p style={{ marginBottom: '1rem' }}><strong>Specialization:</strong> {mentor.specialization}</p>
                                <div>
                                    {mentor.certifications.map((cert, idx) => (
                                        <span key={idx} className="tag" style={{ margin: '0.25rem' }}>
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <h2>Why Learn from Our Mentors?</h2>
                        <div className="grid grid-2" style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto 0' }}>
                            <div className="card">
                                <h4>Real-World Experience</h4>
                                <p>Our mentors have built and scaled systems at top tech companies</p>
                            </div>
                            <div className="card">
                                <h4>Industry Insights</h4>
                                <p>Get insider knowledge on what skills companies are actually looking for</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mentors;
