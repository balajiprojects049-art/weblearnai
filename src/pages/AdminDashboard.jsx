import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/weblearnai-logo.png';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [submissions, setSubmissions] = useState([]);
    const [filteredSubmissions, setFilteredSubmissions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCourse, setFilterCourse] = useState('');
    const navigate = useNavigate();

    // Course options mapping for old data
    const courseOptions = [
        { value: 'data-engineering', label: 'Data Engineering - Azure & Databricks' },
        { value: 'microsoft-fabric', label: 'Microsoft Fabric Data Engineer' },
        { value: 'power-bi', label: 'Full Stack Power BI' },
        { value: 'cybersecurity', label: 'Cybersecurity & Python with Gen AI' },
        { value: 'cloud', label: 'Cloud Engineering' },
        { value: 'python-ai', label: 'Python with Generative AI' },
        { value: 'internship', label: 'Cloud Internships' }
    ];

    // Helper function to get course name (handles both old and new data)
    const getCourseName = (submission) => {
        // New data: topicInterest has full course name
        if (submission.topicInterest) {
            return submission.topicInterest;
        }
        // Old data: course has short value, need to map to label
        if (submission.course) {
            const courseOption = courseOptions.find(c => c.value === submission.course);
            return courseOption ? courseOption.label : submission.course;
        }
        return 'N/A';
    };


    useEffect(() => {
        // Check authentication
        const isAuthenticated = localStorage.getItem('adminAuthenticated');
        if (!isAuthenticated) {
            navigate('/admin/login');
            return;
        }

        // Load submissions from localStorage
        const savedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        setSubmissions(savedSubmissions);
        setFilteredSubmissions(savedSubmissions);
    }, [navigate]);

    // Filter submissions based on search and course filter
    useEffect(() => {
        let filtered = submissions;

        if (searchTerm) {
            filtered = filtered.filter(sub =>
                sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.phone.includes(searchTerm)
            );
        }

        if (filterCourse) {
            filtered = filtered.filter(sub => sub.course === filterCourse);
        }

        setFilteredSubmissions(filtered);
    }, [searchTerm, filterCourse, submissions]);

    const handleLogout = () => {
        localStorage.removeItem('adminAuthenticated');
        navigate('/admin/login');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this submission?')) {
            const updated = submissions.filter(sub => sub.id !== id);
            setSubmissions(updated);
            localStorage.setItem('contactSubmissions', JSON.stringify(updated));
        }
    };

    const handleDeleteAll = () => {
        if (window.confirm('Are you sure you want to delete ALL submissions? This cannot be undone!')) {
            setSubmissions([]);
            setFilteredSubmissions([]);
            localStorage.setItem('contactSubmissions', JSON.stringify([]));
        }
    };

    const downloadCSV = () => {
        if (filteredSubmissions.length === 0) {
            alert('No data to download!');
            return;
        }

        // Prepare CSV content
        const headers = ['Date & Time', 'Name', 'Email', 'Phone', 'Interested Course', 'Student Status', 'Student Details', 'Experience Years', 'Graduated Year', 'Message'];
        const csvContent = [
            headers.join(','),
            ...filteredSubmissions.map(sub =>
                [
                    sub.timestamp,
                    `"${sub.name}"`,
                    sub.email,
                    sub.phone,
                    `"${getCourseName(sub)}"`,
                    `"${sub.studentStatus || 'N/A'}"`,
                    `"${sub.studentDetails || 'N/A'}"`,
                    `"${sub.experienceYears || 'N/A'}"`,
                    `"${sub.graduatedDetails || 'N/A'}"`,
                    `"${sub.message || 'N/A'}"`
                ].join(',')
            )
        ].join('\n');

        // Create and download file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `contact_submissions_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <header className="admin-header">
                <div className="admin-header-content">
                    <div className="admin-header-left">
                        <img src={logo} alt="WebLearnAI Logo" className="admin-logo" />
                        <div>
                            <h1>📊 Admin Dashboard</h1>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="btn btn-secondary">
                        🚪 Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="admin-content">
                <div className="admin-container">
                    {/* Stats Cards */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">📨</div>
                            <div className="stat-info">
                                <div className="stat-value">{submissions.length}</div>
                                <div className="stat-label">Total Submissions</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🔍</div>
                            <div className="stat-info">
                                <div className="stat-value">{filteredSubmissions.length}</div>
                                <div className="stat-label">Filtered Results</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">📅</div>
                            <div className="stat-info">
                                <div className="stat-value">{new Date().toLocaleDateString()}</div>
                                <div className="stat-label">Today's Date</div>
                            </div>
                        </div>
                    </div>

                    {/* Filters and Actions */}
                    <div className="admin-actions">
                        <div className="filters-row">
                            <div className="search-box">
                                <input
                                    type="text"
                                    placeholder="🔍 Search by name, email, or phone..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="filter-box">
                                <select
                                    value={filterCourse}
                                    onChange={(e) => setFilterCourse(e.target.value)}
                                >
                                    <option value="">All Courses</option>
                                    {courseOptions.map(course => (
                                        <option key={course.value} value={course.value}>
                                            {course.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="action-buttons">
                            <button onClick={downloadCSV} className="btn btn-primary">
                                📥 Download CSV
                            </button>
                            <button onClick={handleDeleteAll} className="btn btn-danger">
                                🗑️ Delete All
                            </button>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="data-table-container">
                        {filteredSubmissions.length === 0 ? (
                            <div className="no-data">
                                <div className="no-data-icon">📭</div>
                                <h3>No submissions found</h3>
                                <p>Contact form submissions will appear here</p>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Interested Course</th>
                                            <th>Status</th>
                                            <th>Message</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSubmissions.map((submission) => (
                                            <tr key={submission.id}>
                                                <td data-label="Date & Time">{submission.timestamp}</td>
                                                <td data-label="Name">
                                                    <strong>{submission.name}</strong>
                                                </td>
                                                <td data-label="Email">{submission.email}</td>
                                                <td data-label="Phone">{submission.phone}</td>
                                                <td data-label="Interested Course">
                                                    <span className="course-badge">
                                                        {getCourseName(submission)}
                                                    </span>
                                                </td>
                                                <td data-label="Status">
                                                    <span className="status-badge">
                                                        {submission.studentStatus || 'N/A'}
                                                        {submission.studentStatus === 'College Student' && submission.studentDetails && (
                                                            <><br /><small>({submission.studentDetails})</small></>
                                                        )}
                                                        {submission.studentStatus === 'Working Professional' && submission.experienceYears && (
                                                            <><br /><small>({submission.experienceYears})</small></>
                                                        )}
                                                        {submission.studentStatus === 'Graduated but not working' && submission.graduatedDetails && (
                                                            <><br /><small>(Graduated: {submission.graduatedDetails})</small></>
                                                        )}
                                                    </span>
                                                </td>
                                                <td data-label="Message" className="message-cell">
                                                    {submission.message || 'N/A'}
                                                </td>
                                                <td data-label="Actions">
                                                    <button
                                                        onClick={() => handleDelete(submission.id)}
                                                        className="btn-delete"
                                                        title="Delete this submission"
                                                    >
                                                        🗑️
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
