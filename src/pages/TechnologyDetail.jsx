import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import './TechnologyDetail.css';
import s3Logo from '../assets/S3 Bucket.png';
import emrLogo from '../assets/EMR.png';
import lambdaLogo from '../assets/Lambda.png';
import sqsLogo from '../assets/SQS.png';
import snsLogo from '../assets/SNS.png';
import cloudwatchLogo from '../assets/Cloud Watch.png';
import glueLogo from '../assets/AWS Glue.png';
import kinesisLogo from '../assets/Kinesis.png';
import firehoseLogo from '../assets/Firehouse.png';
import athenaLogo from '../assets/Athena.png';
import iamLogo from '../assets/IAM.png';
import redshiftLogo from '../assets/RedSHift.png';
import stepFunctionsLogo from '../assets/Step Function.png';
import airflowLogo from '../assets/Apache Air flow.png';
import azureDataFactoryLogo from '../assets/Azure Data factory.png';
import databricksLogo from '../assets/databricks.png';
import fabricLogo from '../assets/Fabric.png';
import unityCatalogLogo from '../assets/unity catlog.png';
import deltaLakeLogo from '../assets/Delta lake.png';
import powerBiLogo from '../assets/power bi.png';
import powerAppsLogo from '../assets/power apps.png';
import githubLogo from '../assets/git hub.png';
import sqlLogo from '../assets/SQL.png';
import pythonLogo from '../assets/Python.png';
import genAiLogo from '../assets/Gen ai.png';

// Import Hero Backgrounds
import s3HeroBg from '../assets/s3-detail-hero.png';
import emrHeroBg from '../assets/emr-detail-hero.png';
import adfArchitecture from '../assets/adf-architecture.png';
import adfWorkflow from '../assets/adf-workflow.png';
import powerPlatformComponents from '../assets/power-platform-components.png';
import powerPlatformEcosystem from '../assets/power-platform-ecosystem.png';
import githubHeroBg from '../assets/github-hero.png';
import airflowWorkflow from '../assets/airflow-workflow.png';

