import React, { Component } from "react";

class GreetingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedService: null
    };
  }

  services = [
    {
      name: "Web Development",
      description: "Building modern and responsive websites."
    },
    {
      name: "Cyber Security",
      description: "Protecting systems and networks from attacks."
    },
    {
      name: "Cloud Computing",
      description: "Scalable cloud-based infrastructure solutions."
    },
    {
      name: "IT Support",
      description: "24/7 technical support and maintenance."
    }
  ];

  selectService(service) {
    this.setState({ selectedService: service });
  }

  render() {
    return (
      <>
        {/* Header */}
        <h2 style={{ textAlign: "center", color: "darkblue" }}>
          Information Technology Center
        </h2>

        <p style={{ textAlign: "center" }}>
          Welcome to the ITC. We provide a range of technology services.
        </p>

        {/* Services Grid */}
        <div className="cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
            padding: "30px",
            background: "#eef5ff"
          }}
        >
          {this.services.map((service, index) => (
            <div
              key={index}
              onClick={() => this.selectService(service)}
              style={{
                border: "1px solid #333",
                padding: "20px",
                textAlign: "center",
                background: "white",
                cursor: "pointer",
                transition: "transform 0.3s"
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.target.style.transform = "translateY(0)")
              }
            >
              <h4>{service.name}</h4>
            </div>
          ))}
        </div>

        {/* Selected Service Details */}
        {this.state.selectedService && (
          <div
            style={{
              margin: "30px",
              padding: "20px",
              border: "2px solid darkblue",
              background: "#f9f9f9"
            }}
          >
            <h3>{this.state.selectedService.name}</h3>
            <p>{this.state.selectedService.description}</p>
          </div>
        )}
      </>
    );
  }
}

export default GreetingClass;
