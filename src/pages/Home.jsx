import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';
import cloudInternshipImg from '../assets/cloud-internship.jpg';
import certificationProgramImg from '../assets/certification-program.jpg';
import webDevelopmentImg from '../assets/web-development.jpg';

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

        // Testimonial slideshow
        let currentTestimonial = 0;
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        const totalTestimonials = testimonialSlides.length;

        const showTestimonial = (index) => {
            testimonialSlides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (testimonialDots[i]) testimonialDots[i].classList.remove('active');
            });
            if (testimonialSlides[index]) testimonialSlides[index].classList.add('active');
            if (testimonialDots[index]) testimonialDots[index].classList.add('active');
        };

        const nextTestimonial = () => {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            showTestimonial(currentTestimonial);
        };

        const testimonialInterval = setInterval(nextTestimonial, 6000); // Change testimonial every 6 seconds

        // Add click handlers for testimonial dots
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentTestimonial = index;
                showTestimonial(currentTestimonial);
                clearInterval(testimonialInterval);
            });
        });

        // Cleanup intervals on component unmount
        return () => {
            clearInterval(heroInterval);
            clearInterval(testimonialInterval);
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
            image: 'M',
            text: 'Your classes provided the core knowledge, but your dedicated one-on-one sessions and check-ins were crucial in helping me feel confident and prepared to crack the job. I\'m truly grateful!',
            rating: 5,
        },
        {
            name: 'Gaurav Kurhek',
            role: '12 Company Offers',
            image: 'G',
            text: 'I got an offer for 12 companies! Thank you so much for your assistance and guidance. Companies include: Course 5i, R4solutions, New vision, Marlabs, Capgemini, Yash Technologies, Atlas Copco, Fractal AI, Genpact, TCS, Wipro, Birla Soft.',
            rating: 5,
        },
        {
            name: 'Vamshi',
            role: 'AWS Engineer at Deloitte',
            image: 'V',
            text: 'Because of your Excellent training and interview guidance I have got the job at Deloitte. All the sessions were practical, clear, and focused on real interview scenarios. This training helped me secure a job by significantly improving my technical understanding and confidence.',
            rating: 5,
        },
        {
            name: 'Dhanalaxmi',
            role: 'Azure Data Engineer',
            image: 'D',
            text: 'My experience at weblearnai institute was exceptional...the expert actually provided invaluable insights, while the personal attention ensured I grasped complex concepts. With ample facilities and comprehensive materials and learning environment was enriching. Highly recommend!',
            rating: 5,
        },
        {
            name: 'Anitha',
            role: 'Azure Data Engineer',
            image: 'A',
            text: 'WebLearnAI Institute provides excellent guidance and support. Their structured training and expert mentoring helped me prepare effectively and crack my Azure Data Engineer interview, which led to an offer letter. I highly recommend WebLearnAI Institute to anyone who wants to build a strong career in data engineering.',
            rating: 5,
        },
        {
            name: 'Susmita',
            role: 'Azure - Sanstrojan Softech',
            image: 'S',
            text: 'Good evening sir, I got the offer letter sir! Thank you so much for your continuous support and guidance throughout the training.',
            rating: 5,
        },
        {
            name: 'Hemanth',
            role: 'Azure - TEKsystems',
            image: 'H',
            text: 'WebLearnAI Institute is an excellent platform for anyone looking to build real-world skills in AI, web development, and modern technology. The institute stands out for its practical, industry-focused approach to learning. Courses are well-structured, easy to follow, and designed to help students move from basics to advanced concepts with confidence.',
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
                                </div>
                            ))}
                            {/* Duplicate set for infinite loop */}
                            {testimonials.map((testimonial, index) => (
                                <div key={`duplicate-${index}`} className="testimonial-card-carousel">
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
