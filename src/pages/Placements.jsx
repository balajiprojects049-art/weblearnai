import { motion } from 'framer-motion';
import placementsHero from '../assets/placements-hero.jpg';
import amazonLogo from '../assets/amazon-logo.png';
import googleLogo from '../assets/google-logo.png';
import tcsLogo from '../assets/tcs-logo.png';
import infosysLogo from '../assets/infosys-logo.png';
import wiproLogo from '../assets/wipro-logo.png';
import accentureLogo from '../assets/accenture-logo.png';
import deloitteLogo from '../assets/deloitte-logo.png';
import cognizantLogo from '../assets/cognizant-logo.png';
import capgeminiLogo from '../assets/capgemini-logo.png';
import ibmLogo from '../assets/ibm-logo.png';
import oracleLogo from '../assets/oracle-logo.png';

const Placements = () => {
    const successStories = [
        {
            name: 'Amit Kumar',
            role: 'Data Engineer',
            company: 'Amazon',
            package: '₹18 LPA',
            from: 'B.Tech, 2023',
            testimonial: 'The mentorship and real-world projects helped me crack Amazon. Forever grateful!',
            avatar: '👨‍💻'
        },
        {
            name: 'Priya Sharma',
            role: 'Power BI Developer',
            company: 'Microsoft',
            package: '₹15 LPA',
            from: 'MBA, 2022',
            testimonial: 'Switched from finance to tech. Best decision ever. Thank you Weblearnai!',
            avatar: '👩‍💼'
        },
        {
            name: 'Rahul Verma',
            role: 'Cloud Architect',
            company: 'Google',
            package: '₹22 LPA',
            from: 'MCA, 2023',
            testimonial: 'The interview prep and resume building were game-changers. Got my dream job!',
            avatar: '👨‍🎓'
        }
    ];

    const companies = [
        { name: 'Microsoft', logo: null, color: '#00A4EF' },
        { name: 'Amazon', logo: amazonLogo, color: '#FF9900' },
        { name: 'Google', logo: googleLogo, color: '#4285F4' },
        { name: 'TCS', logo: tcsLogo, color: '#0066B2' },
        { name: 'Infosys', logo: infosysLogo, color: '#007CC3' },
        { name: 'Wipro', logo: wiproLogo, color: '#7C3085' },
        { name: 'Accenture', logo: accentureLogo, color: '#A100FF' },
        { name: 'Deloitte', logo: deloitteLogo, color: '#86BC25' },
        { name: 'Cognizant', logo: cognizantLogo, color: '#0033A1' },
        { name: 'Capgemini', logo: capgeminiLogo, color: '#0070AD' },
        { name: 'IBM', logo: ibmLogo, color: '#006699' },
        { name: 'Oracle', logo: oracleLogo, color: '#F80000' }
    ];

    return (
        <div style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <section className="gradient-bg-primary" style={{
                padding: '5rem 0',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${placementsHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
                        <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>
                            Placements & Career Support
                        </h1>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Comprehensive career assistance to help you land your dream job in top companies
                        </p>
                    </motion.div>
                </div>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
            </section>

            {/* Placement Stats */}
            <section className="section" style={{ padding: '4rem 0', background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                textAlign: 'center',
                                boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>95%</div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.95 }}>Placement Rate</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                color: 'white',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                textAlign: 'center',
                                boxShadow: '0 10px 40px rgba(240, 147, 251, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>₹15 LPA</div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.95 }}>Average Package</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                color: 'white',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                textAlign: 'center',
                                boxShadow: '0 10px 40px rgba(79, 172, 254, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>500+</div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.95 }}>Hiring Partners</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            style={{
                                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                                color: 'white',
                                padding: '3rem 2rem',
                                borderRadius: '16px',
                                textAlign: 'center',
                                boxShadow: '0 10px 40px rgba(250, 112, 154, 0.3)'
                            }}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>₹52 LPA</div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.95 }}>Highest Package</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: '#1e293b' }}>
                        🌟 Success Stories
                    </h2>
                    <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Real stories from our students who landed their dream jobs
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {successStories.map((story, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    margin: '0 auto 1rem'
                                }}>
                                    {story.avatar}
                                </div>
                                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#1e293b' }}>{story.name}</h3>
                                <p style={{ textAlign: 'center', color: '#667eea', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                                    {story.role} at {story.company}
                                </p>
                                <div style={{
                                    background: '#fef3c7',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    color: '#92400e',
                                    fontWeight: '600'
                                }}>
                                    Package: {story.package}
                                </div>
                                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem', textAlign: 'center' }}>
                                    {story.from}
                                </p>
                                <p style={{
                                    color: '#475569',
                                    fontStyle: 'italic',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    background: '#f8fafc',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #667eea'
                                }}>
                                    "{story.testimonial}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Partners */}
            <section className="section" style={{ padding: '4rem 0', background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: '#1e293b' }}>
                        🏢 Our Hiring Partners
                    </h2>
                    <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.1rem', marginBottom: '3rem' }}>
                        We have partnerships with 500+ leading companies across industries
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '1.5rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {companies.map((company, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                style={{
                                    background: 'white',
                                    padding: '0',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Company Logo */}
                                {company.logo ? (
                                    <div style={{
                                        marginBottom: '0rem',
                                        padding: '2rem 1.5rem 1rem 1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '90px',
                                        flex: '1'
                                    }}>
                                        <img
                                            src={company.logo}
                                            alt={`${company.name} logo`}
                                            style={{
                                                maxWidth: '140px',
                                                maxHeight: '70px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                ) : (
                                    // Microsoft SVG (no PNG available yet)
                                    <div style={{ marginBottom: '1rem', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg width="80" height="80" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0" y="0" width="10.8" height="10.8" fill="#F25022" />
                                            <rect x="12.2" y="0" width="10.8" height="10.8" fill="#7FBA00" />
                                            <rect x="0" y="12.2" width="10.8" height="10.8" fill="#00A4EF" />
                                            <rect x="12.2" y="12.2" width="10.8" height="10.8" fill="#FFB900" />
                                        </svg>
                                    </div>
                                )}

                                <div style={{
                                    fontWeight: '600',
                                    color: 'white',
                                    fontSize: '0.95rem',
                                    textAlign: 'center',
                                    background: company.color,
                                    padding: '0.75rem',
                                    marginTop: 'auto',
                                    borderRadius: '0 0 12px 12px'
                                }}>{company.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Support Services */}
            <section className="section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: '#1e293b' }}>
                        🚀 Career Support Services
                    </h2>
                    <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        End-to-end career assistance from resume building to job placement
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: '📝', title: 'Resume Building', desc: 'Professional resume reviews and ATS optimization to stand out from the crowd' },
                            { icon: '🎤', title: 'Mock Interviews', desc: 'Practice with real interview scenarios from top companies and get expert feedback' },
                            { icon: '💼', title: 'Job Referrals', desc: 'Direct referrals to our network of 500+ hiring partners worldwide' },
                            { icon: '🎯', title: 'Career Planning', desc: 'One-on-one sessions to plan your career trajectory and set achievable goals' },
                            { icon: '📊', title: 'Portfolio Projects', desc: 'Build impressive projects that showcase your skills to potential employers' },
                            { icon: '🤝', title: 'LinkedIn Optimization', desc: 'Enhance your LinkedIn profile to attract recruiters and build your personal brand' }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}
                                style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    margin: '0 auto 1rem'
                                }}>
                                    {service.icon}
                                </div>
                                <h4 style={{ marginBottom: '0.75rem', fontSize: '1.3rem', color: '#1e293b' }}>{service.title}</h4>
                                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
                            Join hundreds of successful students who landed their dream jobs
                        </p>
                        <a
                            href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting"
                            data-tidy="popup"
                            style={{
                                display: 'inline-block',
                                padding: '1rem 3rem',
                                background: 'white',
                                color: '#667eea',
                                borderRadius: '30px',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                            }}
                        >
                            Book Free Career Counseling
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Placements;
