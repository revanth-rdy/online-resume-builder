import '../TemplateStyles.css'

function ProfessionalTemplate({ data }) {
  return (
    <div className="resume-sheet professional-template">
      {/* Top banner */}
      <div className="professional-banner"></div>

      {/* Header */}
      <div className="professional-header">
        <div className="professional-name-box">
          <div className="professional-name">{data.personal.fullName || 'Your Name'}</div>
        </div>
        <div className="professional-contact-box">
          <div className="professional-contact">
            {data.personal.email && <div className="contact-item">{data.personal.email}</div>}
            {data.personal.phone && <div className="contact-item">{data.personal.phone}</div>}
            {data.personal.location && <div className="contact-item">{data.personal.location}</div>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.personal.summary && (
        <div className="professional-section">
          <div className="professional-section-header">
            <h2 className="professional-section-title">PROFESSIONAL PROFILE</h2>
          </div>
          <p className="professional-text">{data.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="professional-section">
          <div className="professional-section-header">
            <h2 className="professional-section-title">CAREER HISTORY</h2>
          </div>
          {data.experience.map((exp) => (
            <div key={exp.id} className="professional-entry">
              <div className="professional-entry-header">
                <div className="professional-role">{exp.position || 'Position'}</div>
                <div className="professional-interval">
                  {exp.startDate && exp.endDate
                    ? `${exp.startDate.split('-')[0]} – ${exp.endDate === 'Present' ? 'Present' : exp.endDate.split('-')[0]}`
                    : ''}
                </div>
              </div>
              <div className="professional-employer">{exp.company || 'Company'}</div>
              {exp.description && <p className="professional-text">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="professional-section">
          <div className="professional-section-header">
            <h2 className="professional-section-title">EDUCATION</h2>
          </div>
          {data.education.map((edu) => (
            <div key={edu.id} className="professional-entry">
              <div className="professional-entry-header">
                <div className="professional-role">{edu.degree || 'Degree'}</div>
                <div className="professional-interval">{edu.year || ''}</div>
              </div>
              <div className="professional-employer">{edu.school || 'School'}</div>
              {edu.field && <p className="professional-text">{edu.field}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills && (
        <div className="professional-section">
          <div className="professional-section-header">
            <h2 className="professional-section-title">CORE SKILLS</h2>
          </div>
          <div className="professional-skills">
            {data.skills.split(',').map((skill, idx) => (
              <div key={idx} className="professional-skill-box">
                <span className="professional-skill">{skill.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfessionalTemplate
