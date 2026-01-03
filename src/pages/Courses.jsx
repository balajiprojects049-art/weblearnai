import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Courses.css';
import cloudInternshipImg from '../assets/cloud-internship.jpg';

// Import course icons
import azureDatabricksIcon from '../assets/azure-databricks-red-logo.png';
import microsoftFabricIcon from '../assets/microdoft fabric.png';
import sqlDatabaseIcon from '../assets/SQL.png';
import cloudEngineeringIcon from '../assets/cloud-engineering-final.png';
import pythonAiIcon from '../assets/Gen ai.png';

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [expandedSection, setExpandedSection] = useState(null);

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
            price: '₹24,000',
            rating: 4.9,
            students: '2,500+',
            iconImage: azureDatabricksIcon,
            icon: '🔧',
            color: '#E65100',
            whoIsThisFor: [
                'Anyone transitioning to data engineering',
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
            price: '₹24,000',
            rating: 4.9,
            students: '1,800+',
            iconImage: microsoftFabricIcon,
            icon: '🎯',
            color: '#008272',
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
        /* {
            id: 'power-bi',
            title: 'Full Stack Power BI with Fabric Tools',
            tagline: 'Transform data into stunning insights',
            duration: '8 Weeks',
            level: 'Beginner to Advanced',
            price: '₹35,000',
            rating: 4.8,
            students: '3,200+',
            icon: '📊',
            color: '#F2C811',
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
        }, */
        /* {
            id: 'cybersecurity',
            title: 'Cybersecurity & Python with Generative AI',
            tagline: 'Secure the digital world with AI-powered tools',
            duration: '14 Weeks',
            level: 'Intermediate',
            price: '₹55,000',
            rating: 4.7,
            students: '1,500+',
            icon: '🔒',
            color: '#DC143C',
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
        }, */
        {
            id: 'sql',
            title: 'SQL & Database Management',
            tagline: 'Master the language of data',
            duration: '8 Weeks',
            level: 'Beginner to Advanced',
            price: '₹3,000',
            rating: 4.8,
            students: '3,500+',
            iconImage: sqlDatabaseIcon,
            icon: '🗄️',
            color: '#336791',
            whoIsThisFor: [
                'Aspiring data analysts and engineers',
                'Developers wanting to master databases',
                'Business analysts working with data',
                'Anyone starting their data career',
            ],
            whatYouWillLearn: [
                'SQL fundamentals & syntax',
                'Complex queries with JOINs & subqueries',
                'Window functions & CTEs',
                'Database design & normalization',
                'Indexing & query optimization',
                'Stored procedures & triggers',
                'Transaction management & ACID properties',
                'Working with MySQL, PostgreSQL & SQL Server',
            ],
            tools: ['MySQL', 'PostgreSQL', 'SQL Server', 'MySQL Workbench', 'pgAdmin', 'DBeaver'],
            projects: [
                'Design a normalized e-commerce database',
                'Build complex analytical queries',
                'Optimize slow-running queries',
            ],
            certification: 'Certificate of completion with hands-on projects',
        },
        {
            id: 'cloud',
            title: 'Cloud Engineering (Azure/AWS/GCP)',
            tagline: 'Master multi-cloud architecture',
            duration: '12 Weeks',
            level: 'Intermediate',
            price: '₹25,000',
            rating: 4.8,
            students: '2,000+',
            iconImage: cloudEngineeringIcon,
            icon: '☁️',
            color: '#0284C7',
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
            price: '₹24,000',
            rating: 4.9,
            students: '2,800+',
            iconImage: pythonAiIcon,
            icon: '🤖',
            color: '#3776AB',
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

    const sections = [
        { id: 'whoIsThisFor', title: 'Who is this for?', icon: '👥', color: '#3b82f6' },
        { id: 'whatYouWillLearn', title: 'What you will learn', icon: '🎯', color: '#10b981' },
        { id: 'tools', title: 'Tools & Technologies', icon: '🛠️', color: '#f59e0b' },
        { id: 'projects', title: 'Real-World Projects', icon: '💼', color: '#8b5cf6' },
        { id: 'certification', title: 'Certification', icon: '🎓', color: '#ec4899' },
    ];

    const toggleSection = (sectionId) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId);
    };

    const handleCourseClick = (courseId) => {
        setSelectedCourse(courseId);
        setExpandedSection(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackClick = () => {
        setSelectedCourse(null);
        setExpandedSection(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="courses-page">
            {/* Header */}
            <section
                className="courses-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.85)), url(${cloudInternshipImg})`,
                    backgroundPosition: 'center 45%',
                    backgroundSize: 'cover'
                }}
            >
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

            {!selectedCourse ? (
                /* Course Cards Grid */
                <section className="section">
                    <div className="container">
                        <div className="section-header text-center">
                            <div className="badge">Choose Your Path</div>
                            <h2>Explore Our Courses</h2>
                            <p className="lead">Select a course to view detailed curriculum and enrollment options</p>
                        </div>

                        <div className="grid grid-3">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="course-card"
                                    onClick={() => handleCourseClick(course.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="course-card-icon" style={{ background: `linear-gradient(135deg, ${course.color} 0%, ${course.color}dd 100%)` }}>
                                        {course.iconImage ? (
                                            <img src={course.iconImage} alt={course.title} style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
                                        ) : (
                                            <span style={{ fontSize: '5.5rem' }}>{course.icon}</span>
                                        )}
                                    </div>
                                    <div className="course-card-content">
                                        <div className="course-card-header">
                                            <span className="course-level">{course.level}</span>
                                            <span className="course-duration">⏱️ {course.duration}</span>
                                        </div>
                                        <h3>{course.title}</h3>
                                        <p className="course-tagline">{course.tagline}</p>
                                        <div className="course-card-meta">
                                            <span>⭐ {course.rating}/5</span>
                                            <span>👥 {course.students}</span>
                                        </div>
                                        <div className="course-card-footer">
                                            <div className="course-price">{course.price}</div>
                                            <button className="btn btn-primary btn-sm">View Details →</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                /* Course Details with Expandable Sections */
                <section className="section" id="course-details">
                    <div className="container">
                        <button onClick={handleBackClick} className="btn btn-secondary" style={{ marginBottom: '2rem' }}>
                            ← Back to All Courses
                        </button>

                        {(() => {
                            const course = courses.find(c => c.id === selectedCourse);
                            return (
                                <>
                                    {/* Course Header */}
                                    <div className="course-detail-header" style={{
                                        background: `linear-gradient(135deg, ${course.color} 0%, ${course.color}dd 100%)`,
                                        padding: '3rem',
                                        borderRadius: '20px',
                                        marginBottom: '3rem',
                                        border: `2px solid ${course.color}`,
                                        boxShadow: `0 10px 30px ${course.color}30`
                                    }}>
                                        <div className="course-header-flex">
                                            <div style={{
                                                fontSize: '5rem',
                                                width: '180px',
                                                height: '180px',
                                                background: 'rgba(255, 255, 255, 0.9)',
                                                borderRadius: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backdropFilter: 'blur(10px)',
                                                padding: '15px'
                                            }}>
                                                {course.iconImage ? (
                                                    <img src={course.iconImage} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                ) : (
                                                    <span style={{ fontSize: '6rem' }}>{course.icon}</span>
                                                )}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h2 style={{ marginBottom: '0.5rem', color: 'white' }}>{course.title}</h2>
                                                <p className="course-tagline" style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.95)' }}>{course.tagline}</p>
                                                <div className="course-meta" style={{ color: 'white' }}>
                                                    <span className="meta-item" style={{ color: 'white' }}>
                                                        <strong style={{ color: 'white' }}>⏱️ Duration:</strong> {course.duration}
                                                    </span>
                                                    <span className="meta-item" style={{ color: 'white' }}>
                                                        <strong style={{ color: 'white' }}>📊 Level:</strong> {course.level}
                                                    </span>
                                                    <span className="meta-item" style={{ color: 'white' }}>
                                                        <strong style={{ color: 'white' }}>⭐ Rating:</strong> {course.rating}/5
                                                    </span>
                                                    <span className="meta-item" style={{ color: 'white' }}>
                                                        <strong style={{ color: 'white' }}>👥 Students:</strong> {course.students}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="course-price-box" style={{ textAlign: 'center' }}>
                                                <div className="course-price" style={{ fontSize: '2rem', marginBottom: '1rem', background: 'white', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{course.price}</div>
                                                <Link to="/contact" className="btn btn-secondary" style={{ marginBottom: '0.5rem', width: '100%', background: 'white', color: course.color, border: 'none' }}>
                                                    Enroll Now
                                                </Link>
                                                <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary" style={{ width: '100%', background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: '2px solid white', backdropFilter: 'blur(10px)' }}>
                                                    Talk to Advisor
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interactive Section Cards */}
                                    <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
                                        <h3>Course Curriculum</h3>
                                        <p className="lead">Click on any section to explore the details</p>
                                    </div>

                                    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                                        {sections.map((section) => (
                                            <div
                                                key={section.id}
                                                className={`section-card ${expandedSection === section.id ? 'expanded' : ''}`}
                                                onClick={() => toggleSection(section.id)}
                                                style={{
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <div className="section-card-header" style={{
                                                    background: `linear-gradient(135deg, ${section.color}15 0%, ${section.color}05 100%)`,
                                                    borderLeft: `4px solid ${section.color}`,
                                                    padding: '1.5rem',
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                        <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                                                        <h4 style={{ margin: 0, color: section.color }}>{section.title}</h4>
                                                    </div>
                                                    <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s ease', transform: expandedSection === section.id ? 'rotate(180deg)' : 'rotate(0)' }}>
                                                        ▼
                                                    </span>
                                                </div>

                                                {expandedSection === section.id && (
                                                    <div className="section-card-content" style={{
                                                        padding: '2rem',
                                                        background: 'white',
                                                        borderRadius: '0 0 12px 12px',
                                                        animation: 'slideDown 0.3s ease'
                                                    }}>
                                                        {section.id === 'whoIsThisFor' && (
                                                            <ul className="course-list">
                                                                {course.whoIsThisFor.map((item, idx) => (
                                                                    <li key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {section.id === 'whatYouWillLearn' && (
                                                            <ul className="course-list">
                                                                {course.whatYouWillLearn.map((item, idx) => (
                                                                    <li key={idx}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {section.id === 'tools' && (
                                                            <div className="tools-grid">
                                                                {course.tools.map((tool, idx) => (
                                                                    <span key={idx} className="tool-tag">
                                                                        {tool}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                        {section.id === 'projects' && (
                                                            <ul className="project-list">
                                                                {course.projects.map((project, idx) => (
                                                                    <li key={idx}>{project}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {section.id === 'certification' && (
                                                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>{course.certification}</p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section cta-section gradient-bg-primary">
                <div className="container">
                    <div className="text-center">
                        <h2 style={{ color: 'var(--gray-900)' }}>Not Sure Which Course to Choose?</h2>
                        <p className="lead" style={{ color: 'var(--gray-700)', marginBottom: '2rem' }}>
                            Book a free career consultation with our experts to find the perfect learning path
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary btn-large" style={{ background: '#2563eb', border: 'none', color: 'white', padding: '1rem 3rem', fontSize: '1.1rem', fontWeight: '600' }}>Book Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
