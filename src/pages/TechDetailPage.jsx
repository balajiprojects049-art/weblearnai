import { useNavigate, useParams } from 'react-router-dom';
import './TechDetailPage.css';

const TechDetailPage = () => {
    const navigate = useNavigate();
    const { techName } = useParams();

    // Technology details data
    const techDetails = {
        's3': {
            name: 'Amazon S3',
            icon: '🪣',
            color: '#FF9900',
            subtitle: 'Central data lake for storing raw, curated, and analytics-ready datasets',
            points: [
                'Acts as the core storage layer for all data engineering workloads.',
                'Used to design multi-layer data lakes (raw, processed, curated).',
                'Stores massive volumes of structured, semi-structured, and unstructured data.',
                'Optimized using columnar formats such as Parquet and ORC.',
                'Supports partitioning to improve query performance in Athena and Spark.',
                'Integrates seamlessly with EMR, Glue, Athena, Redshift Spectrum, and Airflow.',
                'Provides encryption, versioning, lifecycle policies, and access control.',
                'Enables low-cost, highly durable storage for long-term analytics.'
            ]
        },
        'emr': {
            name: 'EMR',
            icon: '⚡',
            color: '#E7157B',
            subtitle: 'Run large-scale Spark jobs for heavy data transformations',
            points: [
                'Designed for distributed processing of very large datasets.',
                'Runs Apache Spark, Hive, Hadoop, and Presto.',
                'Used for complex joins, aggregations, and feature engineering.',
                'Reads data directly from S3 and writes back to S3 or Redshift.',
                'Allows fine-grained tuning of Spark executors, memory, and partitions.',
                'Supports auto-scaling and spot instances for cost efficiency.',
                'Preferred when performance optimization and customization are required.'
            ]
        },
        'lambda': {
            name: 'Lambda',
            icon: 'λ',
            color: '#FF9900',
            subtitle: 'Event-driven serverless data processing and orchestration logic',
            points: [
                'Executes code in response to events without server management.',
                'Triggered by S3 uploads, SQS messages, SNS notifications, or APIs.',
                'Used for file validation, metadata updates, and pipeline triggers.',
                'Commonly used to start Glue jobs or EMR steps.',
                'Automatically scales based on event volume.',
                'Not suitable for heavy ETL, but critical for pipeline automation.'
            ]
        },
        'sqs': {
            name: 'SQS',
            icon: '📨',
            color: '#FF4F8B',
            subtitle: 'Message queue to decouple producers and consumers in pipelines',
            points: [
                'Acts as a reliable message queue for asynchronous processing.',
                'Prevents system overload during traffic spikes.',
                'Ensures fault tolerance with retries and dead-letter queues.',
                'Supports Standard queues (high throughput) and FIFO queues (ordered processing).',
                'Used to queue file processing events or streaming workloads.',
                'Improves scalability and resilience of data pipelines.'
            ]
        },
        'sns': {
            name: 'SNS',
            icon: '📢',
            color: '#D9208C',
            subtitle: 'Distribute pipeline events and alerts to downstream systems',
            points: [
                'Used for broadcasting job status and pipeline notifications.',
                'Enables fan-out to Lambda, SQS, email, or monitoring systems.',
                'Commonly used for failure alerts and SLA breach notifications.',
                'Helps build event-driven, loosely coupled architectures.',
                'Often integrated with Glue, EMR, and Step Functions.'
            ]
        },
        'cloudwatch': {
            name: 'CloudWatch',
            icon: '📊',
            color: '#E7157B',
            subtitle: 'Monitor pipelines, job health, and operational metrics',
            points: [
                'Collects logs and metrics from Glue, EMR, Lambda, and EC2.',
                'Used to monitor job execution time and failures.',
                'Enables alerts and alarms for pipeline issues.',
                'Helps debug production failures using centralized logs.',
                'Essential for observability and operational stability.'
            ]
        },
        'glue': {
            name: 'AWS Glue',
            icon: '🔗',
            color: '#945BB3',
            subtitle: 'Serverless Spark-based ETL service with data catalog',
            points: [
                'Used to build ETL pipelines without managing infrastructure.',
                'Glue Crawlers automatically infer schemas from data sources.',
                'Maintains a Data Catalog used by Athena and Redshift Spectrum.',
                'Supports PySpark-based transformations and scheduling.',
                'Handles schema evolution and incremental data processing.',
                'Ideal for serverless data lake transformations.'
            ]
        },
        'kinesis': {
            name: 'Kinesis',
            icon: '🌊',
            color: '#FF9900',
            subtitle: 'Ingest high-velocity real-time data for streaming pipelines',
            points: [
                'Designed for real-time ingestion of continuous data streams.',
                'Used for clickstreams, application logs, and IoT data.',
                'Divides data into shards for parallel processing.',
                'Supports multiple consumers like Spark Streaming and Lambda.',
                'Enables near real-time analytics and monitoring.'
            ]
        },
        'firehose': {
            name: 'Firehose',
            icon: '🚀',
            color: '#FF4F8B',
            subtitle: 'Deliver streaming data directly into S3 or Redshift',
            points: [
                'Fully managed streaming delivery service.',
                'Automatically buffers and writes streaming data.',
                'Eliminates the need for consumer or shard management.',
                'Supports optional transformation before delivery.',
                'Best for simple, near real-time ingestion use cases.'
            ]
        },
        'athena': {
            name: 'Athena',
            icon: '🔍',
            color: '#945BB3',
            subtitle: 'SQL analytics directly on S3-based data lakes',
            points: [
                'Serverless SQL query engine with pay-per-query pricing.',
                'Uses Glue Data Catalog for schema definitions.',
                'Performs best with partitioned and columnar data.',
                'Used for ad-hoc analysis and data validation.',
                'Eliminates the need to load data into a database.'
            ]
        },
        'iam': {
            name: 'IAM',
            icon: '🔐',
            color: '#DD344C',
            subtitle: 'Secure pipelines using role-based access control',
            points: [
                'Manages authentication and authorization in AWS.',
                'Assigns roles to Glue, EMR, Lambda, and Airflow.',
                'Enforces least-privilege access to data and services.',
                'Controls access to S3 buckets and analytics resources.',
                'Essential for compliance, governance, and security.'
            ]
        },
        'redshift': {
            name: 'Redshift',
            icon: '🗄️',
            color: '#E7157B',
            subtitle: 'Analytical data warehouse for high-performance queries',
            points: [
                'Optimized for large-scale analytical workloads.',
                'Stores curated, structured datasets.',
                'Uses distribution keys and sort keys for performance.',
                'Loads data efficiently from S3 using COPY commands.',
                'Powers BI dashboards and enterprise reporting.',
                'Supports querying S3 data using Redshift Spectrum.'
            ]
        },
        'step-functions': {
            name: 'Step Functions',
            icon: '🔄',
            color: '#FF4F8B',
            subtitle: 'Orchestrate AWS data workflows with state management',
            points: [
                'Coordinates Glue jobs, Lambda functions, and EMR steps.',
                'Handles retries, error handling, and branching logic.',
                'Provides visual execution tracking.',
                'Ideal for AWS-native orchestration.',
                'Simplifies complex pipeline workflows.'
            ]
        },
        'airflow': {
            name: 'Apache Airflow',
            icon: '🌬️',
            color: '#017CEE',
            subtitle: 'Orchestrate complex multi-system data pipelines using DAGs',
            points: [
                'Uses Python-defined DAGs to manage workflow dependencies.',
                'Supports scheduling, retries, backfills, and monitoring.',
                'Integrates with AWS services, databases, APIs, and tools.',
                'Industry standard for enterprise data engineering.',
                'Preferred for complex, long-running pipelines.'
            ]
        }
    };

    const tech = techDetails[techName] || techDetails['s3'];

    return (
        <div className="tech-detail-page">
            {/* Header */}
            <section className="detail-hero" style={{ background: `linear-gradient(135deg, ${tech.color} 0%, #232F3E 100%)` }}>
                <div className="container">
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ← Back to Course
                    </button>
                    <div className="detail-hero-content">
                        <div className="tech-icon-large" style={{ backgroundColor: tech.color }}>
                            <span>{tech.icon}</span>
                        </div>
                        <h1>{tech.name}</h1>
                        <p className="subtitle">{tech.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="detail-content">
                <div className="container">
                    <div className="content-card">
                        <h2>Key Features & Capabilities</h2>
                        <ul className="feature-list">
                            {tech.points.map((point, index) => (
                                <li key={index}>
                                    <span className="check-icon">✓</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="detail-cta">
                        <button className="back-button-secondary" onClick={() => navigate(-1)}>
                            ← Back to Course
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechDetailPage;
