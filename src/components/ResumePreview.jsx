import ModernTemplate from './templates/ModernTemplate'
import ExecutiveTemplate from './templates/ExecutiveTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import CreativeTemplate from './templates/CreativeTemplate'
import ProfessionalTemplate from './templates/ProfessionalTemplate'

function ResumePreview({ data, template = 'modern' }) {
  const templateMap = {
    modern: ModernTemplate,
    executive: ExecutiveTemplate,
    minimal: MinimalTemplate,
    creative: CreativeTemplate,
    professional: ProfessionalTemplate,
  }

  const SelectedTemplate = templateMap[template] || ModernTemplate

  return <SelectedTemplate data={data} />
}

export default ResumePreview
