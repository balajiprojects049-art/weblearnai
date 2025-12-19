import { Link } from 'react-router-dom';
import { useState } from 'react';
import './AzureFabricCourse.css';

const AzureFabricCourse = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const technologies = [
        {
            name: 'Python Basics',
            icon: '🐍',
            description: 'Essential Python programming for data engineering',
            detailedDescription: (
                <>
                    Master <strong className="highlight">Python fundamentals</strong> including variables, data types, operators, and <strong className="highlight">advanced concepts</strong> for data engineering.
                </>
            ),
            slug: 'python-basics',
            color: '#3776AB',
            topics: [
                'Variables and Data types',
                'Operators and Collections',
                'Functions',
                'Packages and Modules'
            ]
        },
        {
            name: 'SQL Basics',
            icon: '📊',
            description: 'Database querying and management',
            detailedDescription: (
                <>
                    Learn <strong className="highlight">SQL fundamentals</strong> for data manipulation, querying, and <strong className="highlight">database management</strong>.
                </>
            ),
            slug: 'sql-basics',
            color: '#00758F',
            topics: [
                'DQL Commands (SELECT)',
                'DDL Commands (CREATE, ALTER, DROP, TRUNCATE)',
                'DML Commands (INSERT, UPDATE, DELETE, MERGE)',
                'Joins and Window Functions',
                'Aggregate Functions'
            ]
        },
        {
            name: 'Azure Storage',
            icon: '💾',
            description: 'Cloud storage solutions and data lakes',
            detailedDescription: (
                <>
                    Understand <strong className="highlight">Azure storage accounts</strong>, blob storage, and <strong className="highlight">Data Lake Gen2</strong> for scalable data storage.
                </>
            ),
            slug: 'azure-storage',
            color: '#0078D4',
            topics: [
                'Types of Storage Accounts',
                'Blob Storage and Access Tiers',
                'Data Replication Policies',
                'Azure Data Lake Storage Gen2',
                'Azure Key Vault (Keys, Secrets, Certificates)'
            ]
        },
        {
            name: 'Azure Data Factory',
            icon: '🏭',
            description: 'Build and orchestrate scalable data pipelines',
            color: '#00BCF2',
            topics: [
                'ADF Architecture and Portal UI',
                'Pipelines and Activities',
                'Linked Services and Datasets',
                'Copy Data Activities',
                'Databricks Notebook Integration',
                'Triggers (Schedule, Tumbling Window, Storage Events)',
                'Integration Runtime (IR)',
                'Source Control and Git Configuration',
                'Monitoring and Alerts',
                'Data Flows and Transformations'
            ]
        },
        {
            name: 'Azure Databricks',
            icon: '⚡',
            description: 'Big data processing with Apache Spark',
            color: '#FF3621',
            topics: [
                'Databricks Workspace and Clusters',
                'Apache Spark Basics',
                'Notebooks and Use Cases',
                'Data Ingestion from ADLS and Blob',
                'Autoloader for Real-time Ingestion',
                'PySpark and Scala Transformations',
                'Narrow vs Wide Transformations',
                'Delta Lake Features',
                'Unity Catalog for Governance',
                'CI/CD Integration with GitHub'
            ]
        },
        {
            name: 'Microsoft Fabric',
            icon: '🔷',
            description: 'End-to-end analytics platform',
            color: '#7FBA00',
            topics: [
                'Microsoft Fabric Overview',
                'OneLake - Unified Data Lake',
                'Workloads: Data Factory, Engineering, Science, Warehouse',
                'Data Ingestion with Shortcuts',
                'Lakehouses and Medallion Architecture',
                'Delta Tables and Partitioning',
                'Power BI DirectLake Mode',
                'Real-Time Analytics with KQL',
                'Copilot AI Integration'
            ]
        },
        {
            name: 'Delta Lake',
            icon: '🗄️',
            description: 'ACID-compliant data lake storage',
            color: '#00ADD8',
            topics: [
                'ACID Transactions',
                'Schema Evolution',
                'Time Travel and Versioning',
                'Performance Optimization',
                'Data Governance'
            ]
        },
        {
            name: 'Unity Catalog',
            icon: '🔐',
            description: 'Centralized data governance',
            color: '#FF6C37',
            topics: [
                'Fine-grained Access Control',
                'Metadata Management',
                'Data Lineage',
                'Cross-workspace Governance'
            ]
        },
        {
            name: 'Power BI',
            icon: '📈',
            description: 'Business intelligence and visualization',
            color: '#F2C811',
            topics: [
                'Data Connections and Transformations',
                'Interactive Dashboards',
                'DirectLake Mode in Fabric',
                'Report Publishing',
                'Actionable Insights'
            ]
        },
        {
            name: 'Power Apps',
            icon: '📱',
            description: 'Low-code app development',
            color: '#742774',
            topics: [
                'Custom Business Apps',
                'Workflow Automation',
                'Data Source Connections',
                'App Publishing'
            ]
        },
        {
            name: 'GitHub',
            icon: '🔀',
            description: 'Version control and collaboration',
            color: '#181717',
            topics: [
                'Git vs GitHub',
                'Repositories and Branches',
                'Pull Requests and Merge Conflicts',
                'GitHub Actions for CI/CD',
                'Branch Protection and Security',
                'Integration with ADF/Databricks'
            ]
        },
        {
            name: 'Apache Airflow',
            icon: '🌬️',
            description: 'Workflow orchestration platform',
            color: '#017CEE',
            topics: [
                'DAGs (Directed Acyclic Graphs)',
                'Tasks, Operators, and Sensors',
                'Airflow Setup and Configuration',
                'Executors (Sequential, Celery, Kubernetes)',
                'XComs and Task Dependencies',
                'Integration with Azure/Databricks',
                'ETL Pipeline Orchestration'
            ]
        },
        {
            name: 'Cybersecurity',
            icon: '🛡️',
            description: 'Data protection and compliance',
            color: '#DD344C',
            topics: [
                'Data Encryption',
                'Access Management',
                'Compliance Best Practices',
                'Secure Pipelines',
                'Cloud Resource Security'
            ]
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

            {/* Tech Stack Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Course Curriculum</div>
                        <h2>What You'll Learn</h2>
                        <p className="lead">
                            We provide specialized training on modern data engineering, Power BI, and cloud technologies
                        </p>
                    </div>

                    {/* Backdrop */}
                    {expandedCard !== null && (
                        <div
                            className="card-backdrop"
                            onClick={() => setExpandedCard(null)}
                        ></div>
                    )}

                    <div className="tech-grid">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className={`tech-card ${expandedCard === index ? 'expanded' : ''}`}
                                style={{ '--tech-color': tech.color }}
                                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                            >
                                <button
                                    className="card-close-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedCard(null);
                                    }}
                                >
                                    ✕
                                </button>
                                <div className="tech-icon-wrapper">
                                    <div className="tech-icon-bg" style={{ backgroundColor: tech.color }}>
                                        <svg className="tech-svg-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <text
                                                x="50"
                                                y="50"
                                                textAnchor="middle"
                                                dominantBaseline="central"
                                                className="tech-icon-text"
                                            >
                                                {tech.icon}
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                                <h4>{tech.name}</h4>
                                <p>{tech.description}</p>
                                {expandedCard === index && (
                                    <ul className="tech-topics">
                                        {tech.topics.map((topic, idx) => (
                                            <li key={idx}>✓ {topic}</li>
                                        ))}
                                    </ul>
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
