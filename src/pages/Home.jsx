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

      <section id="tools" className="skills-section">
        <div className="skills-container">
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">Only some of the many tools, infrastructure and systems I use</p>
          
          <div className="skills-category">
            <h3 className="category-title">Frameworks + Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon python-icon">🐍</div>
                <span className="skill-name">Python</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon react-icon">⚛️</div>
                <span className="skill-name">React</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon fastapi-icon">⚡</div>
                <span className="skill-name">FastAPI</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon wordpress-icon">📝</div>
                <span className="skill-name">WordPress</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon sql-icon">🗄️</div>
                <span className="skill-name">SQL</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon tailwind-icon">🎨</div>
                <span className="skill-name">Tailwind CSS</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon nodejs-icon">💚</div>
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon nextjs-icon">▲</div>
                <span className="skill-name">Next.js</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon linux-icon">🐧</div>
                <span className="skill-name">Linux</span>
              </div>
            </div>
          </div>

          <div className="skills-divider"></div>

          <div className="skills-category">
            <h3 className="category-title">Tools</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon aws-icon">☁️</div>
                <span className="skill-name">AWS</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon github-icon">🔄</div>
                <span className="skill-name">GitHub Actions</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon docker-icon">🐳</div>
                <span className="skill-name">Docker</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon langchain-icon">🦜</div>
                <span className="skill-name">LangChain</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon doppler-icon">🔐</div>
                <span className="skill-name">Doppler Secrets Manager</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon sentry-icon">👁️</div>
                <span className="skill-name">Sentry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="section-header">
            <span className="section-label">Portfolio Showcase</span>
            <h2 className="projects-main-title">Featured Projects</h2>
            <p className="projects-main-subtitle">Transforming complex problems into elegant solutions through data science and AI</p>
          </div>
          
          <div className="projects-grid">
            
            {/* Project 1 */}
            <div className="project-card">
              <span className="project-date">JUNE 2023</span>
              <h3 className="project-title">Prediction of Disease</h3>
              <p className="project-description">
                This analysis differentiates between Flu, Allergy, Cold and Covid symptoms. 
                This was done with Nearest-Neighbours Classifier and Naive Bayes Classifier.
              </p>
              <div className="project-image">
                <img src="/disease-prediction.png" alt="Disease Prediction Heatmap" />
              </div>
              <a href="#" className="project-button">View on GitHub</a>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <span className="project-date">NOVEMBER 2023</span>
              <h3 className="project-title">The Role of Machine Learning in Classifying B-cell-subtypes of Acute Lymphoblastic Leukaemia from Blood Smear Images.</h3>
              <p className="project-description">
                To aid in the early detection of Acute Lymphoblastic Leukaemia, two machine learning 
                algorithms were compared against their ability to classify each subtype, in particular 
                a CNN and a Support Vector Machine.
              </p>
              <div className="project-image">
                <img src="/project1.png" alt="Blood Smear Analysis" />
              </div>
              <a href="#" className="project-button">Request Information</a>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <span className="project-date">AUGUST 2024</span>
              <h3 className="project-title">Client Chatbot</h3>
              <p className="project-description">
                Working at Nimble Group, I was part of a team that designed and implemented a 
                conversational AI chatbot named Ntombi. It is able to converse with clients just 
                as a human would.
              </p>
              <div className="project-image">
                <img src="/ntombi-chat.png" alt="Ntombi Chatbot Interface" />
              </div>
              <a href="#" className="project-button">View Here</a>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <span className="project-date">JANUARY 2025</span>
              <h3 className="project-title">Omni-Channel Application</h3>
              <p className="project-description">
                An internal-facing omnichannel and workflow application designed to streamline agent 
                interactions across multiple communication channels. Built with React, Next.js, as well 
                as AI integrations, it empowers agents to handle high-volume customer queries efficiently through:
              </p>
              <ul className="project-features">
                <li>- WhatsApp</li>
                <li>- Voice calls</li>
                <li>- Facebook Messenger (coming soon)</li>
                <li>- WebChat (coming soon)</li>
              </ul>
              <div className="project-image project-image-logo">
                <img src="/ntombi-logo.png" alt="MY NTOMBI Logo" />
              </div>
            </div>

          </div>
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


      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="section-header">
              <span className="section-label">Get In Touch</span>
              <h2 className="contact-main-title">Let's Work Together</h2>
              <p className="contact-main-subtitle">
                Available for freelance opportunities, collaborations, and full-time positions.
                Let's discuss how we can create something exceptional.
              </p>
            </div>

            <div className="contact-methods">
              <a 
                href="mailto:erin@turnerfamily.co.za" 
                className="contact-method-card"
              >
                <div className="contact-method-content">
                  <div className="contact-icon-wrapper">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3 className="method-title">Email</h3>
                    <p className="method-text">erin@turnerfamily.co.za</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/erin-turner-49a0231b7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method-card"
              >
                <div className="contact-method-content">
                  <div className="contact-icon-wrapper">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3 className="method-title">LinkedIn</h3>
                    <p className="method-text">Professional Profile</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/eritur247" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method-card"
              >
                <div className="contact-method-content">
                  <div className="contact-icon-wrapper">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3 className="method-title">GitHub</h3>
                    <p className="method-text">Code Portfolio</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

