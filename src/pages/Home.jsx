import './Home.css';
import SplashCursor from './SplashCursor';

const Home = () => {
  return (
    <>
      {/* Global fluid animation */}
      <div className="global-fluid-animation">
        <SplashCursor 
          DENSITY_DISSIPATION={4.5}
          VELOCITY_DISSIPATION={2.5}
          SPLAT_FORCE={3000}
          SPLAT_RADIUS={0.12}
          COLOR_UPDATE_SPEED={4}
        />
      </div>

      <section id="home" className="home">
        <div className="hero-content">
          <div className="titles">
            <span className="title-item">DATA SCIENTIST</span>
            <span className="title-separator"></span>
            <span className="title-item">FULL-STACK DEV</span>
            <span className="title-separator"></span>
            <span className="title-item">AI ENGINEER</span>
          </div>
          
          <h1 className="main-name">Erin Turner</h1>
          
          <div className="location">CAPE TOWN, SOUTH AFRICA</div>
          
          <div className="intro">
            <p>Hi! It's nice to meet you.</p>
            <p>
              As an AI Engineer & Full-Stack Developer, I'm passionate<br />
              about building intelligent systems that drive real impact.<br />
              With expertise in machine learning, deep learning (CNNs,<br />
              NLP), and software development, I focus on bridging the <br />
              gap between AI research and practical applications. <br />
<br />
              My interdisciplinary background in Biotechnology and Data <br />
              Science gives me a unique perspective, enabling me to <br />
              approach problems creatively and develop innovative solutions. <br />
              Whether training neural networks, optimizing backend infrastructure, <br />
              or crafting sleek frontends, I thrive at the intersection of AI <br />
              and development. Always excited to collaborate on cutting-edge <br />
              projects and push the boundaries of technology! 
            </p>
          </div>
        </div>
      </section>
      
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src="/profile.jpeg" alt="Erin Turner" />
          </div>
          <div className="about-content">
            <h2 className="about-text">
             Creative AI enthusiast driven by solving complex problems and crafting smart, user-centered solutions for real-world challenges.
            </h2>
            <button className="cv-button">REQUEST MY CV</button>
          </div>
        </div>
      </section>

      <section id="tools" className="section-placeholder">
        <div className="section-content">
          <h2>Tools & Technologies</h2>
          <p>Coming soon...</p>
        </div>
      </section>

      <section id="projects" className="section-placeholder">
        <div className="section-content">
          <h2>Projects</h2>
          <p>Coming soon...</p>
        </div>
      </section>
      
      <section id="experience" className="work-section">
        <div className="work-container">
          <div className="section-header">
            <span className="section-label">Experience & Impact</span>
            <h2 className="work-title">Building Solutions That Matter</h2>
            <p className="work-subtitle">Transforming ideas into powerful technologies across innovative companies</p>
          </div>
          
          <div className="work-grid">
            <div className="work-card card-dark">
              <div className="company-logo axona-logo">
                <img src="/axona.png" alt="Axona Analytics" className="company-logo-img" />
              </div>
              <div className="work-details">
                <h3 className="work-role">SEO Specialist</h3>
                <p className="work-duration">2023 - 2024</p>
                <p className="work-description">
                  Led SEO strategy and implementation for a portfolio optimization platform, 
                  improving organic search visibility and driving user acquisition through 
                  data-driven content strategies and technical SEO optimization.
                </p>
                <div className="work-responsibilities">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Increased organic traffic by optimizing on-page SEO and content strategy</li>
                    <li>Conducted keyword research and competitor analysis</li>
                    <li>Implemented technical SEO improvements for better search rankings</li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <span className="tech-badge">SEO</span>
                  <span className="tech-badge">Google Analytics</span>
                  <span className="tech-badge">Content Strategy</span>
                  <span className="tech-badge">Technical SEO</span>
                </div>
              </div>
            </div>

            <div className="work-card card-light">
              <div className="company-logo robin-logo">
                <img src="/reunyte.jpeg" alt="Reunyte" className="company-logo-img" />
              </div>
              <div className="work-details">
                <h3 className="work-role">Contract Data Scientist</h3>
                <p className="work-duration">Nov 2023 - Jan 2023</p>
                <p className="work-description">
                  Developed machine learning solutions to connect individuals with unclaimed 
                  benefits and assets, processing large datasets to identify rightful owners 
                  and streamline the claims process.
                </p>
                <div className="work-responsibilities">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Built predictive models to match unclaimed assets with rightful owners</li>
                    <li>Designed data pipelines for processing and analyzing large datasets</li>
                    <li>Created automated workflows to improve claim processing efficiency</li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">Machine Learning</span>
                  <span className="tech-badge">Data Pipelines</span>
                  <span className="tech-badge">Pandas</span>
                </div>
              </div>
            </div>

            <div className="work-card card-blue">
              <div className="company-logo nimble-logo">
                <img src="/nimble.webp" alt="Nimble Group" className="company-logo-img" />
              </div>
              <div className="work-details">
                <h3 className="work-role">Lead Project Engineer</h3>
                <p className="work-duration">Apr 2024 - present</p>
                <p className="work-description">
                  Leading development of cutting-edge AI-powered solutions to help individuals and 
                  businesses improve their credit and financial health. Building full-stack applications 
                  and intelligent systems that drive measurable business impact.
                </p>
                <div className="work-responsibilities">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Spearheaded development of an internal omnichannel platform using React + Node.js/Express</li>
                    <li>Built and deployed an agentic chatbot (WhatsApp, email, webchat) using LangGraph + OpenAI APIs, increasing digital collections by 2000%</li>
                    <li>Designed RESTful APIs and implemented WebSockets for real-time interaction</li>
                    <li>Managed CI/CD pipelines with Docker + GitHub Actions for seamless deployment</li>
                    <li>Collaborated with call center agents, management, and executives to align technology with business needs</li>
                  </ul>
                </div>
                <div className="tech-stack">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">MSSQL</span>
                  <span className="tech-badge">Docker</span>
                  <span className="tech-badge">AWS</span>
                  <span className="tech-badge">Git</span>
                  <span className="tech-badge">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="section-placeholder">
        <div className="section-content">
          <h2>Get In Touch</h2>
          <p>Coming soon...</p>
        </div>
      </section>
    </>
  );
};

export default Home;

