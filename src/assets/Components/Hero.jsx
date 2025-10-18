import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-light py-5 text-dark" id="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-primary">Alex Ng'eno</span>
            </h1>
            <h4 className="mb-4">
              A passionate <span className="text-success">Front-End Developer</span> focused on creating beautiful, responsive, and user-friendly websites.
            </h4>
            <p className="lead mb-4">
              I specialize in designing and developing seamless digital experiences that bring ideas to life. My work is guided by clean design principles, performance optimization, and accessibility — ensuring every page looks great on all devices.
            </p>

            <div className="mb-4">
              <h5 className="fw-bold">What I Do:</h5>
              <ul className="list-unstyled">
                <li>🎨 <strong>UI Design:</strong> Turning concepts into modern, visually appealing layouts.</li>
                <li>📱 <strong>Responsive Layouts:</strong> Websites that look amazing on mobile, tablet, and desktop.</li>
                <li>🧱 <strong>Web Page Development:</strong> Bringing static designs to life using HTML, CSS, and JavaScript.</li>
                <li>⚙️ <strong>Version Control:</strong> Efficient project collaboration using Git and GitHub.</li>
              </ul>
            </div>

            <a href="#contact" className="btn btn-primary btn-lg">
              Let’s Work Together
            </a>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
              alt="Developer illustration"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
