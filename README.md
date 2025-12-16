# Faheem's Portfolio - Cybersecurity Professional

![Portfolio Banner](./assets/images/hero-banner.png)

A modern, responsive portfolio website showcasing cybersecurity expertise, penetration testing services, and security insights. Built with vanilla HTML5, CSS3, and JavaScript with a focus on performance, accessibility, and modern design principles.

## 🌟 Features

- **Fully Responsive Design** - Seamless experience across all devices and screen sizes
- **Mobile-First Navigation** - Hamburger menu with smooth slide-in animation
- **Dynamic Text Animation** - Rotating hero text with typing effect
- **Multi-Language Intro** - Animated greeting sequence in 9 languages
- **Dark Theme** - Modern dark mode with orange accent colors
- **Smooth Animations** - Fade-in effects and hover transitions throughout
- **Interactive Blog** - Cybersecurity articles with live attack counter
- **Contact Form** - Integrated contact form for client inquiries
- **Professional Resume** - Downloadable PDF resume
- **Social Media Integration** - Links to professional social profiles
- **Go-to-Top Button** - Smooth scroll navigation

## 🚀 Live Demo

Visit the live portfolio: [Your Live URL Here]

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, Grid, and Flexbox
- **JavaScript (Vanilla)** - No dependencies for maximum performance

### Design & Typography
- **Google Fonts** - Inter (300-800) and JetBrains Mono (400-600)
- **Custom CSS Variables** - Consistent theming throughout
- **Modern UI Patterns** - Glassmorphism and smooth transitions

### Tools & Optimization
- **Git** - Version control
- **Responsive Images** - Optimized for different screen sizes
- **Performance Optimized** - Fast loading with minimal dependencies

## 📁 Project Structure

```
portfolio/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── hero-banner.png
│   │   ├── about-banner.png
│   │   ├── html5.png
│   │   ├── css3.png
│   │   ├── javascript.png
│   │   ├── typescript.png (Python)
│   │   ├── ajax.png (Burpsuite)
│   │   ├── gulp.png (Metasploit)
│   │   ├── webpack.png (Nmap)
│   │   └── git.png
│   └── js/
│       └── script.js
├── Blogs/
│   ├── index.html (Blog listing page)
│   ├── Identity-Theft.html
│   ├── Modern Web Application Penetration Testing.html
│   ├── incident-response-teams.html
│   └── F.png (favicon)
├── index.html (Main portfolio page)
├── F.png (Main favicon)
├── Faheem Resume.pdf
└── README.md
```

## 🎯 Services Offered

### Penetration Testing
Comprehensive security testing to identify vulnerabilities before malicious actors do. Detailed reports with actionable remediation steps.

### Vulnerability Assessment
Systematic evaluation of security weaknesses in systems, networks, and applications with prioritized risk assessment.

### Security Consulting
Expert guidance on security best practices, compliance requirements (ISO 27001, 27701, 9001, 20000-1), and building robust security infrastructure.

## 💼 Skills & Expertise

### Cybersecurity Tools
- **Penetration Testing**: Burp Suite, Metasploit, Nmap
- **Network Security**: Netdiscover, Nessus, Nikto, Wireshark
- **Web Security**: OWASP ZAP, SQLmap, wpscan
- **Password Cracking**: John the Ripper, Hydra, Hashcat
- **Analysis Tools**: Netcat, LinPEAS, Binwalk, Bloodhound
- **Reconnaissance**: Shodan

### Programming & Scripting
- Python
- Java
- JavaScript
- HTML5 & CSS3
- SQL

### Operating Systems
- Kali Linux (Primary)
- Windows

### Security Domains
- Web Application Security
- Network Security
- API Security
- VAPT (Vulnerability Assessment & Penetration Testing)

### Certifications & Compliance
- **CEH v12** - Certified Ethical Hacker
- **ISO 27001 Lead Auditor** - Information Security Management
- **ISO 27701 Lead Auditor** - Privacy Information Management
- **ISO 9001 Lead Auditor** - Quality Management
- **ISO 20000-1 Lead Auditor** - IT Service Management
- **OWASP Top 10** - Web Application Security

## 🚦 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/faheem-portfolio.git
   cd faheem-portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience

3. **For development with live reload:**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js:
   ```bash
   npx serve .
   ```
   
   Using VS Code Live Server:
   - Install Live Server extension
   - Right-click on `index.html` and select "Open with Live Server"

4. **Access the site**
   - Direct file: `file://path/to/index.html`
   - Local server: `http://localhost:8000`

