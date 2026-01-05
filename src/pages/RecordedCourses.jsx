import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecordedCourses.css';
import './RecordedCoursesExtra.css';

// Importing assets
import databricksLogo from '../assets/databricks.png';
import sqlLogo from '../assets/SQL.png';
import pythonLogo from '../assets/Python.png';
import azureLogo from '../assets/azure-data-engineer-wheel.png';
import sparkLogo from '../assets/microdoft fabric.png';
import instructorImg from '../assets/munavath-portrait.jpg';

const RecordedCourses = () => {
    const [activeModule, setActiveModule] = useState(0);
    const featuresRef = React.useRef(null);

    const courseCurriculum = [
        {
            title: "Introduction to Big Data",
            lessonsCount: 6,
            lessons: [
                "What is database",
                "Types of databases",
                "What is Big Data",
                "5 V's of Big Data",
                "Types of data (structure, semi-structure, unstructured)",
                "Store and process big data"
            ]
        },
        {
            title: "Azure Cloud Fundamentals",
            lessonsCount: 8,
            lessons: [
                "Introduction to Cloud Computing",
                "Azure Global Infrastructure",
                "Azure Portal Walkthrough",
                "Resource Groups and Management",
                "Azure Storage Accounts",
                "Azure Virtual Machines",
                "Networking Basics in Azure",
                "Security and IAM"
            ]
        },
        {
            title: "Python",
            lessonsCount: 12,
            lessons: [
                "Python Installation & setup",
                "Variables and Data Types",
                "Control Flow and Loops",
                "Functions and Modules",
                "Data Structures (Lists, Tuples, Dicts)",
                "File Handling",
                "Exception Handling",
                "Object Oriented Programming",
                "Libraries for Data Engineering",
                "Python for Azure",
                "Advanced Python Concepts",
                "Hands-on Project"
            ]
        },
        {
            title: "Introduction to Hadoop",
            lessonsCount: 8,
            lessons: [
                "Hadoop Ecosystem Overview",
                "HDFS Architecture",
                "MapReduce Basics",
                "YARN Architecture",
                "Hadoop Cluster Setup",
                "Hadoop Compounds",
                "Data Ingestion",
                "Hadoop vs Spark"
            ]
        },
        {
            title: "Spark",
            lessonsCount: 5,
            lessons: [
                "Introduction to Apache Spark",
                "Spark Architecture",
                "RDDs vs DataFrames",
                "Spark SQL",
                "Spark Optimization Techniques"
            ]
        },
        {
            title: "Databricks",
            lessonsCount: 15,
            lessons: [
                "Getting Started with Databricks",
                "Databricks Workspace Overview",
                "Cluster Management",
                "Notebooks and Collaboration",
                "Databricks File System (DBFS)",
                "Delta Lake Architecture",
                "Reading and Writing Data",
                "Data Transformations",
                "Spark Jobs on Databricks",
                "Databricks SQL",
                "Unity Catalog",
                "Machine Learning with Databricks",
                "Performance Tuning",
                "CI/CD in Databricks",
                "Real-world Project"
            ]
        },
        {
            title: "Azure Data Factory",
            lessonsCount: 8,
            lessons: [
                "ADF Core Concepts",
                "Linked Services and Datasets",
                "Pipelines and Activities",
                "Data Flows",
                "Triggers and Scheduling",
                "Monitoring and Alerting",
                "Integration Runtime",
                "End-to-end Pipeline Project"
            ]
        },
        {
            title: "Synapse Analytics and Data Warehousing",
            lessonsCount: 10,
            lessons: [
                "Introduction to Azure Synapse",
                "Dedicated SQL Pools",
                "Serverless SQL Pools",
                "Spark Pools in Synapse",
                "Data Loading Strategies",
                "Synapse Studio Walkthrough",
                "Security in Synapse",
                "Performance Optimization",
                "Integrating with Power BI",
                "Capstone Project"
            ]
        },
        {
            title: "Agile Methodology",
            lessonsCount: 5,
            lessons: [
                "Understanding Agile Principles",
                "Scrum Framework",
                "Roles and Responsibilities",
                "Sprint Planning and Execution",
                "Agile Tools (JIRA/Azure DevOps)"
            ]
        },
        {
            title: "Introduction to JIRA",
            lessonsCount: 5,
            lessons: [
                "JIRA Basics",
                "Creating and Managing Issues",
                "Workflows and Boards",
                "Reporting and Dashboards",
                "JIRA for Data Engineering Teams"
            ]
        },
        // Recorded Sessions
        {
            title: "SQL and Azure SQL",
            lessonsCount: 11,
            lessons: [
                "Introduction to SQL",
                "DDL, DML, DCL Commands",
                "Joins and Subqueries",
                "Windows Functions",
                "Stored Procedures and Views",
                "Azure SQL Database Setup",
                "Elastic Pools",
                "Security and Performance Tuning",
                "Migrating to Azure SQL",
                "Case Study: Retail Database",
                "Case Study: Finance Database"
            ]
        },
        {
            title: "Microsoft Fabric",
            lessonsCount: 5,
            lessons: [
                "What is Microsoft Fabric?",
                "Fabric Architecture & OneLake",
                "Data Engineering in Fabric",
                "Data Science in Fabric",
                "Real-time Analytics with Fabric"
            ]
        },
        {
            title: "Real time Industry level projects",
            lessonsCount: 3,
            lessons: [
                "E-commerce Data Pipeline Project",
                "Healthcare Data Analytics Project",
                "Financial Fraud Detection System"
            ]
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Auto-scroll for features section
    useEffect(() => {
        const scrollContainer = featuresRef.current;
        if (!scrollContainer) return;

        let scrollInterval;
        let isHovered = false;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (!isHovered && scrollContainer) {
                    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                    const currentScroll = scrollContainer.scrollLeft;

                    if (currentScroll >= maxScroll) {
                        // Reset to start
                        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        // Scroll by one card width
                        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                }
            }, 3000); // Scroll every 3 seconds
        };

        const handleMouseEnter = () => {
            isHovered = true;
        };

        const handleMouseLeave = () => {
            isHovered = false;
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        startAutoScroll();

        return () => {
            clearInterval(scrollInterval);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="recorded-courses-page">
            <div className="container">
                <div className="featured-course-container">
                    {/* Left Side Content */}
                    <div className="featured-content-left">
                        <div className="featured-badge">
                            <span>⭐</span> Featured Course
                        </div>

                        <h1 className="featured-title">
                            Welcome to Cloud & Big<br />Data Engineering Course
                        </h1>

                        <p className="featured-description">
                            Master the art of building secure and scalable data pipelines in the cloud with Weblearnai Academy's Azure Data Engineering Course.
                        </p>

                        <div>
                            <div className="tech-stack-title">Technologies You'll Master:</div>
                            <div className="tech-tags">
                                <div className="tech-tag">
                                    <span>☁️</span> Azure
                                </div>
                                <div className="tech-tag">
                                    <img src={pythonLogo} alt="Python" /> Python
                                </div>
                                <div className="tech-tag">
                                    <span>⚡</span> Spark
                                </div>
                                <div className="tech-tag">
                                    <img src={databricksLogo} alt="Databricks" /> Databricks
                                </div>
                                <div className="tech-tag">
                                    <img src={sqlLogo} alt="SQL" /> SQL
                                </div>
                            </div>
                        </div>

                        <div className="course-stats">
                            <div className="stat-item">
                                <div className="stat-value">⭐ 4.8</div>
                                <div className="stat-label">Rating</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">👥 1000+</div>
                                <div className="stat-label">Students</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">🌐 Online</div>
                                <div className="stat-label">Mode</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">🗣️ English</div>
                                <div className="stat-label">Language</div>
                            </div>
                        </div>

                        <div className="action-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large" style={{ padding: '0.8rem 2rem' }}>
                                Enroll Now
                            </Link>
                            <Link to="/courses/azure-fabric" className="btn btn-secondary btn-large" style={{ padding: '0.8rem 2rem' }}>
                                View Curriculum
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Card */}
                    <div className="featured-content-right">
                        <div className="course-card-preview">
                            <div className="card-header-gradient">
                                <h3>Azure Data Engineering</h3>
                            </div>

                            <div className="card-body">
                                <div className="instructor-info">
                                    <img src={instructorImg} alt="Munavath" className="instructor-img" />
                                    <div className="instructor-details">
                                        <h4>Instructor</h4>
                                        <p>Munavath</p>
                                    </div>
                                </div>

                                <ul className="topic-list">
                                    <li className="topic-item">
                                        <span className="check-icon">✓</span>
                                        Azure Cloud, Azure SQL, Python, PySpark
                                    </li>
                                    <li className="topic-item">
                                        <span className="check-icon">✓</span>
                                        Databricks, Azure Data Factory
                                    </li>
                                    <li className="topic-item">
                                        <span className="check-icon">✓</span>
                                        Azure Synapse Analytics, Azure Data Lake
                                    </li>
                                    <li className="topic-item">
                                        <span className="check-icon">✓</span>
                                        Spark, Spark Streaming
                                    </li>
                                </ul>

                                <div className="card-footer">
                                    <div className="price-container">
                                        <span className="price-label">Course Price</span>
                                        <span className="price-value">₹24,990</span>
                                    </div>
                                    <Link to="/contact" className="enroll-btn-small">
                                        Enroll →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Section */}
                <div className="learning-section-container">
                    {/* Left Column: What You'll Learn */}
                    <div className="learning-left">
                        <h2 className="section-title">What You'll <span className="highlight-blue">Learn</span></h2>
                        <div className="learning-grid">
                            <div className="learning-card">
                                <div className="learning-icon-box" style={{ background: '#3b82f6' }}>
                                    <span style={{ fontSize: '1.8rem', color: 'white' }}>☁️</span>
                                </div>
                                <div className="learning-content">
                                    <h3>Azure Cloud Mastery</h3>
                                    <p>Master core Azure services and build strong cloud infrastructure foundations</p>
                                </div>
                            </div>

                            <div className="learning-card">
                                <div className="learning-icon-box" style={{ background: '#2563eb' }}>
                                    <span style={{ fontSize: '1.8rem' }}>💾</span>
                                </div>
                                <div className="learning-content">
                                    <h3>Big Data Processing</h3>
                                    <p>Learn to handle massive datasets with Azure Data Lake and Databricks</p>
                                </div>
                            </div>

                            <div className="learning-card">
                                <div className="learning-icon-box" style={{ background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={pythonLogo} alt="Python" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                </div>
                                <div className="learning-content">
                                    <h3>Python & PySpark</h3>
                                    <p>Write efficient data processing code with Python and Apache Spark</p>
                                </div>
                            </div>

                            <div className="learning-card">
                                <div className="learning-icon-box" style={{ background: '#2563eb' }}>
                                    <span style={{ fontSize: '1.8rem', color: 'white' }}>🔄</span>
                                </div>
                                <div className="learning-content">
                                    <h3>Data Pipeline Design</h3>
                                    <p>Build end-to-end ETL pipelines using Azure Data Factory and Synapse</p>
                                </div>
                            </div>

                            <div className="learning-card">
                                <div className="learning-icon-box" style={{ background: '#3b82f6' }}>
                                    <span style={{ fontSize: '1.8rem', color: 'white' }}>⚙️</span>
                                </div>
                                <div className="learning-content">
                                    <h3>Industry-Ready Skills</h3>
                                    <p>Learn tools and practices used by top data engineering teams</p>
                                </div>
                            </div>

                            <div className="learning-card">
                                <div className="learning-icon-box" style={{ background: '#2563eb' }}>
                                    <span style={{ fontSize: '1.8rem' }}>⚡</span>
                                </div>
                                <div className="learning-content">
                                    <h3>Real-Time Analytics</h3>
                                    <p>Work with streaming data and build real-time analytics solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: By the End of This Course */}
                    <div className="learning-right">
                        <h2 className="section-title">By the End of This <span className="highlight-blue">Course</span></h2>
                        <div className="outcomes-list">
                            <div className="outcome-item">
                                <div className="outcome-check">✓</div>
                                <div className="outcome-text">Design and build end-to-end data pipelines in Azure cloud</div>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-check">✓</div>
                                <div className="outcome-text">Master Databricks, Spark, and PySpark for big data processing</div>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-check">✓</div>
                                <div className="outcome-text">Implement data warehousing with Azure Synapse Analytics</div>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-check">✓</div>
                                <div className="outcome-text">Work with real-time data using Spark Streaming</div>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-check">✓</div>
                                <div className="outcome-text">Build secure and scalable data architectures</div>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-check">✓</div>
                                <div className="outcome-text">Apply Agile methodologies and DevOps practices</div>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-check">✓</div>
                                <div className="outcome-text">Complete hands-on projects for your portfolio</div>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-check">✓</div>
                                <div className="outcome-text">Prepare for Azure Data Engineer certification</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course Curriculum Section */}
                <div className="curriculum-section">
                    <div className="curriculum-header">
                        <h2 className="section-title">Course <span className="highlight-blue">Curriculum</span></h2>
                        <p className="curriculum-subtitle">Comprehensive modules covering everything from basics to advanced topics</p>
                    </div>

                    <div className="curriculum-container">
                        {/* Sidebar */}
                        <div className="curriculum-sidebar">
                            <div className="sidebar-header">Live Sessions</div>
                            {courseCurriculum.map((module, index) => (
                                <React.Fragment key={index}>
                                    {index === 10 && <div className="sidebar-header" style={{ marginTop: '1rem', borderTop: '1px solid #1e293b' }}>Recorded Sessions</div>}
                                    <div
                                        className={`module-item ${activeModule === index ? 'active' : ''}`}
                                        onClick={() => setActiveModule(index)}
                                    >
                                        <span className="module-title">{module.title}</span>
                                        <span className="module-lessons-count">{module.lessonsCount} lessons</span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="curriculum-content">
                            <div className="content-header">
                                <h3 className="content-title">{courseCurriculum[activeModule].title}</h3>
                                <span className="content-subtitle">{courseCurriculum[activeModule].lessonsCount} lessons</span>
                            </div>

                            <div className="lesson-list">
                                {courseCurriculum[activeModule].lessons.map((lesson, index) => (
                                    <div key={index} className="lesson-item">
                                        <div className="lesson-dot"></div>
                                        <span className="lesson-title">{lesson}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course Features Section */}
                <div className="features-section">
                    <div className="features-header">
                        <h2 className="section-title">Why Choose Our <span className="highlight-blue">Recorded Course</span></h2>
                        <p className="features-subtitle">Flexible learning designed for your success</p>
                    </div>
                    <div className="features-grid" ref={featuresRef}>
                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>Lifetime Access</h3>
                            <p>Access all course materials anytime, anywhere with no expiration date</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Self-Paced Learning</h3>
                            <p>Learn at your own speed and revisit topics as many times as you need</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📚</div>
                            <h3>Comprehensive Resources</h3>
                            <p>Downloadable materials, code samples, and hands-on projects included</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🏆</div>
                            <h3>Industry Certificate</h3>
                            <p>Earn a verified certificate upon completion to boost your career</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>Expert Support</h3>
                            <p>Get your doubts clarified through dedicated Q&A forums and support</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h3>Regular Updates</h3>
                            <p>Course content updated regularly to match industry standards</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="faq-header">
                        <h2 className="section-title">Frequently Asked <span className="highlight-blue">Questions</span></h2>
                    </div>
                    <div className="faq-container">
                        <div className="faq-item">
                            <div className="faq-question">
                                <span className="faq-icon">❓</span>
                                <h3>How long do I have access to the course?</h3>
                            </div>
                            <p className="faq-answer">You get lifetime access to all course materials, including future updates.</p>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                <span className="faq-icon">❓</span>
                                <h3>Can I download the videos?</h3>
                            </div>
                            <p className="faq-answer">Yes, you can download all video lectures for offline viewing along with course materials.</p>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                <span className="faq-icon">❓</span>
                                <h3>Will I get a certificate?</h3>
                            </div>
                            <p className="faq-answer">Yes, you'll receive a verified certificate of completion that you can share on LinkedIn.</p>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                <span className="faq-icon">❓</span>
                                <h3>What if I need help during the course?</h3>
                            </div>
                            <p className="faq-answer">You'll have access to our Q&A forum and email support for any technical or course-related queries.</p>
                        </div>
                        <div className="faq-item">
                            <div className="faq-question">
                                <span className="faq-icon">❓</span>
                                <h3>Is there a refund policy?</h3>
                            </div>
                            <p className="faq-answer">Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course.</p>
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="final-cta-section">
                    <div className="cta-content">
                        <h2>Ready to Start Your Data Engineering Journey?</h2>
                        <p>Join 1000+ students who have transformed their careers with our comprehensive Azure Data Engineering course</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now - ₹24,990
                            </Link>
                            <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary btn-large">
                                Talk to Our Team
                            </a>
                        </div>
                        <div className="cta-features">
                            <span>✓ Lifetime Access</span>
                            <span>✓ Certificate Included</span>
                            <span>✓ 7-Day Money Back</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecordedCourses;
