import './Navigation.css';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>HOME</a></li>
        <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ABOUT</a></li>
        <li><a href="#tools" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('tools'); }}>TOOLS</a></li>
        <li><a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>PROJECTS</a></li>
        <li><a href="#experience" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>EXPERIENCE</a></li>
        <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;

