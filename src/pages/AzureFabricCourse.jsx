import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import azureDataEngineerWheel from '../assets/azure-data-engineer-wheel.png';

const AzureFabricCourse = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [expandedCard, setExpandedCard] = useState(null);

    const technologies = [
        {
            name: 'Azure Data Factory',
            logo: azureDataFactoryLogo,
            description: 'Cloud-based ETL and data integration service',
            detailedDescription: (
                <>
                    Azure Data Factory (ADF) allows you to <strong className="highlight">build, orchestrate, and automate scalable data pipelines</strong> with <strong className="highlight">real-time and batch processing</strong>.
                    <br /><br />
                </>
            ),
            slug: 'adf',
            color: '#0078D4'
        },
        {
            name: 'Azure Databricks',
            logo: azureDatabricksLogo,
            description: 'Apache Spark-based analytics platform',
            detailedDescription: (
                <>
                    Azure Databricks enables you to <strong className="highlight">build scalable and secure data pipelines</strong>. Learn essential tools like <strong className="highlight">Azure Data Engineering, Azure Data Lake, and Spark</strong> to become a skilled data engineer.
                    <br /><br />
                </>
            ),
            slug: 'databricks',
            color: '#FF3621'
        },
        {
            name: 'Microsoft Fabric',
            logo: microsoftFabricLogo,
            description: 'Unified analytics platform',
            detailedDescription: (
                <>
                    Microsoft Fabric is an <strong className="highlight">end-to-end data analytics platform</strong> unifying data movement, data engineering, real-time analytics, data science, and Power BI for actionable insights.
                    <br /><br />
                </>
            ),
            slug: 'fabric',
            color: '#7C3283'
        },
        {
            name: 'Unity Catalog',
            logo: unityCatalogLogo,
            description: 'Unified governance for data and AI',
            detailedDescription: (
                <>
                    Implement <strong className="highlight">centralized governance, fine-grained access control</strong>, and metadata management across data workspaces with Unity Catalog.
                    <br /><br />
                </>
            ),
            slug: 'unity-catalog',
            color: '#00A87E'
        },
        {
            name: 'Delta Lake',
            logo: deltaLakeLogo,
            description: 'Open-source storage framework',
            detailedDescription: (
                <>
                    Build <strong className="highlight">reliable, performant, and ACID-compliant data lakes</strong> with schema evolution and time travel support using Delta Lake.
                    <br /><br />
                </>
            ),
            slug: 'delta-lake',
            color: '#00ADD8'
        },
        {
            name: 'Power BI',
            logo: powerBiLogo,
            description: 'Business analytics and visualization',
            detailedDescription: (
                <>
                    Learn essential data analysis tools like <strong className="highlight">SQL, Power BI, and Azure Cloud</strong>. This course empowers you to <strong className="highlight">become a data superhero</strong> and unlock the power of data today!
                    <br /><br />
                </>
            ),
            slug: 'power-bi',
            color: '#F2C811'
        },
        {
            name: 'Power Apps',
            logo: powerAppsLogo,
            description: 'Low-code app development',
            detailedDescription: (
                <>
                    Low-code platform that enables users to <strong className="highlight">quickly build custom business apps, automate workflows</strong>, and connect to various data sources with ease.
                    <br /><br />
                </>
            ),
            slug: 'power-apps',
            color: '#742774'
        },
        {
            name: 'GitHub',
            logo: githubLogo,
            description: 'Version control and collaboration',
            detailedDescription: (
                <>
                    Learn <strong className="highlight">modern version control, branching strategies, pull requests</strong>, and CI/CD integration for collaborative development.
                    <br /><br />
                </>
            ),
            slug: 'github',
            color: '#24292E'
        },
        {
            name: 'Apache Airflow',
            logo: apacheAirflowLogo,
            description: 'Workflow orchestration platform',
            detailedDescription: (
                <>
                    Orchestrate and monitor <strong className="highlight">complex workflows with DAGs, scheduling</strong>, and end-to-end pipeline automation.
                    <br /><br />
                </>
            ),
            slug: 'airflow',
            color: '#017CEE'
        },
        {
            name: 'SQL',
            logo: sqlLogo,
            description: 'Structured query language',
            detailedDescription: (
                <>
                    Write <strong className="highlight">optimized queries, design schemas, implement joins</strong>, aggregations, and stored procedures for efficient data management.
                    <br /><br />
                </>
            ),
            slug: 'sql',
            color: '#336791'
        },
        {
            name: 'Python',
            logo: pythonLogo,
            description: 'General-purpose programming',
            detailedDescription: (
                <>
                    Develop <strong className="highlight">robust data processing scripts, automation solutions</strong>, and machine learning models using Pandas, NumPy, and Scikit-learn.
                    <br /><br />
                </>
            ),
            slug: 'python',
            color: '#3776AB'
        },
        {
            name: 'Gen AI',
            logo: genAiLogo,
            description: 'Generative AI programming',
            detailedDescription: (
                <>
                    Build <strong className="highlight">intelligent solutions leveraging LLMs</strong> and frameworks such as LangChain, OpenAI, and Hugging Face for tasks like text summarization, chatbots, and AI-powered automation.
                    <br /><br />
                </>
            ),
            slug: 'gen-ai',
            color: '#E91E63'
        }
    ];

    const toggleCard = (index) => {
        if (expandedCard === index) {
            setExpandedCard(null);
        } else {
            setExpandedCard(index);
        }
    };

    return (
        <div className="azure-fabric-course">
            {/* Backdrop for expanded card */}
            {expandedCard !== null && (
                <div
                    className="tech-card-backdrop"
                    onClick={() => setExpandedCard(null)}
                ></div>
            )}

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

            {/* Core Technologies Visualization */}
            <section className="section bg-light">
                <div className="container">
                    <div className="core-tech-visualization text-center">
                        <div className="badge">Ecosystem</div>
                        <h2>Azure Data Engineer Core Technologies</h2>
                        <p className="lead" style={{ marginBottom: '3rem' }}>
                            Master the complete Azure data ecosystem through hands-on practical implementation
                        </p>
                        <div className="wheel-image-container card">
                            <img
                                src={azureDataEngineerWheel}
                                alt="Azure Data Engineer Core Technologies"
                                className="core-tech-wheel"
                            />
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
                            <div
                                key={index}
                                className={`simple-tech-card ${expandedCard === index ? 'card-expanded' : ''}`}
                                onClick={() => toggleCard(index)}
                                style={{
                                    '--tech-color': tech.color,
                                    cursor: tech.detailedDescription ? 'pointer' : 'default'
                                }}
                            >
                                {expandedCard === index && (
                                    <button
                                        className="card-close-button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedCard(null);
                                        }}
                                    >
                                        ✕
                                    </button>
                                )}
                                <div className="tech-card-header">
                                    <img src={tech.logo} alt={tech.name} className="tech-card-logo" />
                                </div>
                                <div className="tech-card-body">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>

                                {/* Detailed Description - Only shown when expanded */}
                                {expandedCard === index && tech.detailedDescription && (
                                    <div className="tech-card-details">
                                        <div className="details-divider"></div>
                                        <div className="details-content">
                                            {tech.detailedDescription}
                                        </div>
                                        {tech.slug && (
                                            <Link
                                                to={`/technology/${tech.slug}`}
                                                className="learn-more-btn"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Learn More →
                                            </Link>
                                        )}
                                    </div>
                                )}
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
