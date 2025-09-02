# Omkar's Portfolio Website

A modern, responsive, and interactive portfolio website built with HTML, CSS, and JavaScript. This website showcases professional experience, projects, skills, and provides a contact form for potential employers and clients.

## 🚀 Features

### ✨ Modern Design
- Clean and professional layout with gradient accents
- Responsive design that works on all devices
- Smooth animations and transitions
- Interactive floating cards in the hero section
- Particle effects for visual appeal

### 📱 Responsive & Mobile-Friendly
- Mobile-first responsive design
- Hamburger menu for mobile navigation
- Optimized layouts for tablets and mobile devices
- Touch-friendly interactions

### 🎯 Interactive Elements
- Smooth scrolling navigation
- Typing effect for the hero title
- Scroll-triggered animations
- Hover effects on project cards
- Animated skill counters
- Parallax scrolling effects

### 📋 Sections
1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Professional summary with key statistics
3. **Experience Section** - Timeline-based work history
4. **Projects Section** - Showcase of featured projects
5. **Skills Section** - Technical skills organized by category
6. **Contact Section** - Contact form and information

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── Omkar_ResumeS_1.pdf # Original resume (for reference)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The website will load with all features and animations

### Local Development
1. Place all files in a local directory
2. Open `index.html` in your browser
3. Make changes to the files and refresh to see updates

## 🎨 Customization Guide

### Personal Information
Update the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-description">Your description...</p>
```

#### About Section
```html
<div class="about-text">
    <p>Your personal description...</p>
    <p>Additional information...</p>
</div>
```

#### Experience Section
```html
<div class="timeline-item">
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Your Job Title</h3>
            <span class="company">Company Name</span>
            <span class="duration">Duration</span>
        </div>
        <ul class="timeline-details">
            <li>Your responsibility 1</li>
            <li>Your responsibility 2</li>
        </ul>
    </div>
</div>
```

#### Projects Section
```html
<div class="project-card">
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-demo-link" class="project-link">Live Demo</a>
            <a href="your-github-link" class="project-link">Code</a>
        </div>
    </div>
</div>
```

#### Skills Section
```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

#### Contact Section
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>your.email@example.com</p>
    </div>
</div>
```

### Styling Customization
Modify `styles.css` to change:

#### Colors
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --background-color: #f5f7fa;
}
```

#### Typography
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

#### Animations
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
```

### Functionality Customization
Modify `script.js` to:

#### Change Animation Speeds
```javascript
function typeWriter(element, text, speed = 100) {
    // speed controls typing speed (lower = faster)
}
```

#### Modify Particle Effects
```javascript
function createParticles() {
    for (let i = 0; i < 50; i++) { // Change 50 to desired number
        // Particle creation logic
    }
}
```

## 🌐 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload your portfolio files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your portfolio will be deployed instantly
3. Customize the URL in the site settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your portfolio
3. Get a custom domain and SSL certificate

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 Performance Optimization

- Optimized images and assets
- Minified CSS and JavaScript (for production)
- Lazy loading for better performance
- Efficient animations using CSS transforms

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data markup
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- CSS Grid and Flexbox for layouts
- Modern CSS features for animations

## 📞 Support

If you need help customizing this portfolio or have questions about the implementation, feel free to reach out through the contact form on the website.

---

**Happy Coding! 🚀**

*This portfolio template is designed to help developers showcase their skills and experience in an engaging and professional manner.*
