import '../TemplateStyles.css'

function ModernTemplate({ data }) {
  return (
    <div className="resume-sheet modern-template">
      <div className="modern-container">
        {/* Sidebar */}
        <div className="modern-sidebar">
          {/* Name */}
          <div className="modern-name">{data.personal.fullName || 'Your Name'}</div>

          {/* Contact */}
          <div className="modern-contact">
            {data.personal.email && <div>{data.personal.email}</div>}
            {data.personal.phone && <div>{data.personal.phone}</div>}
            {data.personal.location && <div>{data.personal.location}</div>}
          </div>

          {/* Skills */}
          {data.skills && (
            <div className="modern-section">
              <div className="modern-section-title">Skills</div>
              <div className="modern-skills">
                {data.skills.split(',').map((skill, idx) => (
                  <div key={idx} className="modern-skill-item">
                    {skill.trim()}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="modern-main">
          {/* Summary */}
          {data.personal.summary && (
            <div className="modern-section">
              <div className="modern-section-title-main">Professional Summary</div>
              <p className="modern-text">{data.personal.summary}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <div className="modern-section">
              <div className="modern-section-title-main">Experience</div>
              {data.experience.map((exp) => (
                <div key={exp.id} className="modern-entry">
                  <div className="modern-entry-header">
                    <div className="modern-entry-title">{exp.position || 'Position'}</div>
                    <div className="modern-entry-date">
                      {exp.startDate && exp.endDate
                        ? `${exp.startDate.split('-')[0]} – ${exp.endDate === 'Present' ? 'Present' : exp.endDate.split('-')[0]}`
                        : ''}
                    </div>
                  </div>
                  <div className="modern-entry-company">{exp.company || 'Company'}</div>
                  {exp.description && <p className="modern-text">{exp.description}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <div className="modern-section">
              <div className="modern-section-title-main">Education</div>
              {data.education.map((edu) => (
                <div key={edu.id} className="modern-entry">
                  <div className="modern-entry-header">
                    <div className="modern-entry-title">{edu.degree || 'Degree'}</div>
                    <div className="modern-entry-date">{edu.year || ''}</div>
                  </div>
                  <div className="modern-entry-company">{edu.school || 'School'}</div>
                  {edu.field && <p className="modern-text">{edu.field}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModernTemplate
