import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './WebDevelopmentCourse.css';
import webDevHero from '../assets/web-development.jpg';

const WebDevelopmentCourse = () => {
    const [expandedModule, setExpandedModule] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const modules = [
        {
            name: 'Foundations',
            topics: [
                'Internet Basics (HTTP/HTTPS protocols, DNS, how browsers work)',
                'VS Code setup and essential extensions (Live Server, Prettier, ESLint)',
                'Git & GitHub (Version control, branching, pull requests, collaboration)',
                'Command Line basics (Navigation, file operations)',
                'Developer tools and debugging'
            ],
            purpose: 'Understand how the web works and set up professional development tools',
            icon: '🔧',
            color: '#3b82f6',
            description: 'Master the foundational tools and concepts every web developer needs. Learn how data flows across the internet, how to track your code changes with Git, and set up a professional development environment.',
            duration: '1 Week',
            projects: ['Personal portfolio website using basic HTML/CSS', 'Git repository with proper documentation']
        },
        {
            name: 'Front-end Basics',
            topics: [
                'HTML5 (Semantic tags, forms, accessibility, SEO basics)',
                'CSS3 (Box model, positioning, pseudo-classes, animations)',
                'Flexbox (One-dimensional layouts, alignment, distribution)',
                'CSS Grid (Two-dimensional layouts, responsive grids)',
                'JavaScript ES6+ (Variables, functions, arrays, objects)',
                'DOM Manipulation (Selecting elements, event handling)',
                'Responsive Design (Mobile-first approach, media queries)'
            ],
            purpose: 'Build the visible part of websites with modern HTML, CSS, and JavaScript',
            icon: '🎨',
            color: '#10b981',
            description: 'Create beautiful, responsive user interfaces. Learn to structure content with HTML5, style with modern CSS techniques like Flexbox and Grid, and add interactivity with JavaScript.',
            duration: '3 Weeks',
            projects: ['Responsive landing page for a business', 'Interactive calculator with JavaScript', 'Photo gallery with CSS Grid']
        },
        {
            name: 'Front-end Frameworks',
            topics: [
                'React fundamentals (Components, JSX, Virtual DOM)',
                'React Hooks (useState, useEffect, useContext, custom hooks)',
                'State Management (Props, Context API, Redux basics)',
                'React Router (Navigation, dynamic routing)',
                'Component lifecycle and optimization',
                'Vue.js basics (Alternative framework overview)',
                'Angular fundamentals (TypeScript, Components, Services)'
            ],
            purpose: 'Create dynamic Single Page Applications (SPA) with modern frameworks',
            icon: '⚛️',
            color: '#8b5cf6',
            description: 'Master React.js to build complex, interactive web applications. Learn component-based architecture, state management, and how to create reusable UI components.',
            duration: '3 Weeks',
            projects: ['Movie search app using React and external API', 'Todo app with local storage', 'Weather dashboard with real-time data']
        },
        {
            name: 'Back-end Development',
            topics: [
                'Node.js fundamentals (Event loop, modules, npm packages)',
                'Express.js (Routing, middleware, error handling)',
                'RESTful API design (CRUD operations, status codes)',
                'Authentication & Authorization (JWT, sessions, OAuth)',
                'Python basics (Syntax, data types, functions)',
                'Django/Flask frameworks (MVT pattern, ORM)',
                'API security best practices'
            ],
            purpose: 'Handle server logic, create APIs, and implement business logic',
            icon: '⚙️',
            color: '#f59e0b',
            description: 'Build powerful server-side applications. Learn to create RESTful APIs, handle authentication, and implement secure backend systems with Node.js or Python.',
            duration: '3 Weeks',
            projects: ['REST API for a blog platform', 'User authentication system', 'Real-time chat application']
        },
        {
            name: 'Databases',
            topics: [
                'Database fundamentals (ACID properties, normalization)',
                'SQL (SELECT, JOIN, subqueries, indexes)',
                'MySQL/PostgreSQL (Relational databases, transactions)',
                'MongoDB (NoSQL, documents, collections)',
                'Database design and schema planning',
                'ORMs (Sequelize, Mongoose)',
                'Database optimization and performance'
            ],
            purpose: 'Store, retrieve, and manage application data efficiently',
            icon: '🗄️',
            color: '#06b6d4',
            description: 'Master both SQL and NoSQL databases. Learn to design efficient database schemas, write complex queries, and choose the right database for your application.',
            duration: '2 Weeks',
            projects: ['E-commerce database schema design', 'User management system with MongoDB', 'Analytics dashboard with SQL queries']
        },
        {
            name: 'Deployment & DevOps',
            topics: [
                'Git workflows (Feature branches, merge strategies)',
                'Cloud platforms (AWS, Azure, Google Cloud basics)',
                'Vercel & Netlify (Frontend deployment)',
                'Heroku & Railway (Backend deployment)',
                'Docker fundamentals (Containers, images, volumes)',
                'CI/CD pipelines (GitHub Actions, automated testing)',
                'Domain & DNS management',
                'Environment variables and security'
            ],
            purpose: 'Launch projects live on the internet and maintain them professionally',
            icon: '🚀',
            color: '#ec4899',
            description: 'Deploy your applications to production. Learn containerization with Docker, set up continuous deployment pipelines, and manage cloud infrastructure.',
            duration: '2 Weeks',
            projects: ['Deploy full-stack app to cloud', 'Set up CI/CD pipeline', 'Configure custom domain and SSL']
        }
    ];

    const learningPaths = [
        {
            title: 'Self-Paced (Free)',
            duration: '6–12 months',
            cost: '₹0',
            platforms: 'freeCodeCamp, The Odin Project',
            bestFor: 'Highly motivated self-learners',
            icon: '📚',
            color: '#10b981'
        },
        {
            title: 'Online Bootcamps (Paid)',
            duration: '3–6 months',
            cost: '₹500 – ₹1,00,000+',
            platforms: 'Udemy, Coursera, AlmaBetter',
            bestFor: 'Includes mentorship and structured learning',
            icon: '🎓',
            color: '#3b82f6'
        },
        {
            title: 'University Certification',
            duration: '~6 months',
            cost: 'Varies',
            platforms: 'IITs, edX, Coursera',
            bestFor: 'Certifications and academic recognition',
            icon: '🏆',
            color: '#8b5cf6'
        }
    ];

    const roadmap = [
        {
            phase: 'Phase 1: Structure & Design',
            topics: [
                'Week 1: HTML5 fundamentals - Learn semantic HTML, forms, tables, and accessibility',
                'Week 2: CSS3 Basics - Master box model, positioning, flexbox layouts',
                'Week 3: CSS Grid & Responsive Design - Create mobile-first responsive websites',
                'Practice Project: Build a fully responsive multi-page business website'
            ],
            icon: '🎨',
            color: '#3b82f6',
            learningTips: 'Focus on understanding the why, not just the how. Practice daily by recreating designs you see online.',
            tools: ['VS Code', 'Chrome DevTools', 'Figma (for design references)']
        },
        {
            phase: 'Phase 2: Programming Logic',
            topics: [
                'Week 4-5: JavaScript Fundamentals - Variables, data types, functions, loops',
                'Week 5-6: ES6+ Modern Features - Arrow functions, destructuring, spread operator',
                'Week 6-7: DOM Manipulation - Select elements, handle events, create dynamic content',
                'Week 7: Async JavaScript - Promises, async/await, fetch API for real data',
                'Practice Projects: Interactive calculator, Quiz app, Form validation'
            ],
            icon: '💻',
            color: '#10b981',
            learningTips: 'Write code every day. Solve problems on platforms like LeetCode or HackerRank to strengthen logic.',
            tools: ['Console debugging', 'npm packages', 'JavaScript30 challenges']
        },
        {
            phase: 'Phase 3: Front-end Mastery',
            topics: [
                'Week 8-9: React Fundamentals - Components, JSX, props, state with useState',
                'Week 9-10: React Hooks - useEffect for side effects, useContext for global state',
                'Week 10-11: Advanced React - Custom hooks, performance optimization, React Router',
                'Week 11: Tailwind CSS - Rapid UI development with utility-first CSS',
                'Week 12: API Integration - Connect to real APIs, handle loading and error states',
                'Capstone Project: Build a complete SPA like movie search or e-commerce catalog'
            ],
            icon: '⚛️',
            color: '#8b5cf6',
            learningTips: 'Think in components. Break down UI into reusable pieces. Read official React docs thoroughly.',
            tools: ['Create React App / Vite', 'React DevTools', 'Axios/Fetch', 'Tailwind CSS']
        },
        {
            phase: 'Phase 4: Back-end & Database',
            topics: [
                'Week 13: Node.js & Express - Set up server, routing, middleware',
                'Week 13-14: RESTful APIs - Build CRUD endpoints for resources',
                'Week 14: Authentication - Implement JWT-based user login/signup',
                'Week 14: MongoDB - NoSQL database, CRUD operations with Mongoose',
                'Week 15: SQL Basics - Learn MySQL/PostgreSQL for relational data',
                'Integration Project: Full-stack blog with user auth, posts, comments'
            ],
            icon: '⚙️',
            color: '#f59e0b',
            learningTips: 'Test your APIs with Postman. Understand REST principles. Learn to read documentation quickly.',
            tools: ['Node.js', 'Express', 'MongoDB Atlas', 'Postman', 'Sequelize/Mongoose']
        },
        {
            phase: 'Phase 5: Projects & Portfolio',
            topics: [
                'Project 1: 🛒 E-commerce Platform - Product catalog, cart, checkout, admin panel',
                'Project 2: 📊 Full-stack Dashboard - User management, analytics, data visualization',
                'Project 3: ✅ Project Management Tool - Task boards, team collaboration, real-time updates',
                'Build professional README files with screenshots and live demos',
                'Deploy all projects to cloud platforms with custom domains',
                'Create an outstanding portfolio website showcasing your work'
            ],
            icon: '🚀',
            color: '#ec4899',
            learningTips: 'Pick projects that solve real problems. Add them to GitHub with good documentation. Share on LinkedIn.',
            tools: ['Git/GitHub', 'Vercel/Netlify', 'Heroku/Railway', 'Namecheap (domains)']
        }
    ];

    const aiTools = [
        {
            name: 'GitHub Copilot',
            description: 'AI-powered code completion and suggestions',
            icon: '🤖'
        },
        {
            name: 'ChatGPT',
            description: 'For debugging & optimization assistance',
            icon: '💬'
        },
        {
            name: 'AI Design Tools',
            description: 'AI-powered design & testing automation',
            icon: '🎨'
        }
    ];

    return (
        <div className="web-dev-course">
            {/* Hero Section */}
            <section
                className="course-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url(${webDevHero})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="container">
                    <div className="course-hero-content">
                        <div className="course-badge">Web Development 2025</div>
                        <h1>Web Development Roadmap</h1>
                        <p className="course-subtitle">
                            A clear, modern, and job-ready path to become a Full-Stack Web Developer in 2025
                        </p>
                        <div className="course-meta">
                            <span className="meta-item">⏱️ 14 Weeks</span>
                            <span className="meta-item">📚 Beginner to Advanced</span>
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
            </section >

            {/* Career Paths */}
            < section className="section" >
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Career Paths</div>
                        <h2>Choose Your Development Path</h2>
                        <p className="lead">
                            Web development offers three main career trajectories
                        </p>
                    </div>

                    <div className="grid grid-3">
                        <div className="card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
                            <h3>Front-end Developer</h3>
                            <p>Focuses on what users see and interact with. Build beautiful, responsive interfaces.</p>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
                            <h3>Back-end Developer</h3>
                            <p>Handles server-side logic and databases. Power the behind-the-scenes functionality.</p>
                        </div>
                        <div className="card">
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                            <h3>Full-stack Developer</h3>
                            <p>Works on both front-end and back-end. Complete ownership of web applications.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Core Modules */}
            < section className="section bg-light" >
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Syllabus</div>
                        <h2>Core Modules</h2>
                        <p className="lead">
                            Progressive learning path from basics to real-world applications
                        </p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
                        {modules.map((module, index) => (
                            <div
                                key={index}
                                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                                    borderLeft: `4px solid ${module.color}`,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '2.5rem' }}>{module.icon}</span>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                            <h3 style={{ margin: 0, color: module.color }}>{module.name}</h3>
                                            <span style={{
                                                padding: '0.25rem 0.75rem',
                                                background: `${module.color}15`,
                                                color: module.color,
                                                borderRadius: '12px',
                                                fontSize: '0.85rem',
                                                fontWeight: '600'
                                            }}>
                                                {module.duration}
                                            </span>
                                        </div>
                                        <p style={{ margin: '0.5rem 0 0', color: '#6b7280', fontSize: '0.95rem' }}>{module.purpose}</p>
                                    </div>
                                    <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: expandedModule === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                                        ▼
                                    </span>
                                </div>

                                {/* Module Description */}
                                <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '1rem', fontStyle: 'italic' }}>
                                    {module.description}
                                </p>

                                {expandedModule === index && (
                                    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
                                        <h4 style={{ marginBottom: '1rem', color: '#111827' }}>📚 Topics Covered:</h4>
                                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#4b5563', marginBottom: '1.5rem' }}>
                                            {module.topics.map((topic, idx) => (
                                                <li key={idx}>{topic}</li>
                                            ))}
                                        </ul>

                                        <h4 style={{ marginBottom: '1rem', color: '#111827' }}>🎯 Practice Projects:</h4>
                                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#4b5563' }}>
                                            {module.projects.map((project, idx) => (
                                                <li key={idx}>{project}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Learning Paths */}
            < section className="section" >
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">How to Learn</div>
                        <h2>Learning Paths & Duration</h2>
                        <p className="lead">
                            Choose a learning style based on time, budget, and career goals
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {learningPaths.map((path, index) => (
                            <div key={index} className="card" style={{ borderTop: `4px solid ${path.color}` }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{path.icon}</div>
                                <h3 style={{ color: path.color }}>{path.title}</h3>
                                <div style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                                    <p><strong>Duration:</strong> {path.duration}</p>
                                    <p><strong>Cost:</strong> {path.cost}</p>
                                    <p style={{ fontSize: '0.9rem', color: '#6b7280' }}><strong>Platforms:</strong> {path.platforms}</p>
                                </div>
                                <p style={{ fontSize: '0.95rem', color: '#4b5563', fontStyle: 'italic' }}>
                                    {path.bestFor}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Roadmap */}
            < section className="section bg-light" >
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Step-by-Step</div>
                        <h2>Recommended Learning Roadmap</h2>
                        <p className="lead">
                            Follow this beginner-friendly path to avoid confusion and burnout
                        </p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '2rem' }}>
                        {roadmap.map((phase, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    padding: '2.5rem',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                                    borderLeft: `6px solid ${phase.color}`
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <span style={{ fontSize: '3rem' }}>{phase.icon}</span>
                                    <h3 style={{ margin: 0, color: phase.color, fontSize: '1.5rem' }}>{phase.phase}</h3>
                                </div>

                                <ul style={{ paddingLeft: '1.5rem', lineHeight: '2.2', fontSize: '1.05rem', color: '#4b5563', marginBottom: '2rem' }}>
                                    {phase.topics.map((topic, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{topic}</li>
                                    ))}
                                </ul>

                                {/* Learning Tips */}
                                <div style={{
                                    padding: '1.25rem',
                                    background: '#f0f9ff',
                                    borderRadius: '12px',
                                    borderLeft: `3px solid ${phase.color}`,
                                    marginBottom: '1rem'
                                }}>
                                    <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                        <strong>💡 Pro Tip:</strong> {phase.learningTips}
                                    </p>
                                </div>

                                {/* Tools */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', color: '#6b7280', marginRight: '0.5rem' }}>🛠️ Tools:</span>
                                    {phase.tools.map((tool, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                padding: '0.4rem 0.85rem',
                                                background: `${phase.color}10`,
                                                color: phase.color,
                                                borderRadius: '20px',
                                                fontSize: '0.85rem',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* AI & Modern Development */}
            < section className="section" >
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">2025 Focus</div>
                        <h2>AI & Modern Development</h2>
                        <p className="lead">
                            Work smartly with AI tools - Let them assist your thinking, not replace learning fundamentals
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {aiTools.map((tool, index) => (
                            <div key={index} className="card" style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{tool.icon}</div>
                                <h3>{tool.name}</h3>
                                <p style={{ color: '#6b7280' }}>{tool.description}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                        borderRadius: '16px',
                        borderLeft: '4px solid #f59e0b',
                        textAlign: 'center'
                    }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#78350f', margin: 0 }}>
                            ⚠️ Important: AI should assist your thinking, not replace learning fundamentals
                        </p>
                    </div>
                </div>
            </section >

            {/* Final Outcomes */}
            < section className="section bg-light" >
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="section-header text-center">
                        <div className="badge">What You'll Achieve</div>
                        <h2>Final Outcome for Students</h2>
                        <p className="lead">
                            By the end of this roadmap, you will be job-ready
                        </p>
                    </div>

                    <div className="card" style={{ padding: '3rem' }}>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {[
                                'Build responsive, modern websites',
                                'Develop full-stack applications',
                                'Deploy projects online',
                                'Create a professional portfolio',
                                'Apply for Front-end / Full-stack developer roles'
                            ].map((outcome, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f9fafb', borderRadius: '12px' }}>
                                    <span style={{ fontSize: '1.5rem' }}>✅</span>
                                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#111827' }}>{outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        marginTop: '3rem',
                        padding: '2.5rem',
                        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                        borderRadius: '20px',
                        textAlign: 'center',
                        borderLeft: '6px solid #3b82f6'
                    }}>
                        <p style={{ fontSize: '1.3rem', fontWeight: '600', color: '#1e40af', marginBottom: '0.5rem' }}>
                            📌 Consistency is more important than speed
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#1e3a8a', margin: 0 }}>
                            Learn daily, build projects, and stay curious
                        </p>
                    </div>
                </div>
            </section >

            {/* CTA */}
            < section className="section" >
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Start Your Web Development Journey?</h2>
                        <p className="lead">
                            Join thousands of students building amazing web applications
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
            </section >
        </div >
    );
};

export default WebDevelopmentCourse;
