import { useState, useEffect } from 'react'
import ResumeEditor from './ResumeEditor'
import ResumePreview from './ResumePreview'
import './Builder.css'

const STORAGE_KEY = 'resumecraft-draft'

const defaultData = {
  personal: {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    location: 'New York, NY',
    summary: 'Experienced professional with a track record of delivering results.',
  },
  experience: [
    {
      id: 1,
      company: 'Tech Corp',
      position: 'Senior Developer',
      startDate: '2022-01',
      endDate: 'Present',
      description: 'Led development of core platform features.',
    },
  ],
  education: [
    {
      id: 1,
      school: 'State University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      year: '2020',
    },
  ],
  skills: 'React, JavaScript, Python, Node.js, SQL, REST APIs',
}

const templates = [
  { id: 'modern', name: 'Modern Pro', color: '#667eea' },
  { id: 'executive', name: 'Executive', color: '#2c3e50' },
  { id: 'minimal', name: 'Minimal Clean', color: '#95a5a6' },
  { id: 'creative', name: 'Creative Edge', color: '#e74c3c' },
  { id: 'professional', name: 'Professional', color: '#3498db' },
]

function Builder({ onBackToHome }) {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : defaultData
  })

  const [selectedTemplate, setSelectedTemplate] = useState('modern')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const updatePersonal = (field, value) => {
    setData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }

  const updateExperience = (id, field, value) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }))
  }

  const addExperience = () => {
    const newId = Math.max(...data.experience.map((e) => e.id), 0) + 1
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: newId,
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }))
  }

  const removeExperience = (id) => {
    if (data.experience.length > 1) {
      setData((prev) => ({
        ...prev,
        experience: prev.experience.filter((item) => item.id !== id),
      }))
    }
  }

  const updateEducation = (id, field, value) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }))
  }

  const addEducation = () => {
    const newId = Math.max(...data.education.map((e) => e.id), 0) + 1
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: newId,
          school: '',
          degree: '',
          field: '',
          year: '',
        },
      ],
    }))
  }

  const removeEducation = (id) => {
    if (data.education.length > 1) {
      setData((prev) => ({
        ...prev,
        education: prev.education.filter((item) => item.id !== id),
      }))
    }
  }

  const updateSkills = (skills) => {
    setData((prev) => ({
      ...prev,
      skills: skills,
    }))
  }

  const downloadPdf = () => {
    window.print()
  }

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json;charset=utf-8',
    })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'resume.json'
    link.click()
  }

  const resetData = () => {
    if (confirm('Reset to default data?')) {
      setData(defaultData)
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  return (
    <div className="builder">
      {/* Top Bar */}
      <div className="builder-topbar">
        <button className="back-btn" onClick={onBackToHome}>
          ← Back to Home
        </button>
        <h2>Resume Builder</h2>
        <div className="template-selector">
          <label>Template:</label>
          <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Builder */}
      <div className="builder-container">
        {/* Left: Editor */}
        <div className="editor-wrapper">
          <ResumeEditor
            data={data}
            onUpdatePersonal={updatePersonal}
            onUpdateExperience={updateExperience}
            onAddExperience={addExperience}
            onRemoveExperience={removeExperience}
            onUpdateEducation={updateEducation}
            onAddEducation={addEducation}
            onRemoveEducation={removeEducation}
            onUpdateSkills={updateSkills}
          />

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn btn-primary" onClick={downloadPdf}>
              📥 Export as PDF
            </button>
            <button className="btn btn-secondary" onClick={downloadJson}>
              💾 Download JSON
            </button>
            <button className="btn btn-secondary" onClick={resetData}>
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Right: Preview */}
        <div className="preview-wrapper">
          <ResumePreview data={data} template={selectedTemplate} />
        </div>
      </div>

      {/* Print Stylesheet */}
      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .builder,
          .builder-topbar,
          .action-buttons,
          .editor-wrapper {
            display: none !important;
          }
          .preview-wrapper {
            display: block !important;
            position: static !important;
          }
          .resume-sheet {
            box-shadow: none;
            padding: 0;
            max-width: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Builder
