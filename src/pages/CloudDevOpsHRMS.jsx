import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import Button from "../components/Button";
import cloudImage from "../assets/services/hr-staffing.png";

const offerings = [
  {
    title: "HRMS Solutions",
    description:
      "Workforce management solutions that can support employee information, attendance tracking and day-to-day HR administration.",
  },
  {
    title: "Employee & Workforce Management",
    description:
      "Structured support for employee-related processes and workforce coordination across business operations.",
  },
  {
    title: "Cloud Infrastructure Solutions",
    description:
      "Cloud infrastructure support to help businesses run accessible, adaptable and scalable application environments.",
  },
  {
    title: "DevOps & Deployment Automation",
    description:
      "Development and deployment workflow support intended to improve consistency and streamline application releases.",
  },
];

const benefits = [
  "More organized workforce processes",
  "Simplified HR administration",
  "Scalable cloud environments",
  "Streamlined deployment workflows",
];

export default function CloudDevOpsHRMS() {
  return (
    <main className="service-detail-page">

      <section className="service-detail-hero">


        <h1>Cloud, DevOps & HRMS Solutions</h1>

        <p>
          Modern technology and workforce solutions
          for evolving businesses.
        </p>

        <Button to="/contact">Enquire Now</Button>

      </section>

      <section className="service-detail-intro">

        <img
          src={cloudImage}
          alt="Workforce and business solutions"
        />

        <div>

          <div className="section-label">OVERVIEW</div>

          <h2>Supporting your people and technology</h2>

          <p>
            We provide cloud, DevOps and HR management
            solutions that help businesses simplify
            operations, manage resources and support growth.
            Our services bring together workforce processes
            and technology infrastructure to address
            practical business needs.
          </p>

        </div>

      </section>

      <section className="service-detail-information">

        <div className="service-detail-container">

          <div className="section-label">WHAT WE OFFER</div>

          <h2>Our Cloud, DevOps & HRMS Services</h2>

          <div className="service-detail-sections-grid">

            {offerings.map((item, index) => (
              <article
                className="service-info-card"
                key={item.title}
              >
                <span>0{index + 1}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}

          </div>

        </div>

      </section>

      <section className="service-detail-benefits">

        <div className="service-detail-container">

          <div className="section-label">
            WHY CHOOSE US
          </div>

          <h2>Business-focused outcomes</h2>

          <div className="service-benefits-grid">

            {benefits.map((benefit) => (
              <div
                className="service-benefit-item"
                key={benefit}
              >
                <CheckCircle2 />
                <span>{benefit}</span>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="service-detail-cta">

        <h2>Need support with cloud, DevOps or HRMS?</h2>

        <p>
          Contact us to discuss your organization's requirements.
        </p>

        <Button to="/contact">Contact Us</Button>

      </section>

    </main>
  );
}