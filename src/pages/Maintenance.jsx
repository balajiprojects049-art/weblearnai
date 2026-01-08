import React from 'react';
import './Maintenance.css';

const Maintenance = () => {
    return (
        <div className="maintenance-container">
            <div className="maintenance-content">
                <div className="maintenance-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h1>We'll Be Back Soon!</h1>
                <p className="maintenance-message">
                    We're currently performing scheduled maintenance to improve your experience.
                    <br />
                    Thank you for your patience.
                </p>
                <div className="maintenance-details">
                    <p>Expected downtime: Minimal</p>
                    <p>For urgent inquiries, please contact us:</p>
                    <a href="mailto:support@weblearnai.com" className="contact-link">
                        support@weblearnai.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
