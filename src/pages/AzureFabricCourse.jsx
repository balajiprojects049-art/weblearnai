import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './AzureFabricCourse.css';

// Import technology logos
import azureDataFactoryLogo from '../assets/Azure Data factory.png';
import azureDatabricksLogo from '../assets/databricks.png';
import microsoftFabricLogo from '../assets/Fabric.png';
import unityCatalogLogo from '../assets/unity catlog.png';
import deltaLakeLogo from '../assets/Delta lake.png';
import powerBiLogo from '../assets/power bi.png';
import powerAppsLogo from '../assets/power apps.png';
import githubLogo from '../assets/git hub.png';
import apacheAirflowLogo from '../assets/Airflow.png';
import sqlLogo from '../assets/SQL.png';
import pythonLogo from '../assets/Python.png';
import genAiLogo from '../assets/Gen ai.png';

const AzureFabricCourse = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const technologies = [
        {
            name: 'Azure Data Factory',
            logo: azureDataFactoryLogo,
            description: 'Cloud-based ETL and data integration service',
            color: '#0078D4'
        },
        {
            name: 'Azure Databricks',
            logo: azureDatabricksLogo,
            description: 'Apache Spark-based analytics platform',
            color: '#FF3621'
        },
        {
            name: 'Microsoft Fabric',
            logo: microsoftFabricLogo,
            description: 'Unified analytics platform',
            color: '#7C3283'
        },
        {
            name: 'Unity Catalog',
            logo: unityCatalogLogo,
            description: 'Unified governance for data and AI',
            color: '#00A87E'
        },
        {
            name: 'Delta Lake',
            logo: deltaLakeLogo,
            description: 'Open-source storage framework',
            color: '#00ADD8'
        },
        {
            name: 'Power BI',
            logo: powerBiLogo,
            description: 'Business analytics and visualization',
            color: '#F2C811'
        },
        {
            name: 'Power Apps',
            logo: powerAppsLogo,
            description: 'Low-code app development',
            color: '#742774'
        },
        {
            name: 'GitHub',
            logo: githubLogo,
            description: 'Version control and collaboration',
            color: '#24292E'
        },
        {
            name: 'Apache Airflow',
            logo: apacheAirflowLogo,
            description: 'Workflow orchestration platform',
            color: '#017CEE'
        },
        {
            name: 'SQL',
            logo: sqlLogo,
            description: 'Structured query language',
            color: '#336791'
        },
        {
            name: 'Python',
            logo: pythonLogo,
            description: 'General-purpose programming',
            color: '#3776AB'
        },
        {
            name: 'Gen AI',
            logo: genAiLogo,
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
                        <div className="course-badge">Cloud Data Engineering</div>
                        <h1>Azure Fabric Data Engineer</h1>
                        <p className="course-subtitle">
                            Build scalable and secure data pipelines in the cloud with Weblearnai's Multi Cloud Data Engineering course.
                            Learn essential tools like Azure Data Factory, Azure Data Lake, and Azure Databricks to become a skilled data engineer.
                        </p>
                        <div className="course-meta">
                            <span className="meta-item">⏱️ 12 Weeks</span>
                            <span className="meta-item">📚 Intermediate</span>
                            <span className="meta-item">🎯 Real-world Projects</span>
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

            {/* Technologies Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Course Curriculum</div>
                        <h2>What You'll Learn</h2>
                        <p className="lead">
                            We provide specialized training on modern data engineering, Power BI, and cloud technologies
                        </p>
                    </div>

                    <div className="simple-tech-grid">
                        {technologies.map((tech, index) => (
                            <div key={index} className="simple-tech-card">
                                <div className="tech-card-header">
                                    <img src={tech.logo} alt={tech.name} className="tech-card-logo" />
                                </div>
                                <div className="tech-card-body">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>
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
                            This comprehensive Azure Fabric Data Engineering course covers everything from Python and SQL basics
                            to advanced cloud data engineering with Azure Data Factory, Databricks, Microsoft Fabric, and more.
                            You'll gain hands-on experience with real-world projects and industry best practices.
                        </p>

                        <div className="overview-grid">
                            <div className="overview-item">
                                <h3>🎯 What You'll Master</h3>
                                <ul>
                                    <li>Azure Data Factory pipelines and orchestration</li>
                                    <li>Azure Databricks with PySpark</li>
                                    <li>Microsoft Fabric end-to-end platform</li>
                                    <li>Delta Lake and Unity Catalog</li>
                                    <li>Power BI and Power Apps</li>
                                    <li>GitHub and Apache Airflow</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>👨‍💻 Who Should Enroll</h3>
                                <ul>
                                    <li>Aspiring Data Engineers</li>
                                    <li>Software Developers</li>
                                    <li>Data Analysts</li>
                                    <li>Cloud Engineers</li>
                                    <li>IT Professionals</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>📚 Prerequisites</h3>
                                <ul>
                                    <li>Basic programming knowledge</li>
                                    <li>Understanding of databases</li>
                                    <li>Familiarity with cloud concepts</li>
                                    <li>Willingness to learn</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>🎁 What You Get</h3>
                                <ul>
                                    <li>Live instructor-led classes</li>
                                    <li>Real-world projects</li>
                                    <li>Course completion certificate</li>
                                    <li>Lifetime access to materials</li>
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
                            Join thousands of students who have transformed their careers with Weblearnai
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
