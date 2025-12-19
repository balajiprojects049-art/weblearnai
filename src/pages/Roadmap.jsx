const Roadmap = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="gradient-bg-secondary" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Career Roadmap to Data & Cloud</h1>
                    <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                        Your step-by-step guide to becoming a data or cloud professional
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <h3>📘 Beginner Level (0-6 months)</h3>
                        <ul style={{ marginTop: '1rem' }}>
                            <li>Learn SQL and database fundamentals</li>
                            <li>Introduction to Python programming</li>
                            <li>Basic cloud concepts (Azure/AWS fundamentals)</li>
                            <li>Power BI basics for visualization</li>
                        </ul>
                        <p style={{ marginTop: '1rem', fontWeight: 600 }}>Target Roles: Junior Data Analyst, BI Analyst</p>
                    </div>

                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <h3>📗 Intermediate Level (6-12 months)</h3>
                        <ul style={{ marginTop: '1rem' }}>
                            <li>Azure Data Factory or AWS Glue</li>
                            <li>PySpark and Databricks</li>
                            <li>Data warehouse design</li>
                            <li>Advanced Power BI with DAX</li>
                            <li>Get certified (AZ-900, PL-300)</li>
                        </ul>
                        <p style={{ marginTop: '1rem', fontWeight: 600 }}>Target Roles: Data Engineer, BI Developer</p>
                    </div>

                    <div className="card">
                        <h3>📕 Advanced Level (12+ months)</h3>
                        <ul style={{ marginTop: '1rem' }}>
                            <li>Azure Synapse/Microsoft Fabric</li>
                            <li>Data lakehouse architecture</li>
                            <li>Real-time streaming (Event Hubs, Kafka)</li>
                            <li>CI/CD for data pipelines</li>
                            <li>Advanced certifications (DP-203, AZ-305)</li>
                        </ul>
                        <p style={{ marginTop: '1rem', fontWeight: 600 }}>Target Roles: Senior Data Engineer, Data Architect</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Roadmap;
