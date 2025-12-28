import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './AzureFabricCourse.css';
import azureFabricHeroImg from '../assets/azure-fabric-hero.jpg';

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
import roadmapImg from '../assets/data-engineer-roadmap.jpg';
import techMapImg from '../assets/technology-stack-map.png';

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
            <section
                className="course-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${azureFabricHeroImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >

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
                        {/* Back to Home Button */}
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
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
                </div>
            </section>

            {/* Training Technologies Overview */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
                        <div className="badge">Complete Technology Stack</div>
                        <h2 style={{ fontSize: '2.5rem' }}>Specialized Training on Modern Data Engineering</h2>
                        <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            We provide comprehensive hands-on training on Power BI and cloud technologies
                        </p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.05rem' }}>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', textAlign: 'center', color: '#4a5568' }}>
                            Our Azure Data Engineering program covers the complete technology ecosystem:
                        </p>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #0078D4 0%, #0063B1 100%)', borderRadius: '12px', borderLeft: '4px solid #005A9E', boxShadow: '0 4px 12px rgba(0, 120, 212, 0.3)' }}>
                                <strong>Azure Data Factory (ADF):</strong> Build, orchestrate, and automate scalable data pipelines with real-time and batch processing.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #FF3621 0%, #E02F1C 100%)', borderRadius: '12px', borderLeft: '4px solid #C42818', boxShadow: '0 4px 12px rgba(255, 54, 33, 0.3)' }}>
                                <strong>Azure Databricks (ADB):</strong> Hands-on expertise in PySpark, advanced transformations, and machine learning on a collaborative big data platform.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #7C3283 0%, #662970 100%)', borderRadius: '12px', borderLeft: '4px solid #52215D', boxShadow: '0 4px 12px rgba(124, 50, 131, 0.3)' }}>
                                <strong>Microsoft Fabric:</strong> End-to-end data analytics platform unifying data movement, data engineering, real-time analytics, data science, and Power BI for actionable insights.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #00A87E 0%, #008C69 100%)', borderRadius: '12px', borderLeft: '4px solid #007055', boxShadow: '0 4px 12px rgba(0, 168, 126, 0.3)' }}>
                                <strong>Unity Catalog:</strong> Implement centralized governance, fine-grained access control, and metadata management across data workspaces.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #00ADD8 0%, #0091B8 100%)', borderRadius: '12px', borderLeft: '4px solid #007699', boxShadow: '0 4px 12px rgba(0, 173, 216, 0.3)' }}>
                                <strong>Delta Lake:</strong> Build reliable, performant, and ACID-compliant data lakes with schema evolution and time travel support.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: '#1a1a1a', padding: '1rem', background: 'linear-gradient(135deg, #F2C811 0%, #D9B20F 100%)', borderRadius: '12px', borderLeft: '4px solid #BF9D0D', boxShadow: '0 4px 12px rgba(242, 200, 17, 0.3)' }}>
                                <strong>Power BI:</strong> End-to-end business intelligence and data visualization tool that connects to multiple data sources, transforms data, and provides interactive dashboards and reports for actionable insights.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #742774 0%, #5E1F5E 100%)', borderRadius: '12px', borderLeft: '4px solid #4A184A', boxShadow: '0 4px 12px rgba(116, 39, 116, 0.3)' }}>
                                <strong>Power Apps:</strong> Low-code application development platform that enables users to quickly build custom business apps, automate workflows, and connect to various data sources with ease.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #24292E 0%, #1B1F23 100%)', borderRadius: '12px', borderLeft: '4px solid #0D1117', boxShadow: '0 4px 12px rgba(36, 41, 46, 0.4)' }}>
                                <strong>GitHub:</strong> Learn modern version control, branching strategies, pull requests, and CI/CD integration for collaborative development.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #017CEE 0%, #0167CE 100%)', borderRadius: '12px', borderLeft: '4px solid #0153AE', boxShadow: '0 4px 12px rgba(1, 124, 238, 0.3)' }}>
                                <strong>Apache Airflow:</strong> Orchestrate and monitor complex workflows with DAGs, scheduling, and end-to-end pipeline automation.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #336791 0%, #2A5477 100%)', borderRadius: '12px', borderLeft: '4px solid #21425D', boxShadow: '0 4px 12px rgba(51, 103, 145, 0.3)' }}>
                                <strong>SQL:</strong> Write optimized queries, design schemas, implement joins, aggregations, and stored procedures for efficient data management.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #3776AB 0%, #2D5F8D 100%)', borderRadius: '12px', borderLeft: '4px solid #23496F', boxShadow: '0 4px 12px rgba(55, 118, 171, 0.3)' }}>
                                <strong>Python:</strong> Develop robust data processing scripts, automation solutions, and machine learning models using libraries such as Pandas, NumPy, and Scikit-learn.
                            </p>
                            <p style={{ marginBottom: '0.5rem', color: 'white', padding: '1rem', background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)', borderRadius: '12px', borderLeft: '4px solid #A31545', boxShadow: '0 4px 12px rgba(233, 30, 99, 0.3)' }}>
                                <strong>Python with Generative AI:</strong> Build intelligent solutions leveraging LLMs and frameworks such as LangChain, OpenAI, and Hugging Face for tasks like text summarization, chatbots, embeddings, and AI-powered automation.
                            </p>
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

            {/* Career Roadmap Section */}
            <section className="section bg-light">
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
                        <div className="badge">Career Path</div>
                        <h2 style={{ fontSize: '2.5rem' }}>Your Journey to Data Engineering Mastery</h2>
                        <p className="lead">
                            Follow this proven roadmap to transition from beginner to expert data engineer
                        </p>
                    </div>

                    {/* Visual Roadmap */}
                    <div className="visual-roadmap-section" style={{ marginBottom: '6rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div className="badge" style={{ background: '#eff6ff', color: '#3b82f6' }}>Visual Guide</div>
                            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>The Path to Mastery</h2>
                            <p style={{ color: '#6b7280' }}>Follow this proven track to transition from beginner to expert</p>
                        </div>

                        <div className="card" style={{ padding: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                            <img src={roadmapImg} alt="Data Engineer Career Roadmap" style={{ width: '100%', borderRadius: '24px', display: 'block' }} />
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <div className="badge" style={{ background: '#fef2f2', color: '#ef4444' }}>Tech Stack</div>
                                <h2 style={{ fontSize: '2.2rem', marginTop: '1rem' }}>Core Technologies You'll Master</h2>
                                <p style={{ color: '#6b7280' }}>A snapshot of the tools and platforms covered in our programs</p>
                            </div>
                            <div className="card" style={{ padding: '2rem', background: '#0f172a', border: 'none', borderRadius: '32px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
                                <img src={techMapImg} alt="Technology Stack Map" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
                            </div>
                        </div>
                    </div>

                    {/* Learning Milestones */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Detailed Learning Milestones</h2>
                        <p style={{ color: '#6b7280' }}>Breakdown of your journey over the next 12 months</p>
                    </div>

                    <div className="detailed-milestones" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        <div className="card" style={{ padding: '2.5rem', borderLeft: '6px solid #3b82f6' }}>
                            <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '2rem' }}>📘</span> Phase 1: Foundations
                            </h3>
                            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>0-3 Months | Building Core Competencies</p>
                            <ul style={{ paddingLeft: '1.2rem', lineHeight: '2' }}>
                                <li>Master SQL & Database Schema Design</li>
                                <li>Python for Data Processing</li>
                                <li>Cloud Fundamentals (Azure/AWS)</li>
                                <li>Version Control with Git & GitHub</li>
                            </ul>
                            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                                <strong style={{ color: '#111827' }}>Goal:</strong> Junior Data Analyst
                            </div>
                        </div>

                        <div className="card" style={{ padding: '2.5rem', borderLeft: '6px solid #10b981' }}>
                            <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '2rem' }}>📗</span> Phase 2: Engineering
                            </h3>
                            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>4-8 Months | Building Scalable Pipelines</p>
                            <ul style={{ paddingLeft: '1.2rem', lineHeight: '2' }}>
                                <li>Azure Data Factory Orchestration</li>
                                <li>Big Data Processing with PySpark</li>
                                <li>Databricks Lakehouse Platform</li>
                                <li>Business Intelligence with Power BI</li>
                            </ul>
                            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                                <strong style={{ color: '#111827' }}>Goal:</strong> Data Engineer
                            </div>
                        </div>

                        <div className="card" style={{ padding: '2.5rem', borderLeft: '6px solid #ef4444' }}>
                            <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '2rem' }}>📕</span> Phase 3: Architecting
                            </h3>
                            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>9-12+ Months | Advanced Solutions</p>
                            <ul style={{ paddingLeft: '1.2rem', lineHeight: '2' }}>
                                <li>End-to-End with Microsoft Fabric</li>
                                <li>Real-time Data Streaming (Kafka)</li>
                                <li>DevOps & CI/CD for Data</li>
                                <li>Data Governance & Unity Catalog</li>
                            </ul>
                            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                                <strong style={{ color: '#111827' }}>Goal:</strong> Senior Data Engineer
                            </div>
                        </div>
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
                                    <li><strong>Azure Cloud:</strong> Understand core Azure services to build a strong infrastructure.</li>
                                    <li><strong>Data Storage:</strong> Store and manage big data using <strong>Azure Data Lake</strong>.</li>
                                    <li><strong>Data Processing:</strong> Perform advanced transformations with <strong>Azure Databricks</strong>.</li>
                                    <li><strong>Real-Time Analytics:</strong> Work with streaming data using Azure Stream Analytics.</li>
                                    <li><strong>Data Warehousing:</strong> Use <strong>Azure Synapse Analytics</strong> for powerful data modeling and analysis.</li>
                                    <li><strong>Security & Governance:</strong> Learn to protect and manage your data the right way.</li>
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
                                    <li>Design and build end-to-end data pipelines in the Azure cloud.</li>
                                    <li>Pick the right Azure tools for every stage of the data lifecycle.</li>
                                    <li>Monitor, optimize, and scale pipelines for real-world use.</li>
                                    <li>Become a confident, job-ready Data Engineer with skills companies need.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Syllabus Section */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        textAlign: 'center',
                        padding: '3rem 2rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-10%',
                            width: '300px',
                            height: '300px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '50%',
                            filter: 'blur(60px)'
                        }}></div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            {/* Icon */}
                            <div style={{
                                fontSize: '4rem',
                                marginBottom: '1.5rem',
                                animation: 'bounce 2s infinite'
                            }}>
                                📄
                            </div>

                            {/* Heading */}
                            <h2 style={{
                                color: 'white',
                                fontSize: '2.5rem',
                                fontWeight: '700',
                                marginBottom: '1rem',
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                            }}>
                                Download Complete Course Syllabus
                            </h2>

                            {/* Description */}
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.95)',
                                fontSize: '1.15rem',
                                marginBottom: '2.5rem',
                                lineHeight: '1.6',
                                maxWidth: '600px',
                                margin: '0 auto 2.5rem'
                            }}>
                                Get the detailed curriculum, learning objectives, project details, and complete course outline in a comprehensive PDF document.
                            </p>

                            {/* Download Button */}
                            <a
                                href="/Azure Fabric Data Engineer.pdf"
                                download="Azure_Fabric_Data_Engineer_Syllabus.pdf"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    padding: '1.5rem 4rem',
                                    background: 'white',
                                    color: '#667eea',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    border: 'none',
                                    minWidth: '350px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                                }}
                            >
                                <span style={{ fontSize: '1.5rem' }}>⬇</span>
                                Download Syllabus PDF
                            </a>

                            {/* File info */}
                            <p style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: '0.9rem',
                                marginTop: '1.5rem',
                                fontStyle: 'italic'
                            }}>
                                📊 PDF Format • Free Download • No Registration Required
                            </p>
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
                            <a href="https://tidycal.com/weblearnai/30-minute-meeting" data-tidy="popup" className="btn btn-secondary btn-large">
                                Talk to Advisor
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AzureFabricCourse;
