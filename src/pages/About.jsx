import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="work-section">
        <div className="work-container">
          <h2 className="work-title">Where I've Worked</h2>
          
          <div className="work-grid">
            <div className="work-card card-dark">
              <div className="company-logo axona-logo">
                <img src="/axona.png" alt="Axona Analytics" className="company-logo-img" />
              </div>
              <h3 className="work-role">Role: SEO</h3>
              <p className="work-description">
                About the company: Axona is a portfolio optimization tool.
              </p>
            </div>

            <div className="work-card card-light">
              <div className="company-logo robin-logo">
                <img src="/reunyte.jpeg" alt="Reunyte" className="company-logo-img" />
              </div>
              <h3 className="work-role">Role: Data Scientist</h3>
              <p className="work-description">
                About the company: Reunyte, formally Robin Hood, works to get unclaimed benefits to their rightful owner.
              </p>
            </div>

            <div className="work-card card-blue">
              <div className="company-logo nimble-logo">
                <img src="/nimble.webp" alt="Nimble Group" className="company-logo-img" />
              </div>
              <h3 className="work-role">Role: Data Scientist</h3>
              <p className="work-description">
                About the company: Nimble Group helps businesses and individuals regain their credit and financial health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

