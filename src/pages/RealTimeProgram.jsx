import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RealTimeProgram.css';

const RealTimeProgram = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="realtime-program-page">
            {/* Hero Section */}
            <div className="realtime-hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span>🚀</span> Live & Interactive
                        </div>
                        <h1 className="hero-title">
                            Real-Time Data Engineering <br />
                            <span className="highlight-blue">Training Program</span>
                        </h1>
                        <p className="hero-description">
                            Master Data Engineering with live instructor-led classes, hands-on projects, and real-world case studies.
                            Get mentored by industry experts and build production-ready skills.
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-value">⏰ 8 Weeks</div>
                                <div className="stat-label">Duration</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">👨‍🏫 Live Classes</div>
                                <div className="stat-label">Interactive</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">📁 5+ Projects</div>
                                <div className="stat-label">Hands-on</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">🏆 Certificate</div>
                                <div className="stat-label">Included</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">₹2,000</div>
                                <div className="stat-label">Price</div>
                            </div>
                        </div>
                        <div className="hero-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now
                            </Link>
                            <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary btn-large">
                                Talk with Expert
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Program Overview */}
            <div className="program-overview-section">
                <div className="container">
                    <div className="overview-content">
                        <div className="overview-text">
                            <h2 className="section-title">About the <span className="highlight-blue">Program</span></h2>
                            <p>
                                Our Real-Time Data Engineering Training Program is designed to bridge the gap between theoretical knowledge
                                and practical industry skills. Through live instructor-led sessions, you'll work on real-world projects
                                and gain hands-on experience with the latest tools and technologies used by top companies.
                            </p>
                            <p>
                                This intensive 8-week program combines live classes, project-based learning, and mentorship to ensure
                                you're ready to tackle real data engineering challenges from day one.
                            </p>
                        </div>
                        <div className="overview-stats">
                            <div className="stat-box">
                                <h3>100+</h3>
                                <p>Students Trained</p>
                            </div>
                            <div className="stat-box">
                                <h3>95%</h3>
                                <p>Job Placement Rate</p>
                            </div>
                            <div className="stat-box">
                                <h3>4.8/5</h3>
                                <p>Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who Should Join */}
            <div className="who-should-join-section">
                <div className="container">
                    <h2 className="section-title">Who Should <span className="highlight-blue">Join</span></h2>
                    <div className="join-grid">
                        <div className="join-column">
                            <h3>Ideal For:</h3>
                            <ul className="check-list">
                                <li>Recent graduates looking to start a career in Data Engineering</li>
                                <li>Software developers transitioning to data roles</li>
                                <li>Data analysts wanting to level up their technical skills</li>
                                <li>IT professionals seeking to upskill in cloud data technologies</li>
                                <li>Anyone passionate about working with large-scale data systems</li>
                            </ul>
                        </div>
                        <div className="join-column">
                            <h3>Prerequisites:</h3>
                            <ul className="check-list">
                                <li>Basic understanding of programming (Python preferred)</li>
                                <li>Familiarity with SQL and databases</li>
                                <li>Strong willingness to learn and practice</li>
                                <li>Access to a computer with internet connection</li>
                                <li>Commitment to attend all live sessions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Topics Covered */}
            <div className="topics-section">
                <div className="container">
                    <h2 className="section-title">Key <span className="highlight-blue">Topics Covered</span></h2>
                    <div className="topics-list">
                        <div className="topic-category">
                            <h3>🐍 Programming & Scripting</h3>
                            <p>Python for Data Engineering, Advanced SQL, Shell Scripting, Git & GitHub</p>
                        </div>
                        <div className="topic-category">
                            <h3>☁️ Cloud Platforms</h3>
                            <p>Azure Data Factory, Databricks, Synapse Analytics, AWS S3, Azure Blob Storage</p>
                        </div>
                        <div className="topic-category">
                            <h3>📊 Big Data Technologies</h3>
                            <p>Apache Spark, PySpark, Hadoop, Kafka, Real-time Streaming</p>
                        </div>
                        <div className="topic-category">
                            <h3>🔧 Data Engineering Tools</h3>
                            <p>ETL/ELT Pipelines, Data Orchestration, Airflow, Data Modeling, Data Warehousing</p>
                        </div>
                        <div className="topic-category">
                            <h3>💼 Industry Best Practices</h3>
                            <p>CI/CD for Data Pipelines, Monitoring & Logging, Performance Optimization, Security</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Program Benefits */}
            <div className="benefits-section">
                <div className="container">
                    <h2 className="section-title">Program <span className="highlight-blue">Benefits</span></h2>
                    <div className="benefits-content">
                        <div className="benefit-item">
                            <div className="benefit-icon">👨‍🏫</div>
                            <div className="benefit-text">
                                <h3>Live Interactive Classes</h3>
                                <p>Learn from industry experts in real-time with Q&A sessions and live coding demonstrations</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🎯</div>
                            <div className="benefit-text">
                                <h3>Hands-on Projects</h3>
                                <p>Build 5+ real-world projects including end-to-end data pipelines and streaming applications</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🤝</div>
                            <div className="benefit-text">
                                <h3>Personalized Mentorship</h3>
                                <p>Get one-on-one guidance from mentors to help you overcome challenges and grow faster</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">💼</div>
                            <div className="benefit-text">
                                <h3>Career Support</h3>
                                <p>Resume building, mock interviews, job referrals, and LinkedIn profile optimization</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">📚</div>
                            <div className="benefit-text">
                                <h3>Lifetime Access</h3>
                                <p>Access to all recorded sessions, study materials, and future course updates</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">🏆</div>
                            <div className="benefit-text">
                                <h3>Industry Certificate</h3>
                                <p>Earn a verified certificate of completion to showcase your skills to employers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Curriculum Overview */}
            <div className="curriculum-overview-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Program <span className="highlight-blue">Curriculum</span></h2>
                        <p className="section-subtitle">8-week intensive training covering all essential topics</p>
                    </div>
                    <div className="curriculum-timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker">Week 1-2</div>
                            <div className="timeline-content">
                                <h3>Foundations</h3>
                                <ul>
                                    <li>Python for Data Engineering</li>
                                    <li>SQL & Database Fundamentals</li>
                                    <li>Linux & Shell Scripting</li>
                                    <li>Git & Version Control</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">Week 3-4</div>
                            <div className="timeline-content">
                                <h3>Big Data Technologies</h3>
                                <ul>
                                    <li>Apache Spark & PySpark</li>
                                    <li>Hadoop Ecosystem</li>
                                    <li>Data Processing Pipelines</li>
                                    <li>ETL/ELT Concepts</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">Week 5-6</div>
                            <div className="timeline-content">
                                <h3>Cloud & Modern Tools</h3>
                                <ul>
                                    <li>Azure Data Factory</li>
                                    <li>Databricks Platform</li>
                                    <li>Azure Synapse Analytics</li>
                                    <li>Data Lake & Storage</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">Week 7-8</div>
                            <div className="timeline-content">
                                <h3>Real-World Projects</h3>
                                <ul>
                                    <li>End-to-End Pipeline Development</li>
                                    <li>Streaming Data Processing</li>
                                    <li>Data Warehousing Project</li>
                                    <li>Capstone Project Presentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learning Outcomes */}
            <div className="outcomes-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What You'll <span className="highlight-blue">Achieve</span></h2>
                    </div>
                    <div className="outcomes-grid">
                        <div className="outcome-card">
                            <div className="outcome-number">01</div>
                            <h3>Production-Ready Skills</h3>
                            <p>Build and deploy scalable data pipelines used in Fortune 500 companies</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-number">02</div>
                            <h3>Strong Portfolio</h3>
                            <p>5+ real-world projects to showcase during job interviews</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-number">03</div>
                            <h3>Industry Certification</h3>
                            <p>Weblearnai certificate plus preparation for Azure/AWS certifications</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-number">04</div>
                            <h3>Job Readiness</h3>
                            <p>Resume optimization, mock interviews, and placement support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Batch Schedule */}
            <div className="batch-schedule-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Upcoming <span className="highlight-blue">Batches</span></h2>
                        <p className="section-subtitle">Choose a schedule that works for you</p>
                    </div>
                    <div className="batch-cards">
                        <div className="batch-card">
                            <div className="batch-tag">Weekend Batch</div>
                            <h3>Saturdays & Sundays</h3>
                            <p className="batch-time">10:00 AM - 2:00 PM IST</p>
                            <p className="batch-start">Next Batch: January 20, 2026</p>
                            <div className="batch-seats">
                                <span className="seats-left">⚡ 8 seats left</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary">
                                Reserve Your Seat
                            </Link>
                        </div>
                        <div className="batch-card featured">
                            <div className="batch-tag popular">Most Popular</div>
                            <h3>Weekday Evening</h3>
                            <p className="batch-time">7:00 PM - 9:00 PM IST</p>
                            <p className="batch-start">Next Batch: January 15, 2026</p>
                            <div className="batch-seats">
                                <span className="seats-left">⚡ 5 seats left</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary">
                                Reserve Your Seat
                            </Link>
                        </div>
                        <div className="batch-card">
                            <div className="batch-tag">Fast Track</div>
                            <h3>Mon-Fri Intensive</h3>
                            <p className="batch-time">10:00 AM - 1:00 PM IST</p>
                            <p className="batch-start">Next Batch: February 1, 2026</p>
                            <div className="batch-seats">
                                <span className="seats-left">⚡ 12 seats left</span>
                            </div>
                            <Link to="/contact" className="btn btn-primary">
                                Reserve Your Seat
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="realtime-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Career?</h2>
                        <p>Join our next batch and become a skilled Data Engineer in just 8 weeks</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now
                            </Link>
                            <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary btn-large">
                                Schedule a Call
                            </a>
                        </div>
                        <div className="cta-features">
                            <span>✓ Live Classes</span>
                            <span>✓ Placement Support</span>
                            <span>✓ Industry Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealTimeProgram;
