# 🎓 Weblearnai Trainings - Professional IT Training Website

A modern, high-conversion training institute website built with **React** and **Vite**, inspired by Simplilearn's design patterns.

## ✨ Features

### 🎯 **Complete Website with 10 Pages**
1. **Home** - Hero section, features, programs, testimonials, CTA
2. **Courses** - Detailed course information with curriculum
3. **Internships** - Cloud & cybersecurity internship programs
4. **Certifications** - Industry certification information
5. **Mentors** - Expert instructor profiles
6. **Roadmap** - Career progression guidance
7. **About Us** - Company mission and values
8. **Placements** - Career support and placement statistics
9. **FAQs** - Interactive FAQ accordion
10. **Contact** - Contact form and Google Maps integration

### 🎨 **Modern Design Features**
- ✅ Clean, professional layouts
- ✅ Gradient backgrounds and glassmorphism effects
- ✅ Smooth animations and transitions
- ✅ Card-based UI for courses and programs
- ✅ Sticky header with navigation
- ✅ Responsive mobile-first design
- ✅ Custom scrollbar styling
- ✅ Interactive hover effects

### 🚀 **Tech Stack**
- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Styling**: Vanilla CSS with CSS Variables
- **Font**: Inter (Google Fonts)
- **Icons**: Emoji-based icons

### 📱 **Fully Responsive**
- Mobile-friendly navigation with hamburger menu
- Responsive grid layouts
- Optimized for all screen sizes

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Quick Start

1. **Navigate to project directory**
   ```bash
   cd "c:/Users/hp/OneDrive/Desktop/new clients/web"
   ```

2. **Install dependencies** (Already done)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
web/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation header
│   │   ├── Header.css
│   │   ├── Footer.jsx          # Footer with links
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Home.css
│   │   ├── Courses.jsx         # Course catalog
│   │   ├── Courses.css
│   │   ├── Internships.jsx     # Internship programs
│   │   ├── Internships.css
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Contact.css
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Mentors.jsx
│   │   ├── Roadmap.jsx
│   │   ├── Placements.jsx
│   │   ├── FAQs.jsx
│   │   └── index.js
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & design system
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb`
- **Indigo**: `#4f46e5`
- **Purple**: `#7c3aed`
- **Success**: `#10b981`
- **Gradients**: Multiple gradient combinations

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive sizing**: Using clamp() for fluid typography
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- Cards with hover effects
- Gradient buttons
- Badge tags
- Skill tags
- Feature icons
- Testimonial cards
- Form inputs with focus states

## 📋 Available Courses

1. **Data Engineering – Azure & Databricks** (12 Weeks - ₹45,000)
2. **Azure Fabric Data Engineer** (10 Weeks - ₹50,000)
3. **Full Stack Power BI** (8 Weeks - ₹35,000)
4. **Cybersecurity & Python with Gen AI** (14 Weeks - ₹55,000)
5. **Cloud Engineering (Azure/AWS/GCP)** (12 Weeks - ₹48,000)
6. **Python with Generative AI** (10 Weeks - ₹40,000)

## 🎯 Key Sections

### Hero Section
- Eye-catching headline
- Dual CTA buttons
- Animated statistics (10,000+ students, 95% placement)
- Floating tech skill cards

### Why Choose Us
- 8 feature cards highlighting benefits
- Industry-expert instructors
- Real-world projects
- Certification support

### Popular Programs
- Course cards with duration, level, and skills
- Quick enrollment CTAs
- Gradient backgrounds

### Testimonials
- Student success stories
- Rating displays
- Glassmorphism cards

### Contact Form
- Fully functional form
- Course selection dropdown
- Contact information sidebar
- Google Maps integration

## 🔧 Customization

### Update Content
Edit the JSX files in `src/pages/` to modify page content.

### Change Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-blue: #your-color;
  --gradient-primary: linear-gradient(...);
}
```

### Add New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

## 📊 SEO Features
- Semantic HTML5 elements
- Meta description added
- Proper heading hierarchy
- Descriptive page titles
- Fast load times with Vite

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎓 Learning Objectives Met
✅ Modern, professional design  
✅ 10 complete pages with routing  
✅ Responsive mobile-first layout  
✅ Industry-standard tech stack  
✅ SEO-friendly structure  
✅ Fast performance  
✅ Reusable components  
✅ Clean code architecture  

## 📞 Contact Information
- **Email**: info@weblearnai.com
- **Phone**: +91 98765 43210
- **Location**: Bangalore, Karnataka, India

## 📝 License
This project is created for Weblearnai Trainings.

---

**Built with ❤️ using React + Vite**

*Inspired by industry-leading educational platforms like Simplilearn*
