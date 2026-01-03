import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/weblearnai-logo.png';
import './AdminLogin.css';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await new Promise(resolve => setTimeout(resolve, 800));

        if (credentials.username === 'admin' && credentials.password === 'weblearnai@2024') {
            localStorage.setItem('adminAuthenticated', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid username or password');
            setLoading(false);
            setTimeout(() => setError(''), 4000);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <div className="premium-admin-login">
            {/* TOP NAVBAR */}
            <motion.nav
                className="admin-top-navbar"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="navbar-container">
                    <div className="navbar-left">
                        <img src={logo} alt="WebLearnAI Academy" className="navbar-logo" />
                        <span className="navbar-brand">WebLearnAI Academy</span>
                    </div>
                    <div className="navbar-right">
                        <motion.a
                            href="/"
                            className="nav-link"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ← Back to Home
                        </motion.a>
                        <span className="nav-divider">|</span>
                        <span className="nav-badge">Admin Portal</span>
                    </div>
                </div>
            </motion.nav>

            {/* LOGIN CONTENT WRAPPER */}
            <div className="login-content-wrapper">
                {/* LEFT SIDE - BRANDING */}
                <motion.div
                    className="login-left-panel"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="branding-content">

                        <motion.h1 variants={itemVariants} className="brand-headline">
                            Welcome to WebLearnAI Academy
                        </motion.h1>

                        <motion.p variants={itemVariants} className="brand-subheadline">
                            Manage courses, students, AI tools, and analytics from one powerful dashboard
                        </motion.p>

                        <motion.div variants={itemVariants} className="feature-list">
                            {[
                                { icon: '🔒', text: 'Secure Admin Management' },
                                { icon: '📊', text: 'Real-time Student Analytics' },
                                { icon: '🤖', text: 'AI-powered Learning Tools' },
                                { icon: '🎓', text: 'Course & Content Control' }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-item"
                                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                >
                                    <span className="feature-icon">{feature.icon}</span>
                                    <span className="feature-text">{feature.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Animated decorative elements */}
                        <div className="floating-orbs">
                            <motion.div
                                className="orb orb-1"
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="orb orb-2"
                                animate={{
                                    y: [0, 30, 0],
                                    opacity: [0.2, 0.5, 0.2]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE - LOGIN FORM */}
                <motion.div
                    className="login-right-panel"
                    initial="hidden"
                    animate="visible"
                    variants={formVariants}
                >
                    <div className="login-card">
                        <div className="card-header">
                            <motion.div
                                className="lock-icon"
                                animate={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                🔐
                            </motion.div>
                            <h2>Admin Portal</h2>
                            <p>Sign in to access your dashboard</p>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
                            {/* Username Field */}
                            <div className={`input-group ${focusedField === 'username' ? 'focused' : ''}`}>
                                <label htmlFor="username" className={credentials.username ? 'has-value' : ''}>
                                    Username
                                </label>
                                <div className="input-wrapper">
                                    <span className="input-icon">👤</span>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        value={credentials.username}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('username')}
                                        onBlur={() => setFocusedField('')}
                                        required
                                        disabled={loading}
                                        autoComplete="username"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className={`input-group ${focusedField === 'password' ? 'focused' : ''}`}>
                                <label htmlFor="password" className={credentials.password ? 'has-value' : ''}>
                                    Password
                                </label>
                                <div className="input-wrapper">
                                    <span className="input-icon">🔒</span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('password')}
                                        onBlur={() => setFocusedField('')}
                                        required
                                        disabled={loading}
                                        autoComplete="current-password"
                                    />
                                    <motion.button
                                        type="button"
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        tabIndex="-1"
                                    >
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </motion.button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    className="error-alert"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <span className="alert-icon">⚠️</span>
                                    <span>{error}</span>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="submit-button"
                                disabled={loading}
                                whileHover={{ scale: loading ? 1 : 1.02 }}
                                whileTap={{ scale: loading ? 1 : 0.98 }}
                            >
                                {loading ? (
                                    <>
                                        <motion.span
                                            className="spinner"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        <span>Sign In</span>
                                        <motion.span
                                            className="arrow"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </>
                                )}
                            </motion.button>

                            {/* Forgot Password Link */}
                            <div className="form-footer">
                                <motion.a
                                    href="#"
                                    className="forgot-link"
                                    whileHover={{ x: 3 }}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Forgot password? →
                                </motion.a>
                            </div>
                        </form>
                    </div>

                    {/* Security Badge */}
                    <motion.div
                        className="security-badge"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <span className="shield-icon">🛡️</span>
                        <span>Secured with 256-bit encryption</span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminLogin;