const TechnologyDetail = () => {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Technology data
    const technologies = {
        's3': {
            name: 'Amazon S3',
            logo: s3Logo,
            heroBg: s3HeroBg,
            subtitle: 'Central data lake for storing raw, curated, and analytics-ready datasets',
            description: 'S3 is the central data lake used to store raw, curated, and analytics-ready datasets. Acts as the core storage layer for all data engineering workloads.',
            keyPoints: [
                'Used to design multi-layer data lakes (raw, processed, curated).',
                'Stores massive volumes of structured, semi-structured, and unstructured data.',
                'Optimized using columnar formats such as Parquet and ORC.',
                'Supports partitioning to improve query performance in Athena and Spark.',
                'Integrates seamlessly with EMR, Glue, Athena, Redshift Spectrum, and Airflow.',
                'Provides encryption, versioning, lifecycle policies, and access control.',
                'Enables low-cost, highly durable storage for long-term analytics.'
            ],
            category: 'AWS Data Engineering',
            color: '#FF9900'
        },
        'emr': {
            name: 'EMR',
            logo: emrLogo,
            heroBg: emrHeroBg,
            subtitle: 'Run large-scale Spark jobs for heavy data transformations',
            description: 'EMR is used to run large-scale Spark jobs for heavy data transformations. Designed for distributed processing of very large datasets.',
            keyPoints: [
                'Runs Apache Spark, Hive, Hadoop, and Presto.',
                'Used for complex joins, aggregations, and feature engineering.',
                'Reads data directly from S3 and writes back to S3 or Redshift.',
                'Allows fine-grained tuning of Spark executors, memory, and partitions.',
                'Supports auto-scaling and spot instances for cost efficiency.',
                'Preferred when performance optimization and customization are required.'
            ],
            category: 'AWS Data Engineering',
            color: '#E7157B'
        },
        'lambda': {
            name: 'Lambda',
            logo: lambdaLogo,
            subtitle: 'Lightweight, event-driven data processing and orchestration logic',
            description: 'Lambda handles lightweight, event-driven data processing and orchestration logic. Executes code in response to events without server management.',
            keyPoints: [
                'Triggered by S3 uploads, SQS messages, SNS notifications, or APIs.',
                'Used for file validation, metadata updates, and pipeline triggers.',
                'Commonly used to start Glue jobs or EMR steps.',
                'Automatically scales based on event volume.',
                'Not suitable for heavy ETL, but critical for pipeline automation.'
            ],
            category: 'AWS Data Engineering',
            color: '#FF9900'
        },
        'sqs': {
            name: 'SQS',
            logo: sqsLogo,
            subtitle: 'Buffers data events to decouple producers and consumers in pipelines',
            description: 'SQS buffers data events to decouple producers and consumers in pipelines. Acts as a reliable message queue for asynchronous processing.',
            keyPoints: [
                'Prevents system overload during traffic spikes.',
                'Ensures fault tolerance with retries and dead-letter queues.',
                'Supports Standard queues (high throughput) and FIFO queues (ordered processing).',
                'Used to queue file processing events or streaming workloads.',
                'Improves scalability and resilience of data pipelines.'
            ],
            category: 'AWS Data Engineering',
            color: '#FF4F8B'
        },
        'sns': {
            name: 'SNS',
            logo: snsLogo,
            subtitle: 'Distributes pipeline events and alerts to multiple downstream systems',
            description: 'SNS distributes pipeline events and alerts to multiple downstream systems. Used for broadcasting job status and pipeline notifications.',
            keyPoints: [
                'Enables fan-out to Lambda, SQS, email, or monitoring systems.',
                'Commonly used for failure alerts and SLA breach notifications.',
                'Helps build event-driven, loosely coupled architectures.',
                'Often integrated with Glue, EMR, and Step Functions.'
            ],
            category: 'AWS Data Engineering',
            color: '#D62E8B'
        },
        'cloudwatch': {
            name: 'CloudWatch',
            logo: cloudwatchLogo,
            subtitle: 'Monitors data pipelines, job health, and operational metrics',
            description: 'CloudWatch monitors data pipelines, job health, and operational metrics. Collects logs and metrics from Glue, EMR, Lambda, and EC2.',
            keyPoints: [
                'Used to monitor job execution time and failures.',
                'Enables alerts and alarms for pipeline issues.',
                'Helps debug production failures using centralized logs.',
                'Essential for observability and operational stability.'
            ],
            category: 'AWS Data Engineering',
            color: '#FF4F8B'
        },
        'glue': {
            name: 'AWS Glue',
            logo: glueLogo,
            subtitle: 'Serverless Spark-based ETL service with centralized data catalog',
            description: 'Glue is a serverless Spark-based ETL service with a centralized data catalog. Used to build ETL pipelines without managing infrastructure.',
            keyPoints: [
                'Glue Crawlers automatically infer schemas from data sources.',
                'Maintains a Data Catalog used by Athena and Redshift Spectrum.',
                'Supports PySpark-based transformations and scheduling.',
                'Handles schema evolution and incremental data processing.',
                'Ideal for serverless data lake transformations.'
            ],
            category: 'AWS Data Engineering',
            color: '#4B612C'
        },
        'kinesis': {
            name: 'Kinesis',
            logo: kinesisLogo,
            subtitle: 'Ingests high-velocity real-time data for streaming pipelines',
            description: 'Kinesis Streams ingests high-velocity real-time data for streaming pipelines. Designed for real-time ingestion of continuous data streams.',
            keyPoints: [
                'Used for clickstreams, application logs, and IoT data.',
                'Divides data into shards for parallel processing.',
                'Supports multiple consumers like Spark Streaming and Lambda.',
                'Enables near real-time analytics and monitoring.'
            ],
            category: 'AWS Data Engineering',
            color: '#7C4DFF'
        },
        'firehose': {
            name: 'Kinesis Firehose',
            logo: firehoseLogo,
            subtitle: 'Delivers streaming data directly into S3 or Redshift with minimal setup',
            description: 'Firehose delivers streaming data directly into S3 or Redshift with minimal setup. Fully managed streaming delivery service.',
            keyPoints: [
                'Automatically buffers and writes streaming data.',
                'Eliminates the need for consumer or shard management.',
                'Supports optional transformation before delivery.',
                'Best for simple, near real-time ingestion use cases.'
            ],
            category: 'AWS Data Engineering',
            color: '#7C4DFF'
        },
        'athena': {
            name: 'Athena',
            logo: athenaLogo,
            subtitle: 'SQL analytics directly on S3-based data lakes',
            description: 'Athena enables SQL analytics directly on S3-based data lakes. Serverless SQL query engine with pay-per-query pricing.',
            keyPoints: [
                'Uses Glue Data Catalog for schema definitions.',
                'Performs best with partitioned and columnar data.',
                'Used for ad-hoc analysis and data validation.',
                'Eliminates the need to load data into a database.'
            ],
            category: 'AWS Data Engineering',
            color: '#3334B9'
        },
        'iam': {
            name: 'IAM',
            logo: iamLogo,
            subtitle: 'Secures data pipelines using role-based access control',
            description: 'IAM secures data pipelines using role-based access control. Manages authentication and authorization in AWS.',
            keyPoints: [
                'Assigns roles to Glue, EMR, Lambda, and Airflow.',
                'Enforces least-privilege access to data and services.',
                'Controls access to S3 buckets and analytics resources.',
                'Essential for compliance, governance, and security.'
            ],
            category: 'AWS Data Engineering',
            color: '#DD344C'
        },
        'redshift': {
            name: 'Redshift',
            logo: redshiftLogo,
            subtitle: 'Analytical data warehouse for structured, high-performance queries',
            description: 'Redshift is the analytical data warehouse for structured, high-performance queries. Optimized for large-scale analytical workloads.',
            keyPoints: [
                'Stores curated, structured datasets.',
                'Uses distribution keys and sort keys for performance.',
                'Loads data efficiently from S3 using COPY commands.',
                'Powers BI dashboards and enterprise reporting.',
                'Supports querying S3 data using Redshift Spectrum.'
            ],
            category: 'AWS Data Engineering',
            color: '#4053D6'
        },
        'stepfunctions': {
            name: 'Step Functions',
            logo: stepFunctionsLogo,
            subtitle: 'Orchestrate AWS data workflows with state management',
            description: 'Step Functions orchestrate AWS data workflows with state management. Coordinates Glue jobs, Lambda functions, and EMR steps.',
            keyPoints: [
                'Handles retries, error handling, and branching logic.',
                'Provides visual execution tracking.',
                'Ideal for AWS-native orchestration.',
                'Simplifies complex pipeline workflows.'
            ],
            category: 'AWS Data Engineering',
            color: '#FF4F8B'
        },
        'airflow': {
            name: 'Apache Airflow',
            logo: airflowLogo,
            subtitle: 'Orchestrate and monitor complex workflows with end-to-end pipeline automation',
            description: 'Apache Airflow is the industry standard for orchestrating and monitoring complex data workflows. It uses Python-defined Directed Acyclic Graphs (DAGs) to manage pipeline dependencies and scheduling.',
            keyPoints: [
                'Orchestrate and monitor complex workflows with Directed Acyclic Graphs (DAGs).',
                'Master key components: Scheduler, Web Server, Workers, and Executors.',
                'Integrates seamlessly with AWS, Azure, databases, and third-party APIs.',
                'Manage task dependencies, retries, and XComs for data sharing between tasks.',
                'Scale Airflow for enterprise workloads using Celery or Kubernetes executors.'
            ],
            curriculum: [
                {
                    title: "1. Apache Airflow Basics",
                    topics: [
                        "What is Apache Airflow and why it's used?",
                        "Key components: Scheduler, Web Server, Metadata DB, Executor, Workers",
                        "What is a DAG (Directed Acyclic Graph) in Airflow?",
                        "Understanding Tasks, Operators, and Sensors",
                        "Basics of the Airflow UI and monitoring"
                    ]
                },
                {
                    title: "2. Airflow Setup & Configuration",
                    topics: [
                        "How to install and configure Apache Airflow",
                        "Role of the airflow.cfg file and environment variables",
                        "Types of Executors: Sequential, Local, Celery, Kubernetes",
                        "How Airflow uses the Metadata Database",
                        "Scaling Airflow for enterprise workloads"
                    ]
                },
                {
                    title: "3. Workflow Orchestration",
                    topics: [
                        "How to schedule and trigger a DAG",
                        "Trigger Rules vs Task Dependencies",
                        "Using XComs for data sharing between tasks",
                        "Parameterizing DAGs with Variables & Connections",
                        "Comparing Airflow vs Apache NiFi vs ADF pipelines"
                    ]
                },
                {
                    title: "4. Integration & Use Cases",
                    topics: [
                        "Integrating Airflow with Azure Data Factory or Databricks",
                        "Orchestrating ETL pipelines with Airflow + Spark",
                        "Connecting Airflow with AWS, GCP, and Azure services",
                        "Using Airflow with Docker and Kubernetes for containerized workflows"
                    ]
                }
            ],
            category: 'Cloud Data Engineering',
            color: '#017CEE',
            architectureImage: airflowWorkflow
        },
        'adf': {
            name: 'Azure Data Factory',
            logo: azureDataFactoryLogo,
            subtitle: 'Build, orchestrate, and automate scalable data pipelines',
            description: 'Azure Data Factory (ADF) is a cloud-based ETL and data integration service that allows you to create data-driven workflows for orchestrating and automating data movement and data transformation.',
            keyPoints: [
                'Build, orchestrate, and automate scalable data pipelines with real-time and batch processing.',
                'Code-free visual environment for designing ETL and ELT processes.',
                'Connect to over 90+ built-in connectors for hybrid data sources.',
                'Monitor and manage pipelines with rich visualization and monitoring tools.',
                'Secure data movement through encrypted channels and private endpoints.',
                'Pay-as-you-go serverless scaling for cost efficiency.'
            ],
            architectureImage: adfArchitecture,
            workflowImage: adfWorkflow,
            curriculum: [
                {
                    title: "1. ADF Fundamentals & Architecture",
                    topics: [
                        "What is Azure Data Factory?",
                        "Azure Data Factory Architecture",
                        "Azure Data Factory Portal UI",
                        "Top-level concepts: Pipelines, Activities, Linked services, Datasets, Triggers, Data Flows, Integration Runtimes"
                    ]
                },
                {
                    title: "2. Pipelines & Orchestration",
                    topics: [
                        "Creating, organizing (folders), debugging, and publishing pipelines",
                        "Parameters / Pipeline Parameters"
                    ]
                },
                {
                    title: "3. Linked Services & Datasets",
                    topics: [
                        "Creating Linked Services for Blob, SQL Database, SQL Server, ADLS Gen1/Gen2",
                        "Linked Service Parameterization",
                        "Datasets for Avro, Binary, CSV, Excel, JSON, ORC, Parquet, XML",
                        "Table datasets for SQL Database, SQL Server, Oracle",
                        "Data Set Parameterization"
                    ]
                },
                {
                    title: "4. Activities & Data Movement",
                    topics: [
                        "Control Flow: Wait, Variables (Create, Set, Append)",
                        "Copy Data activity: General, Source, Sink, Mapping, Settings, User Properties",
                        "Blob storage file copying strategies (Single file, folder, recursive)",
                        "Transformation activities: Databricks Notebook, Azure Function, Lookup, Stored Procedure",
                        "Management activities: Get Metadata, Delete, Execute Pipeline, Validation, Fail",
                        "Iterations & Conditionals: Filter, For Each, If Condition, Switch, Until"
                    ]
                },
                {
                    title: "5. Triggers & Scheduling",
                    topics: [
                        "Trigger types: Schedule, Tumbling window, Storage Events",
                        "Triggers with Parameters"
                    ]
                },
                {
                    title: "6. Integration Runtime (IR)",
                    topics: [
                        "Azure Auto Resolve Integration Runtime",
                        "Azure Managed Virtual Network",
                        "Self-Hosted & Linked Self-Hosted IR"
                    ]
                },
                {
                    title: "7. DevOps & Monitoring",
                    topics: [
                        "Source control: Git configuration, ARM Template (Export/Import), Azure DevOps Repos",
                        "Global parameters, Credentials, and Security",
                        "Monitoring ADF Jobs, Alerts, and Logic Apps Failure Notifications"
                    ]
                },
                {
                    title: "8. Mapping Data Flows",
                    topics: [
                        "What is Data Flow? Mapping Data Flow & Debug",
                        "Transformations: Filter, Aggregate, Join, Conditional Split, Derived Column",
                        "Advanced transformations: Exists, Union, Lookup, Sort, Group By, Pivot, Unpivot, Flatten, Parse",
                        "Flow Control: Filter sort, Alter row, Assert, Flowlet",
                        "Validate Schema, Schema Drift, and Duplicate Removal"
                    ]
                }
            ],
            category: 'Azure Data Engineering',
            color: '#0078D4'
        },
        'databricks': {
            name: 'Azure Databricks',
            logo: databricksLogo,
            subtitle: 'Unified analytics platform for data engineering and AI',
            description: 'Azure Databricks is a managed Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform. It provides a collaborative environment for data engineers, data scientists, and data analysts.',
            keyPoints: [
                'Accelerate innovation and development by streamlining data engineering and data science workloads.',
                'Collaborative workspace for teams to build and scale data pipelines together.',
                'Optimized Apache Spark runtime for high-performance data processing.',
                'Seamless integration with Azure services like ADLS, ADF, and Power BI.',
                'Unified governance and security with Unity Catalog integration.',
                'Supports multiple languages including Python, Scala, SQL, and R.'
            ],
            curriculum: [
                {
                    title: "1. Databricks Basics",
                    topics: [
                        "What is Databricks?",
                        "How to create a free Databricks account?",
                        "What is a Databricks Workspace?",
                        "Different kinds of clusters in Databricks",
                        "Basics of Apache Spark and how Databricks uses it",
                        "What are Databricks Notebooks and their use cases?"
                    ]
                },
                {
                    title: "2. Data Ingestion & Connectivity",
                    topics: [
                        "How to mount Data Lake to Databricks?",
                        "Reading data from Azure Blob Storage and writing into Azure SQL Database",
                        "Reading data from Azure Data Lake Storage (ADLS) and writing into Azure SQL Database using Python and Scala",
                        "Using Autoloader for incremental and real-time ingestion from Data Lake/Blob"
                    ]
                },
                {
                    title: "3. Data Processing & Transformations",
                    topics: [
                        "Explore, analyze, clean, transform, and load data in Databricks using Python and SQL",
                        "Narrow Transformations in Spark (map, filter, union)",
                        "Wide Transformations in Spark (groupBy, reduceByKey, join)",
                        "Differences between Python vs Scala vs SQL for data processing"
                    ]
                },
                {
                    title: "4. Delta Lake & Governance",
                    topics: [
                        "What is Delta Lake and how does it enhance data lakes?",
                        "Features of Delta Lake: ACID, schema evolution, time travel, versioning",
                        "What is Unity Catalog in Databricks and how does it provide centralized governance?",
                        "Differences between Delta Lake and Unity Catalog"
                    ]
                },
                {
                    title: "5. Configuration & Orchestration",
                    topics: [
                        "How to configure Databricks for enterprise use (clusters, networking, permissions)",
                        "How to schedule and run Notebooks in Azure Data Factory (ADF)",
                        "How to integrate Databricks with CI/CD using GitHub"
                    ]
                }
            ],
            category: 'Azure Data Engineering',
            color: '#FF3621'
        },
        'fabric': {
            name: 'Microsoft Fabric',
            logo: fabricLogo,
            subtitle: 'End-to-end data analytics platform simplifying the data journey',
            description: 'Microsoft Fabric is an all-in-one analytics solution for enterprises that covers everything from data movement to data science, Real-Time Analytics, and business intelligence.',
            keyPoints: [
                'Unifies data movement, data engineering, real-time analytics, data science, and Power BI.',
                'Built on a foundation of SaaS and an open, lake-centric data architecture with OneLake.',
                'Integrates various data roles and experiences into a single, cohesive environment.',
                'Enables actionable insights by connecting complex data to business results.',
                'Provides a single source of truth for data across the organization.',
                'Simplifies management and governance with a unified capacity model.'
            ],
            curriculum: [
                {
                    title: "1. Microsoft Fabric Basics",
                    topics: [
                        "What is Microsoft Fabric?",
                        "Why Microsoft introduced Fabric (relation to Power BI, Synapse, and Data Factory)",
                        "Key concept — OneLake (the unified data lake)",
                        "Main workloads: Data Engineering, Science, Warehouse, Real-Time Analytics, and Power BI",
                        "Difference between Microsoft Fabric and traditional Azure services (ADF + Synapse + Power BI)",
                        "Accessing and setting up a Microsoft Fabric workspace in Power BI service"
                    ]
                },
                {
                    title: "2. Data Ingestion & Integration",
                    topics: [
                        "Using Data Factory (Fabric’s built-in version) for data pipelines",
                        "Ingesting data from multiple sources: Azure SQL, ADLS, S3, APIs, and on-prem",
                        "Using Dataflows Gen2 for low-code ingestion and transformation",
                        "Connecting external data sources using Shortcuts (without copying data)",
                        "Understanding Data Pipelines, Activities, and Triggers in Fabric"
                    ]
                },
                {
                    title: "3. Data Engineering & Transformation",
                    topics: [
                        "Using Lakehouses in Fabric for raw and transformed data",
                        "Working with Apache Spark notebooks directly in Fabric",
                        "Implementing Medallion Architecture (Bronze → Silver → Gold)",
                        "Data cleansing and transformation using PySpark, SQL, or Dataflows",
                        "Optimizing performance using Delta tables and partitioning",
                        "Integration with Notebooks, Jobs, and Schedules for orchestration"
                    ]
                },
                {
                    title: "4. Delta Lake, OneLake & Governance",
                    topics: [
                        "Understanding OneLake — the unified, SaaS-based data lake across all workloads",
                        "Data storage in open Delta/Parquet format for interoperability",
                        "Delta Lake features: ACID transactions, schema enforcement, versioning, time travel",
                        "Introduction to Microsoft Purview integration for governance and lineage",
                        "Workspaces and permissions model for data access control",
                        "Fabric vs Unity Catalog (Databricks comparison for governance)"
                    ]
                },
                {
                    title: "5. Analytics, Visualization & AI",
                    topics: [
                        "Using Power BI directly within Fabric for dashboards and reporting",
                        "DirectLake mode — query OneLake data instantly in Power BI without import",
                        "Real-Time Analytics with KQL Database for streaming data",
                        "Data Science workspace for model training and deployment",
                        "Using Copilot in Fabric to generate queries, pipelines, and insights with AI"
                    ]
                }
            ],
            category: 'Azure Data Engineering',
            color: '#7C3283'
        },
        'unity-catalog': {
            name: 'Unity Catalog',
            logo: unityCatalogLogo,
            subtitle: 'Centralized governance and access control for data and AI',
            description: 'Unity Catalog is a unified governance solution for data and AI on the Databricks platform. It provides centralized access control, auditing, lineage, and data discovery capabilities across multiple workspaces.',
            keyPoints: [
                'Implement centralized governance across all data and AI assets.',
                'Fine-grained access control on tables, columns, and rows.',
                'Automated data lineage and metadata management for compliance.',
                'Unified security model that works across multiple workspaces.',
                'Simplifies data discovery and auditing for enterprise teams.'
            ],
            curriculum: [
                {
                    title: "1. Fundamentals & Architecture",
                    topics: [
                        "Understanding Metastores, Catalogs, and Schemas",
                        "Managing Managed vs External Tables in Unity Catalog",
                        "The architecture of centralized metadata management",
                        "Unity Catalog vs traditional Hive Metastore"
                    ]
                },
                {
                    title: "2. Governance & Security",
                    topics: [
                        "Implementing Role-Based Access Control (RBAC)",
                        "Fine-grained access control (Row-level & Column-level)",
                        "Managing identities and service principals",
                        "Audit logging and monitoring data access"
                    ]
                },
                {
                    title: "3. Lineage & Discovery",
                    topics: [
                        "Automated data lineage tracking from source to sink",
                        "Data discovery using centralized search capabilities",
                        "Tagging and documenting data assets for collaboration",
                        "Visualizing dependencies in complex data pipelines"
                    ]
                },
                {
                    title: "4. Advanced Meta-Governance",
                    topics: [
                        "Managing External Locations and Storage Credentials",
                        "Integrating with Microsoft Purview for holistic governance",
                        "Automating permissions with Terraform or API",
                        "Best practices for enterprise workspace organization"
                    ]
                }
            ],
            category: 'Azure Data Engineering',
            color: '#00A87E'
        },
        'delta-lake': {
            name: 'Delta Lake',
            logo: deltaLakeLogo,
            subtitle: 'Reliable, performant, and ACID-compliant storage layer',
            description: 'Delta Lake is an open-source storage layer that brings reliability to data lakes. It provides ACID transactions, scalable metadata handling, and unifies streaming and batch data processing on top of existing cloud storage.',
            keyPoints: [
                'Build reliable and performant ACID-compliant data lakes.',
                'Supports schema evolution to handle changing data structures safely.',
                'Enables time travel to access and revert to earlier versions of data.',
                'Unifies batch and streaming data processing in a single codebase.',
                'Optimized for high-performance analytics with Z-Ordering/Skipping.'
            ],
            curriculum: [
                {
                    title: "1. Core Concepts & Transactions",
                    topics: [
                        "Introduction to ACID Transactions in Data Lakes",
                        "How Delta Lake unifies Batch and Streaming",
                        "Scalable Metadata Handling with Transaction Logs",
                        "Delta Lake vs Parquet vs Iceberg vs Hudi"
                    ]
                },
                {
                    title: "2. The Transaction Log (Delta Log)",
                    topics: [
                        "Understanding JSON log files and Checkpoints",
                        "The concept of Optimistic Concurrency Control",
                        "Atomic commits and conflict resolution",
                        "How Delta Lake handles multi-user writes"
                    ]
                },
                {
                    title: "3. Performance Optimization",
                    topics: [
                        "Data Skipping and Z-Ordering for faster queries",
                        "Compaction (Optimize) and handling Small File Problems",
                        "Partitioning strategies for Delta Tables",
                        "Caching and indexing techniques"
                    ]
                },
                {
                    title: "4. Advanced Data Management",
                    topics: [
                        "Time Travel: Querying historical versions of data",
                        "Schema Enforcement vs Schema Evolution",
                        "Vacuuming and managing storage costs",
                        "Implementing Delete, Update, and Merge (UPSERT) operations"
                    ]
                }
            ],
            category: 'Azure Data Engineering',
            color: '#00ADD8'
        },
        'power-bi': {
            name: 'Power BI',
            logo: powerBiLogo,
            subtitle: 'Become a data superhero with Fullstack Power BI & Analytics',
            description: "Weblearnai's Fullstack Power BI course empowers you to become a data superhero! Learn essential data analysis tools like SQL, Power BI, and Azure Cloud, along with cutting-edge Microsoft Fabric Tools.",
            keyPoints: [
                'Connect to hundreds of data sources and perform advanced ETL with Power Query.',
                'Design stunning, interactive dashboards and reports for actionable insights.',
                'Master Data Analysis Expressions (DAX) for complex calculations.',
                'Implement Row-Level Security (RLS) for secure data distribution.',
                'Leverage DirectLake mode for real-time analytics with Microsoft Fabric.'
            ],
            curriculum: [
                {
                    title: "1. Power BI Basics",
                    topics: [
                        "What is Power BI and why is it used?",
                        "Components: Desktop, Service, Mobile, Report Server",
                        "Licensing: Pro, Premium, and Premium Per User (PPU)",
                        "Dashboards, Reports, and Datasets in Power BI",
                        "Understanding the Data Model in Power BI"
                    ]
                },
                {
                    title: "2. Data Sources & Connections",
                    topics: [
                        "Connecting to Azure SQL, Synapse, Data Lake, and Blob Storage",
                        "Import mode vs DirectQuery vs Live Connection",
                        "Power Query for data transformation (ETL inside Power BI)",
                        "Creating relationships and managing cross-filtering",
                        "What is DAX (Data Analysis Expressions) and why it's important"
                    ]
                },
                {
                    title: "3. Report Development",
                    topics: [
                        "Creating reports and designing visuals",
                        "Filters, slicers, bookmarks, drill-through, and drill-downs",
                        "Measures vs Calculated Columns in Power BI",
                        "Optimizing large datasets with aggregations",
                        "Implementing incremental refresh for high-volume data"
                    ]
                },
                {
                    title: "4. Publishing & Sharing",
                    topics: [
                        "Publishing reports to the Power BI Service (Cloud)",
                        "Configuring Workspaces and securing group access",
                        "Setting up Row-Level Security (RLS) for dynamic filtering",
                        "Scheduling data refreshes and managing gateways",
                        "Sharing reports securely within the organization"
                    ]
                }
            ],
            category: 'Azure Data Engineering',
            color: '#F2C811',
            architectureImage: powerPlatformComponents,
            workflowImage: powerPlatformEcosystem
        },
        'power-apps': {
            name: 'Power Apps',
            logo: powerAppsLogo,
            subtitle: 'Low-code application development for custom business solutions',
            description: 'Microsoft Power Apps is a high-productivity development platform that allows you to build custom business applications without writing traditional code. It provides a rapid development environment to solve complex business challenges through intuitive drag-and-drop tools.',
            keyPoints: [
                'Enables users to quickly build custom business applications with low code.',
                'Understand differnet app types: Canvas Apps, Model-driven Apps, and Portals.',
                'Connect to various data sources including Dataverse, SQL, and SharePoint.',
                'Create responsive apps that run seamlessly on web and mobile devices.',
                'Integrate with Power Automate to build end-to-end automated solutions.'
            ],
            curriculum: [
                {
                    title: "1. Power Apps Basics",
                    topics: [
                        "What is Microsoft Power Apps and why is it used?",
                        "Types: Canvas Apps, Model-driven Apps, Portals",
                        "Difference between Power Apps, Power Automate, and Power BI",
                        "Connectors in Power Apps (Standard vs Premium)",
                        "The role of Dataverse in Power Apps"
                    ]
                },
                {
                    title: "2. App Development",
                    topics: [
                        "How to create your first Canvas App in Power Apps",
                        "Connecting to Azure SQL Database, SharePoint, or Excel",
                        "What is a Model-driven App and when to use it",
                        "Designing forms, galleries, and controls in Canvas Apps",
                        "Using formulas and expressions (similar to Excel functions)"
                    ]
                },
                {
                    title: "3. Integration & Data Connectivity",
                    topics: [
                        "Integrating Power Apps with Azure Data Factory / Databricks / Power BI",
                        "Using custom connectors and calling REST APIs",
                        "Working with Power Automate (Flows) for automation",
                        "Difference between using Dataverse vs SharePoint vs SQL as sources",
                        "Managing data security and connector permissions"
                    ]
                },
                {
                    title: "4. Deployment & Sharing",
                    topics: [
                        "Publishing and sharing Power Apps within your organization",
                        "Environment roles and security in Power Apps",
                        "Implementing role-based access control (RBAC)",
                        "Deploying across environments (Dev → Test → Prod)",
                        "Version management and managing app updates"
                    ]
                }
            ],
            category: 'Azure Data Engineering',
            color: '#742774'
        },
        'github': {
            name: 'GitHub',
            logo: githubLogo,
            subtitle: 'Master modern version control and CI/CD automation',
            description: "GitHub is the world's leading developer platform for version control and collaboration. It allows teams to build, scale, and deliver software securely using Git-based workflows and integrated CI/CD.",
            keyPoints: [
                'Learn modern version control and collaborative coding practices.',
                'Master branching strategies, pull requests, and code reviews.',
                'Integrated CI/CD pipelines with GitHub Actions for automated deployment.',
                'Manage data engineering scripts and infrastructure as code (IaC).',
                'Essential tool for modern DevOps and enterprise-scale collaboration.'
            ],
            curriculum: [
                {
                    title: "1. GitHub Basics",
                    topics: [
                        "What is GitHub and how is it different from Git?",
                        "How to create a GitHub free account?",
                        "GitHub Repositories (Public vs Private)",
                        "Branches in GitHub and why we use them",
                        "What is a Pull Request (PR) in GitHub?",
                        "Introduction to GitHub Actions"
                    ]
                },
                {
                    title: "2. Version Control & Collaboration",
                    topics: [
                        "How to clone a repository from GitHub",
                        "Git pull vs git fetch — Understanding the difference",
                        "Handling merge conflicts in GitHub",
                        "Git Flow: Branching strategies (Feature, Release, Hotfix)",
                        "Fork vs Clone in GitHub",
                        "Creating and managing GitHub Issues"
                    ]
                },
                {
                    title: "3. GitHub for DevOps / CI-CD",
                    topics: [
                        "Setting up GitHub Actions for CI/CD pipelines",
                        "GitHub for Azure Data Factory / Databricks deployment",
                        "Connecting GitHub with Azure DevOps or Jenkins",
                        "Concept of self-hosted runners in GitHub Actions",
                        "GitHub Secrets and their use in workflows"
                    ]
                },
                {
                    title: "4. Security & Governance",
                    topics: [
                        "Configuring branch protection rules",
                        "What is Code Owners in GitHub?",
                        "Enabling multi-factor authentication (MFA)",
                        "What is Dependabot in GitHub?"
                    ]
                }
            ],
            category: 'DevOps & Collaboration',
            color: '#24292E',
            heroBg: githubHeroBg
        },
        'sql': {
            name: 'SQL',
            logo: sqlLogo,
            subtitle: 'Master the foundation of data manipulation and relational modeling',
            description: 'SQL is the most critical language for data engineering. It enables you to efficiently query, transform, and manage relational data at scale. Our course moves from basics to advanced analytical modeling.',
            keyPoints: [
                'Write optimized queries for large-scale data engineering workloads.',
                'Design robust relational schemas and implement complex joins.',
                'Master window functions, CTEs, and advanced analytical SQL.',
                'Automate data logic with stored procedures and triggers.',
                'Essential foundation for Spark SQL, Snowflake, and BigQuery.'
            ],
            curriculum: [
                {
                    title: "1. SQL Fundamentals",
                    topics: [
                        "SELECT, WHERE, ORDER BY, and Filtering logic",
                        "Grouping data with GROUP BY and HAVING",
                        "Standard Aggregations (SUM, AVG, COUNT, MIN, MAX)",
                        "SQL Data Types and Constraints"
                    ]
                },
                {
                    title: "2. Relational Modeling & Joins",
                    topics: [
                        "Inner, Left, Right, and Full Outer Joins",
                        "Self Joins and Cross Joins",
                        "Set Operators: UNION, INTERSECT, and EXCEPT",
                        "Primary Keys, Foreign Keys, and Normalization"
                    ]
                },
                {
                    title: "3. Advanced Analytical SQL",
                    topics: [
                        "Window Functions: RANK, DENSE_RANK, ROW_NUMBER",
                        "Analytical Functions: LEAD, LAG, FIRST_VALUE",
                        "Common Table Expressions (CTEs) vs Subqueries",
                        "Complex CASE statements and Pivot/Unpivot"
                    ]
                },
                {
                    title: "4. Performance & Schema Design",
                    topics: [
                        "Indexing strategies for query performance",
                        "Partitioning and Sharding concepts",
                        "Understanding Execution Plans and Query Optimization",
                        "Building Stored Procedures and User Defined Functions (UDFs)"
                    ]
                }
            ],
            category: 'Data Fundamentals',
            color: '#336791'
        },
        'python': {
            name: 'Python',
            logo: pythonLogo,
            subtitle: 'Robust data processing and pipeline automation with Python',
            description: 'Python is the "lingua franca" of modern data engineering. It powers everything from Spark (PySpark) to Airflow orchestration, enabling you to build scalable, automated data solutions.',
            keyPoints: [
                'Develop robust data processing scripts and automation solutions.',
                'Master Pandas and NumPy for high-performance data manipulation.',
                'Build and orchestrate pipelines using PySpark and Airflow.',
                'Integrate with APIs, databases, and cloud storage (S3/ADLS).',
                'Essential for Machine Learning engineering and DevOps automation.'
            ],
            curriculum: [
                {
                    title: "1. Python Foundations",
                    topics: [
                        "Variables, Data Types, and Collections (Lists, Dicts, Sets)",
                        "Control Flow: Loops, Conditionals, and List Comprehensions",
                        "Defining reusable Functions and Modules",
                        "Error Handling and Debugging best practices"
                    ]
                },
                {
                    title: "2. Data Manipulation & Analysis",
                    topics: [
                        "Using NumPy for numerical computing",
                        "Deep dive into Pandas DataFrames and Series",
                        "Cleaning and transforming data at scale",
                        "Working with file formats: CSV, JSON, Parquet, and Excel"
                    ]
                },
                {
                    title: "3. Database & Cloud Interaction",
                    topics: [
                        "Connecting to SQL databases with SQLAlchemy and Psycopg2",
                        "Integrating with REST APIs using the Requests library",
                        "Interacting with Cloud storage (Boto3 for AWS, Azure SDK)",
                        "Secret management and environment configuration"
                    ]
                },
                {
                    title: "4. Automation & Scripting",
                    topics: [
                        "File system operations with OS and Pathlib",
                        "Logging and monitoring your scripts",
                        "Unit testing data logic with PyTest",
                        "Building CLI tools for data pipeline management"
                    ]
                }
            ],
            category: 'Data Fundamentals',
            color: '#3776AB'
        },
        'gen-ai': {
            name: 'Generative AI',
            logo: genAiLogo,
            subtitle: 'Build intelligent, AI-powered data solutions with LLMs',
            description: 'Generative AI is transforming how we process and interact with data. This course teaches you to leverage Large Language Models (LLMs) and frameworks like LangChain to build intelligent, automated pipelines.',
            keyPoints: [
                'Build intelligent solutions leveraging LLMs like GPT-4 and Llama.',
                'Master frameworks like LangChain for building complex AI agents.',
                'Implement Retrieval Augmented Generation (RAG) for data-aware AI.',
                'Utilize Vector Databases (Pinecone/Chroma) for semantic search.',
                'Automate complex analysis tasks with AI-powered orchestration.'
            ],
            curriculum: [
                {
                    title: "1. LLM Fundamentals",
                    topics: [
                        "How Large Language Models (LLMs) work",
                        "Tokenization, Context Windows, and Temperature",
                        "Prompt Engineering: Zero-shot, Few-shot, and Chain-of-Thought",
                        "Introduction to OpenAI, Hugging Face, and Anthropic"
                    ]
                },
                {
                    title: "2. AI Frameworks (LangChain)",
                    topics: [
                        "Building LLM-powered Chains and Sequences",
                        "Working with Memory for conversational context",
                        "Creating autonomous Agents and Tools",
                        "Evaluating LLM outputs and performance"
                    ]
                },
                {
                    title: "3. Embeddings & Vector Databases",
                    topics: [
                        "What are Embeddings and why they matter for data",
                        "Working with Vector DBs: Pinecone, ChromaDB, and Weaviate",
                        "Performing Semantic Search on unstructured data",
                        "Generating and storing document embeddings"
                    ]
                },
                {
                    title: "4. Retrieval Augmented Generation (RAG)",
                    topics: [
                        "Architecture of a RAG-based AI application",
                        "Document loading, splitting, and vector indexing",
                        "Building context-aware Chatbots for enterprise data",
                        "Deploying AI models as scalable microservices"
                    ]
                }
            ],
            category: 'Advanced Data Engineering',
            color: '#E91E63'
        }
    };

    const tech = technologies[slug];
    const backPath = tech?.category === 'Azure Data Engineering'
        ? '/courses/azure-fabric'
        : '/courses/aws-data-engineer';

    if (!tech) {
        return (
            <div className="tech-detail-container">
                <div className="tech-detail-error">
                    <h2>Technology not found</h2>
                    <Link to="/courses" className="back-link">
                        ← Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="tech-detail-container">
            {/* Hero Section */}
            <div
                className="tech-detail-hero"
                style={{
                    '--tech-color': tech.color,
                    '--hero-bg': tech.heroBg ? `url(${tech.heroBg})` : 'none'
                }}
            >
                <div className="tech-detail-hero-overlay"></div>
                <div className="tech-detail-hero-content">
                    <Link to={backPath} className="tech-back-button">
                        ← Back to Course
                    </Link>
                    <div className="tech-detail-logo">
                        <img src={tech.logo} alt={tech.name} />
                    </div>
                    <h1>{tech.name}</h1>
                    <p className="tech-subtitle">{tech.subtitle}</p>
                    <span className="tech-category">{tech.category}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="tech-detail-content">
                <div className="tech-detail-main">
                    <section className="tech-overview">
                        <h2>Overview</h2>
                        <p className="tech-description">{tech.description}</p>
                    </section>

                    {tech.architectureImage && (
                        <section className="tech-architecture">
                            <h2>Pipeline Architecture</h2>
                            <div className="architecture-grid">
                                <div className="architecture-container">
                                    <img src={tech.architectureImage} alt={`${tech.name} Architecture`} className="tech-arch-image" />
                                    <div className="arch-overlay">
                                        <span>Data Engineering Pipeline</span>
                                    </div>
                                </div>
                                {tech.workflowImage && (
                                    <div className="architecture-container">
                                        <img src={tech.workflowImage} alt={`${tech.name} Workflow`} className="tech-arch-image" />
                                        <div className="arch-overlay">
                                            <span>Data Integration Workflow</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    <section className="tech-features">
                        <h2>Key Features & Capabilities</h2>
                        <div className="tech-points-grid">
                            {tech.keyPoints.map((point, index) => (
                                <div key={index} className="tech-point-card">
                                    <div className="point-number">{index + 1}</div>
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {tech.curriculum && (
                        <section className="tech-curriculum">
                            <h2>Detailed Course Curriculum</h2>
                            <div className="curriculum-grid">
                                {tech.curriculum.map((module, mIdx) => (
                                    <div key={mIdx} className="curriculum-module-card">
                                        <div className="module-header">
                                            <h3>{module.title}</h3>
                                        </div>
                                        <div className="module-body">
                                            <ul>
                                                {module.topics.map((topic, tIdx) => (
                                                    <li key={tIdx}>{topic}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className="tech-cta">
                        <h2>Ready to Master {tech.name}?</h2>
                        <p>Enroll in our {tech.category === 'Azure Data Engineering' ? 'Azure Fabric' : 'AWS'} Data Engineer course to gain hands-on experience with {tech.name} and other essential cloud services.</p>
                        <Link to="/certifications" className="enroll-button">
                            View Certification Programs →
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TechnologyDetail;
