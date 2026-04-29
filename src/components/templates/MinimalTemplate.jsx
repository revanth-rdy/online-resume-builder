import '../TemplateStyles.css'

function MinimalTemplate({ data }) {
  return (
    <div className="resume-sheet minimal-template">
      {/* Header */}
      <div className="minimal-header">
        <div className="minimal-name">{data.personal.fullName || 'Your Name'}</div>
        <div className="minimal-contact">
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>•</span>}
          {data.personal.phone && <span>{data.personal.phone}</span>}
          {data.personal.location && <span>•</span>}
          {data.personal.location && <span>{data.personal.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.personal.summary && (
        <div className="minimal-section">
          <h2 className="minimal-title">About</h2>
          <p className="minimal-text">{data.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="minimal-section">
          <h2 className="minimal-title">Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="minimal-entry">
              <div className="minimal-row">
                <div className="minimal-job-title">{exp.position || 'Position'}</div>
                <div className="minimal-job-date">
                  {exp.startDate && exp.endDate
                    ? `${exp.startDate.split('-')[0]} – ${exp.endDate === 'Present' ? 'Present' : exp.endDate.split('-')[0]}`
                    : ''}
                </div>
              </div>
              <div className="minimal-company">{exp.company || 'Company'}</div>
              {exp.description && <p className="minimal-text">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="minimal-section">
          <h2 className="minimal-title">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="minimal-entry">
              <div className="minimal-row">
                <div className="minimal-job-title">{edu.degree || 'Degree'}</div>
                <div className="minimal-job-date">{edu.year || ''}</div>
              </div>
              <div className="minimal-company">{edu.school || 'School'}</div>
              {edu.field && <p className="minimal-text">{edu.field}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills && (
        <div className="minimal-section">
          <h2 className="minimal-title">Skills</h2>
          <div className="minimal-skills">
            {data.skills.split(',').map((skill, idx) => (
              <div key={idx} className="minimal-skill">
                {skill.trim()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MinimalTemplate
