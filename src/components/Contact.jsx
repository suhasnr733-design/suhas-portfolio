import React, { useState } from 'react';
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../config/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Construct mailto as graceful fallback — no backend/API keys
    const mailto = `mailto:${portfolio.personal.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>05 — CONTACT</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="text-gradient">Something Together</span>
          </h2>
          <p className="section-subtitle">
            Open to Software Engineering internships, Full-Stack roles, and AI/ML collaboration.
            Reach out — I respond promptly.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Info */}
          <div className="contact-info-col">
            <div className="contact-info-block">
              <h3>Direct Contact</h3>

              <a
                href={`mailto:${portfolio.personal.email}`}
                className="contact-info-link"
                aria-label="Send Email"
              >
                <div className="contact-icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="info-link-label">Email</div>
                  <div className="info-link-val">{portfolio.personal.email}</div>
                </div>
                <ArrowUpRight size={14} className="info-arrow" />
              </a>

              <a
                href={portfolio.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-info-link"
                aria-label="View LinkedIn"
              >
                <div className="contact-icon-wrap">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <div className="info-link-label">LinkedIn</div>
                  <div className="info-link-val">linkedin.com/in/suhasnr</div>
                </div>
                <ArrowUpRight size={14} className="info-arrow" />
              </a>

              <a
                href={portfolio.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-info-link"
                aria-label="View GitHub"
              >
                <div className="contact-icon-wrap">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <div className="info-link-label">GitHub</div>
                  <div className="info-link-val">github.com/suhasnr733-design</div>
                </div>
                <ArrowUpRight size={14} className="info-arrow" />
              </a>

              <div className="contact-info-link no-hover">
                <div className="contact-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="info-link-label">Location</div>
                  <div className="info-link-val">{portfolio.personal.location}</div>
                </div>
              </div>
            </div>

            <div className="contact-availability-badge">
              <span className="avail-dot" />
              <span>Available for Internships & Roles — 2025/2026</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Opening your email client…</h3>
                <p>
                  Your default email app should open with the message pre-filled.
                  Alternatively email me directly at{' '}
                  <a href={`mailto:${portfolio.personal.email}`}>{portfolio.personal.email}</a>.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Collaboration..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={sending}
                >
                  {sending ? (
                    <span>Opening Email…</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                <p className="form-note">
                  Uses your default email client. No data is sent to a server.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
