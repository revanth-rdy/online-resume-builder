import '../TemplateStyles.css'

function CreativeTemplate({ data }) {
  return (
    <div className="resume-sheet creative-template">
      {/* Accent bar */}
      <div className="creative-accent-bar"></div>

      {/* Header */}
      <div className="creative-header">
        <div className="creative-name">{data.personal.fullName || 'Your Name'}</div>
        <div className="creative-subtitle">Professional</div>
        <div className="creative-contact">
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>•</span>}
          {data.personal.phone && <span>{data.personal.phone}</span>}
          {data.personal.location && <span>•</span>}
          {data.personal.location && <span>{data.personal.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.personal.summary && (
        <div className="creative-section">
          <h2 className="creative-title">Profile</h2>
          <p className="creative-text">{data.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="creative-section">
          <h2 className="creative-title">Experience</h2>
          <div className="creative-timeline">
            {data.experience.map((exp, idx) => (
              <div key={exp.id} className="creative-timeline-item">
                <div className="creative-timeline-dot"></div>
                <div className="creative-timeline-content">
                  <div className="creative-timeline-header">
                    <div className="creative-timeline-role">{exp.position || 'Position'}</div>
                    <div className="creative-timeline-date">
                      {exp.startDate && exp.endDate
                        ? `${exp.startDate.split('-')[0]} – ${exp.endDate === 'Present' ? 'Present' : exp.endDate.split('-')[0]}`
                        : ''}
                    </div>
                  </div>
                  <div className="creative-timeline-company">{exp.company || 'Company'}</div>
                  {exp.description && <p className="creative-text">{exp.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="creative-section">
          <h2 className="creative-title">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="creative-edu">
              <div className="creative-edu-header">
                <div className="creative-edu-degree">{edu.degree || 'Degree'}</div>
                <div className="creative-edu-date">{edu.year || ''}</div>
              </div>
              <div className="creative-edu-school">{edu.school || 'School'}</div>
              {edu.field && <p className="creative-text">{edu.field}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills && (
        <div className="creative-section">
          <h2 className="creative-title">Skills</h2>
          <div className="creative-tags">
            {data.skills.split(',').map((skill, idx) => (
              <span key={idx} className="creative-tag">
                #{skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CreativeTemplate
