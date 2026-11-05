import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import Button from "../components/Button";
import softwareImage from "../assets/services/it-solutions.jpg";

const offerings = [
  {
    title: "Custom Software Development",
    description:
      "Customized software applications designed around your business requirements, workflows and operational challenges.",
  },
  {
    title: "Website Development",
    description:
      "Responsive, user-friendly websites that strengthen your online presence and provide consistent experiences across devices.",
  },
  {
    title: "Mobile Application Development",
    description:
      "Intuitive mobile applications that help businesses connect with customers and simplify everyday activities.",
  },
  {
    title: "Web Application Development",
    description:
      "Secure and scalable web applications tailored to business processes and operational requirements.",
  },
];

const benefits = [
  "Solutions aligned with business requirements",
  "Responsive and user-friendly experiences",
  "Scalable application architecture",
  "Support for evolving business needs",
];

export default function SoftwareDevelopment() {
  return (
    <main className="service-detail-page">

      <section className="service-detail-hero">

        <div className="section-label">
          OUR SERVICES / SOFTWARE DEVELOPMENT
        </div>

        <h1>Software Development</h1>

        <p>
          Building reliable digital solutions around
          your business goals.
        </p>

        <Button to="/contact">Enquire Now</Button>

      </section>

      <section className="service-detail-intro">

        <img
          src={softwareImage}
          alt="Software development"
        />

        <div>

          <div className="section-label">OVERVIEW</div>

          <h2>Software built for your needs</h2>

          <p>
            We develop customized software applications
            designed to address business challenges,
            improve operational efficiency and support
            business growth. Our focus is on practical,
            user-friendly solutions that can adapt as
            your organization evolves.
          </p>

        </div>

      </section>

      <section className="service-detail-information">

        <div className="service-detail-container">

          <div className="section-label">WHAT WE OFFER</div>

          <h2>Our Software Development Services</h2>

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

          <h2>What our approach focuses on</h2>

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

        <h2>Have a software project in mind?</h2>

        <p>
          Tell us about your requirements and let's
          discuss a suitable solution.
        </p>

        <Button to="/contact">Contact Us</Button>

      </section>

    </main>
  );
}