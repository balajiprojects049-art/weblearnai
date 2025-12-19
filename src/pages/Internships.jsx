import { Link } from 'react-router-dom';
import './Internships.css';

const Internships = () => {
    const internships = [
        {
            title: 'Azure Cloud Internship',
            duration: '6 Weeks',
            level: 'Beginner to Intermediate',
            price: '₹15,000',
            description: 'Get hands-on experience with Microsoft Azure services, building real-world cloud solutions.',
            skills: ['Azure VMs', 'Azure Storage', 'App Services', 'Azure Functions', 'ARM Templates', 'Azure DevOps'],
            projects: [
                'Deploy a scalable web application on Azure',
                'Implement Azure Storage solutions',
                'Build serverless applications with Functions',
                'Set up CI/CD pipelines with Azure DevOps',
            ],
            outcomes: ['Industry Certificate', 'LinkedIn Recommendation', 'Portfolio Projects', 'Resume Enhancement'],
        },
        {
            title: 'AWS Cloud Internship',
            duration: '6 Weeks',
            level: 'Beginner to Intermediate',
            price: '₹15,000',
            description: 'Master Amazon Web Services through practical, real-world cloud infrastructure projects.',
            skills: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation', 'IAM', 'CloudWatch'],
            projects: [
                'Build a highly available web application',
                'Create serverless data processing pipeline',
                'Implement auto-scaling and load balancing',
                'Set up monitoring and alerting',
            ],
            outcomes: ['Industry Certificate', 'AWS Projects Portfolio', 'Certification Prep', 'Career Guidance'],
        },
        {
            title: 'GCP Cloud Internship',
            duration: '6 Weeks',
            level: 'Beginner to Intermediate',
            price: '₹15,000',
            description: 'Learn Google Cloud Platform by building production-ready cloud-native applications.',
            skills: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'BigQuery', 'Cloud SQL', 'Kubernetes Engine'],
            projects: [
                'Deploy containerized applications on GKE',
                'Build data analytics pipeline with BigQuery',
                'Create serverless microservices',
                'Implement cloud security best practices',
            ],
            outcomes: ['Industry Certificate', 'GCP Portfolio', 'Hands-on Labs', 'Career Support'],
        },
        {
            title: 'Cybersecurity Internship',
            duration: '8 Weeks',
            level: 'Intermediate',
            price: '₹18,000',
            description: 'Gain practical experience in ethical hacking, penetration testing, and security operations.',
            skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'SIEM', 'Python Security', 'Incident Response'],
            projects: [
                'Conduct vulnerability assessment on web applications',
                'Perform network penetration testing',
                'Develop security automation scripts',
                'Analyze and respond to security incidents',
            ],
            outcomes: ['Internship Certificate', 'Security Projects', 'CEH Exam Prep', 'Job Readiness'],
        },
    ];

    return (
        <div className="internships-page">
            {/* Hero */}
            <section className="internships-hero gradient-bg-dark">
                <div className="container">
                    <div className="text-center">
                        <div className="badge" style={{ marginBottom: '1rem' }}>Real-World Experience</div>
                        <h1 style={{ color: 'white', marginBottom: '1rem' }}>Cloud & Cybersecurity Internships</h1>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                            Get hands-on experience with industry-standard tools and projects. Build your portfolio
                            and boost your resume with real-world internship experience.
                        </p>
                        <div className="internship-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Hands-on Projects</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Industry Certificate</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Resume Enhancement</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Career Guidance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internships List */}
            <section className="section">
                <div className="container">
                    <div className="internships-grid">
                        {internships.map((internship, index) => (
                            <div key={index} className="internship-card">
                                <div className="internship-header">
                                    <h3>{internship.title}</h3>
                                    <div className="internship-meta">
                                        <span className="meta-badge">{internship.duration}</span>
                                        <span className="meta-badge">{internship.level}</span>
                                    </div>
                                    <p className="internship-description">{internship.description}</p>
                                    <div className="internship-price">{internship.price}</div>
                                </div>

                                <div className="internship-skills">
                                    <h4>Skills You'll Gain</h4>
                                    <div className="skills-tags">
                                        {internship.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="internship-projects">
                                    <h4>Hands-On Projects</h4>
                                    <ul>
                                        {internship.projects.map((project, idx) => (
                                            <li key={idx}>{project}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="internship-outcomes">
                                    <h4>What You'll Get</h4>
                                    <div className="outcomes-grid">
                                        {internship.outcomes.map((outcome, idx) => (
                                            <div key={idx} className="outcome-item">
                                                <span className="outcome-icon">🎯</span>
                                                <span>{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Internship CTA */}
            <section className="section why-internship-section">
                <div className="container">
                    <div className="why-internship-content">
                        <div className="why-internship-text">
                            <h2>Why Choose Our Internship Programs?</h2>
                            <ul className="why-list">
                                <li>
                                    <strong>Real-World Experience:</strong> Work on actual industry projects, not just theoretical exercises
                                </li>
                                <li>
                                    <strong>Expert Mentorship:</strong> Get guidance from senior professionals with 10+ years of experience
                                </li>
                                <li>
                                    <strong>Portfolio Building:</strong> Create impressive projects to showcase to potential employers
                                </li>
                                <li>
                                    <strong>Certification:</strong> Receive industry-recognized completion certificates
                                </li>
                                <li>
                                    <strong>Career Support:</strong> Resume reviews, interview prep, and job assistance
                                </li>
                                <li>
                                    <strong>Flexible Learning:</strong> Weekend and evening batches available
                                </li>
                            </ul>
                        </div>
                        <div className="why-internship-cta">
                            <div className="cta-box-internship">
                                <h3>Ready to Start Your Internship?</h3>
                                <p>Join hundreds of students who have kickstarted their careers with our  programs</p>
                                <Link to="/contact" className="btn btn-primary btn-large">
                                    Book Free Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Internships;
