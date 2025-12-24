import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/weblearnai-logo.png';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [submissions, setSubmissions] = useState([]);
    const [filteredSubmissions, setFilteredSubmissions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCourse, setFilterCourse] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [sortBy, setSortBy] = useState('date-desc');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(true);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();

    // Course options
    const courseOptions = [
        'Data Engineering - Azure & Databricks',
        'Microsoft Fabric Data Engineer',
        'AWS Data Engineer',
        'Cloud Engineering',
        'Python with Generative AI',
        'Cloud Internships'
    ];

    // Status options
    const statusOptions = ['College Student', 'Working Professional', 'Graduated but not working'];

    // Helper function to get course name
    const getCourseName = (submission) => {
        // Database uses topic_interest (underscore)
        if (submission.topic_interest) return submission.topic_interest;
        // Old localStorage data uses topicInterest (camelCase)
        if (submission.topicInterest) return submission.topicInterest;
        // Even older data with 'course' field
        if (submission.course) {
            const mapping = {
                'data-engineering': 'Data Engineering - Azure & Databricks',
                'microsoft-fabric': 'Microsoft Fabric Data Engineer',
                'power-bi': 'Full Stack Power BI',
                'cloud': 'Cloud Engineering',
                'python-ai': 'Python with Generative AI',
                'internship': 'Cloud Internships'
            };
            return mapping[submission.course] || submission.course;
        }
        return 'N/A';
    };

    // Fetch submissions
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('adminAuthenticated');
        if (!isAuthenticated) {
            navigate('/admin/login');
            return;
        }

        const fetchSubmissions = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/get-submissions');
                const result = await response.json();

                if (result.success) {
                    setSubmissions(result.submissions);
                    setFilteredSubmissions(result.submissions);
                } else {
                    const savedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                    setSubmissions(savedSubmissions);
                    setFilteredSubmissions(savedSubmissions);
                }
            } catch (error) {
                console.error('Error fetching submissions:', error);
                const savedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                setSubmissions(savedSubmissions);
                setFilteredSubmissions(savedSubmissions);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, [navigate]);

    // Filter and sort submissions
    useEffect(() => {
        let filtered = [...submissions];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(sub =>
                sub.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.phone?.includes(searchTerm)
            );
        }

        // Course filter
        if (filterCourse) {
            filtered = filtered.filter(sub => getCourseName(sub) === filterCourse);
        }

        // Status filter
        if (filterStatus) {
            filtered = filtered.filter(sub => sub.studentStatus === filterStatus);
        }

        // Sorting
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'date-desc':
                    return new Date(b.timestamp) - new Date(a.timestamp);
                case 'date-asc':
                    return new Date(a.timestamp) - new Date(b.timestamp);
                case 'name-asc':
                    return (a.name || '').localeCompare(b.name || '');
                case 'name-desc':
                    return (b.name || '').localeCompare(a.name || '');
                default:
                    return 0;
            }
        });

        setFilteredSubmissions(filtered);
        setCurrentPage(1); // Reset to first page when filters change
    }, [searchTerm, filterCourse, filterStatus, sortBy, submissions]);

    // Pagination
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredSubmissions.slice(startIndex, startIndex + pageSize);
    }, [filteredSubmissions, currentPage, pageSize]);

    const totalPages = Math.ceil(filteredSubmissions.length / pageSize);

    const handleLogout = () => {
        localStorage.removeItem('adminAuthenticated');
        navigate('/admin/login');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this submission?')) return;

        try {
            const response = await fetch(`/api/delete-submission?id=${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();

            if (result.success) {
                setSubmissions(prev => prev.filter(sub => sub.id !== id));
            } else {
                alert('Failed to delete: ' + result.error);
            }
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Failed to delete submission.');
        }
    };

    const handleDeleteAll = () => {
        alert('To delete all submissions, run this SQL in Neon:\\n\\nDELETE FROM contact_submissions;\\n\\nThen refresh this page.');
    };

    const downloadCSV = () => {
        if (filteredSubmissions.length === 0) {
            alert('No data to download!');
            return;
        }

        const headers = ['Date & Time', 'Name', 'Email', 'Phone', 'Course', 'Status', 'Details', 'Message'];
        const csvContent = [
            headers.join(','),
            ...filteredSubmissions.map(sub => [
                sub.timestamp,
                `"${sub.name}"`,
                sub.email,
                sub.phone,
                `"${getCourseName(sub)}"`,
                `"${sub.studentStatus || 'N/A'}"`,
                `"${sub.studentDetails || sub.experienceYears || sub.graduatedDetails || 'N/A'}"`,
                `"${sub.message || 'N/A'}"`
            ].join(','))
        ].join('\\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `submissions_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
    };

    const resetFilters = () => {
        setSearchTerm('');
        setFilterCourse('');
        setFilterStatus('');
        setSortBy('date-desc');
    };

    // Stats calculations
    const todayCount = useMemo(() => {
        const today = new Date().toDateString();
        return submissions.filter(sub => new Date(sub.timestamp).toDateString() === today).length;
    }, [submissions]);

    return (
        <div className="premium-dashboard">
            {/* TOP NAVBAR */}
            <motion.nav
                className="dashboard-navbar"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="navbar-container">
                    <div className="navbar-left">
                        <img src={logo} alt="WebLearnAI" className="navbar-logo" />
                        <div>
                            <h1 className="navbar-title">Admin Dashboard</h1>
                            <p className="navbar-subtitle">Manage your submissions</p>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div className="user-menu-container">
                            <motion.button
                                className="user-menu-button"
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="user-avatar">👤</div>
                                <span>Admin</span>
                                <span className="dropdown-arrow">{showUserMenu ? '▲' : '▼'}</span>
                            </motion.button>
                            <AnimatePresence>
                                {showUserMenu && (
                                    <motion.div
                                        className="user-dropdown"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <button className="dropdown-item">
                                            <span>👤</span> Profile
                                        </button>
                                        <button className="dropdown-item">
                                            <span>⚙️</span> Settings
                                        </button>
                                        <div className="dropdown-divider" />
                                        <button className="dropdown-item logout" onClick={handleLogout}>
                                            <span>🚪</span> Logout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <motion.button
                            className="logout-button"
                            onClick={handleLogout}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Logout
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* MAIN CONTENT */}
            <div className="dashboard-content">
                <div className="dashboard-container">
                    {/* STATS CARDS */}
                    <motion.div
                        className="stats-grid"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                    >
                        {[
                            { icon: '📊', label: 'Total Submissions', value: submissions.length, color: 'blue' },
                            { icon: '🔍', label: 'Filtered Results', value: filteredSubmissions.length, color: 'purple' },
                            { icon: '📅', label: 'Today\'s Leads', value: todayCount, color: 'green' },
                            {
                                icon: '📈', label: 'This Week', value: submissions.filter(s => {
                                    const weekAgo = new Date();
                                    weekAgo.setDate(weekAgo.getDate() - 7);
                                    return new Date(s.timestamp) > weekAgo;
                                }).length, color: 'orange'
                            }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className={`stat-card stat-${stat.color}`}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-info">
                                    <motion.div
                                        className="stat-value"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* FILTERS & SORTING */}
                    <motion.div
                        className="filters-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="filters-header">
                            <h2>🔎 Advanced Filters</h2>
                            <motion.button
                                className="reset-filters-btn"
                                onClick={resetFilters}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ↻ Reset All
                            </motion.button>
                        </div>
                        <div className="filters-grid">
                            {/* Search */}
                            <div className="filter-item">
                                <label className="filter-label">🔍 Search</label>
                                <input
                                    type="text"
                                    className="filter-input"
                                    placeholder="Name, email, or phone..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Course Filter */}
                            <div className="filter-item">
                                <label className="filter-label">📚 Course</label>
                                <select
                                    className="filter-select"
                                    value={filterCourse}
                                    onChange={(e) => setFilterCourse(e.target.value)}
                                >
                                    <option value="">All Courses</option>
                                    {courseOptions.map(course => (
                                        <option key={course} value={course}>{course}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Status Filter */}
                            <div className="filter-item">
                                <label className="filter-label">👤 Status</label>
                                <select
                                    className="filter-select"
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                >
                                    <option value="">All Status</option>
                                    {statusOptions.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort By */}
                            <div className="filter-item">
                                <label className="filter-label">↕️ Sort By</label>
                                <select
                                    className="filter-select"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="date-desc">Newest First</option>
                                    <option value="date-asc">Oldest First</option>
                                    <option value="name-asc">Name (A-Z)</option>
                                    <option value="name-desc">Name (Z-A)</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* ACTION BUTTONS */}
                    <motion.div
                        className="action-bar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            className="btn-primary"
                            onClick={downloadCSV}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📥 Download CSV
                        </motion.button>
                        <motion.button
                            className="btn-danger"
                            onClick={handleDeleteAll}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🗑️ Delete All
                        </motion.button>
                    </motion.div>

                    {/* DATA TABLE */}
                    <motion.div
                        className="table-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        {loading ? (
                            <div className="loading-skeleton">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="skeleton-row" />
                                ))}
                            </div>
                        ) : filteredSubmissions.length === 0 ? (
                            <div className="empty-state">
                                <div className="empty-icon">📭</div>
                                <h3>No submissions found</h3>
                                <p>Try adjusting your filters or check back later</p>
                            </div>
                        ) : (
                            <>
                                <div className="table-wrapper">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Date & Time</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Course</th>
                                                <th>Status</th>
                                                <th>Message</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <AnimatePresence>
                                                {paginatedData.map((sub, index) => (
                                                    <motion.tr
                                                        key={sub.id}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 20 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        <td data-label="Date">{sub.timestamp}</td>
                                                        <td data-label="Name">
                                                            <strong>{sub.name}</strong>
                                                        </td>
                                                        <td data-label="Email">{sub.email}</td>
                                                        <td data-label="Phone">{sub.phone}</td>
                                                        <td data-label="Course">
                                                            <span className="course-badge">{getCourseName(sub)}</span>
                                                        </td>
                                                        <td data-label="Status">
                                                            <span className="status-badge">
                                                                {sub.studentStatus || 'N/A'}
                                                                {sub.studentDetails && <><br /><small>({sub.studentDetails})</small></>}
                                                                {sub.experienceYears && <><br /><small>({sub.experienceYears})</small></>}
                                                                {sub.graduatedDetails && <><br /><small>(Grad: {sub.graduatedDetails})</small></>}
                                                            </span>
                                                        </td>
                                                        <td data-label="Message" className="message-cell" title={sub.message}>
                                                            {sub.message || 'No message'}
                                                        </td>
                                                        <td data-label="Actions">
                                                            <motion.button
                                                                className="btn-delete-row"
                                                                onClick={() => handleDelete(sub.id)}
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                title="Delete"
                                                            >
                                                                🗑️
                                                            </motion.button>
                                                        </td>
                                                    </motion.tr>
                                                ))}
                                            </AnimatePresence>
                                        </tbody>
                                    </table>
                                </div>

                                {/* PAGINATION */}
                                {totalPages > 1 && (
                                    <div className="pagination">
                                        <div className="pagination-info">
                                            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, filteredSubmissions.length)} of {filteredSubmissions.length} entries
                                        </div>
                                        <div className="pagination-controls">
                                            <select
                                                className="page-size-select"
                                                value={pageSize}
                                                onChange={(e) => {
                                                    setPageSize(Number(e.target.value));
                                                    setCurrentPage(1);
                                                }}
                                            >
                                                <option value="5">5 per page</option>
                                                <option value="10">10 per page</option>
                                                <option value="25">25 per page</option>
                                                <option value="50">50 per page</option>
                                            </select>
                                            <div className="pagination-buttons">
                                                <motion.button
                                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                                    disabled={currentPage === 1}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    ← Prev
                                                </motion.button>
                                                <span className="page-indicator">
                                                    Page {currentPage} of {totalPages}
                                                </span>
                                                <motion.button
                                                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                                    disabled={currentPage === totalPages}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Next →
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
