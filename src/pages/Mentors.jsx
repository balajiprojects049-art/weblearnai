import { motion } from 'framer-motion';
import mentorsHero from '../assets/mentors-hero.jpg';
import munavathPortrait from '../assets/munavath-portrait.jpg';
import pranayPortrait from '../assets/pranay-portrait-updated.jpg';
import shivaPortrait from '../assets/shiva-portrait.jpg';

const Mentors = () => {
    const mentors = [
        {
            name: 'Munavath',
            image: munavathPortrait,
            role: 'Co-founder of weblearnai / Certified Professional Coach',
            experience: '10+ years',
            companies: 'Multiple Product Companies',
            specialization: 'Azure, Databricks, Data Engineering',
            certifications: ['Azure Fundamentals', 'Databricks Fundamentals', 'Databricks Data Engineer Associate'],
            description: "Munavath is a Senior Data Engineer skilled in designing and building data pipelines, integrating complex data systems, and delivering real-world analytics solutions across multiple domains.",
            achievements: ['Microsoft & Databricks certified', 'Trained 500+ aspiring Data Engineers']
        },
        {
            name: 'Pranay Kumar Sikilambatla',
            image: pranayPortrait,
            role: 'Data Engineer / Ex. Microsoft',
            experience: '9+ years',
            companies: 'Microsoft, Fortune 500 Companies',
            specialization: 'Python, PySpark, AWS, Azure Cloud',
            certifications: ['Python & SQL Expert', 'PySpark & Databricks', 'AWS & Azure Cloud'],
            description: "Pranay is an experienced Data Engineer with expertise in data pipelines, ETL workflows, and large-scale systems. He has delivered scalable data architectures across finance, healthcare, and analytics domains.",
            achievements: ['Built systems handling TB-scale data', 'Expert in Hadoop, Kafka & Airflow']
        },
        {
            name: 'Shiva',
            image: shivaPortrait,
            role: 'Data Engineer & Web Developer',
            experience: '8+ years',
            companies: 'Leading Tech Firms',
            specialization: 'Full Stack Development, Azure Data Engineering',
            certifications: ['Full Stack Developer', 'Azure Data Engineer', 'React & Node.js'],
            description: "Shiva is a versatile professional with expertise in both Data Engineering and Web Development. He specializes in building scalable data solutions and robust web applications, bridging the gap between data and application layers.",
            achievements: ['Delivered end-to-end web & data solutions', 'Expert in React, Node.js & Azure']
        },
    ];

    return (
        <div style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <section className="gradient-bg-dark" style={{
                padding: '5rem 0',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${mentorsHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎓</div>
                        <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>
                            Meet Our Expert Mentors
                        </h1>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                            Learn from industry veterans with decades of combined experience at top tech companies
                        </p>
                    </motion.div>
                </div>
                {/* Floating background elements */}
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,193,7,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
            </section>

            {/* Mentors Grid */}
            <section className="section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        {mentors.map((mentor, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}
                                style={{
                                    padding: '2rem',
                                    background: 'white',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {/* Avatar */}
                                <div style={{
                                    fontSize: '5rem',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem',
                                    overflow: 'hidden',
                                    border: '4px solid #f3e8ff'
                                }}>
                                    {mentor.image ? (
                                        <img
                                            src={mentor.image}
                                            alt={mentor.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        mentor.avatar
                                    )}
                                </div>

                                {/* Name & Role */}
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#1e293b' }}>{mentor.name}</h3>
                                <p style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    marginBottom: '0.75rem'
                                }}>
                                    {mentor.role}
                                </p>

                                {/* Experience */}
                                <div style={{
                                    background: '#f8fafc',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    marginBottom: '1rem',
                                    fontSize: '0.9rem'
                                }}>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <strong>⏱️ Experience:</strong> {mentor.experience}
                                    </div>
                                    <div>
                                        <strong>🏢 Worked at:</strong> {mentor.companies}
                                    </div>
                                </div>

                                {/* Description */}
                                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    {mentor.description}
                                </p>

                                {/* Specialization */}
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong style={{ color: '#1e293b', fontSize: '0.9rem' }}>🎯 Specialization:</strong>
                                    <p style={{ color: '#475569', fontSize: '0.9rem', marginTop: '0.25rem' }}>{mentor.specialization}</p>
                                </div>

                                {/* Achievements */}
                                <div style={{ marginBottom: '1rem', background: '#fef3c7', padding: '0.75rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                                    <strong style={{ fontSize: '0.9rem', color: '#92400e', display: 'block', marginBottom: '0.5rem' }}>🏆 Key Achievements:</strong>
                                    {mentor.achievements.map((achievement, idx) => (
                                        <div key={idx} style={{ fontSize: '0.85rem', color: '#78350f', marginBottom: '0.25rem' }}>
                                            • {achievement}
                                        </div>
                                    ))}
                                </div>

                                {/* Certifications */}
                                <div>
                                    <strong style={{ fontSize: '0.9rem', color: '#1e293b', display: 'block', marginBottom: '0.5rem' }}>📜 Certifications:</strong>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {mentor.certifications.map((cert, idx) => (
                                            <span key={idx} style={{
                                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                color: 'white',
                                                padding: '0.35rem 0.75rem',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600'
                                            }}>
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Why Learn from Our Mentors */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ marginTop: '5rem', textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1e293b' }}>
                            Why Learn from Our Mentors?
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                            Our mentors bring real-world expertise and a passion for teaching
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            <motion.div
                                className="card"
                                whileHover={{ y: -5 }}
                                style={{
                                    padding: '2rem',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    borderRadius: '16px'
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
                                <h4 style={{ marginBottom: '0.75rem', fontSize: '1.3rem' }}>Real-World Experience</h4>
                                <p style={{ opacity: 0.95 }}>Our mentors have built and scaled systems at top tech companies worldwide</p>
                            </motion.div>

                            <motion.div
                                className="card"
                                whileHover={{ y: -5 }}
                                style={{
                                    padding: '2rem',
                                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                    color: 'white',
                                    borderRadius: '16px'
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                                <h4 style={{ marginBottom: '0.75rem', fontSize: '1.3rem' }}>Industry Insights</h4>
                                <p style={{ opacity: 0.95 }}>Get insider knowledge on what skills companies are actually looking for</p>
                            </motion.div>

                            <motion.div
                                className="card"
                                whileHover={{ y: -5 }}
                                style={{
                                    padding: '2rem',
                                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                    color: 'white',
                                    borderRadius: '16px'
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                                <h4 style={{ marginBottom: '0.75rem', fontSize: '1.3rem' }}>Personalized Guidance</h4>
                                <p style={{ opacity: 0.95 }}>One-on-one mentorship sessions tailored to your career goals</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Mentors;
