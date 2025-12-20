import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Courses.css';

const Courses = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const courses = [
        {
            id: 'data-engineering',
            title: 'Data Engineer – Azure & Databricks',
            tagline: 'Master end-to-end data engineering pipelines',
            duration: '12 Weeks',
            level: 'Intermediate to Advanced',
            price: '₹45,000',
            rating: 4.9,
            students: '2,500+',
            whoIsThisFor: [
                'Software developers transitioning to data engineering',
                'Data analysts wanting to advance their careers',
                'IT professionals with basic SQL/Python knowledge',
                'Fresh graduates with technical backgrounds',
            ],
            whatYouWillLearn: [
                'Azure Data Factory for data integration',
                'Databricks Delta Lake architecture',
                'PySpark for big data processing',
                'End-to-end ETL/ELT pipelines',
                'Data warehouse & lakehouse design',
                'CI/CD for data pipelines',
                'Performance optimization techniques',
                'Real-time streaming with Event Hubs',
            ],
            tools: ['Azure Data Factory', 'Databricks', 'PySpark', 'Delta Lake', 'Azure SQL', 'Synapse', 'Git'],
            projects: [
                'Build a retail analytics data warehouse',
                'Create real-time streaming pipeline',
                'Implement medallion architecture (Bronze/Silver/Gold)',
            ],
            certification: 'Microsoft Azure Data Engineer Associate (DP-203) prep included',
        },
        {
            id: 'microsoft-fabric',
            title: 'Azure Fabric Data Engineer',
            tagline: 'Become a Microsoft Fabric expert',
            duration: '10 Weeks',
            level: 'Advanced',
            price: '₹50,000',
            rating: 4.9,
            students: '1,800+',
            whoIsThisFor: [
                'Data engineers with Azure experience',
                'Power BI developers advancing to Fabric',
                'Data architects designing modern solutions',
                'Analytics professionals seeking cutting-edge skills',
            ],
            whatYouWillLearn: [
                'Microsoft Fabric architecture & components',
                'OneLake for unified data storage',
                'Data activator for real-time alerting',
                'Lakehouse vs Warehouse in Fabric',
                'Data pipelines in Fabric',
                'Direct Lake mode for Power BI',
                'Dataflows Gen2 for transformation',
                'Security & governance in Fabric',
            ],
            tools: ['Microsoft Fabric', 'OneLake', 'Power BI', 'Dataflows Gen2', 'KQL', 'Notebooks'],
            projects: [
                'Build an enterprise lakehouse solution',
                'Create a self-service analytics platform',
                'Implement real-time monitoring dashboards',
            ],
            certification: 'Microsoft Fabric Analytics Engineer certification prep',
        },
        {
            id: 'power-bi',
            title: 'Full Stack Power BI with Fabric Tools',
            tagline: 'Transform data into stunning insights',
            duration: '8 Weeks',
            level: 'Beginner to Advanced',
            price: '₹35,000',
            rating: 4.8,
            students: '3,200+',
            whoIsThisFor: [
                'Business analysts wanting to create dashboards',
                'Excel users looking to upgrade skills',
                'Data enthusiasts with no coding background',
                'Professionals in finance, sales, marketing, HR',
            ],
            whatYouWillLearn: [
                'Power BI Desktop fundamentals',
                'Data modeling & relationships',
                'Advanced DAX (Data Analysis Expressions)',
                'Power Query for data transformation',
                'Interactive visualizations & custom visuals',
                'Row-level security (RLS)',
                'Power BI Service & workspace management',
                'Dataflows & deployment pipelines',
            ],
            tools: ['Power BI Desktop', 'Power BI Service', 'DAX Studio', 'Tabular Editor', 'Power Query'],
            projects: [
                'Sales performance dashboard',
                'Financial reporting with drill-through',
                'HR analytics dashboard with RLS',
            ],
            certification: 'Microsoft Power BI Data Analyst (PL-300) certification prep',
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity & Python with Generative AI',
            tagline: 'Secure the digital world with AI-powered tools',
            duration: '14 Weeks',
            level: 'Intermediate',
            price: '₹55,000',
            rating: 4.7,
            students: '1,500+',
            whoIsThisFor: [
                'IT professionals interested in security',
                'Network administrators advancing careers',
                'Developers wanting to learn ethical hacking',
                'Career switchers passionate about cybersecurity',
            ],
            whatYouWillLearn: [
                'Network security fundamentals',
                'Ethical hacking & penetration testing',
                'Python for security automation',
                'Vulnerability assessment & management',
                'Security information & event management (SIEM)',
                'AI-powered threat detection',
                'Generative AI for security analysis',
                'Incident response & forensics',
            ],
            tools: ['Python', 'Kali Linux', 'Metasploit', 'Wireshark', 'Nmap', 'OpenAI API', 'Splunk'],
            projects: [
                'Build an automated vulnerability scanner',
                'Create AI-powered threat detection system',
                'Develop security automation scripts',
            ],
            certification: 'CompTIA Security+ and CEH prep guidance',
        },
        {
            id: 'cloud',
            title: 'Cloud Engineering (Azure/AWS/GCP)',
            tagline: 'Master multi-cloud architecture',
            duration: '12 Weeks',
            level: 'Intermediate',
            price: '₹48,000',
            rating: 4.8,
            students: '2,000+',
            whoIsThisFor: [
                'System administrators moving to cloud',
                'Developers building cloud-native apps',
                'DevOps engineers seeking certification',
                'IT professionals future-proofing careers',
            ],
            whatYouWillLearn: [
                'Cloud computing fundamentals',
                'Azure services (VMs, App Service, Functions)',
                'AWS core services (EC2, S3, Lambda)',
                'Google Cloud Platform essentials',
                'Infrastructure as Code (Terraform)',
                'Containerization with Docker & Kubernetes',
                'CI/CD pipelines',
                'Cloud security best practices',
            ],
            tools: ['Azure', 'AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins'],
            projects: [
                'Deploy a multi-tier web application',
                'Build a serverless data processing pipeline',
                'Implement auto-scaling & load balancing',
            ],
            certification: 'Azure AZ-900, AWS Solutions Architect, or GCP Associate prep',
        },
        {
            id: 'python-ai',
            title: 'Python with Generative AI',
            tagline: 'Build intelligent applications with AI',
            duration: '10 Weeks',
            level: 'Beginner to Intermediate',
            price: '₹40,000',
            rating: 4.9,
            students: '2,800+',
            whoIsThisFor: [
                'Developers wanting to add AI to applications',
                'Data scientists exploring generative AI',
                'Product managers understanding AI capabilities',
                'Entrepreneurs building AI-powered products',
            ],
            whatYouWillLearn: [
                'Python programming fundamentals',
                'Working with APIs & libraries',
                'OpenAI GPT models & fine-tuning',
                'LangChain for AI applications',
                'Vector databases (Pinecone, Weaviate)',
                'Prompt engineering best practices',
                'Building chatbots & AI assistants',
                'Deploying AI applications',
            ],
            tools: ['Python', 'OpenAI API', 'LangChain', 'Streamlit', 'FastAPI', 'Vector DBs'],
            projects: [
                'Build an intelligent chatbot',
                'Create a document Q&A system',
                'Develop an AI content generator',
            ],
            certification: 'Certificate of completion with portfolio projects',
        },
    ];

    return (
        <div className="courses-page">
            {/* Header */}
            <section className="courses-hero gradient-bg-secondary">
                <div className="container">
                    <div className="courses-hero-content">
                        <h1 style={{ color: 'white' }}>Industry-Leading Training Programs</h1>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                            Comprehensive, hands-on courses designed by industry experts to help you land
                            high-paying tech jobs
                        </p>
                        <div className="courses-stats">
                            <div className="course-stat">
                                <div className="course-stat-number">15,000+</div>
                                <div className="course-stat-label">Students Enrolled</div>
                            </div>
                            <div className="course-stat">
                                <div className="course-stat-number">95%</div>
                                <div className="course-stat-label">Placement Rate</div>
                            </div>
                            <div className="course-stat">
                                <div className="course-stat-number">4.8/5</div>
                                <div className="course-stat-label">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Courses */}
            <section className="section courses-list">
                <div className="container">
                    {courses.map((course) => (
                        <div key={course.id} id={course.id} className="course-detail">
                            <div className="course-detail-header">
                                <div>
                                    <h2>{course.title}</h2>
                                    <p className="course-tagline">{course.tagline}</p>
                                    <div className="course-meta">
                                        <span className="meta-item">
                                            <strong>⏱️ Duration:</strong> {course.duration}
                                        </span>
                                        <span className="meta-item">
                                            <strong>📊 Level:</strong> {course.level}
                                        </span>
                                        <span className="meta-item">
                                            <strong>⭐ Rating:</strong> {course.rating}/5
                                        </span>
                                        <span className="meta-item">
                                            <strong>👥 Students:</strong> {course.students}
                                        </span>
                                    </div>
                                </div>
                                <div className="course-price-box">
                                    <div className="course-price">{course.price}</div>
                                    <Link to="/contact" className="btn btn-primary">
                                        Enroll Now
                                    </Link>
                                    <Link to="/contact" className="btn btn-secondary">
                                        Talk to Advisor
                                    </Link>
                                </div>
                            </div>

                            <div className="course-content-grid">
                                <div className="course-section">
                                    <h3>👥 Who is this for?</h3>
                                    <ul className="course-list">
                                        {course.whoIsThisFor.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="course-section">
                                    <h3>🎯 What you will learn</h3>
                                    <ul className="course-list">
                                        {course.whatYouWillLearn.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="course-section">
                                    <h3>🛠️ Tools & Technologies</h3>
                                    <div className="tools-grid">
                                        {course.tools.map((tool, idx) => (
                                            <span key={idx} className="tool-tag">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="course-section">
                                    <h3>💼 Real-World Projects</h3>
                                    <ul className="project-list">
                                        {course.projects.map((project, idx) => (
                                            <li key={idx}>{project}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="course-section certification-box">
                                    <h3>🎓 Certification</h3>
                                    <p>{course.certification}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="section" style={{ background: 'var(--gray-50)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Additional Resources</h2>
                        <p className="lead">Explore more to help you on your learning journey</p>
                    </div>
                    <div className="grid grid-4">
                        <Link to="/certifications" className="card" style={{ textDecoration: 'none', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                            <h4 style={{ color: 'var(--gray-900)' }}>Certifications</h4>
                            <p style={{ margin: 0 }}>Explore industry-recognized certifications</p>
                        </Link>
                        <Link to="/mentors" className="card" style={{ textDecoration: 'none', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🏫</div>
                            <h4 style={{ color: 'var(--gray-900)' }}>Meet Our Mentors</h4>
                            <p style={{ margin: 0 }}>Learn from industry experts</p>
                        </Link>
                        <Link to="/roadmap" className="card" style={{ textDecoration: 'none', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
                            <h4 style={{ color: 'var(--gray-900)' }}>Career Roadmap</h4>
                            <p style={{ margin: 0 }}>Plan your learning path</p>
                        </Link>
                        <Link to="/placements" className="card" style={{ textDecoration: 'none', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
                            <h4 style={{ color: 'var(--gray-900)' }}>Placement Support</h4>
                            <p style={{ margin: 0 }}>Get career assistance</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section gradient-bg-primary">
                <div className="container">
                    <div className="text-center">
                        <h2 style={{ color: 'white' }}>Not Sure Which Course to Choose?</h2>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', marginBottom: '2rem' }}>
                            Book a free career consultation with our experts to find the perfect learning path
                        </p>
                        <Link to="/contact" className="btn btn-secondary btn-large">
                            Book Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
