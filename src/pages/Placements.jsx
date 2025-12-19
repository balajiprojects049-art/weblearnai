const Placements = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="gradient-bg-primary" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Placements & Career Support</h1>
                    <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                        Comprehensive career assistance to help you land your dream job
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
                        <div className="card">
                            <h3>📊 Placement Statistics</h3>
                            <div style={{ marginTop: '1.5rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)' }}>95%</div>
                                    <div>Placement Rate</div>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)' }}>₹8.5 LPA</div>
                                    <div>Average Package</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-blue)' }}>500+</div>
                                    <div>Hiring Partners</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h3>🏢 Our Hiring Partners</h3>
                            <p>We have partnerships with leading companies across industries:</p>
                            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['Microsoft', 'Amazon', 'Google', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'Deloitte', 'Cognizant', 'Capgemini'].map((company) => (
                                    <span key={company} className="tag">{company}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Career Support Services</h2>

                    <div className="grid grid-3">
                        <div className="card">
                            <h4>📝 Resume Building</h4>
                            <p>Get professional resume reviews and optimization to stand out</p>
                        </div>
                        <div className="card">
                            <h4>🎤 Mock Interviews</h4>
                            <p>Practice with real interview scenarios and get expert feedback</p>
                        </div>
                        <div className="card">
                            <h4>💼 Job Referrals</h4>
                            <p>Direct referrals to our network of 500+ hiring partners</p>
                        </div>
                        <div className="card">
                            <h4>🎯 Career Planning</h4>
                            <p>One-on-one sessions to plan your career trajectory</p>
                        </div>
                        <div className="card">
                            <h4>📊 Portfolio Projects</h4>
                            <p>Build impressive projects that showcase your skills</p>
                        </div>
                        <div className="card">
                            <h4>🤝 LinkedIn Optimization</h4>
                            <p>Enhance your LinkedIn profile to attract recruiters</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Placements;
