import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

import softwareImage from "../assets/services/it-solutions.jpg";
import itImage from "../assets/services/ai-data-solutions.jpg";
import cloudImage from "../assets/services/hr-staffing.png";

const services = [
  {
    image: softwareImage,
    number: "01",
    title: "Software Development",
    description:
      "We develop customized software solutions and applications designed to address business challenges, improve operational efficiency, and support business growth.",
    items: [
      "Custom software development",
      "Website development",
      "Mobile application development",
      "Web application development",
    ],
    link: "/services/software-development",
  },

  {
    image: itImage,
    number: "02",
    title: "IT Solutions",
    description:
      "Technology solutions designed to help businesses improve processes, productivity and digital capabilities.",
    items: [
      "IT consulting",
      "Digital transformation",
      "Technology integration",
      "Business process automation",
    ],
    link: "/services/it-solutions",
  },

  {
    image: cloudImage,
    number: "03",
    title: "Cloud, DevOps & HRMS Solutions",
    description:
      "Modern cloud, DevOps and workforce management solutions that help businesses simplify operations and support growth.",
    items: [
      "HRMS solutions",
      "Employee and workforce management",
      "Cloud infrastructure solutions",
      "DevOps and deployment automation",
    ],
    link: "/services/cloud-devops-hrms",
  },
];

function Services() {
  return (
    <main className="services-page">

      {/* HERO */}

      <section className="services-hero">
        <div className="section-label">OUR SERVICES</div>

        <h1>
          Capabilities built
          <span> around your goals.</span>
        </h1>

        <p>
          From software development to IT solutions and
          workforce management, we bring complementary
          capabilities together to help organizations move
          forward.
        </p>
      </section>

      {/* SERVICES */}

      <section className="services-list-section">

        <div className="services-intro">
          <SectionHeading
            label="WHAT WE DO"
            title="One ecosystem."
            highlight=" Multiple capabilities."
          />
        </div>

        <div className="services-detail-grid">

          {services.map(
            ({ image, number, title, description, items, link }) => (
              <article
                className="service-detail-card"
                key={title}
              >

                <div className="service-detail-image">

                  <img src={image} alt={title} />

                  <span className="service-detail-number">
                    {number}
                  </span>

                </div>

                <div className="service-detail-content">

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <ul className="service-feature-list">
                    {items.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={link}>
                    Learn more
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>
            )
          )}
        </div>
      </section>

      {/* CTA */}

      <section className="services-cta">

        <div>
          <div className="section-label">NEED A SOLUTION?</div>

          <h2>
            Let's understand
            <span> your challenge.</span>
          </h2>

          <p>
            Tell us what you're trying to achieve and let's
            explore the right approach together.
          </p>
        </div>

        <Button to="/contact">
          Start a Conversation
        </Button>

      </section>

    </main>
  );
}

export default Services;