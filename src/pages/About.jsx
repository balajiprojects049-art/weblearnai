const About = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="gradient-bg-secondary" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>About Weblearnai Trainings</h1>
                    <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                        Empowering careers through world-class IT training
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2>Our Mission</h2>
                    <p>
                        At Weblearnai Trainings, we are committed to transforming careers by providing industry-leading
                        training in Data Engineering, Cloud Computing, AI, and Cybersecurity. Our mission is to bridge
                        the gap between academic learning and industry requirements.
                    </p>

                    <h2 style={{ marginTop: '3rem' }}>Who We Are</h2>
                    <p>
                        We are a team of passionate educators and industry experts with decades of combined experience
                        from top tech companies like Microsoft, Amazon, Google, and more. We understand what it takes
                        to succeed in today's competitive tech landscape.
                    </p>

                    <h2 style={{ marginTop: '3rem' }}>Why Choose Us</h2>
                    <div className="grid grid-2" style={{ marginTop: '2rem' }}>
                        <div className="card">
                            <h4>Industry Expertise</h4>
                            <p>Learn from professionals with 10+ years of real-world experience</p>
                        </div>
                        <div className="card">
                            <h4>Practical Learning</h4>
                            <p>Hands-on projects that mirror real industry scenarios</p>
                        </div>
                        <div className="card">
                            <h4>Career Support</h4>
                            <p>Comprehensive placement assistance and career guidance</p>
                        </div>
                        <div className="card">
                            <h4>Lifetime Access</h4>
                            <p>All course materials and recordings available forever</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
