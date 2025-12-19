import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';

const Home = () => {
    // Auto-rotate background slideshow
    useEffect(() => {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide-bg');
        const dots = document.querySelectorAll('.hero-dot');
        const totalSlides = slides.length;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (dots[i]) dots[i].classList.remove('active');
            });
            if (slides[index]) slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        };

        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);
    const whyChooseUs = [
        { icon: '👨‍🏫', title: 'Industry-Expert Instructors', description: 'Learn from professionals with 10+ years of real-world experience' },
        { icon: '💼', title: 'Real-World Projects', description: 'Build production-ready projects that boost your portfolio' },
        { icon: '🎓', title: 'Internships + Certifications', description: 'Get hands-on experience and industry-recognized credentials' },
        { icon: '📹', title: 'Lifetime Access', description: 'Access all course recordings and materials forever' },
        { icon: '⏰', title: 'Flexible Schedules', description: 'Weekend and weekday batches to fit your lifestyle' },
        { icon: '💬', title: '100+ Teaching Assistants', description: '24/7 doubt resolution and learning support' },
        { icon: '🚀', title: 'Career Support', description: 'Resume reviews, mock interviews, and job assistance' },
        { icon: '🤝', title: 'Peer Community', description: 'Join a network of 10,000+ learners and alumni' },
    ];

    const popularPrograms = [
        {
            title: 'Azure Fabric Data Engineer',
            description: 'Master Microsoft Fabric and Azure data engineering with hands-on projects and real-world scenarios',
            duration: '12 Weeks',
            skills: ['Azure', 'Fabric', 'Data Factory', 'Lakehouse'],
            level: 'Intermediate',
            link: '/courses/azure-fabric',
        },
        {
            title: 'AWS Data Engineer',
            description: 'Learn AWS data services including S3, Glue, Redshift, and build scalable data pipelines',
            duration: '10 Weeks',
            skills: ['AWS', 'S3', 'Glue', 'Redshift'],
            level: 'Intermediate',
            link: '/courses/aws-data-engineer',
        },
        {
            title: 'Cloud Internship',
            description: 'Get real-world cloud experience with live projects on Azure, AWS, and GCP platforms',
            duration: '6 Weeks',
            skills: ['Azure', 'AWS', 'GCP', 'DevOps'],
            level: 'Beginner',
            link: '/internships',
        },
        {
            title: 'Certification Programs',
            description: 'Industry-recognized certifications in Azure, AWS, Power BI, and cloud technologies',
            duration: 'Varies',
            skills: ['Azure', 'AWS', 'Power BI', 'Cloud'],
            level: 'All Levels',
            link: '/certifications',
        },
        {
            title: 'Web Development',
            description: 'Full-stack web development with React, Node.js, databases, and modern web technologies',
            duration: '14 Weeks',
            skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
            level: 'Beginner-Advanced',
            link: '/courses#web-development',
        },
    ];

    const learningFeatures = [
        {
            icon: '🎥',
            title: 'Live Expert-Led Classes',
            description: 'Interactive sessions with Q&A and hands-on practice',
        },
        {
            icon: '📊',
            title: 'Assessments & Learning Paths',
            description: 'Track your progress with quizzes and personalized roadmaps',
        },
        {
            icon: '🆘',
            title: 'Doubt Resolution Support',
            description: '24/7 TA support via chat, email, and weekly doubt-clearing sessions',
        },
        {
            icon: '👥',
            title: 'Peer Community',
            description: 'Collaborate with fellow learners and industry professionals',
        },
    ];

    const books = [
        { title: 'Azure Data Engineering', emoji: '📘' },
        { title: 'Power BI Mastery', emoji: '📗' },
        { title: 'Python with Gen AI', emoji: '📙' },
        { title: 'Cybersecurity Essentials', emoji: '📕' },
    ];

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            role: 'Data Engineer at Microsoft',
            image: '👨‍💼',
            text: 'Weblearnai transformed my career! I went from a manual tester to a Data Engineer at Microsoft in just 6 months.',
            rating: 5,
        },
        {
            name: 'Priya Sharma',
            role: 'Power BI Developer at Accenture',
            image: '👩‍💼',
            text: 'The Power BI course is amazing! Real-world projects and excellent mentor support helped me land my dream job.',
            rating: 5,
        },
        {
            name: 'Amit Patel',
            role: 'Cloud Engineer at TCS',
            image: '👨‍💻',
            text: 'Best decision ever! The Azure training was so practical. I cleared my certification and got promoted within 3 months.',
            rating: 5,
        },
    ];

    return (
        <div className="home">
            {/* Full-Page Hero Section with Background Slideshow */}
            <section className="hero-fullscreen">
                <div className="hero-slideshow-bg">
                    <div className="hero-slide-bg active"></div>
                    <div className="hero-slide-bg"></div>
                    <div className="hero-slide-bg"></div>
                    <div className="hero-slide-bg"></div>
                </div>
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content-center">
                        <div className="hero-text-overlay animate-fade-in">
                            <h1 className="hero-main-title">
                                Upskill Today.<br />Transform Your Tomorrow.
                            </h1>
                            <p className="hero-subtitle">
                                Master modern IT technologies with practical, job-oriented training.<br />
                                Learn from industry experts and become career-ready.
                            </p>
                            <p className="hero-description">
                                Join a practical course that teaches real-world Data Engineering tools and helps you build a strong foundation for your tech career.
                            </p>
                            <div className="hero-cta-overlay">
                                <Link to="/courses" className="btn btn-primary btn-large">
                                    Explore Courses
                                </Link>
                                <Link to="/contact" className="btn btn-secondary btn-large">
                                    Book Free Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Weblearnai */}
            <section className="section why-section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Why Choose Us</div>
                        <h2>Your Success is Our Mission</h2>
                        <p className="lead">
                            We provide everything you need to launch and accelerate your tech career
                        </p>
                    </div>
                    <div className="grid grid-4">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Programs */}
            <section className="section programs-section gradient-bg-primary">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Popular Programs</div>
                        <h2 style={{ color: 'white' }}>Industry-Leading Training Programs</h2>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            Comprehensive, hands-on courses designed by industry experts
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {popularPrograms.map((program, index) => (
                            <div key={index} className="program-card">
                                {/* Course Image/Gradient on Top */}
                                <div className={`program-image program-image-${index + 1}`}></div>

                                {/* Course Content Below */}
                                <div className="program-content">
                                    <div className="program-header">
                                        <span className="program-level">{program.level}</span>
                                        <span className="program-duration">⏱️ {program.duration}</span>
                                    </div>
                                    <h3>{program.title}</h3>
                                    <p>{program.description}</p>
                                    <div className="skill-tags">
                                        {program.skills.map((skill, idx) => (
                                            <span key={idx} className="tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to={program.link} className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                                        View Program →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Experience */}
            <section className="section learning-section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Learning Experience</div>
                        <h2>A Complete Learning Ecosystem</h2>
                        <p className="lead">
                            Everything you need to learn, practice, and succeed
                        </p>
                    </div>
                    <div className="grid grid-4">
                        {learningFeatures.map((feature, index) => (
                            <div key={index} className="learning-card card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Books & Publications */}
            <section className="section books-section gradient-bg-secondary">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Books & Publications</div>
                        <h2 style={{ color: 'white' }}>Learn from Our Expert Authors</h2>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            Comprehensive guides written by our industry-expert instructors
                        </p>
                    </div>
                    <div className="books-grid">
                        {books.map((book, index) => (
                            <div key={index} className="book-card">
                                <div className="book-emoji">{book.emoji}</div>
                                <h4>{book.title}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/courses" className="btn btn-secondary btn-large">
                            Explore All Books
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mentors Preview */}
            <section className="section mentors-preview">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Our Expert Mentors</div>
                        <h2>Learn from Industry Veterans</h2>
                        <p className="lead">
                            Our instructors bring decades of combined experience from top tech companies
                        </p>
                    </div>
                    <div className="mentors-grid">
                        <div className="mentor-card card">
                            <div className="mentor-avatar">👨‍💼</div>
                            <h4>Vikram Singh</h4>
                            <p className="mentor-role">Senior Data Engineer</p>
                            <p className="mentor-exp">15+ years | Microsoft, Amazon</p>
                            <div className="mentor-certs">
                                <span className="tag">Azure Certified</span>
                                <span className="tag">Databricks Expert</span>
                            </div>
                        </div>
                        <div className="mentor-card card">
                            <div className="mentor-avatar">👩‍💻</div>
                            <h4>Sneha Reddy</h4>
                            <p className="mentor-role">Power BI Architect</p>
                            <p className="mentor-exp">12+ years | Accenture, Deloitte</p>
                            <div className="mentor-certs">
                                <span className="tag">PL-300 Certified</span>
                                <span className="tag">Fabric Expert</span>
                            </div>
                        </div>
                        <div className="mentor-card card">
                            <div className="mentor-avatar">👨‍🔬</div>
                            <h4>Arjun Mehta</h4>
                            <p className="mentor-role">Cloud Solutions Architect</p>
                            <p className="mentor-exp">10+ years | Google, Meta</p>
                            <div className="mentor-certs">
                                <span className="tag">AWS & Azure Certified</span>
                                <span className="tag">GCP Pro</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/mentors" className="btn btn-primary btn-large">
                            Meet All Mentors
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section gradient-bg-dark">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Success Stories</div>
                        <h2 style={{ color: 'white' }}>Hear from Our Successful Alumni</h2>
                        <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            Real career transformations from real people
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-rating">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.image}</div>
                                    <div>
                                        <div className="author-name">{testimonial.name}</div>
                                        <div className="author-role">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Transform Your Career?</h2>
                        <p className="lead">
                            Join 10,000+ professionals who have successfully transitioned to high-paying tech roles
                        </p>
                        <div className="cta-buttons">
                            <Link to="/courses" className="btn btn-primary btn-large">
                                Browse All Courses
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Talk to a Career Advisor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
