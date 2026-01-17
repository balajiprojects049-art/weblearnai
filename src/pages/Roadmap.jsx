import { useEffect } from 'react';
import roadmapImg from '../assets/data-engineer-roadmap.jpg';
import techMapImg from '../assets/technology-stack-map.png';

const Roadmap = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px' }}>
            <section style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '6rem 0',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Career Roadmap to Data & Cloud</h1>
                    <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', maxWidth: '800px', margin: '0 auto' }}>
                        Your professional guide to mastering the modern data stack and landing your dream job.
                    </p>
                </div>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '1100px' }}>

                    {/* Visual Roadmap Section */}
                    <div className="visual-roadmap-section" style={{ marginBottom: '6rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div className="badge" style={{ background: '#eff6ff', color: '#3b82f6' }}>Visual Guide</div>
                            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>The Path to Mastery</h2>
                            <p style={{ color: '#6b7280' }}>Follow this proven track to transition from beginner to expert</p>
                        </div>

                        <div className="card" style={{ padding: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                            <img src={roadmapImg} alt="Data Engineer Career Roadmap" style={{ width: '100%', borderRadius: '24px', display: 'block' }} />
                        </div>


                    </div>

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

                    <div className="cta-box" style={{ marginTop: '6rem', background: '#0f172a', color: 'white', borderRadius: '32px', padding: '4rem', textAlign: 'center' }}>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Start Your Journey Today</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                            Don't navigate the technology maze alone. Join our academy and get a personalized mentorship path.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-large">Download Full PDF Roadmap</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Roadmap;
