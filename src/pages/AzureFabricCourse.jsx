import { Link } from 'react-router-dom';
import './AzureFabricCourse.css';

const AzureFabricCourse = () => {
    const relatedTechnologies = [
        {
            name: 'Azure Data Factory',
            icon: '☁️',
            description: 'Cloud-based ETL and data integration service',
            color: '#0078D4'
        },
        {
            name: 'Azure Databricks',
            icon: '🗄️',
            description: 'Apache Spark-based analytics platform',
            color: '#FF3621'
        },
        {
            name: 'Microsoft Fabric',
            icon: '◼️',
            description: 'Unified analytics platform',
            color: '#7719AA'
        },
        {
            name: 'Unity Catalog',
            icon: '🗂️',
            description: 'Unified governance for data and AI',
            color: '#00A86B'
        },
        {
            name: 'Delta Lake',
            icon: '📊',
            description: 'Open-source storage framework',
            color: '#00ADD8'
        },
        {
            name: 'Power BI',
            icon: '📊',
            description: 'Business analytics and visualization',
            color: '#F2C811'
        },
        {
            name: 'Power Apps',
            icon: '◼️',
            description: 'Low-code app development',
            color: '#742774'
        },
        {
            name: 'GitHub',
            icon: '🐙',
            description: 'Version control and collaboration',
            color: '#24292e'
        },
        {
            name: 'Apache Airflow',
            icon: '🔄',
            description: 'Workflow orchestration platform',
            color: '#017CEE'
        },
        {
            name: 'SQL',
            icon: '💾',
            description: 'Structured query language',
            color: '#336791'
        },
        {
            name: 'Python',
            icon: '🐍',
            description: 'General-purpose programming',
            color: '#3776AB'
        },
        {
            name: 'Gen AI',
            icon: '🤖',
            description: 'Generative AI programming',
            color: '#E91E63'
        }
    ];

    return (
        <div className="azure-fabric-course">
            {/* Hero Section */}
            <section className="course-hero">
                <div className="course-hero-overlay"></div>
                <div className="container">
                    <div className="course-hero-content">
                        <div className="course-badge">Intermediate Level</div>
                        <h1>Azure Fabric Data Engineer</h1>
                        <p className="course-subtitle">
                            Master Microsoft Fabric and Azure data engineering with hands-on projects and real-world scenarios
                        </p>
                        <div className="course-meta">
                            <span className="meta-item">⏱️ 12 Weeks</span>
                            <span className="meta-item">👥 Live Classes</span>
                            <span className="meta-item">📜 Certificate</span>
                        </div>
                        <div className="course-cta">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Download Syllabus
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Technologies */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Course Technologies</div>
                        <h2>What You'll Learn</h2>
                        <p className="lead">
                            Master these cutting-edge technologies used by top companies worldwide
                        </p>
                    </div>

                    <div className="tech-grid">
                        {relatedTechnologies.map((tech, index) => (
                            <div key={index} className="tech-card" style={{ '--tech-color': tech.color }}>
                                <div className="tech-icon" style={{ background: tech.color }}>
                                    {tech.icon}
                                </div>
                                <h4>{tech.name}</h4>
                                <p>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section className="section bg-light">
                <div className="container">
                    <div className="course-overview">
                        <h2>Course Overview</h2>
                        <p>
                            This comprehensive Azure Fabric Data Engineering course is designed to transform you into a skilled data engineer
                            capable of building enterprise-grade data solutions. You'll learn to work with Microsoft Fabric, Azure's latest
                            unified analytics platform, and master essential data engineering tools and technologies.
                        </p>

                        <div className="overview-grid">
                            <div className="overview-item">
                                <h3>🎯 Course Objectives</h3>
                                <ul>
                                    <li>Build end-to-end data pipelines with Azure Data Factory</li>
                                    <li>Process big data using Azure Databricks and Spark</li>
                                    <li>Implement data governance with Unity Catalog</li>
                                    <li>Create scalable data lakes using Delta Lake</li>
                                    <li>Design powerful analytics dashboards with Power BI</li>
                                    <li>Orchestrate workflows with Apache Airflow</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>👨‍🎓 Who Should Enroll</h3>
                                <ul>
                                    <li>Software developers transitioning to data engineering</li>
                                    <li>Data analysts wanting to learn data engineering</li>
                                    <li>Cloud professionals expanding Azure skills</li>
                                    <li>Fresh graduates pursuing data engineering careers</li>
                                    <li>IT professionals seeking cloud data expertise</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>📚 Prerequisites</h3>
                                <ul>
                                    <li>Basic programming knowledge (Python preferred)</li>
                                    <li>Understanding of databases and SQL</li>
                                    <li>Familiarity with cloud concepts (helpful but not required)</li>
                                    <li>Willingness to learn and practice</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>🎁 What You Get</h3>
                                <ul>
                                    <li>Live instructor-led online classes</li>
                                    <li>Hands-on projects and assignments</li>
                                    <li>Real-world case studies</li>
                                    <li>Course materials and recordings</li>
                                    <li>Certificate of completion</li>
                                    <li>Job placement assistance</li>
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
                        <h2>Ready to Start Your Data Engineering Journey?</h2>
                        <p className="lead">
                            Join thousands of students who have transformed their careers with our industry-leading training programs.
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

export default AzureFabricCourse;
