import { ArrowRight, Sparkles, Code2, Server, Database, GitBranch, CheckCircle2 } from "lucide-react";


import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import companyLogo from "../assets/logo.png";
import { CONTACT_DETAILS } from "../data/contact";

import SectionHeading from "../components/SectionHeading";
import services from "../data/services";
import introImage from "../assets/services/it-solutions.jpg";
import careersImage from "../assets/services/recruitment.jpg";
function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const solutions = [
    {
      title: "Business Process Automation Suite",
      tag: "Enterprise Workflow",
      description:
        "An integrated workflow automation platform that digitizes approvals, task tracking, and daily operational reporting to boost team productivity.",
      metrics: [
        { label: "Efficiency Boost", value: "+65%" },
        { label: "Manual Errors", value: "-90%" },
        { label: "Active Workflows", value: "24/7" },
      ],
      features: [
        "Automated multi-level approvals",
        "Real-time task & status tracking",
        "Custom daily & monthly reports",
        "Seamless department integration",
      ],
    },
    {
      title: "Custom ERP & CRM Portal",
      tag: "Management System",
      description:
        "A centralized cloud platform to manage customer leads, billing, inventory, and business analytics with role-based security.",
      metrics: [
        { label: "Lead Visibility", value: "100%" },
        { label: "Data Security", value: "Role-Based" },
        { label: "Live Sync", value: "Real-Time" },
      ],
      features: [
        "End-to-end customer lead tracking",
        "Automated invoicing & inventory sync",
        "Granular role-based access control",
        "Executive analytics dashboards",
      ],
    },
    {
      title: "Omnichannel Web & Mobile Platforms",
      tag: "Digital Commerce & Apps",
      description:
        "High-speed web portals, RESTful APIs, and responsive frontends built with React.js and Bootstrap for seamless customer engagement.",
      metrics: [
        { label: "Platforms", value: "Web & App" },
        { label: "API Architecture", value: "RESTful" },
        { label: "Performance", value: "Fast Load" },
      ],
      features: [
        "Responsive web & customer portals",
        "Android & iOS companion apps",
        "Secure payment & order tracking",
        "REST API & cloud backend sync",
      ],
    },
    {
      title: "Cloud & DevOps Solutions",
      tag: "Cloud Infrastructure & CI/CD",
      description:
        "We design, automate, and manage reliable cloud infrastructure that helps businesses ship faster, scale smoothly, and maintain high availability across enterprise platforms.",
      metrics: [
        { label: "Cloud Hosting", value: "AWS" },
        { label: "Automation", value: "CI/CD" },
        { label: "Availability", value: "99.9%" },
      ],
      features: [
        "AWS Hosting (EC2, S3, CloudFront)",
        "Docker containers & Nginx routing",
        "Git, GitHub & GitHub Actions CI/CD",
        "Spring Boot, Node.js & TiDB Cloud",
      ],
    },
  ];

  const active = solutions[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
  };
  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
      <SectionHeading
        label="OUR SOLUTIONS"
        title="Scalable products &"
        highlight=" digital platforms."
        description="Custom-built software platforms and digital systems engineered to streamline your daily business operations."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "36px",
          marginTop: "48px",
          alignItems: "stretch",
        }}
      >
        {/* LEFT TABS WITH ARROWS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>
          {solutions.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 22px",
                  borderRadius: "16px",
                  background: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                  border: isSelected ? "1.5px solid #fdba74" : "1px solid #e2e8f0",
                  borderLeft: isSelected ? "6px solid #ea580c" : "6px solid transparent",
                  boxShadow: isSelected
                    ? "0 14px 28px -8px rgba(234, 88, 12, 0.16)"
                    : "0 2px 6px rgba(15, 23, 42, 0.03)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: isSelected ? "#ea580c" : "#64748b",
                      marginBottom: "5px",
                    }}
                  >
                    {item.tag}
                  </div>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "800",
                      color: isSelected ? "#0f172a" : "#334155",
                      lineHeight: "1.3",
                    }}
                  >
                    {item.title}
                  </div>
                </div>

                {/* RIGHT ARROW ICON */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: isSelected ? "#ea580c" : "#f1f5f9",
                    color: isSelected ? "#ffffff" : "#64748b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: isSelected ? "translateX(4px)" : "translateX(0)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT PREVIEW CARD WITH IN-CARD NAVIGATION ARROWS */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Top Row: Category Badge + Prev/Next Arrows */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "16px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#fff7ed",
                  color: "#ea580c",
                  border: "1px solid #ffedd5",
                  fontSize: "12px",
                  fontWeight: "700",
                  padding: "6px 14px",
                  borderRadius: "999px",
                }}
              >
                {active.tag} Overview
              </div>

              {/* PREV & NEXT ARROWS INSIDE RIGHT CARD */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", marginRight: "4px" }}>
                  {activeIndex + 1} / {solutions.length}
                </span>

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous solution"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid #e2e8f0",
                    background: "#ffffff",
                    color: "#0f172a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <ArrowRight size={17} style={{ transform: "rotate(180deg)" }} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next solution"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "none",
                    background: "#ea580c",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(234, 88, 12, 0.25)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            {/* Clear Title */}
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#0f172a",
                marginBottom: "22px",
                lineHeight: "1.3",
              }}
            >
              {active.title}
            </h3>

            {/* Metrics Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {active.metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  style={{
                    background: i === 0 ? "#ea580c" : "#f8fafc",
                    color: i === 0 ? "#ffffff" : "#0f172a",
                    border: i === 0 ? "none" : "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "800" }}>{metric.value}</div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      opacity: i === 0 ? 0.92 : 0.7,
                      marginTop: "3px",
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Description with divider */}
            <p
              style={{
                color: "#475569",
                fontSize: "15px",
                lineHeight: "1.7",
                paddingBottom: "22px",
                marginBottom: "22px",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {active.description}
            </p>
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "14px",
            }}
          >
            {active.features.map((feat) => (
              <div
                key={feat}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
              >
                <CheckCircle2 size={18} color="#ea580c" style={{ flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



function Home() {
  const [reviews, setReviews] = useState(() => {
    if (typeof window !== "undefined") {
      const savedReviews = localStorage.getItem("saitejaProductionReviews");
      return savedReviews ? JSON.parse(savedReviews) : [];
    }
    return [];
  });

  const [clientName, setClientName] = useState("");
  const [clientDesignation, setClientDesignation] = useState("");
  const [clientReview, setClientReview] = useState("");

  useEffect(() => {
    localStorage.setItem("saitejaProductionReviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!clientName || !clientReview) {
      alert("Please enter both Name and Review!");
      return;
    }

    const newReview = {
      name: clientName,
      designation: clientDesignation || "Client Partner",
      review: clientReview,
    };

    setReviews([newReview, ...reviews]);
    setClientName("");
    setClientDesignation("");
    setClientReview("");
  };

  const handleClearAllReviews = () => {
    if (
      window.confirm(
        "Are you sure you want to clear all reviews and start fresh?"
      )
    ) {
      setReviews([]);
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            Saiteja Infotech Private Limited • Tirupati
          </div>

          <h1>
            Empowering Businesses
            <span> 
	          Through Technology and Innovation.
</span>
          </h1>

          <p>
  <strong>Saiteja Infotech Private Limited</strong> is a premier IT services and technology solutions company based in{" "}
  <strong>Tirupati, Andhra Pradesh, India</strong>. We partner with businesses to transform innovative ideas into practical, high-impact digital solutions through{" "}
  <strong>Custom Software Development</strong>,{" "}
  <strong>Web &amp; Mobile Applications</strong>,{" "}
  <strong>IT Consulting</strong>, and{" "}
  <strong>Business Process Automation</strong>.
</p>

<p style={{ marginTop: "14px" }}>
  Our core focus is delivering{" "}
  <strong>reliable, scalable, secure, and user-friendly</strong> solutions tailored to your exact business requirements—helping organizations boost efficiency, streamline daily operations, and achieve sustainable long-term growth.
</p>


          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Explore Services <ArrowRight size={18} />
            </a>

            <Link className="secondary-button" to="/contact">
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-logo-container">
            <img
              src={companyLogo}
              alt=""
              className="hero-company-logo"
            />
          </div>
        </div>
      </section>
{/* 2. ABOUT US - Short Company Introduction */}
<section id="about" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center" }}>
    
    {/* Left Side: Short Intro + Link to Full About Page */}
    <div>
      <span style={{ color: "#ea580c", fontWeight: "700", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>
        About Us
      </span>
      <h2 style={{ color: "#0f172a", fontSize: "36px", fontWeight: "800", marginTop: "10px", marginBottom: "20px", lineHeight: "1.2" }}>
        
      <br/>
        <span style={{ color: "#1e1511" }}>Innovation Driven by Purpose.</span>
      </h2>
      <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.75", marginBottom: "24px" }}>
        <strong style={{ color: "#0f172a" }}>Saiteja Infotech Private Limited</strong> is an IT services and technology solutions company based in{" "}
        <strong style={{ color: "#0f172a" }}>Tirupati, Andhra Pradesh, India</strong>. We combine technical expertise, innovation, and a customer-focused approach to deliver reliable, scalable, and secure digital solutions aligned with your business goals.
      </p>

      {/* Link to your existing About Us page */}
      <a href="/about" className="primary-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
        Learn More About Us →
      </a>
    </div>

    {/* Right Side: Quick Highlights Cards */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)" }}>
        <h3 style={{ color: "#ea580c", fontSize: "22px", fontWeight: "800" }}>Tirupati, AP</h3>
        <p style={{ color: "#475569", fontSize: "14px", marginTop: "6px" }}>Headquartered in India</p>
      </div>
      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)" }}>
        <h3 style={{ color: "#ea580c", fontSize: "22px", fontWeight: "800" }}>Tailored IT</h3>
        <p style={{ color: "#475569", fontSize: "14px", marginTop: "6px" }}>Custom Software &amp; Automation</p>
      </div>
    </div>

  </div>
</section>


      
            {/* 3. OUR SERVICES - Individual Service Descriptions */}
      <section className="services-section" id="services">
        <SectionHeading
          label="OUR SERVICES"
          title="Explore our"
          highlight=" core services."
          description="We transform your business ideas into practical, reliable, and scalable digital solutions."
        />

        <div className="services-grid">
          {services.slice(0, 3).map(
            ({ image, number, title, description }) => (
              <article
                className="service-card"
                key={`featured-${title}`}
              >
                <div className="service-image">
                  <img src={image} alt={title} />
                  <span className="service-image-number">
                    {number}
                  </span>
                </div>

                <div className="service-card-content">
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <Link to="/services">
                    Explore service <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            )
          )}
        </div>
      </section>
     {/* TECHNOLOGIES WE USE - INFINITE SMOOTH MARQUEE */}
      <section
        id="technologies"
        style={{
          padding: "84px 0",
          background: "#0f172a",
          color: "#ffffff",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Embedded Smooth Infinite Scroll Animation */}
        <style>{`
          @keyframes saitejaTechMarquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .saiteja-marquee-wrapper {
            display: flex;
            width: max-content;
            animation: saitejaTechMarquee 42s linear infinite;
          }

          .saiteja-marquee-wrapper:hover {
            animation-play-state: paused;
          }

          .saiteja-tech-pill {
            display: flex;
            align-items: center;
            gap: 14px;
            background: rgba(30, 41, 59, 0.85);
            border: 1px solid rgba(251, 146, 60, 0.3);
            border-radius: 16px;
            padding: 16px 26px;
            margin-right: 20px;
            min-width: 225px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
            transition: transform 0.2s ease, border-color 0.2s ease;
          }

          .saiteja-tech-pill:hover {
            transform: translateY(-4px);
            border-color: #ea580c;
          }
        `}</style>

        {/* Section Heading */}
        <div style={{ maxWidth: "1200px", margin: "0 auto 48px", padding: "0 24px", textAlign: "center" }}>
          <span
            style={{
              color: "#fb923c",
              fontWeight: "700",
              fontSize: "13px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px",
            }}
          >
            OUR TECH STACK
          </span>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#ffffff",
              margin: "0 0 12px",
            }}
          >
            Technologies &amp; <span style={{ color: "#ea580c" }}>Tools We Use</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>
            Powering scalable enterprise applications with modern full-stack frameworks, cloud infrastructure, and automated delivery pipelines.
          </p>
        </div>

        {/* Fade Edges Left & Right */}
        <div style={{ position: "relative", width: "100%" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "90px",
              background: "linear-gradient(90deg, #0f172a 0%, rgba(15,23,42,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "90px",
              background: "linear-gradient(270deg, #0f172a 0%, rgba(15,23,42,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Continuous Moving Track (Duplicated seamlessly for zero-gap loop) */}
          <div className="saiteja-marquee-wrapper">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} style={{ display: "flex", alignItems: "center" }}>
                {[
                  { name: "Java", role: "Backend Language", icon: <Server size={22} color="#fb923c" /> },
                  { name: "Spring Boot", role: "Enterprise Framework", icon: <Server size={22} color="#fb923c" /> },
                  { name: "Node.js", role: "Backend Runtime", icon: <Server size={22} color="#fb923c" /> },
                  { name: "RESTful APIs", role: "API Development", icon: <Server size={22} color="#fb923c" /> },
                  { name: "React.js", role: "Frontend Library", icon: <Code2 size={22} color="#fb923c" /> },
                  { name: "Bootstrap", role: "Responsive UI", icon: <Code2 size={22} color="#fb923c" /> },
                  { name: "JavaScript", role: "Core Scripting", icon: <Code2 size={22} color="#fb923c" /> },
                  { name: "HTML5", role: "Web Structure", icon: <Code2 size={22} color="#fb923c" /> },
                  { name: "CSS3", role: "Modern Styling", icon: <Code2 size={22} color="#fb923c" /> },
                  { name: "MySQL", role: "Relational Database", icon: <Database size={22} color="#fb923c" /> },
                  { name: "TiDB Cloud", role: "Distributed Database", icon: <Database size={22} color="#fb923c" /> },
                  { name: "AWS Cloud", role: "Cloud Infrastructure", icon: <Server size={22} color="#fb923c" /> },
                  { name: "Amazon EC2", role: "Compute Instances", icon: <Server size={22} color="#fb923c" /> },
                  { name: "Amazon S3", role: "Object Storage", icon: <Database size={22} color="#fb923c" /> },
                  { name: "Amazon CloudFront", role: "Content Delivery (CDN)", icon: <Server size={22} color="#fb923c" /> },
                  { name: "Docker", role: "Containerization", icon: <GitBranch size={22} color="#fb923c" /> },
                  { name: "Nginx", role: "Reverse Proxy & Routing", icon: <Server size={22} color="#fb923c" /> },
                  { name: "Git & GitHub", role: "Source Control", icon: <GitBranch size={22} color="#fb923c" /> },
                  { name: "GitHub Actions", role: "Release Automation", icon: <GitBranch size={22} color="#fb923c" /> },
                  { name: "DevOps CI/CD", role: "Automated Pipelines", icon: <GitBranch size={22} color="#fb923c" /> },
                ].map((tool, index) => (
                  <div className="saiteja-tech-pill" key={`${loopIndex}-${index}`}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "rgba(234, 88, 12, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {tool.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: "800", fontSize: "16px", color: "#f8fafc" }}>
                        {tool.name}
                      </div>
                      <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>
                        {tool.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="stats-strip-inner">
          <div className="stat-item">
            <strong>2+</strong>
            <span>Years of Experience</span>
          </div>

          <div className="stat-item">
            <strong>20+</strong>
            <span>Projects Delivered</span>
          </div>

          <div className="stat-item">
            <strong>10+</strong>
            <span>Happy Clients</span>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="intro-section" id="about">
        <div className="section-label">WHO WE ARE</div>

        <div className="intro-grid">
          <h2>
            One partner.
            <br />
            <span>Multiple possibilities.</span>
          </h2>

          <div>
            <p>
              We combine technology, talent and business understanding.
            </p>

            <Link className="text-link" to="/about">
              Discover SAITEJA INFOTECH <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <figure className="section-photo">
          <img src={introImage} alt="" loading="lazy" />
        </figure>
      </section>

      {/* EXISTING MIDDLE SECTION - ALL 8 SERVICES */}
      <section className="services-section" id="services">
        <SectionHeading
          label="WHAT WE DO"
          title="Solutions built around"
          highlight=" your goals."
          description="Capabilities designed to work together."
        />

        <div className="services-grid">
          {services.map(({ image, number, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-image">
                <img src={image} alt={title} />
                <span className="service-image-number">
                  {number}
                </span>
              </div>

              <div className="service-card-content">
                <h3>{title}</h3>
                <p>{description}</p>

                <Link to="/services">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="vision-section">
        <div className="vision-box">
          <h2>
            Technology should
            <span> create momentum.</span>
          </h2>

          <p>
            We believe the best solutions solve problems.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        className="why-choose-us-section"
        style={{
          padding: "80px 20px",
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div style={{ textAlign: "left", marginBottom: "50px" }}>
            <div
              style={{
                color: "var(--primary-color, #ff7a00)",
                fontSize: "0.85rem",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Why Choose Us
            </div>

            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: "bold",
                color: "#111827",
                margin: "0 0 12px 0",
              }}
            >
              Why Choose Saiteja Infotech?
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "1.05rem",
                margin: 0,
              }}
            >
              We deliver reliable technology solutions through innovation,
              quality, and customer-focused services.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              width: "100%",
            }}
          >
            {/* 1. Customer-Focused Approach */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                border: "1px solid #eaeaea",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "var(--primary-color, #ff7a00)",
                  fontSize: "1.75rem",
                  lineHeight: "1",
                }}
              >
                👥
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Customer-Focused Approach
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                We understand your requirements before recommending
                solutions. 
               </p>
                           </div>

            {/* 2. Customized Solutions */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                border: "1px solid #eaeaea",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "var(--primary-color, #ff7a00)",
                  fontSize: "1.75rem",
                  lineHeight: "1",
                }}
              >
                ⚙️
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Customized Solutions
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                We develop solutions aligned with your business objectives.

              </p>
            </div>

            {/* 3. Quality Commitment */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                border: "1px solid #eaeaea",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "var(--primary-color, #ff7a00)",
                  fontSize: "1.75rem",
                  lineHeight: "1",
                }}
              >
                🏅
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Quality Commitment
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                We emphasize functionality, usability, and reliability.
              </p>
            </div>

            {/* 4. Technology Expertise */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                border: "1px solid #eaeaea",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "var(--primary-color, #ff7a00)",
                  fontSize: "1.75rem",
                  lineHeight: "1",
                }}
              >
                &lt;/&gt;
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Technology Expertise
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                We work with modern technologies and development practices.
              </p>
            </div>

            {/* 5. Transparent Communication */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                border: "1px solid #eaeaea",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "var(--primary-color, #ff7a00)",
                  fontSize: "1.75rem",
                  lineHeight: "1",
                }}
              >
                💬
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Transparent Communication
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                We maintain clear communication throughout the project.
              </p>
            </div>

            {/* 6. Continuous Support */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                border: "1px solid #eaeaea",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "var(--primary-color, #ff7a00)",
                  fontSize: "1.75rem",
                  lineHeight: "1",
                }}
              >
                🎧
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#111827",
                  margin: 0,
                }}
              >
                Continuous Support
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                We aim to build long-term relationships through ongoing
                technical support. 
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* 5. OUR SOLUTIONS */}
      <section
        id="solutions"
        style={{
          padding: "88px 24px",
          background: "#fffaf5",
          borderTop: "1px solid #fed7aa",
          borderBottom: "1px solid #fed7aa",
        }}
      >
        <SolutionsShowcase />
      </section>
      
      {/* 6. INDUSTRIES WE SERVE - Software & Technology Sectors */}
      <section id="industries" style={{ padding: "80px 24px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            label="INDUSTRIES WE SERVE"
            title="Software solutions built for"
            highlight=" modern industries."
            description="We engineer scalable, secure, and domain-specific software applications tailored to the digital needs of diverse industries."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "48px" }}>
            
            {/* Industry 1 */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)" }}>
              <span style={{ color: "#ea580c", fontWeight: "800", fontSize: "14px" }}>01</span>
              <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: "700", marginTop: "8px", marginBottom: "10px" }}>
                SaaS &amp; Technology Startups
              </h3>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>
                Full-cycle MVP development, cloud-native web apps, and scalable API architectures to help tech startups launch and scale faster.
              </p>
            </div>

            {/* Industry 2 */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)" }}>
              <span style={{ color: "#ea580c", fontWeight: "800", fontSize: "14px" }}>02</span>
              <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: "700", marginTop: "8px", marginBottom: "10px" }}>
                FinTech &amp; Financial Services
              </h3>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>
                High-security payment integrations, automated billing systems, and compliance-ready financial management software.
              </p>
            </div>

            {/* Industry 3 */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)" }}>
              <span style={{ color: "#ea580c", fontWeight: "800", fontSize: "14px" }}>03</span>
              <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: "700", marginTop: "8px", marginBottom: "10px" }}>
                HealthTech &amp; Diagnostics
              </h3>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>
                HIPAA-aligned patient portals, hospital management ERP, and telemedicine mobile apps built for seamless clinical workflows.
              </p>
            </div>

            {/* Industry 4 */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)" }}>
              <span style={{ color: "#ea580c", fontWeight: "800", fontSize: "14px" }}>04</span>
              <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: "700", marginTop: "8px", marginBottom: "10px" }}>
                EdTech &amp; Enterprise Training
              </h3>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>
                Custom Learning Management Systems (LMS), live assessment portals, and campus automation platforms for educational institutions.
              </p>
            </div>

            {/* Industry 5 */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)" }}>
              <span style={{ color: "#ea580c", fontWeight: "800", fontSize: "14px" }}>05</span>
              <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: "700", marginTop: "8px", marginBottom: "10px" }}>
                E-Commerce &amp; Retail Tech
              </h3>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>
                Custom multi-vendor marketplaces, real-time inventory sync, and omnichannel mobile commerce apps for high-volume retail.
              </p>
            </div>

            {/* Industry 6 */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)" }}>
              <span style={{ color: "#ea580c", fontWeight: "800", fontSize: "14px" }}>06</span>
              <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: "700", marginTop: "8px", marginBottom: "10px" }}>
                Enterprise Operations &amp; Logistics
              </h3>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>
                Business process automation, CRM/ERP integrations, and real-time fleet tracking software to streamline daily enterprise operations.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* 7. OUR WORK - Projects and Case Studies */}
      <section id="our-work" style={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            label="OUR WORK"
            title="Featured projects &"
            highlight=" case studies."
            description="See how we transform complex business challenges into reliable, scalable, and user-friendly software products."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginTop: "48px" }}>
            
            {/* Case Study 1 */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "32px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ display: "inline-block", background: "#fff7ed", color: "#ea580c", fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", marginBottom: "14px" }}>
                  Custom Software • ERP
                </span>
                <h3 style={{ color: "#0f172a", fontSize: "21px", fontWeight: "700", marginBottom: "10px" }}>
                  Enterprise Resource &amp; Billing Automation
                </h3>
                <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65", marginBottom: "16px" }}>
                  Built a centralized ERP and automated invoicing platform for a multi-branch enterprise, cutting manual reporting time by 60% and eliminating billing errors.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "14px", fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>
                Tech Stack: <span style={{ color: "#64748b", fontWeight: "500" }}>React • Java Spring Boot • MySQL</span>
              </div>
            </div>

            {/* Case Study 2 */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "32px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ display: "inline-block", background: "#fff7ed", color: "#ea580c", fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", marginBottom: "14px" }}>
                  Web Application • SaaS
                </span>
                <h3 style={{ color: "#0f172a", fontSize: "21px", fontWeight: "700", marginBottom: "10px" }}>
                  Cloud Customer Portal &amp; Workflow Suite
                </h3>
                <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65", marginBottom: "16px" }}>
                  Engineered a high-speed, role-based web portal with real-time analytics and automated notifications, improving client onboarding speed by 3x.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "14px", fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>
                Tech Stack: <span style={{ color: "#64748b", fontWeight: "500" }}>React • REST APIs • PostgreSQL</span>
              </div>
            </div>

            {/* Case Study 3 */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "32px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ display: "inline-block", background: "#fff7ed", color: "#ea580c", fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", marginBottom: "14px" }}>
                  Mobile App • Android &amp; iOS
                </span>
                <h3 style={{ color: "#0f172a", fontSize: "21px", fontWeight: "700", marginBottom: "10px" }}>
                  Field Workforce &amp; Operations Mobile App
                </h3>
                <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65", marginBottom: "16px" }}>
                  Developed an intuitive cross-platform mobile app for real-time task assignment, live status tracking, and instant field reporting across teams.
                </p>
              </div>
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "14px", fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>
                Tech Stack: <span style={{ color: "#64748b", fontWeight: "500" }}>React Native • Spring Boot • Cloud</span>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* TESTIMONIALS SECTION */}
<section
  style={{
    backgroundColor: "#f8fafc",
    padding: "96px max(24px, 6%)",
    fontFamily: "sans-serif",
    borderTop: "1px solid #f1f5f9",
    borderBottom: "1px solid #f1f5f9",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "60px",
      flexWrap: "wrap",
      maxWidth: "1280px",
      margin: "0 auto",
    }}
  >
    {/* Left Side: Header & CTA */}
    <div
      style={{
        flex: "1 1 320px",
        maxWidth: "400px",
        textAlign: "left",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#fff7ed",
          color: "#ff7a00",
          border: "1px solid #ffedd5",
          padding: "6px 14px",
          borderRadius: "999px",
          fontSize: "0.75rem",
          fontWeight: "700",
          letterSpacing: "1px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#ff7a00",
          }}
        />
        WHAT OUR CLIENTS SAY
      </span>

      <h2
        style={{
          fontSize: "2.6rem",
          fontWeight: "800",
          color: "#0f172a",
          lineHeight: "1.18",
          margin: "0 0 20px 0",
          letterSpacing: "-0.02em",
        }}
      >
        Trusted by innovative companies worldwide.
      </h2>

      <p
        style={{
          color: "#64748b",
          fontSize: "1rem",
          lineHeight: "1.65",
          marginBottom: "32px",
        }}
      >
        Your experience inspires us to deliver better technology solutions and
        create lasting partnerships.
      </p>

      <Link
        to="/contact"
        style={{
          backgroundColor: "#ff7a00",
          color: "#fff",
          textDecoration: "none",
          padding: "14px 28px",
          fontSize: "0.95rem",
          fontWeight: "700",
          borderRadius: "10px",
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 10px 25px rgba(255, 122, 0, 0.3)",
        }}
      >
        Share Your Experience <ArrowRight size={18} />
      </Link>
    </div>

    {/* Right Side: 2x2 Modern Cards Grid */}
    <div
      style={{
        flex: "2 1 600px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
        gap: "24px",
        width: "100%",
      }}
    >
      {[
        {
          name: "Mohan Kumar",
          role: "paxsat",
          initials: "MK",
          review:
            "Saiteja Infotech provides excellent IT services with a professional and supportive team. Their solutions are reliable, innovative, and delivered with great attention to quality. I truly appreciate their commitment and customer service. Highly recommended!",
        },
        {
          name: "Preethi Reddy",
          role: "Managing Director",
          initials: "PR",
          review:
            "We had a great experience working with Saiteja Infotech. Their team understood our business requirements and delivered a reliable software solution. Their technical support and dedication were impressive.",
        },
        {
          name: "Manoj Kumar",
          role: "Business Owner",
          initials: "MK",
          review:
            "Saiteja Infotech helped us improve our business operations through their technology solutions. Their support and innovative approach made our work easier and more efficient. We appreciate their commitment and professionalism.",
        },
        {
          name: "Client Name",
          role: "Designation",
          initials: "CN",
          review:
            "Their web development support was exceptional. The custom workflow solutions they built streamlined our daily tasks and delivered great results on time.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 12px 35px rgba(15, 23, 42, 0.05)",
            border: "1px solid #e2e8f0",
            borderBottom: "4px solid #ff7a00",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "left",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative Top-Right Quote Watermark */}
          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "24px",
              fontSize: "4.5rem",
              fontFamily: "Georgia, serif",
              color: "#fff7ed",
              lineHeight: "1",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            &rdquo;
          </span>

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* 5-Star Rating */}
            <div
              style={{
                color: "#f59e0b",
                fontSize: "1.05rem",
                letterSpacing: "2px",
                marginBottom: "16px",
              }}
            >
              ★★★★★
            </div>

            {/* Review Text */}
            <p
              style={{
                color: "#334155",
                fontSize: "0.95rem",
                lineHeight: "1.65",
                margin: "0 0 28px 0",
              }}
            >
              "{item.review}"
            </p>
          </div>

          {/* Client Info (No Divider Line) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff7a00, #ff9e44)",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 10px rgba(255, 122, 0, 0.25)",
              }}
            >
              {item.initials}
            </div>

            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#0f172a",
                  margin: "0 0 3px 0",
                }}
              >
                {item.name}
              </h4>
              <span
                style={{
                  color: "#ff7a00",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                }}
              >
                {item.role}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CAREERS */}
      <section className="careers-section" id="careers">
        <div className="careers-grid">
          <figure className="section-photo">
            <img src={careersImage} alt="" loading="lazy" />
          </figure>

          <div className="careers-content">
            <div className="section-label">CAREERS</div>

            <h2>
              Grow your career
              <br />
              <span>with us.</span>
            </h2>

            <p>
              We are always looking for passionate people to join our
              expanding team.
            </p>

            <Link className="primary-button" to="/careers">
              View Openings <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
