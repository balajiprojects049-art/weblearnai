import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './AWSDataEngineerCourse.css';

// Import AWS technology logos
import s3Logo from '../assets/S3 Bucket.png';
import emrLogo from '../assets/EMR.png';
import lambdaLogo from '../assets/Lambda.png';
import sqsLogo from '../assets/SQS.png';
import snsLogo from '../assets/SNS.png';
import cloudWatchLogo from '../assets/Cloud Watch.png';
import glueLogo from '../assets/AWS Glue.png';
import kinesisLogo from '../assets/Kinesis.png';
import firehoseLogo from '../assets/Firehouse.png';
import athenaLogo from '../assets/Athena.png';
import iamLogo from '../assets/IAM.png';
import redshiftLogo from '../assets/RedSHift.png';
import stepFunctionsLogo from '../assets/Step Function.png';
import airflowLogo from '../assets/Airflow.png';

const AWSDataEngineerCourse = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const awsTechnologies = [
        {
            name: 'Amazon S3',
            logo: s3Logo,
            description: 'Central data lake for storing raw, curated, and analytics-ready datasets',
            color: '#FF9900'
        },
        {
            name: 'EMR',
            logo: emrLogo,
            description: 'Run large-scale Spark jobs for heavy data transformations',
            color: '#E7157B'
        },
        {
            name: 'Lambda',
            logo: lambdaLogo,
            description: 'Event-driven serverless data processing and orchestration logic',
            color: '#FF9900'
        },
        {
            name: 'SQS',
            logo: sqsLogo,
            description: 'Message queue to decouple producers and consumers in pipelines',
            color: '#FF4F8B'
        },
        {
            name: 'SNS',
            logo: snsLogo,
            description: 'Distribute pipeline events and alerts to downstream systems',
            color: '#D9208C'
        },
        {
            name: 'CloudWatch',
            logo: cloudWatchLogo,
            description: 'Monitor pipelines, job health, and operational metrics',
            color: '#E7157B'
        },
        {
            name: 'AWS Glue',
            logo: glueLogo,
            description: 'Serverless Spark-based ETL service with data catalog',
            color: '#945BB3'
        },
        {
            name: 'Kinesis',
            logo: kinesisLogo,
            description: 'Ingest high-velocity real-time data for streaming pipelines',
            color: '#FF9900'
        },
        {
            name: 'Firehose',
            logo: firehoseLogo,
            description: 'Deliver streaming data directly into S3 or Redshift',
            color: '#FF4F8B'
        },
        {
            name: 'Athena',
            logo: athenaLogo,
            description: 'SQL analytics directly on S3-based data lakes',
            color: '#945BB3'
        },
        {
            name: 'IAM',
            logo: iamLogo,
            description: 'Secure pipelines using role-based access control',
            color: '#DD344C'
        },
        {
            name: 'Redshift',
            logo: redshiftLogo,
            description: 'Analytical data warehouse for high-performance queries',
            color: '#E7157B'
        },
        {
            name: 'Step Functions',
            logo: stepFunctionsLogo,
            description: 'Orchestrate AWS data workflows with state management',
            color: '#FF4F8B'
        },
        {
            name: 'Apache Airflow',
            logo: airflowLogo,
            description: 'Orchestrate complex multi-system data pipelines using DAGs',
            color: '#017CEE'
        }
    ];

    return (
        <div className="aws-course">
            {/* Hero Section */}
            <section className="course-hero aws-hero">
                <div className="course-hero-overlay"></div>
                <div className="container">
                    <div className="course-hero-content">
                        <div className="course-badge">Intermediate Level</div>
                        <h1>AWS Data Engineer</h1>
                        <p className="course-subtitle">
                            Learn AWS data services including S3, Glue, Redshift, and build scalable data pipelines
                        </p>
                        <div className="course-meta">
                            <span className="meta-item">⏱️ 10 Weeks</span>
                            <span className="meta-item">👥 Live Classes</span>
                            <span className="meta-item">📜 Certificate</span>
                        </div>
                        <div className="course-cta">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Download Syllabus
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* AWS Technologies */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="badge">AWS Services</div>
                        <h2>Master AWS Data Engineering Stack</h2>
                        <p className="lead">
                            Build enterprise-grade data pipelines using industry-standard AWS services
                        </p>
                    </div>

                    <div className="simple-tech-grid">
                        {awsTechnologies.map((tech, index) => (
                            <div key={index} className="simple-tech-card">
                                <div className="tech-card-header">
                                    <img src={tech.logo} alt={tech.name} className="tech-card-logo" />
                                </div>
                                <div className="tech-card-body">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section className="section bg-light">
                <div className="container">
                    <div className="course-overview">
                        <h2>Course Overview</h2>
                        <p>
                            This comprehensive AWS Data Engineering course teaches you to build production-grade data pipelines
                            using Amazon Web Services. Master the complete AWS data stack including S3, EMR, Glue, Redshift,
                            and learn to orchestrate complex workflows with Apache Airflow.
                        </p>

                        <div className="overview-grid">
                            <div className="overview-item">
                                <h3>🎯 What You'll Learn</h3>
                                <ul>
                                    <li>Design multi-layer data lakes with S3</li>
                                    <li>Process big data with EMR and Spark</li>
                                    <li>Build serverless ETL with AWS Glue</li>
                                    <li>Stream real-time data with Kinesis</li>
                                    <li>Query data lakes with Athena</li>
                                    <li>Build data warehouses with Redshift</li>
                                    <li>Orchestrate pipelines with Airflow</li>
                                    <li>Implement security with IAM</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>👨‍🎓 Who Should Enroll</h3>
                                <ul>
                                    <li>Data engineers starting with AWS</li>
                                    <li>Cloud professionals expanding skills</li>
                                    <li>Backend developers moving to data</li>
                                    <li>Analytics professionals learning pipelines</li>
                                    <li>Anyone pursuing AWS certifications</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>📚 Prerequisites</h3>
                                <ul>
                                    <li>Basic Python programming</li>
                                    <li>SQL knowledge</li>
                                    <li>Understanding of cloud concepts</li>
                                    <li>AWS account (free tier works)</li>
                                </ul>
                            </div>

                            <div className="overview-item">
                                <h3>🎁 Course Includes</h3>
                                <ul>
                                    <li>Live instructor-led sessions</li>
                                    <li>Real-world AWS projects</li>
                                    <li>Hands-on labs and exercises</li>
                                    <li>Course materials and recordings</li>
                                    <li>AWS certification preparation</li>
                                    <li>Career support and placement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Master AWS Data Engineering?</h2>
                        <p className="lead">
                            Join our industry-leading program and become an AWS-certified data engineer.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Enroll Now
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Talk to Advisor
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AWSDataEngineerCourse;
