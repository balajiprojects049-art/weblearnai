import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import AzureFabricCourse from './pages/AzureFabricCourse';
import AWSDataEngineerCourse from './pages/AWSDataEngineerCourse';
import TechDetailPage from './pages/TechDetailPage';
import { Certifications, Mentors, Roadmap, About, Placements, FAQs } from './pages';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/azure-fabric" element={<AzureFabricCourse />} />
            <Route path="/courses/aws-data-engineer" element={<AWSDataEngineerCourse />} />
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
      </div>
    </Router>
  );
}

export default App;
