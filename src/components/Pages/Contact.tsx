import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { contact } from '../../data/content';

export const Contact: React.FC = () => {
  const contactItems = [
    { icon: MapPin, label: 'Location', value: contact.location },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone}` },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: contact.github },
    { icon: Linkedin, label: 'LinkedIn', href: contact.linkedin },
  ];

  return (
    <div className="page-content">
      <div className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">Let's connect and build something amazing</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, want to discuss a project, or just want to say hello, 
            feel free to reach out!
          </p>

          <div className="contact-items">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const ContactComponent = item.href ? 'a' : 'div';
              
              return (
                <ContactComponent
                  key={item.label}
                  href={item.href}
                  className="contact-item"
                  {...(item.href && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon size={20} className="contact-icon" />
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                  {item.href && <ExternalLink size={16} className="contact-link-icon" />}
                </ContactComponent>
              );
            })}
          </div>
        </div>

        <div className="social-links">
          <h3>Find Me Online</h3>
          <div className="social-buttons">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  <Icon size={24} />
                  <span>{link.label}</span>
                  <ExternalLink size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};