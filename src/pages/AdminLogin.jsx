import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple authentication (you can change these credentials)
        if (credentials.username === 'admin' && credentials.password === 'weblearnai@2024') {
            // Store authentication in localStorage
            localStorage.setItem('adminAuthenticated', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid username or password');
            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <div className="admin-login-page">
            <div className="admin-login-container">
                <div className="admin-login-card">
                    <div className="admin-login-header">
                        <h1>🔐 Admin Panel</h1>
                        <p>WebLearnAI Institute</p>
                    </div>

                    <form onSubmit={handleSubmit} className="admin-login-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                                placeholder="Enter username"
                                autoComplete="username"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter password"
                                autoComplete="current-password"
                            />
                        </div>

                        {error && (
                            <div className="error-message">
                                ❌ {error}
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary btn-large">
                            Login to Dashboard
                        </button>

                        <div className="login-hint">
                            <small>Default credentials: admin / weblearnai@2024</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
