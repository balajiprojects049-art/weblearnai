import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

    const [expandedCard, setExpandedCard] = useState(null);

    const awsTechnologies = [
        {
            name: 'Amazon S3',
            logo: s3Logo,
            description: 'Central data lake for storing raw, curated, and analytics-ready datasets',
            detailedDescription: (
                <>
                    S3 is the <strong className="highlight">central data lake</strong> used to store <strong className="highlight">raw, curated, and analytics-ready datasets</strong>.
                    <br /><br />

                </>
            ),
            slug: 's3',
            color: '#FF9900'
        },
        {
            name: 'EMR',
            logo: emrLogo,
            description: 'Run large-scale Spark jobs for heavy data transformations',
            detailedDescription: (
                <>
                    EMR is used to run <strong className="highlight">large-scale Spark jobs</strong> for <strong className="highlight">heavy data transformations</strong>.
                    <br /><br />

                </>
            ),
            slug: 'emr',
            color: '#E7157B'
        },
        {
            name: 'Lambda',
            logo: lambdaLogo,
            description: 'Event-driven serverless data processing and orchestration logic',
            detailedDescription: (
                <>
                    Lambda handles <strong className="highlight">lightweight, event-driven data processing</strong> and <strong className="highlight">orchestration logic</strong>.
                    <br /><br />

                </>
            ),
            slug: 'lambda',
            color: '#FF9900'
        },
        {
            name: 'SQS',
            logo: sqsLogo,
            description: 'Message queue to decouple producers and consumers in pipelines',
            detailedDescription: (
                <>
                    SQS buffers data events to <strong className="highlight">decouple producers and consumers</strong> in pipelines.
                    <br /><br />
                </>
            ),
            slug: 'sqs',
            color: '#FF4F8B'
        },
        {
            name: 'SNS',
            logo: snsLogo,
            description: 'Distribute pipeline events and alerts to downstream systems',
            detailedDescription: (
                <>
                    SNS distributes <strong className="highlight">pipeline events and alerts</strong> to multiple <strong className="highlight">downstream systems</strong>.
                    <br /><br />
                </>
            ),
            slug: 'sns',
            color: '#D9208C'
        },
        {
            name: 'CloudWatch',
            logo: cloudWatchLogo,
            description: 'Monitor pipelines, job health, and operational metrics',
            detailedDescription: (
                <>
                    CloudWatch monitors <strong className="highlight">data pipelines, job health</strong>, and <strong className="highlight">operational metrics</strong>.
                    <br /><br />
                </>
            ),
            slug: 'cloudwatch',
            color: '#E7157B'
        },
        {
            name: 'AWS Glue',
            logo: glueLogo,
            description: 'Serverless Spark-based ETL service with data catalog',
            detailedDescription: (
                <>
                    Glue is a <strong className="highlight">serverless Spark-based ETL service</strong> with a <strong className="highlight">centralized data catalog</strong>.
                    <br /><br />
                </>
            ),
            slug: 'glue',
            color: '#945BB3'
        },
        {
            name: 'Kinesis',
            logo: kinesisLogo,
            description: 'Ingest high-velocity real-time data for streaming pipelines',
            detailedDescription: (
                <>
                    Kinesis Streams ingests <strong className="highlight">high-velocity real-time data</strong> for <strong className="highlight">streaming pipelines</strong>.
                    <br /><br />
                </>
            ),
            slug: 'kinesis',
            color: '#FF9900'
        },
        {
            name: 'Firehose',
            logo: firehoseLogo,
            description: 'Deliver streaming data directly into S3 or Redshift',
            detailedDescription: (
                <>
                    Firehose delivers <strong className="highlight">streaming data directly</strong> into <strong className="highlight">S3 or Redshift</strong> with minimal setup.
                    <br /><br />
                </>
            ),
            slug: 'firehose',
            color: '#FF4F8B'
        },
        {
            name: 'Athena',
            logo: athenaLogo,
            description: 'SQL analytics directly on S3-based data lakes',
            detailedDescription: (
                <>
                    Athena enables <strong className="highlight">SQL analytics directly</strong> on <strong className="highlight">S3-based data lakes</strong>.
                    <br /><br />
                </>
            ),
            slug: 'athena',
            color: '#945BB3'
        },
        {
            name: 'IAM',
            logo: iamLogo,
            description: 'Secure pipelines using role-based access control',
            detailedDescription: (
                <>
                    IAM secures data pipelines using <strong className="highlight">role-based access control</strong>.
                    <br /><br />
                </>
            ),
            slug: 'iam',
            color: '#DD344C'
        },
        {
            name: 'Redshift',
            logo: redshiftLogo,
            description: 'Analytical data warehouse for high-performance queries',
            detailedDescription: (
                <>
                    Redshift is the <strong className="highlight">analytical data warehouse</strong> for <strong className="highlight">high-performance queries</strong>.
                    <br /><br />
                </>
            ),
            slug: 'redshift',
            color: '#E7157B'
        },
        {
            name: 'Step Functions',
            logo: stepFunctionsLogo,
            description: 'Orchestrate AWS data workflows with state management',
            detailedDescription: (
                <>
                    Step Functions orchestrate <strong className="highlight">AWS data workflows</strong> with <strong className="highlight">state management</strong>.
                    <br /><br />
                </>
            ),
            slug: 'step-functions',
            color: '#FF4F8B'
        },
        {
            name: 'Apache Airflow',
            logo: airflowLogo,
            description: 'Orchestrate complex multi-system data pipelines using DAGs',
            detailedDescription: (
                <>
                    Airflow orchestrates <strong className="highlight">complex, multi-system data pipelines</strong> using <strong className="highlight">DAGs</strong>.
                    <br /><br />
                </>
            ),
            slug: 'airflow',
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

                    {/* Backdrop */}
                    {expandedCard !== null && (
                        <div
                            className="tech-card-backdrop"
                            onClick={() => setExpandedCard(null)}
                        ></div>
                    )}

                    <div className="simple-tech-grid">
                        {awsTechnologies.map((tech, index) => (
                            <div
                                key={index}
                                className={`simple-tech-card ${expandedCard === index ? 'card-expanded' : ''}`}
                                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                            >
                                {/* Close Button for Expanded Card */}
                                {expandedCard === index && (
                                    <button
                                        className="card-close-button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedCard(null);
                                        }}
                                    >
                                        ✕
                                    </button>
                                )}

                                <div className="tech-card-header">
                                    <img src={tech.logo} alt={tech.name} className="tech-card-logo" />
                                </div>
                                <div className="tech-card-body">
                                    <h4>{tech.name}</h4>
                                    <p>{tech.description}</p>
                                </div>

                                {/* Detailed Description - Only shown when expanded */}
                                {expandedCard === index && tech.detailedDescription && (
                                    <div className="tech-card-details">
                                        <div className="details-divider"></div>
                                        <div className="details-content">
                                            {tech.detailedDescription}
                                        </div>
                                        {tech.slug && (
                                            <Link to={`/technology/${tech.slug}`} className="learn-more-btn">
                                                Learn More →
                                            </Link>
                                        )}
                                    </div>
                                )}
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