## 🎨 Customization Guide

### Personal Information

1. **Update Content**: Edit `index.html` to change personal information, stats, and descriptions
2. **Resume**: Replace `Faheem Resume.pdf` with your own resume
3. **Images**: Update images in `assets/images/` directory
4. **Favicon**: Replace `F.png` with your custom favicon

### Styling

The website uses CSS custom properties for easy theming:

```css
:root {
  --bg-dark: #000000;
  --bg-secondary: #0a0a0a;
  --bg-card: #111111;
  --orange: #ff6b35;
  --white: #ffffff;
  --gray-light: #a0a0a0;
  --gray-border: #222222;
}
```

### Adding Blog Posts

1. Navigate to the `Blogs/` directory
2. Create a new HTML file following the existing structure
3. Update `Blogs/index.html` to include your new post in the featured grid
4. Use the existing blog templates as a reference

### Animated Words

To change the rotating words in the hero section, edit the `words` array in the JavaScript:

```javascript
const words = ['Assets', 'Infrastructure', 'Networks', 'Systems', 'Data'];
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: > 968px (Full navigation, side-by-side layouts)
- **Tablet**: 640px - 968px (Stacked layouts, hamburger menu)
- **Mobile**: < 640px (Single column, optimized touch targets)

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Load Time**: < 3 seconds on standard connections
- **Mobile Responsive**: ✅
- **Cross-browser Compatible**: ✅
- **Accessibility**: WCAG 2.1 compliant

## 🔒 Security Features

As a cybersecurity portfolio, this site follows security best practices:
- No inline scripts or styles
- Secure external resource loading (Google Fonts via HTTPS)
- Input validation on contact forms
- No localStorage/sessionStorage for sensitive data
- Content Security Policy ready

## 📞 Contact Information

- **Email**: faheemkolakodan@gmail.com, faheemkolakodan@hotmail.com
- **Phone**: +91 8547069212
- **Location**: Calicut, Kerala, India
- **LinkedIn**: [faheem-vapt](https://www.linkedin.com/in/faheem-vapt/)
- **Twitter**: [@faheemkolakodan](https://x.com/faheemkolakodan)
- **Facebook**: [faheeem.k](https://www.facebook.com/faheeem.k)
- **YouTube**: [@faheemkolakodan](https://www.youtube.com/@faheemkolakodan)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Fonts** - Inter and JetBrains Mono typography
- **Inspiration** - Modern portfolio designs and cybersecurity community
- **Open Source Community** - For tools and resources

## 📈 Project Stats

- **Lines of Code**: 2000+
- **Files**: 15+
- **Blog Articles**: 3 (Identity Theft, Web App Pentesting, Incident Response)
- **Languages**: 2 (English, Malayalam)
- **Certifications**: 5 (CEH, ISO standards)

## 🔧 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |
| Mobile  | iOS/Android |

## 📝 Version History

- **v1.0.0** (Current)
  - Initial release
  - Responsive design with mobile navigation
  - Animated hero section
  - Blog with 3 security articles
  - Contact form integration
  - Multi-language intro animation

## 🚀 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog search functionality
- [ ] Project portfolio section with case studies
- [ ] Testimonials from clients
- [ ] Newsletter subscription
- [ ] Multi-language support (English/Malayalam toggle)
- [ ] Analytics integration
- [ ] Backend for contact form
- [ ] Blog comment system

## 💡 Tips for Using This Portfolio

1. **Regular Updates**: Keep your resume and blog current
2. **Analytics**: Add Google Analytics to track visitor engagement
3. **SEO**: Optimize meta tags for better search visibility
4. **Performance**: Compress images and minify CSS/JS for production
5. **Backup**: Regularly commit changes to version control
6. **Testing**: Test across different devices and browsers

## 🎓 Professional Background

**Education:**
- M.Sc. Computer Science (In Progress) - University of Kerala
- Advanced Diploma in Cyber Defense - Red Team Hacker Academy
- B.Sc. Computer Science - Calicut University

**Experience:**
- Associate Cyber Security Test Engineer at John & Smith (Aug 2024 - Present)
- CERT-In empanelment participant
- Web application and API penetration testing specialist

**Key Projects:**
- E-commerce Web Application VAPT
- API Security Assessment
- Network Infrastructure Penetration Testing

---

**Built with ❤️ by Faheem - Certified Ethical Hacker (CEH v12)**

*Securing digital assets, one line of code at a time.*

For cybersecurity consulting and penetration testing services, reach out through the contact form or email directly at faheemkolakodan@gmail.com
