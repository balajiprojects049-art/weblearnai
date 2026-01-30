import { Link } from 'react-router-dom';
import TopBanner from '../components/TopBanner';
import AdvertisementDisplay from '../components/AdvertisementDisplay';
import { useEffect, useState } from 'react';
import './Home.css';
import cloudInternshipImg from '../assets/cloud-internship.jpg';
import certificationProgramImg from '../assets/certification-program.jpg';
import webDevelopmentImg from '../assets/web-development.jpg';
import pythonGenAiImg from '../assets/Gen ai.png';

// Import testimonial screenshots
import testimonialMeghana from '../assets/testimonial-meghana.jpg';
import testimonialDhanalaxmi from '../assets/testimonial-dhanalaxmi.jpg';
import testimonialVamshi from '../assets/testimonial-vamshi.jpg';
import testimonialAnitha from '../assets/testimonial-anitha.jpg';
import testimonialGaurav from '../assets/testimonial-gaurav-new.jpg';
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

    const [currentCommitmentSlide, setCurrentCommitmentSlide] = useState(0);

    const commitmentPoints = [

        {
            icon: '🎓',
            text: <>We provide <strong style={{ background: 'linear-gradient(to right, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>internships along with certification</strong> to strengthen your professional journey, offering support for both IT and non-IT learners in achieving certification.</>,
            color: '#f59e0b',
            bg: '#fef3f2'
        },
        {
            icon: '🚀',
            text: <>We aim to create <strong style={{ background: 'linear-gradient(to right, #10b981, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>learning opportunities for everyone</strong> that can help them build their careers and progress through technology enhancement.</>,
            color: '#10b981',
            bg: '#f0fdf4'
        },
        {
            icon: '💪',
            text: <>Our focus is on developing <strong style={{ background: 'linear-gradient(to right, #8b5cf6, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>skills that enable individuals to resolve challenging tasks</strong> in their workplaces.</>,
            color: '#8b5cf6',
            bg: '#fef9f3'
        },
        {
            icon: '🎯',
            text: <>With <strong style={{ background: 'linear-gradient(to right, #ec4899, #db2777)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>assessments, learning paths, and courses conducted by industry experts</strong>, our platform helps you achieve your goals.</>,
            color: '#ec4899',
            bg: '#fef3f8'
        },
        {
            icon: '🆘',
            text: <>Quick & hassle-free <strong style={{ background: 'linear-gradient(to right, #06b6d4, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>doubt resolution from our 100+ Teaching Assistants</strong></>,
            color: '#06b6d4',
            bg: '#eff6ff'
        },
        {
            icon: '👥',
            text: <><strong style={{ background: 'linear-gradient(to right, #a855f7, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Aspirational peer group</strong> to discuss projects, share job referrals, and provide proper interview guidance.</>,
            color: '#a855f7',
            bg: '#fdf4ff'
        },
        {
            icon: '⏰',
            text: <><strong style={{ background: 'linear-gradient(to right, #22c55e, #16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Flexible program</strong> to continue learning despite a super hectic schedule</>,
            color: '#22c55e',
            bg: '#f0fdf4'
        },
        {
            icon: '📹',
            text: <><strong style={{ background: 'linear-gradient(to right, #f97316, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Recorded Lectures with Lifetime access</strong></>,
            color: '#f97316',
            bg: '#fff7ed'
        },
        {
            icon: '🔄',
            text: <><strong style={{ background: 'linear-gradient(to right, #ef4444, #dc2626)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Flexibility to switch and pause batches</strong></>,
            color: '#ef4444',
            bg: '#fef2f2'
        },
        {
            icon: '💼',
            text: <><strong style={{ background: 'linear-gradient(to right, #14b8a6, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Career support via our 100+ employer partners</strong>, mock interviews, and career planning services</>,
            color: '#14b8a6',
            bg: '#ecfdf5'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCommitmentSlide((prev) => (prev + 1) % commitmentPoints.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [commitmentPoints.length]);


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
            title: 'Python, Data Science and Generative AI',
            description: 'Master Python programming, Data Science and build Generative AI applications with LLMs and prompt engineering',
            duration: '10 Weeks',
            skills: ['Python', 'Data Science', 'Generative AI', 'LLMs'],
            level: 'Beginner-Advanced',
            link: '/courses/python-gen-ai',
            image: pythonGenAiImg,
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
            link: '/courses/web-development',
            image: webDevelopmentImg,
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
        <>
            <TopBanner />
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
                                    <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary btn-large">
                                        Book your 1:1 clarity call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advertisements / News Section */}
                <AdvertisementDisplay />




                {/* Popular Programs */}
                <section className="section programs-section" style={{
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Background Elements - Watermark Style */}
                    <div style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-150px',
                        left: '-150px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '800px',
                        height: '800px',
                        background: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.02) 35px, rgba(59, 130, 246, 0.02) 70px)',
                        pointerEvents: 'none',
                        opacity: 0.5
                    }}></div>

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <div className="section-header text-center">
                            <div className="badge">Popular Programs</div>
                            <h2 style={{ color: '#111827' }}>Industry-Leading Training Programs</h2>
                            <p className="lead" style={{ color: '#4b5563' }}>
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
                {/* Learning Experience - Section Removed as per request
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
                */}

                {/* Books & Publications */}
                <section className="section books-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <div className="badge">Books & Publications</div>
                            <h2>Learn from Our Expert Authors</h2>
                            <p className="lead">
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
                        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
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
                        {/* Section Header for Commitment Points */}
                        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
                            <div className="badge">Our Commitment</div>
                            <h2>Your Success is Our Mission</h2>
                            <p className="lead" style={{ textAlign: 'justify', maxWidth: '900px', marginInline: 'auto' }}>
                                At Weblearnai Trainings, we believe in <strong style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>hard work, dedication, and passion</strong> for both recruitment and training
                            </p>
                            <div style={{ fontSize: '1.2rem', color: '#4b5563', marginTop: '1.5rem', maxWidth: '900px', marginInline: 'auto', fontWeight: '500', textAlign: 'justify' }}>
                                We give our <strong style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>100% to support all individuals</strong> whether from IT or non-IT backgrounds, including freshers and interns who want to build their careers.
                            </div>

                            <div style={{ marginTop: '1.5rem' }}>

                                <p style={{ marginBottom: '1.5rem', maxWidth: '800px', marginInline: 'auto', fontSize: '1.1rem', lineHeight: '1.7', color: '#374151', textAlign: 'justify' }}>
                                    We help you confidently switch into a successful data engineering career through <strong style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>hands-on learning</strong>, <strong style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>real project experience</strong>, and <strong style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>focused interview preparation</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Commitment Points - Above Success Stories */}
                        <div style={{ maxWidth: '800px', margin: '0 auto 5rem' }}>
                            <div className="card" style={{ padding: '2.5rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)' }}>
                                <div className="commitment-slideshow" style={{ position: 'relative', minHeight: '220px' }}>
                                    {commitmentPoints.map((point, index) => (
                                        <div
                                            key={index}
                                            className={`commitment-slide`}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                opacity: index === currentCommitmentSlide ? 1 : 0,
                                                visibility: index === currentCommitmentSlide ? 'visible' : 'hidden',
                                                transition: 'opacity 0.8s ease-in-out',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                padding: '1.5rem',
                                                background: point.bg,
                                                borderRadius: '20px',
                                                borderLeft: `6px solid ${point.color}`,
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                            }}
                                        >
                                            <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>{point.icon}</span>
                                            <div style={{ fontSize: '1.1rem', color: '#1f2937', lineHeight: '1.5', maxWidth: '700px' }}>
                                                {point.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Dots */}
                                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                                    {commitmentPoints.map((_, index) => (
                                        <span
                                            key={index}
                                            onClick={() => setCurrentCommitmentSlide(index)}
                                            style={{
                                                width: index === currentCommitmentSlide ? '24px' : '12px',
                                                height: '12px',
                                                borderRadius: '50px',
                                                background: index === currentCommitmentSlide ? '#3b82f6' : '#e5e7eb',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

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
                                <a href="https://tidycal.com/weblearnaisocialmedia/30-minute-meeting" data-tidy="popup" className="btn btn-secondary btn-large">
                                    Talk to a Career Advisor
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
