
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './AzureFabricCourse.css'; // Reusing established styles
import pythonGenAiHeroImg from '../assets/Gen ai.png';

// Import technology logos
import pythonLogo from '../assets/Python.png';
import genAiLogo from '../assets/Gen ai.png';
import sqlLogo from '../assets/SQL.png';
import githubLogo from '../assets/git hub.png';
import databricksLogo from '../assets/databricks.png';
// Using Python/AI relevant images for roadmap/tech if available, otherwise reuse general ones or placeholders
import roadmapImg from '../assets/learning-journey-path.png';

const PythonGenAiCourse = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [expandedCard, setExpandedCard] = useState(null);

    const technologies = [
        {
            name: 'Module 1: Introduction to Python',
            logo: pythonLogo,
            description: 'Basics, Syntax, and Control Structures',
            detailedDescription: (
                <>
                    <strong className="highlight">1. Basics of Python:</strong> Installation, Setup (IDEs), Variables, Data Types (int, float, str, bool), Input/Output.<br />
                    <strong className="highlight">2. Control Structures:</strong> Conditional Statements (If, elif, else), Loops (For, While), Loop control (break, continue, pass).<br />
                    <strong className="highlight">3. Functions:</strong> Defining Functions, Parameters, Return values, Scope, Lambda Functions.
                </>
            ),
            slug: 'python-basics',
            color: '#3776AB'
        },
        {
            name: 'Module 2: Data Structures',
            logo: sqlLogo,
            description: 'Lists, Tuples, Sets, and Dictionaries',
            detailedDescription: (
                <>
                    <strong className="highlight">1. Core Data Structures:</strong> Lists (creation, access, modification), Tuples (unpacking), Sets (operations like union, intersection).<br />
                    <strong className="highlight">2. Dictionaries:</strong> Creating and using dictionaries, Key-value pairs.<br />
                    <strong className="highlight">3. Advanced:</strong> Collections Module (defaultdict, Counter, OrderedDict, deque).
                </>
            ),
            slug: 'data-structures',
            color: '#0078D4'
        },
        {
            name: 'Module 3: File Handling',
            logo: githubLogo,
            description: 'File Operations, CSV, and JSON',
            detailedDescription: (
                <>
                    <strong className="highlight">1. File Operations:</strong> Opening, reading, writing, closing files. File modes (r, w, a, rb, wb).<br />
                    <strong className="highlight">2. Data Formats:</strong> Working with CSV and JSON modules. Reading from and writing to structured files.
                </>
            ),
            slug: 'file-handling',
            color: '#24292E'
        },
        {
            name: 'Module 4: OOP Concepts',
            logo: pythonLogo,
            description: 'Object-Oriented Programming',
            detailedDescription: (
                <>
                    <strong className="highlight">1. Basics:</strong> Classes and Objects, Instance variables and methods.<br />
                    <strong className="highlight">2. Advanced OOP:</strong> Class Variables, Inheritance (Single/Multiple), Polymorphism (Overriding), Encapsulation (Private variables).
                </>
            ),
            slug: 'oop',
            color: '#8E24AA'
        },
        {
            name: 'Module 5: Modules & Packages',
            logo: databricksLogo,
            description: 'Modular Programming',
            detailedDescription: (
                <>
                    <strong className="highlight">1. Modules:</strong> Creating, importing, and using modules.<br />
                    <strong className="highlight">2. Packages:</strong> Organizing code into packages, Importing from packages.
                </>
            ),
            slug: 'modules',
            color: '#FF3621'
        },
        {
            name: 'Module 6: Exception Handling',
            logo: sqlLogo,
            description: 'Error Handling and Debugging',
            detailedDescription: (
                <>
                    <strong className="highlight">1. Error Handling:</strong> Try, Except, Else, Finally blocks. Handling specific exceptions (ValueError, TypeError).<br />
                    <strong className="highlight">2. Custom Exceptions:</strong> Creating and raising custom errors.<br />
                    <strong className="highlight">3. Debugging:</strong> Using logging, print statements, and the debugger (pdb).
                </>
            ),
            slug: 'exceptions',
            color: '#F2C811'
        },
        {
            name: 'Module 7: Advanced Concepts',
            logo: pythonLogo,
            description: 'Decorators, Generators, Context Managers',
            detailedDescription: (
                <>
                    <strong className="highlight">1. Decorators:</strong> Function and Class decorators.<br />
                    <strong className="highlight">2. Context Managers:</strong> Using 'with' statement, Custom context managers.<br />
                    <strong className="highlight">3. Iterators & Generators:</strong> __iter__, __next__, yield keyword, Generator expressions.
                </>
            ),
            slug: 'advanced-python',
            color: '#4CAF50'
        },
        {
            name: 'Module 8: Libraries & Visualization',
            logo: databricksLogo,
            description: 'NumPy, Pandas, Matplotlib, Seaborn',
            detailedDescription: (
                <>
                    <strong className="highlight">1. NumPy:</strong> Arrays and matrix operations.<br />
                    <strong className="highlight">2. Pandas:</strong> DataFrames, Data manipulation, Reading/Writing (CSV, Excel).<br />
                    <strong className="highlight">3. Visualization:</strong> Plotting with Matplotlib and Seaborn (Statistical data visualization).
                </>
            ),
            slug: 'libraries',
            color: '#E91E63'
        },
        {
            name: 'Module 9: Generative AI',
            logo: genAiLogo,
            description: 'LLMs, RAG, NLP, and Agents',
            detailedDescription: (
                <>
                    <strong className="highlight">1. GenAI Foundations:</strong> AI vs ML vs DL, Generative AI principles, Ethical considerations.<br />
                    <strong className="highlight">2. NLP & Deep Learning:</strong> Text classification, Word Embeddings (Word2Vec, Glove), Transformers (BERT, GPT), CNNs/RNNs.<br />
                    <strong className="highlight">3. LLMs & Prompt Engineering:</strong> Prompt Decomposition, Few-shot prompting, Fine-tuning techniques, RLHF.<br />
                    <strong className="highlight">4. Advanced RAG:</strong> Chunking strategies (Recursive, Semantic, Agentic), Vector Databases (Pinecone, ChromaDB), Building RAG with LangChain.
                </>
            ),
            slug: 'gen-ai-advanced',
            color: '#7C3283'
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
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${pythonGenAiHeroImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >

                <div className="container">
                    <div className="course-hero-content">
                        <div className="course-badge">AI & Development</div>
                        <h1>Python & Generative AI Masterclass</h1>
                        <p className="course-subtitle">
                            Become a future-ready developer by mastering Python and Generative AI.
                            Build real-world applications with Large Language Models (LLMs), LangChain, and modern AI tools.
                        </p>
                        <div className="course-meta">
                            <span className="meta-item">⏱️ 10 Weeks</span>
                            <span className="meta-item">📚 Beginner to Advanced</span>
                            <span className="meta-item">🎯 10+ AI Projects</span>
                        </div>
                        <div className="course-cta">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now
                            </Link>
                            <Link to="/contact?syllabus=python-genai&name=Python and Generative AI" className="btn btn-secondary btn-large">
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

            {/* Technologies Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Course Curriculum</div>
                        <h2>Comprehensive Module Breakdown</h2>
                        <p className="lead">
                            From Python Basics to Advanced Generative AI & RAG Pipelines
                        </p>
                    </div>

                    <div className="simple-tech-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
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
                        <h2 style={{ fontSize: '2.5rem' }}>Your Journey to AI Engineering</h2>
                        <p className="lead">
                            Step-by-step roadmap to mastering the hottest skills in tech
                        </p>
                    </div>

                    {/* Visual Roadmap */}
                    <div className="visual-roadmap-section" style={{ marginBottom: '6rem' }}>
                        <div className="card" style={{ padding: '1rem', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                            {/* Reusing roadmap image or can replace with AI specific one */}
                            <img src={roadmapImg} alt="Learning Journey Path" style={{ width: '100%', borderRadius: '24px', display: 'block' }} />
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <div className="badge" style={{ background: '#fef2f2', color: '#ef4444' }}>Tech Stack</div>
                                <h2 style={{ fontSize: '2.2rem', marginTop: '1rem' }}>Core Technologies You'll Master</h2>
                                <p style={{ color: '#6b7280' }}>Industry-standard tools for AI development</p>
                            </div>

                            <div className="tech-stack-icons" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                                {/* Simple icon display if tech map not available */}
                                <img src={pythonLogo} alt="Python" style={{ height: '60px' }} />
                                <img src={genAiLogo} alt="GenAI" style={{ height: '60px' }} />
                                <img src={sqlLogo} alt="SQL" style={{ height: '60px' }} />
                                <img src={githubLogo} alt="GitHub" style={{ height: '60px' }} />
                                <img src={databricksLogo} alt="Databricks" style={{ height: '60px' }} />
                            </div>
                        </div>
                    </div>

                    {/* Learning Milestones */}
                    <div className="detailed-milestones" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        <div className="card" style={{ padding: '2.5rem', borderLeft: '6px solid #3b82f6' }}>
                            <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '2rem' }}>🐍</span> Phase 1: Python Core
                            </h3>
                            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Weeks 1-4 | Programming Foundation</p>
                            <ul style={{ paddingLeft: '1.2rem', lineHeight: '2' }}>
                                <li>Python Syntax & Data Structures</li>
                                <li>Object Oriented Programming</li>
                                <li>Data Handling with Pandas</li>
                                <li>API interactions</li>
                            </ul>
                        </div>

                        <div className="card" style={{ padding: '2.5rem', borderLeft: '6px solid #10b981' }}>
                            <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '2rem' }}>🤖</span> Phase 2: Generative AI
                            </h3>
                            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Weeks 5-8 | LLMs & Architectures</p>
                            <ul style={{ paddingLeft: '1.2rem', lineHeight: '2' }}>
                                <li>GPT Architecture & Transformers</li>
                                <li>OpenAI API & Prompt Engineering</li>
                                <li>LangChain Framework</li>
                                <li>Vector Databases (Chroma/Pinecone)</li>
                            </ul>
                        </div>

                        <div className="card" style={{ padding: '2.5rem', borderLeft: '6px solid #ef4444' }}>
                            <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ fontSize: '2rem' }}>🚀</span> Phase 3: Deployment
                            </h3>
                            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Weeks 9-10 | Building Real Apps</p>
                            <ul style={{ paddingLeft: '1.2rem', lineHeight: '2' }}>
                                <li>Building UI with Streamlit</li>
                                <li>End-to-End Chatbots</li>
                                <li>RAG Pipelines for Documents</li>
                                <li>Final Capstone Project</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section className="section bg-light">
                <div className="container">
                    <div className="course-overview">
                        <h2>Course Overview</h2>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ color: '#2563eb', fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '2rem' }}>
                                Our mission is simple — to help you <strong>upgrade your knowledge and stay relevant</strong> in the fast-changing IT industry.
                                As technology evolves, staying updated is not just important, it's necessary to survive and grow.
                                With our program, you’ll build the right skillsets to sustain your career confidently.
                                A simple rule we follow: <strong>The more you learn, the faster you earn.</strong>
                            </p>

                            <h3 style={{ color: '#2563eb', fontSize: '1.5rem', marginBottom: '1rem' }}>Our Vision</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4b5563' }}>
                                Our vision is to <strong>UPSKILL Professionals</strong> and prepare them for real-world industry needs.
                                We want to build a strong, skilled workforce that not only grows in their careers but also contributes to the growth of the country.
                                Our goal is to become a trusted name in job-oriented, practical training that makes a real difference in people's lives.
                            </p>
                        </div>

                        <div className="overview-grid">
                            <div className="overview-item">
                                <h3>🎯 What You'll Master</h3>
                                <ul>
                                    <li><strong>Python Mastery:</strong> Write efficient, scalable, and robust Python code.</li>
                                    <li><strong>Data Science stack:</strong> Pandas, NumPy, and Visualization libraries.</li>
                                    <li><strong>Generative AI:</strong> Build Chatbots, Agents, and RAG systems.</li>
                                    <li><strong>LLM Ops:</strong> Deploying and fine-tuning Language Models.</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>👨‍💻 Who Should Enroll</h3>
                                <ul>
                                    <li>Software Developers</li>
                                    <li>Data Analysts</li>
                                    <li>Aspiring AI Engineers</li>
                                    <li>Students & Freshers</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>📚 Prerequisites</h3>
                                <ul>
                                    <li>Basic logic building skills</li>
                                    <li>No prior coding experience required (we start from scratch)</li>
                                    <li>Passion for AI and Tech</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>🎁 What You Get</h3>
                                <ul>
                                    <li>Complete Hands-on Project Portfolio</li>
                                    <li>Interview Prep & Resume Building</li>
                                    <li>Lifetime Access to Materials</li>
                                    <li>Certificate of Completion</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hands-on Projects Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Practical Experience</div>
                        <h2>Build Real-World AI Applications</h2>
                        <p className="lead">
                            Theory is important, but practice makes you a pro. You'll build these portfolio-ready projects.
                        </p>
                    </div>

                    <div className="projects-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        marginTop: '3rem'
                    }}>
                        <div className="project-card" style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #f3f4f6'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
                            <h3 style={{ marginBottom: '1rem' }}>Smart Context-Aware Chatbot</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Build a chatbot that remembers conversation history using <strong className="highlight">LangChain memory</strong> and OpenAI API. Deploy it with a user-friendly UI.
                            </p>
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="tech-tag">LangChain</span>
                                <span className="tech-tag">OpenAI</span>
                                <span className="tech-tag">Streamlit</span>
                            </div>
                        </div>

                        <div className="project-card" style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #f3f4f6'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📑</div>
                            <h3 style={{ marginBottom: '1rem' }}>RAG: Chat with your PDF</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Create a system to upload PDF documents, embed them using <strong className="highlight">Vector Databases (Pinecone)</strong>, and ask questions based on the content.
                            </p>
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="tech-tag">RAG</span>
                                <span className="tech-tag">Pinecone</span>
                                <span className="tech-tag">LlamaIndex</span>
                            </div>
                        </div>

                        <div className="project-card" style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #f3f4f6'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
                            <h3 style={{ marginBottom: '1rem' }}>Automated Data Analyst Agent</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Develop an <strong className="highlight">AI Agent</strong> that can take a CSV file, analyze the data using Pandas, and auto-generate insights and charts.
                            </p>
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="tech-tag">Pandas</span>
                                <span className="tech-tag">Agents</span>
                                <span className="tech-tag">Python</span>
                            </div>
                        </div>

                        <div className="project-card" style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '16px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #f3f4f6'
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛍️</div>
                            <h3 style={{ marginBottom: '1rem' }}>E-commerce Product Description Generator</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Use <strong className="highlight">Few-Shot Prompting</strong> to fine-tune an LLM to write marketing copy for products based on specs and tone.
                            </p>
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span className="tech-tag">Prompt Eng</span>
                                <span className="tech-tag">Fine-Tuning</span>
                                <span className="tech-tag">Flask</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Roles Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Career Opportunities</div>
                        <h2>Roles You Can Target</h2>
                    </div>
                    <div className="roles-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                        {[
                            { title: 'Generative AI Engineer', salary: '₹12L - ₹35L' },
                            { title: 'Python Backend Developer', salary: '₹6L - ₹18L' },
                            { title: 'Prompt Engineer', salary: '₹8L - ₹25L' },
                            { title: 'AI Solutions Architect', salary: '₹20L - ₹50L' },
                            { title: 'Data Scientist (AI Focus)', salary: '₹10L - ₹30L' }
                        ].map((role, idx) => (
                            <div key={idx} style={{
                                background: '#fff',
                                padding: '1.5rem 2rem',
                                borderRadius: '50px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                border: '1px solid #e5e7eb'
                            }}>
                                <span style={{ fontWeight: '600', color: '#1f2937' }}>{role.title}</span>
                                <span style={{
                                    background: '#ecfdf5',
                                    color: '#059669',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: '500'
                                }}>{role.salary}</span>
                            </div>
                        ))}
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
                        background: 'linear-gradient(135deg, #FF6B6B 0%, #E91E63 100%)', // GenAI theme color
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(233, 30, 99, 0.3)',
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
                                Download Complete GenAI Syllabus
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
                                Get the detailed PDF curriculum covering Python, LLMs, RAG, and Agentic AI workflows.
                            </p>

                            {/* Download Button */}
                            <Link
                                to="/contact?syllabus=python-genai&name=Python and Generative AI"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    padding: '1.5rem 4rem',
                                    background: 'white',
                                    color: '#E91E63',
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
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Master AI?</h2>
                        <p className="lead">
                            Join the dedicated cohort for Python and Generative AI
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now
                            </Link>
                            <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary btn-large" style={{ background: 'transparent', border: '2px solid #000', color: '#000' }}>
                                Talk with Expert
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PythonGenAiCourse;
