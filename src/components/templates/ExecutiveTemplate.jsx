import '../TemplateStyles.css'

function ExecutiveTemplate({ data }) {
  return (
    <div className="resume-sheet executive-template">
      {/* Header */}
      <div className="executive-header">
        <div className="executive-name">{data.personal.fullName || 'Your Name'}</div>
        <div className="executive-contact">
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span className="bullet">•</span>}
          {data.personal.phone && <span>{data.personal.phone}</span>}
          {data.personal.location && <span className="bullet">•</span>}
          {data.personal.location && <span>{data.personal.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.personal.summary && (
        <div className="executive-section">
          <div className="executive-section-title">PROFESSIONAL SUMMARY</div>
          <p className="executive-text">{data.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="executive-section">
          <div className="executive-section-title">PROFESSIONAL EXPERIENCE</div>
          {data.experience.map((exp) => (
            <div key={exp.id} className="executive-entry">
              <div className="executive-entry-header">
                <div className="executive-position">{exp.position || 'Position'}</div>
                <div className="executive-date">
                  {exp.startDate && exp.endDate
                    ? `${exp.startDate.split('-')[0]} – ${exp.endDate === 'Present' ? 'Present' : exp.endDate.split('-')[0]}`
                    : ''}
                </div>
              </div>
              <div className="executive-company">{exp.company || 'Company'}</div>
              {exp.description && <p className="executive-text" style={{ marginTop: '4px' }}>{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="executive-section">
          <div className="executive-section-title">EDUCATION</div>
          {data.education.map((edu) => (
            <div key={edu.id} className="executive-entry">
              <div className="executive-entry-header">
                <div className="executive-position">{edu.degree || 'Degree'}</div>
                <div className="executive-date">{edu.year || ''}</div>
              </div>
              <div className="executive-company">{edu.school || 'School'}</div>
              {edu.field && <p className="executive-text" style={{ marginTop: '4px' }}>{edu.field}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills && (
        <div className="executive-section">
          <div className="executive-section-title">CORE COMPETENCIES</div>
          <div className="executive-skills">
            {data.skills.split(',').map((skill, idx) => (
              <span key={idx} className="executive-skill">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExecutiveTemplate
