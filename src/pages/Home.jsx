import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';
import cloudInternshipImg from '../assets/cloud-internship.jpg';
import certificationProgramImg from '../assets/certification-program.jpg';
import webDevelopmentImg from '../assets/web-development.jpg';

// Import testimonial screenshots
import testimonialMeghana from '../assets/testimonial-meghana.jpg';
import testimonialDhanalaxmi from '../assets/testimonial-dhanalaxmi.jpg';
import testimonialVamshi from '../assets/testimonial-vamshi.jpg';
import testimonialAnitha from '../assets/testimonial-anitha.jpg';
import testimonialGaurav from '../assets/testimonial-gaurav.jpg';
import testimonialSusmita from '../assets/testimonial-susmita.jpg';
import testimonialHemanth from '../assets/testimonial-hemanth.jpg';

const Home = () => {
    // Auto-rotate background slideshow & Testimonials & Scroll to Top
    useEffect(() => {
        window.scrollTo(0, 0);

        // Hero slideshow
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

        const heroInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

        // Cleanup intervals on component unmount
        return () => {
            clearInterval(heroInterval);
        };
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
            image: cloudInternshipImg,
        },
        {
            title: 'Certification Programs',
            description: 'Industry-recognized certifications in Azure, AWS, Power BI, and cloud technologies',
            duration: 'Varies',
            skills: ['Azure', 'AWS', 'Power BI', 'Cloud'],
            level: 'All Levels',
            link: '/certifications',
            image: certificationProgramImg,
        },
        {
            title: 'Web Development',
            description: 'Full-stack web development with React, Node.js, databases, and modern web technologies',
            duration: '14 Weeks',
            skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
            level: 'Beginner-Advanced',
            link: '/courses#web-development',
            image: webDevelopmentImg,
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
            name: 'Meghana',
            role: 'Azure Data Engineer',
            image: testimonialMeghana,
            isScreenshot: true,
        },
        {
            name: 'Dhanalaxmi',
            role: 'Azure Data Engineer',
            image: testimonialDhanalaxmi,
            isScreenshot: true,
        },
        {
            name: 'Vamshi',
            role: 'AWS Engineer at Deloitte',
            image: testimonialVamshi,
            isScreenshot: true,
        },
        {
            name: 'Anitha',
            role: 'Azure Data Engineer',
            image: testimonialAnitha,
            isScreenshot: true,
        },
        {
            name: 'Gaurav',
            role: '12 Company Offers',
            image: testimonialGaurav,
            isScreenshot: true,
        },
        {
            name: 'Susmita',
            role: 'Azure - Sanstrojan Softech',
            image: testimonialSusmita,
            isScreenshot: true,
        },
        {
            name: 'Hemanth',
            role: 'Azure - TEKsystems',
            image: testimonialHemanth,
            isScreenshot: true,
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

            {/* Our Commitment to Your Success */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Our Commitment</div>
                        <h2>Your Success is Our Mission</h2>
                        <p className="lead">
                            At Weblearnai Trainings, we believe in hard work, dedication, and passion for both recruitment and training
                        </p>
                    </div>

                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="card" style={{ padding: '3rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)' }}>
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {/* Key Point 1 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💯</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        We give our <strong>100% to support all individuals</strong>—whether from IT or non-IT backgrounds, including freshers and interns—who want to build their careers.
                                    </p>
                                </div>

                                {/* Key Point 2 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#fef3f2', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🎓</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        We provide <strong>internships along with certification</strong> to strengthen your professional journey, offering support for both IT and non-IT learners in achieving certification.
                                    </p>
                                </div>

                                {/* Key Point 3 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#f0fdf4', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🚀</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        We aim to create <strong>learning opportunities for everyone</strong> that can help them build their careers and progress through technology enhancement.
                                    </p>
                                </div>

                                {/* Key Point 4 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#fef9f3', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💪</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        Our focus is on developing <strong>skills that enable individuals to resolve challenging tasks</strong> in their workplaces.
                                    </p>
                                </div>

                                {/* Key Point 5 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#fef3f8', borderRadius: '12px', borderLeft: '4px solid #ec4899' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🎯</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        With <strong>assessments, learning paths, and courses conducted by industry experts</strong>, our platform helps you achieve your goals.
                                    </p>
                                </div>

                                {/* Key Point 6 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#eff6ff', borderRadius: '12px', borderLeft: '4px solid #06b6d4' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🆘</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        Quick & hassle-free <strong>doubt resolution from our 100+ Teaching Assistants</strong>
                                    </p>
                                </div>

                                {/* Key Point 7 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#fdf4ff', borderRadius: '12px', borderLeft: '4px solid #a855f7' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>👥</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        <strong>Aspirational peer group</strong> to discuss projects, share job referrals, and provide proper interview guidance.
                                    </p>
                                </div>

                                {/* Key Point 8 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#f0fdf4', borderRadius: '12px', borderLeft: '4px solid #22c55e' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>⏰</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        <strong>Flexible program</strong> to continue learning despite a super hectic schedule
                                    </p>
                                </div>

                                {/* Key Point 9 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#fff7ed', borderRadius: '12px', borderLeft: '4px solid #f97316' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>📹</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        <strong>Recorded Lectures with Lifetime access</strong>
                                    </p>
                                </div>

                                {/* Key Point 10 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#fef2f2', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🔄</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        <strong>Flexibility to switch and pause batches</strong>
                                    </p>
                                </div>

                                {/* Key Point 11 */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', background: '#ecfdf5', borderRadius: '12px', borderLeft: '4px solid #14b8a6' }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💼</span>
                                    <p style={{ margin: 0, lineHeight: '1.7', color: '#334155' }}>
                                        <strong>Career support via our 100+ employer partners</strong>, mock interviews, and career planning services
                                    </p>
                                </div>
                            </div>
                        </div>
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

                    {/* Course Cards - After Training Items */}
                    <div className="grid grid-3">
                        {popularPrograms.map((program, index) => (
                            <div key={index} className="program-card">
                                {/* Course Image/Gradient on Top */}
                                <div
                                    className={`program-image program-image-${index + 1}`}
                                    style={program.image ? {
                                        backgroundImage: `url(${program.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center 60%'
                                    } : {}}
                                ></div>

                                {/* Course Content Below */}
                                <div className="program-content">
                                    <div className="program-header">
                                        <span className="program-level">{program.level}</span>
                                        <span className="program-duration">⏱️ {program.duration}</span>
                                    </div>
                                    <h3>{program.title}</h3>
                                    <p>{program.description}</p>
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

            {/* Bonuses & Privileges Section */}
            <section className="section bonuses-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>
                            What Included{' '}
                            <span style={{ color: 'var(--primary-blue)' }}>(Bonuses & Privileges)</span>
                        </h2>
                        <p className="lead">
                            When you enroll, you also get exclusive bonuses worth thousands
                        </p>
                    </div>

                    <div className="bonuses-grid">
                        {/* Bonus #1 */}
                        <div className="bonus-card">
                            <div className="bonus-gift-icon">🎁</div>
                            <div className="bonus-present-icon">🎁</div>
                            <div className="bonus-badge">Bonus #1</div>
                            <h4>Interview Prep Kit</h4>
                            <p>Real-world Q&As, simplified answers, and comprehensive cheat sheets to ace your interviews.</p>
                        </div>

                        {/* Bonus #2 */}
                        <div className="bonus-card">
                            <div className="bonus-gift-icon">🎁</div>
                            <div className="bonus-present-icon">🎁</div>
                            <div className="bonus-badge">Bonus #2</div>
                            <h4>Databricks Notebooks</h4>
                            <p>Access to coding practice materials including SQL, PySpark, and Python notebooks.</p>
                        </div>

                        {/* Bonus #3 */}
                        <div className="bonus-card">
                            <div className="bonus-gift-icon">🎁</div>
                            <div className="bonus-present-icon">🎁</div>
                            <div className="bonus-badge">Bonus #3</div>
                            <h4>Lifetime Access</h4>
                            <p>Session recordings and select tutorials available for lifetime learning.</p>
                        </div>

                        {/* Bonus #4 */}
                        <div className="bonus-card">
                            <div className="bonus-gift-icon">🎁</div>
                            <div className="bonus-present-icon">🎁</div>
                            <div className="bonus-badge">Bonus #4</div>
                            <h4>1:1 Resume & Job Strategy</h4>
                            <p>Personal guidance to optimize your resume and job search strategy.</p>
                        </div>

                        {/* Bonus #5 */}
                        <div className="bonus-card">
                            <div className="bonus-gift-icon">🎁</div>
                            <div className="bonus-present-icon">🎁</div>
                            <div className="bonus-badge">Bonus #5</div>
                            <h4>Use-Case Assignments</h4>
                            <p>Practice material based on real industry scenarios and challenges.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials - Infinite Auto-Scroll Carousel */}
            <section className="section testimonials-section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">Success Stories</div>
                        <h2>Hear from Our Successful Alumni</h2>
                        <p className="lead">
                            Real career transformations from real people
                        </p>
                    </div>

                    {/* Infinite Scroll Container */}
                    <div className="testimonial-carousel-container">
                        <div className="testimonial-carousel-track">
                            {/* First set of testimonials */}
                            {testimonials.map((testimonial, index) => (
                                <div key={`original-${index}`} className="testimonial-card-carousel">
                                    {testimonial.isScreenshot ? (
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name} - ${testimonial.role}`}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '12px',
                                                objectFit: 'contain',
                                                maxHeight: '600px'
                                            }}
                                        />
                                    ) : (
                                        <>
                                            {/* Author at Top */}
                                            <div className="testimonial-author-top">
                                                <div className="author-avatar">{testimonal.image}</div>
                                                <div>
                                                    <div className="author-name">{testimonial.name}</div>
                                                    <div className="author-role">{testimonial.role}</div>
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="testimonial-rating">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <span key={i}>⭐</span>
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="testimonial-text">"{testimonial.text}"</p>
                                        </>
                                    )}
                                </div>
                            ))}
                            {/* Duplicate set for infinite loop */}
                            {testimonials.map((testimonial, index) => (
                                <div key={`duplicate-${index}`} className="testimonial-card-carousel">
                                    {testimonial.isScreenshot ? (
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name} - ${testimonial.role}`}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '12px',
                                                objectFit: 'contain',
                                                maxHeight: '600px'
                                            }}
                                        />
                                    ) : (
                                        <>
                                            {/* Author at Top */}
                                            <div className="testimonial-author-top">
                                                <div className="author-avatar">{testimonial.image}</div>
                                                <div>
                                                    <div className="author-name">{testimonial.name}</div>
                                                    <div className="author-role">{testimonial.role}</div>
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="testimonial-rating">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <span key={i}>⭐</span>
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="testimonial-text">"{testimonial.text}"</p>
                                        </>
                                    )}
                                </div>
                            ))}
                            {/* Third duplicate set for smoother loop */}
                            {testimonials.map((testimonial, index) => (
                                <div key={`duplicate2-${index}`} className="testimonial-card-carousel">
                                    {testimonial.isScreenshot ? (
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name} - ${testimonial.role}`}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '12px',
                                                objectFit: 'contain',
                                                maxHeight: '600px'
                                            }}
                                        />
                                    ) : (
                                        <>
                                            {/* Author at Top */}
                                            <div className="testimonial-author-top">
                                                <div className="author-avatar">{testimonial.image}</div>
                                                <div>
                                                    <div className="author-name">{testimonial.name}</div>
                                                    <div className="author-role">{testimonial.role}</div>
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="testimonial-rating">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <span key={i}>⭐</span>
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="testimonial-text">"{testimonial.text}"</p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
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
