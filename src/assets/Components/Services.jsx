import React from "react";

const Services = () => {
  const services = [
    {
      title: "UI Design",
      description:
        "Design visually appealing and intuitive interfaces that improve user experience.",
      icon: "🎨",
    },
    {
      title: "Responsive Layouts",
      description:
        "Web pages that adapt perfectly to all devices — from phones to large screens.",
      icon: "📱",
    },
    {
      title: "Web Page Creation",
      description:
        "Clean, optimized, and modern web pages built with HTML, CSS, and JavaScript.",
      icon: "💻",
    },
    {
      title: "Version Control",
      description:
        "Efficient project management and collaboration using Git and GitHub.",
      icon: "⚙️",
    },
  ];

  return (
    <section id="services" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-5 text-primary">My Services</h2>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card border-0 shadow-sm h-100 hover-shadow transition">
                <div className="card-body">
                  <div className="display-5 mb-3">{service.icon}</div>
                  <h5 className="fw-bold mb-2">{service.title}</h5>
                  <p className="text-muted small">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
