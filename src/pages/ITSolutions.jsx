import { CheckCircle2 } from "lucide-react";

import Button from "../components/Button";
import itImage from "../assets/services/ai-data-solutions.jpg";

const offerings = [
  {
    title: "IT Consulting",
    description:
      "Technology guidance to help organizations assess their requirements, identify suitable solutions and make informed decisions.",
  },
  {
    title: "Digital Transformation",
    description:
      "Practical digital solutions that help modernize operations, streamline workflows and support changing business needs.",
  },
  {
    title: "Technology Integration",
    description:
      "Connecting business systems and tools to support smoother information flow and more consistent operations.",
  },
  {
    title: "Business Process Automation",
    description:
      "Identifying repetitive activities that may be streamlined through suitable automation and digital workflows.",
  },
];

const benefits = [
  "More informed technology decisions",
  "Streamlined business processes",
  "Improved operational efficiency",
  "Technology aligned with business goals",
];

export default function ITSolutions() {
  return (
    <main className="service-detail-page">

      <section className="service-detail-hero">

        <h1>IT Solutions</h1>

        <p>
          Practical technology solutions that help
          businesses work smarter.
        </p>

        <Button to="/contact">Enquire Now</Button>
      </section>

      <section className="service-detail-intro">

        <img
          src={itImage}
          alt="IT and digital solutions"
        />

        <div>
          <div className="section-label">OVERVIEW</div>

          <h2>Technology that supports progress</h2>

          <p>
            We provide technology consulting and digital
            solutions that help organizations modernize
            operations, improve productivity and strengthen
            their digital capabilities. We focus on understanding
            business needs and identifying practical technology
            approaches.
          </p>
        </div>
      </section>

      <section className="service-detail-information">

        <div className="service-detail-container">

          <div className="section-label">WHAT WE OFFER</div>

          <h2>Our IT Solutions Services</h2>

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

          <h2>How our solutions help</h2>

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

        <h2>Looking for an IT solution?</h2>

        <p>
          Share your business requirements with our team.
        </p>

        <Button to="/contact">Contact Us</Button>

      </section>

    </main>
  );
}