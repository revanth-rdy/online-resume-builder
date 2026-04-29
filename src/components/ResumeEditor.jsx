import './ResumeEditor.css'

function ResumeEditor({
  data,
  onUpdatePersonal,
  onUpdateExperience,
  onAddExperience,
  onRemoveExperience,
  onUpdateEducation,
  onAddEducation,
  onRemoveEducation,
  onUpdateSkills,
}) {
  return (
    <div className="editor-panel">
      {/* Personal Information */}
      <div className="editor-section">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={data.personal.fullName}
            onChange={(e) => onUpdatePersonal('fullName', e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={data.personal.email}
              onChange={(e) => onUpdatePersonal('email', e.target.value)}
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={data.personal.phone}
              onChange={(e) => onUpdatePersonal('phone', e.target.value)}
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={data.personal.location}
            onChange={(e) => onUpdatePersonal('location', e.target.value)}
            placeholder="New York, NY"
          />
        </div>

        <div className="form-group">
          <label>Professional Summary</label>
          <textarea
            rows="3"
            value={data.personal.summary}
            onChange={(e) => onUpdatePersonal('summary', e.target.value)}
            placeholder="Brief overview of your professional background and goals"
          />
        </div>
      </div>

      {/* Experience */}
      <div className="editor-section">
        <div className="section-header">
          <h2>Experience</h2>
          <button className="btn-add" onClick={onAddExperience}>
            + Add
          </button>
        </div>

        {data.experience.map((exp) => (
          <div key={exp.id} className="entry-card">
            <div className="entry-header">
              <h4>Experience Entry</h4>
              {data.experience.length > 1 && (
                <button className="btn-remove" onClick={() => onRemoveExperience(exp.id)}>
                  Remove
                </button>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => onUpdateExperience(exp.id, 'company', e.target.value)}
                  placeholder="Tech Corp"
                />
              </div>
              <div className="form-group">
                <label>Position</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => onUpdateExperience(exp.id, 'position', e.target.value)}
                  placeholder="Senior Developer"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => onUpdateExperience(exp.id, 'startDate', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => onUpdateExperience(exp.id, 'endDate', e.target.value)}
                  placeholder="2026-04 or 'Present'"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="2"
                value={exp.description}
                onChange={(e) => onUpdateExperience(exp.id, 'description', e.target.value)}
                placeholder="What did you accomplish?"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="editor-section">
        <div className="section-header">
          <h2>Education</h2>
          <button className="btn-add" onClick={onAddEducation}>
            + Add
          </button>
        </div>

        {data.education.map((edu) => (
          <div key={edu.id} className="entry-card">
            <div className="entry-header">
              <h4>Education Entry</h4>
              {data.education.length > 1 && (
                <button className="btn-remove" onClick={() => onRemoveEducation(edu.id)}>
                  Remove
                </button>
              )}
            </div>

            <div className="form-group">
              <label>School</label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => onUpdateEducation(edu.id, 'school', e.target.value)}
                placeholder="State University"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => onUpdateEducation(edu.id, 'degree', e.target.value)}
                  placeholder="Bachelor of Science"
                />
              </div>
              <div className="form-group">
                <label>Field of Study</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => onUpdateEducation(edu.id, 'field', e.target.value)}
                  placeholder="Computer Science"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Graduation Year</label>
              <input
                type="text"
                value={edu.year}
                onChange={(e) => onUpdateEducation(edu.id, 'year', e.target.value)}
                placeholder="2020"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="editor-section">
        <h2>Skills</h2>
        <div className="form-group">
          <label>Skills (comma-separated)</label>
          <textarea
            rows="3"
            placeholder="React, JavaScript, Python, SQL, etc."
            value={data.skills}
            onChange={(e) => onUpdateSkills(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default ResumeEditor
