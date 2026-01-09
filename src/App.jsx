import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import AzureFabricCourse from './pages/AzureFabricCourse';
import AWSDataEngineerCourse from './pages/AWSDataEngineerCourse';
import WebDevelopmentCourse from './pages/WebDevelopmentCourse';
import TechnologyDetail from './pages/TechnologyDetail';
import TechDetailPage from './pages/TechDetailPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { Certifications, Mentors, Roadmap, About, Placements, FAQs, RecordedCourses } from './pages';
import RealTimeProgram from './pages/RealTimeProgram';
import Maintenance from './pages/Maintenance';
import './index.css';
import './mobile-responsive.css';

import FloatingSocials from './components/FloatingSocials';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Check if maintenance mode is enabled
  // MAINTENANCE MODE: ENABLED
  const isMaintenanceMode = true; // Set to false to disable maintenance mode

  // If maintenance mode is enabled, show only the maintenance page
  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <FloatingSocials />
        <Routes>
          {/* Admin Routes (No Header/Footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Main Routes (With Header/Footer) */}
          <Route path="*" element={
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/azure-fabric" element={<AzureFabricCourse />} />
                  <Route path="/courses/aws-data-engineer" element={<AWSDataEngineerCourse />} />
                  <Route path="/courses/web-development" element={<WebDevelopmentCourse />} />
                  <Route path="/courses/recorded" element={<RecordedCourses />} />
                  <Route path="/courses/real-time" element={<RealTimeProgram />} />
                  <Route path="/technology/:slug" element={<TechnologyDetail />} />
                  <Route path="/tech/:techName" element={<TechDetailPage />} />
                  <Route path="/internships" element={<Internships />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route path="/mentors" element={<Mentors />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/placements" element={<Placements />} />
                  <Route path="/faqs" element={<FAQs />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
