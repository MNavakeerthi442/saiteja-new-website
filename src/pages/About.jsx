import { ArrowRight, Award, Eye, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import profileImage from "../assets/services/hr-staffing.jpg";

const milestones = [
  {
    year: "01",
    title: "The Beginning",
    description:
      "Saiteja Infotech Private Limited began with a vision to bring people, technology and business opportunities closer together.",
  },
  {
    year: "02",
    title: "Growing Capabilities",
    description:
      "Our capabilities expanded across staffing, technology, training and digital solutions.",
  },
  {
    year: "03",
    title: "Building Partnerships",
    description:
      "We continue to build relationships with organizations and professionals to create meaningful opportunities.",
  },
  {
    year: "04",
    title: "Looking Ahead",
    description:
      "Our focus remains on creating practical solutions that help businesses and people move forward.",
  },
];

function About() {
  return (
    <main className="about-page">
      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="section-label">
            ABOUT SAITEJA INFOTECH PRIVATE LIMITED
          </div>

          <h1>
            People, technology,
            <span> and possibilities.</span>
          </h1>

          <p>
            Saiteja Infotech Private Limited brings together technology, talent
            and business understanding to help organizations solve problems and
            create new opportunities.
          </p>
        </div>
      </section>

      {/* QUICK FACTS — overlaps hero, mirrors the homepage's featured row */}
        
      
      <section className="about-facts-section">
        <div className="about-facts-row">

          <div className="about-fact">
            <Target size={22} />
            <h3>Our Mission</h3>
            <p>
              To empower businesses through technology, provide practical IT
              solutions, develop talent, and create meaningful digital
              experiences.
            </p>
          </div>

          <div className="about-fact">
            <Eye size={22} />
            <h3>Our Vision</h3>
            <p>
              To become a trusted technology partner for businesses by
              delivering innovative, reliable, and scalable digital solutions.
            </p>
          </div>

          <div className="about-fact">
            <Award size={22} />
            <h3>Our Values</h3>
     <ul
  style={{
    color: "",
    listStyleType: "disc",
    paddingLeft: "20px",
    fontSize: "inherit",
    lineHeight: "inherit",
  }}
>
  <li>Innovation and continuous learning</li>
  <li>Customer satisfaction</li>
  <li>Quality and reliability</li>
  <li>Transparency and integrity</li>
  <li>Teamwork and collaboration</li>
</ul>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
           
      <section className="about-profile">
        <div className="section-label">ABOUT SAITEJA INFOTECH</div>

        <div className="about-profile-grid">
          <h2>About Saiteja Infotech</h2>

          <div className="about-profile-copy">
            <p>
              Saiteja Infotech Private Limited is committed to helping
              businesses and individuals leverage technology to achieve
              their goals.
            </p>

            <p>
              Based in Tirupati, Andhra Pradesh, we focus on developing
              innovative IT solutions, delivering technology services,
              and supporting digital transformation.
            </p>

            <p>
              Our team works across software development, web technologies,
              business applications, and emerging technology solutions.
            </p>

            <p>
              We believe in building long-term relationships through quality
              work, transparent communication, continuous improvement, and
              customer satisfaction.
            </p>
          </div>
        </div>

        <figure className="section-photo">
          <img
            src={profileImage}
            alt="People and technology at Saiteja Infotech"
            loading="lazy"
          />
        </figure>
      </section>
          

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="section-label">LEADERSHIP</div>

        <div className="leadership-grid">
          <div className="leadership-photo">
            <div className="leadership-placeholder">
              <Users size={44} />
              <span>Leadership Profile</span>
            </div>
          </div>

          <div className="leadership-content">
            <span className="leadership-role">
              CHIEF EXECUTIVE OFFICER
            </span>

            <h2>
              Vision that turns
              <span> possibilities into progress.</span>
            </h2>

            <p>
              Our leadership is focused on building a culture where technology,
              people and business work together to create sustainable growth.
            </p>

            <p>
              The CEO profile and professional message can be expanded here with
              the approved photograph, name and biography once provided by the
              company.
            </p>

            <Link className="text-link" to="/contact">
              Connect with our team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <SectionHeading
          label="OUR JOURNEY"
          title="Growing with"
          highlight=" purpose."
          description="A growing story shaped by people, partnerships and a commitment to creating better solutions."
        />

        <div className="timeline">
          {milestones.map((milestone, index) => (
            <article className="timeline-item" key={milestone.year}>
              <div className="timeline-marker">
                <span>{milestone.year}</span>
              </div>

              <div className="timeline-content">
                <span>0{index + 1}</span>

                <h3>{milestone.title}</h3>

                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <div className="section-label">LET'S BUILD TOGETHER</div>

          <h2>
            Have a vision?
            <span> Let's move it forward.</span>
          </h2>

          <p>
            Explore how Saiteja Infotech Private Limited can support your
            organization's next opportunity.
          </p>
        </div>

        <Button to="/contact">Start a Conversation</Button>
      </section>
    </main>
  );
}

export default About;