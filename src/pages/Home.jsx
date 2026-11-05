import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import companyLogo from "../assets/logo.png";
import { CONTACT_DETAILS } from "../data/contact";

import SectionHeading from "../components/SectionHeading";
import services from "../data/services";
import introImage from "../assets/services/it-solutions.jpg";
import careersImage from "../assets/services/recruitment.jpg";

function Home() {
  const [reviews, setReviews] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedReviews = localStorage.getItem('saitejaProductionReviews');
      return savedReviews ? JSON.parse(savedReviews) : [];
    }
    return [];
  });

  const [clientName, setClientName] = useState("");
  const [clientDesignation, setClientDesignation] = useState("");
  const [clientReview, setClientReview] = useState("");

  useEffect(() => {
    localStorage.setItem('saitejaProductionReviews', JSON.stringify(reviews));
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
      review: clientReview
    };

    setReviews([newReview, ...reviews]);
    setClientName("");
    setClientDesignation("");
    setClientReview("");
  };

  const handleClearAllReviews = () => {
    if (window.confirm("Are you sure you want to clear all reviews and start fresh?")) {
      setReviews([]);
    }
  };

  return (
    <main>
     
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            Technology • Talent • Transformation
          </div>
          <h1>Building what's next<span> for ambitious businesses.</span></h1>
          
          <p>
  SAITEJA INFOTECH PRIVATE LIMITED is a top-tier <strong>Software 
  Development Company in Tirupati</strong>, delivering premium <strong>IT Services 
  Tirupati</strong> wide. As a leading <strong>Web Development Company Andhra 
  Pradesh</strong>, we provide custom business software, staffing, and premium 
  <strong> DevOps Consulting India</strong> solutions to help organizations move forward 
  with confidence.
</p>
          
          <div className="hero-actions">
            <a className="primary-button" href="#services">Explore Services <ArrowRight size={18} /></a>
            <Link className="secondary-button" to="/contact">Start a Conversation</Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-logo-container"><img src={companyLogo} alt="" className="hero-company-logo" /></div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="stats-strip-inner">
          <div className="stat-item"><strong>2+</strong><span>Years of Experience</span></div>
          <div className="stat-item"><strong>20+</strong><span>Projects Delivered</span></div>
          <div className="stat-item"><strong>10+</strong><span>Happy Clients</span></div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="intro-section" id="about">
        <div className="section-label">WHO WE ARE</div>
        <div className="intro-grid">
          <h2>One partner.<br /><span>Multiple possibilities.</span></h2>
          <div>
            <p>We combine technology, talent and business understanding.</p>
            <Link className="text-link" to="/about">Discover SAITEJA INFOTECH <ArrowRight size={17} /></Link>
          </div>
        </div>
        <figure className="section-photo"><img src={introImage} alt="" loading="lazy" /></figure>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <SectionHeading label="WHAT WE DO" title="Solutions built around" highlight=" your goals." description="Capabilities designed to work together." />
        <div className="services-grid">
          {services.map(({ image, number, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-image"><img src={image} alt={title} /><span className="service-image-number">{number}</span></div>
              <div className="service-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="/services">Learn more <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="vision-section">
        <div className="vision-box">
          <h2>Technology should<span> create momentum.</span></h2>
          <p>We believe the best solutions solve problems.</p>
        </div>
      </section>
                {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-us-section" style={{ padding: '80px 20px', backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'left', marginBottom: '50px' }}>
            <div style={{ color: 'var(--primary-color, #ff7a00)', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Why Choose Us
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', margin: '0 0 12px 0' }}>
              Why Choose Saiteja Infotech?
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.05rem', margin: 0 }}>
              We deliver reliable technology solutions through innovation, quality, and customer-focused services.
            </p>
          </div>

          {/* Core Grid Matrix Layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px',
            width: '100%'
          }}>
            {/* 1. Customer-Focused Approach */}
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #eaeaea', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: 'var(--primary-color, #ff7a00)', fontSize: '1.75rem', lineHeight: '1' }}>👥</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                Customer-Focused Approach
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                We understand your requirements before recommending solutions.
              </p>
            </div>

            {/* 2. Customized Solutions */}
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #eaeaea', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: 'var(--primary-color, #ff7a00)', fontSize: '1.75rem', lineHeight: '1' }}>⚙️</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                Customized Solutions
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                We develop solutions aligned with your business objectives.
              </p>
            </div>

            {/* 3. Quality Commitment */}
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #eaeaea', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: 'var(--primary-color, #ff7a00)', fontSize: '1.75rem', lineHeight: '1' }}>🏅</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                Quality Commitment
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                We emphasize functionality, usability, and reliability.
              </p>
            </div>

            {/* 4. Technology Expertise */}
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #eaeaea', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: 'var(--primary-color, #ff7a00)', fontSize: '1.75rem', lineHeight: '1' }}>&lt;/&gt;</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                Technology Expertise
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                We work with modern technologies and development practices.
              </p>
            </div>

            {/* 5. Transparent Communication */}
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #eaeaea', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: 'var(--primary-color, #ff7a00)', fontSize: '1.75rem', lineHeight: '1' }}>💬</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                Transparent Communication
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                We maintain clear communication throughout the project.
              </p>
            </div>

            {/* 6. Continuous Support */}
            <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #eaeaea', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: 'var(--primary-color, #ff7a00)', fontSize: '1.75rem', lineHeight: '1' }}>🎧</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>
                Continuous Support
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                We aim to build long-term relationships through ongoing technical support.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="testimonials-section" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <div className="section-label">WHAT OUR CLIENTS SAY</div>
        <h2 style={{ fontSize: '2.2rem', marginTop: '10px', marginBottom: '40px' }}>Trusted by innovative <span>companies worldwide.</span></h2>
        
        {/* REVIEWS LIST */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: 'auto', marginBottom: '50px' }}>
          {reviews.length === 0 ? (
            <p style={{ gridColumn: '1/-1', color: '#666', fontStyle: 'italic', fontSize: '1.1rem', padding: '20px' }}>
              No reviews yet. Be the first to submit one below!
            </p>
          ) : (
            reviews.map((item, index) => (
              <div key={index} style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'left', borderTop: '4px solid #007bff' }}>
                <p style={{ fontStyle: 'italic', color: '#555', lineHeight: '1.6' }}>"{item.review}"</p>
                <h4 style={{ marginTop: '20px', marginBottom: '2px', color: '#333', fontWeight: '700' }}>{item.name}</h4>
                <small style={{ color: '#888' }}>{item.designation}</small>
              </div>
            ))
          )}
        </div>

        {/* REVIEW FORM */}
        <div style={{ maxWidth: '600px', margin: 'auto', background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 25px rgba(0,0,0,0.08)', textAlign: 'left' }}>
          <h3 style={{ marginBottom: '5px', color: '#333' }}>Submit Your Review</h3>
          <p style={{ color: '#666', marginBottom: '25px', fontSize: '0.9rem' }}>Are you a client? Share your experience with Saiteja Infotech instantly.</p>
          
          <form onSubmit={handleSubmitReview}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#444' }}>Your Name *</label>
              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="e.g., John" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#444' }}>Designation / Company</label>
              <input type="text" value={clientDesignation} onChange={(e) => setClientDesignation(e.target.value)} placeholder="e.g.,  Saiteja Client" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#444' }}>Your Review *</label>
              <textarea rows="4" value={clientReview} onChange={(e) => setClientReview(e.target.value)} placeholder="Type your review here..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#ff6f00', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
              Submit Live Review →
            </button>
          </form>

          {/* CLEAR ALL BUTTON */}
          {reviews.length > 0 && (
            <button 
              onClick={handleClearAllReviews}
              style={{ width: '100%', marginTop: '12px', padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Clear All Test Reviews 🗑️
            </button>
          )}
        </div>
      </section>

        {/* CAREERS */}
      <section className="careers-section" id="careers">
        <div className="careers-grid">
          <figure className="section-photo"><img src={careersImage} alt="" loading="lazy" /></figure>
          <div className="careers-content">
            <div className="section-label">CAREERS</div>
            <h2>Grow your career<br /><span>with us.</span></h2>
            <p>We are always looking for passionate people to join our expanding team.</p>
            <Link className="primary-button" to="/careers">View Openings <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;