import './Landing.css'

function Landing({ onGetStarted }) {
  const templates = [
    { id: 1, name: 'Modern Pro', color: '#667eea' },
    { id: 2, name: 'Executive', color: '#2c3e50' },
    { id: 3, name: 'Minimal Clean', color: '#95a5a6' },
    { id: 4, name: 'Creative Edge', color: '#e74c3c' },
    { id: 5, name: 'Professional', color: '#3498db' },
  ]

  const features = [
    {
      title: 'Template Gallery',
      description: 'Choose from 5+ professionally designed, ATS-friendly templates',
      icon: '🎨',
    },
    {
      title: 'Live Preview',
      description: 'See your resume update in real-time as you type',
      icon: '👁️',
    },
    {
      title: 'Easy to Edit',
      description: 'Simple form-based editor with organized sections',
      icon: '✏️',
    },
    {
      title: 'Export & Share',
      description: 'Download as PDF, Word doc, or JSON format',
      icon: '📥',
    },
  ]

  return (
    <div className="landing">
      {/* Header */}
      <header className="landing-header">
        <div className="header-content">
          <h1 className="header-logo">ResumeCraft</h1>
          <p className="header-tagline">Professional Resume Builder</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Build Your Professional Resume in Minutes</h1>
          <p className="hero-subtitle">
            Create an ATS-friendly resume with our simple, beautiful builder. Choose a template, fill in your details, and export a polished resume.
          </p>
          <button className="hero-cta" onClick={onGetStarted}>
            Get Started Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose ResumeCraft?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates Preview */}
      <section className="templates-preview">
        <h2>Choose Your Template</h2>
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-preview">
              <div className="template-box" style={{ backgroundColor: template.color }}></div>
              <p>{template.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof Section */}
      <section className="proof">
        <div className="proof-stat">
          <div className="proof-number">98%</div>
          <div className="proof-label">ATS Compatible</div>
        </div>
        <div className="proof-stat">
          <div className="proof-number">5</div>
          <div className="proof-label">Professional Templates</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>Ready to Build Your Resume?</h2>
        <button className="cta-button" onClick={onGetStarted}>
          Start Building
        </button>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2026 ResumeCraft. All rights reserved. Simple, Fast, Professional.</p>
      </footer>
    </div>
  )
}

export default Landing
