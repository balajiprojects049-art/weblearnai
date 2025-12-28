import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Internships.css';
import internshipsHero from '../assets/internships-hero.jpg';

const Internships = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="internships-page">
            {/* Hero Section */}
            <section
                className="internships-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url(${internshipsHero})`
                }}
            >
                <div className="container">
                    <div className="badge" style={{ marginBottom: '1.5rem' }}>Hands-on Learning</div>
                    <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem' }}>Cloud Internships</h1>
                    <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', maxWidth: '800px', margin: '0 auto' }}>
                        Bridge the gap between theory and industry with our expert-led internship programs.
                    </p>
                    {/* Back to Home Button */}
                    <div style={{ marginTop: '2rem' }}>
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
            </section>

            {/* Program Overview */}
            <section className="section overview-section" style={{ background: '#f8fafc', padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <div className="badge" style={{ background: '#ecfdf5', color: '#059669', marginBottom: '1rem' }}>Overview</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Cloud Internships Overview</h2>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: '1.8', fontWeight: '500' }}>
                        Weblearnai’s Cloud Internship program offers hands-on experience with AWS, Azure, and GCP using real-world projects.
                        Learn to design, deploy, and automate cloud solutions powered by Generative AI to become an industry-ready Cloud Engineer.
                    </p>
                </div>
            </section>

            {/* Detailed Curriculum Section */}
            <section className="section curriculum-section" style={{ padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>

                    <div className="curriculum-container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                        {/* Microsoft Azure */}
                        <div className="curriculum-block card azure-block">
                            <div className="curriculum-header">
                                <div className="tech-icon">☁️</div>
                                <h2>Microsoft Azure</h2>
                            </div>
                            <ul className="curriculum-list">
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Gained hands-on experience in <strong>Azure Data Factory (ADF)</strong>, <strong>Databricks</strong>, and <strong>Azure Storage</strong>.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Built <strong>ETL pipelines</strong>, managed data integration workflows, and explored <strong>serverless computing</strong> with Azure Functions.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Worked on <strong>real-time and batch data processing</strong> and <strong>Power BI integration</strong> for analytics.</span>
                                </li>
                            </ul>
                        </div>

                        {/* AWS */}
                        <div className="curriculum-block card aws-block">
                            <div className="curriculum-header">
                                <div className="tech-icon">🧡</div>
                                <h2>Amazon Web Services (AWS)</h2>
                            </div>
                            <ul className="curriculum-list">
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Exposure to <strong>EC2</strong>, <strong>S3</strong>, <strong>Lambda</strong>, <strong>RDS</strong>, and <strong>DynamoDB</strong>.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Designed and deployed <strong>scalable cloud-native applications</strong>.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Implemented <strong>monitoring and automation</strong> using CloudWatch and <strong>IAM security best practices</strong>.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Hands-on with <strong>serverless architecture</strong> and <strong>event-driven data pipelines</strong> using AWS Lambda and SQS/Kinesis.</span>
                                </li>
                            </ul>
                        </div>

                        {/* GCP */}
                        <div className="curriculum-block card gcp-block">
                            <div className="curriculum-header">
                                <div className="tech-icon">💙</div>
                                <h2>Google Cloud Platform (GCP)</h2>
                            </div>
                            <ul className="curriculum-list">
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Worked with <strong>BigQuery</strong>, <strong>Dataflow</strong>, and <strong>Pub/Sub</strong> for data engineering.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Built <strong>data pipelines</strong> using Cloud Storage and Data Fusion.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Explored <strong>AI/ML services</strong> (Vertex AI, AutoML) for model training and deployment.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Hands-on practice with <strong>Kubernetes (GKE)</strong> and serverless functions.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cybersecurity */}
                        <div className="curriculum-block card security-block">
                            <div className="curriculum-header">
                                <div className="tech-icon">🛡️</div>
                                <h2>Cybersecurity Internship</h2>
                            </div>
                            <ul className="curriculum-list">
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Learned <strong>network security fundamentals</strong>, including firewalls, IDS/IPS, and VPNs.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Exposure to <strong>cloud security best practices</strong> (Security Center, GuardDuty, Security Command Center).</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Worked on <strong>threat detection</strong>, vulnerability assessment, and <strong>penetration testing basics</strong>.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Gained knowledge of <strong>identity and access management (IAM)</strong>, encryption, and secure DevOps.</span>
                                </li>
                                <li>
                                    <span className="bullet">•</span>
                                    <span>Hands-on practice with <strong>SIEM tools</strong> for monitoring and log analysis.</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* CTA Box */}
                    <div className="cta-box" style={{ marginTop: '6rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', borderRadius: '32px', padding: '5rem 4rem', textAlign: 'center' }}>
                        <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>Transform Your Career Today</h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                            Join the next batch of cloud and security experts. Get the hands-on experience that top companies demand.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="/contact" className="btn btn-primary" style={{ background: 'white', color: '#059669', padding: '1.25rem 3.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                Start Your Internship
                            </a>
                            <a href="/contact" className="btn btn-secondary" style={{ border: '2px solid white', color: 'white', padding: '1.25rem 3.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                Request Curriculum PDF
                            </a>
                        </div>
                    </div>

                    {/* Why Choose Section (Restored) */}
                    <div className="why-internship-content" style={{ marginTop: '5rem' }}>
                        <div className="why-internship-text">
                            <h2>Why Choose Our Internship Programs?</h2>
                            <ul className="why-list">
                                <li>
                                    <strong>Real-World Experience</strong>
                                    <p>Work on actual industry projects, not just theoretical exercises.</p>
                                </li>
                                <li>
                                    <strong>Expert Mentorship</strong>
                                    <p>Get guidance from senior professionals with 10+ years of experience.</p>
                                </li>
                                <li>
                                    <strong>Portfolio Building</strong>
                                    <p>Create impressive projects to showcase to potential employers.</p>
                                </li>
                                <li>
                                    <strong>Certification</strong>
                                    <p>Receive industry-recognized completion certificates.</p>
                                </li>
                                <li>
                                    <strong>Career Support</strong>
                                    <p>Resume reviews, interview prep, and job assistance.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="why-internship-cta">
                            <div className="cta-box-sidebar">
                                <h3>Ready to Start?</h3>
                                <p>Join hundreds of students who have kickstarted their careers with our programs.</p>
                                <a href="https://tidycal.com/weblearnai/30-minute-meeting" data-tidy="popup" className="btn btn-primary" style={{ width: '100%' }}>
                                    Book Free Consultation
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Internships;
