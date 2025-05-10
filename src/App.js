import React from "react";
import "./App.css";

const Task = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <div>
        <nav className="nav">
          <div>
            <img src="/Images/logo.svg" alt="logo" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
          <button className="nav-btn">Get Template</button>
        </nav>

        <div className="hero">
          <img src="/Images/Hero_bg.svg" alt="hero" className="hero-image" />
          <h1 className="hero-text">
            Elevating Your Business with <br /> Innovative Solution.
          </h1>
          <p className="line">
            From creative design to AI tailored technical solutions, our
            services define industry excellence.
          </p>
        </div>

        <div className="hero-btn">
          <button className="ST">Get Started</button>
          <button className="FE">See Features</button>
        </div>

        <div className="Trust">
          <h3>Trusted by Leading Companies Worldwide</h3>
        </div>

        <div className="Pcs">
          <h1>
            Make your workflow <br />
            10x Faster
          </h1>
          <p>
            By breaking down complex problems into manageable tasks, leveraging
            diverse perspectives, <br />
            and fostering an environment.
          </p>
        </div>
      </div>

      <div className="grid">
        <div className="card-1">
          <img src="Images/card-1.jpg" alt="card-1" />
          <h3>Analyze Current Workflow</h3>
          <p>
            Consult our AI team and let us analyze your <br />
            workflow to identify pain points, <br />
            unnecessary costs, and time-consuming processes.
          </p>
        </div>
        <div className="card-2">
          <img src="Images/card-2.jpg" alt="card-2" />
          <h3>Defining optimized solution</h3>
          <p>
            Based on the consultation, we will propose an <br />
            AI tailored solution that can make your <br />
            work more efficient, faster and help you reducing cost.
          </p>
        </div>
        <div className="card-3">
          <img src="Images/card-3.jpg" alt="card-3" />
          <h3>Solution Implementation</h3>
          <p>
            Our team will implement the solution for you <br />
            and make it fully ready for you within a week
          </p>
        </div>
      </div>

      {/* GRAPH */}
      <div className="graph">
        <img src="Images/graph.svg" alt="graph" />
        <div className="ces">
          <div className="label">
            <i className="fas fa-arrow-right"></i> Growth
          </div>
          <h2>Cost effective solution</h2>
          <h6>
            Get high-quality design work at a fraction of the cost, without
            compromising on creativity or efficiency. Benefit from
            professional-grade designs tailored to your specific needs, all
            while staying within your budget.
          </h6>
          <hr className="divider" />
          <div className="ES-MO">
            <div className="solution-box">
              <h3>
                <i className="fas fa-lightbulb"></i> Effective Solution
              </h3>
              <p>
                You have earned <span className="highlight">$154.00</span> this
                week, showcasing consistent growth in your online activities.
              </p>
            </div>
            <div className="solution-box">
              <h3>
                <i className="fas fa-calendar-alt"></i> Monthly Overview
              </h3>
              <p>
                Last month's earnings were{" "}
                <span className="highlight">$408.36</span>, while this month's
                earnings have already reached{" "}
                <span className="highlight">$2,328</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="graph">
        <div className="ces">
          <div className="label">
            <i className="fas fa-arrow-right"></i> Growth
          </div>
          <h2>Reduce time and make workflow fast</h2>
          <h6>
            Send proposals with confidence by leveraging our expert design
            services. Our team ensures that every proposal you create is
            visually compelling, clear, and professional, helping you make a
            lasting impression.
          </h6>
          <hr className="divider" />
          <div className="ES-MO">
            <div className="solution-box">
              <h3>
                <i className="fas fa-lightbulb"></i> Trend reports
              </h3>
              <p>
                Stay ahead of the curve with our comprehensive trend reports.
              </p>
            </div>
            <div className="solution-box">
              <h3>
                <i className="fas fa-calendar-alt"></i> Multilingual support
              </h3>
              <p>Expand your reach with our multilingual support services.</p>
            </div>
          </div>
        </div>
        <img src="Images/proposal.svg" alt="graph" />
      </div>

      {/* STARTED */}
      <div className="started">
        <h1 className="Str">
        Elevating Your Business By Automating Workflow</h1>
        <h4>
          From creative design to technical solutions, our services define
          industry excellence.
        </h4>
        <button className="started">Get Started</button>
      </div>

      {/* John Albert */}

      <div className="John">
        <img src="/Images/John Albert.jpg" alt="John Albert" />
        <div className="John-text">
          <h1>
            Let the software makes the customer support experience amazing
          </h1>
          <p>
            Forge meaningful connections with your audience through tailored
            communication strategies. Understand their needs, preferences, and
            behaviors to create engaging content that resonates and builds
            lasting relationships.
          </p>
        </div>
      </div>

      {/* Remote Team */}
      <div className="graph">
        <div className="ces">
          <h2>We work together, as a seamless remote team</h2>
          <h6>
            Collaborate effortlessly with our globally distributed team. Our
            seamless remote workflow ensures efficient communication and project
            delivery across time zones.
          </h6>
          <hr className="divider" />
          <div className="ES-MO">
            <div className="solution-box">
              <h3><i class="fa-solid fa-chart-simple"></i>Market insights</h3>
              <p>
                Stay ahead of the competition with our in-depth market insights.
              </p>
            </div>
            <div className="solution-box">
              <h3><i class="fa-solid fa-globe"></i>Global communication</h3>
              <p>
                Enhance your outreach with our global communication support.
              </p>
            </div>
          </div>
        </div>
        <img src="/Images/Remote Team.jpg" alt="graph" />
      </div>

      {/* Footer */}
      <section class="footer1">
        <div class="footer_text">
          <h1>
            Let’s Get to Work<span>.</span>
          </h1>
          <p>
            Subscribe to a plan to request as many designs as you’d like for one
            monthly fee.
          </p>
          <button>Get started</button>
        </div>
        <div class="footer_image">
          <div class="frame">
            <img src="/Images/Footer1.avif" alt="Footer Img" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer class="footer">
        <div class="footer-left">
          <img src="/Images/logo.svg" alt="Logo" class="footer-logo" />
          <div class="footer-info">
            <span class="footer-email">hello@convertly.com</span>
          </div>
        </div>
        <div class="footer-right">
          Convertly established 2024 in Baku, Azerbaijan
        </div>
      </footer>
    </>
  );
};

export default Task;
