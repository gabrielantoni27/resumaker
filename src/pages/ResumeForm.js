import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';
import '../styles/ResumeForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    summary: '',
    phone: '',
    email: '',
    references: [{ name: '', contact: '' }],
    experiences: [{ role: '', company: '', date: '', description: '' }],
    education: [{ degree: '', year: '' }],
    skills: '',
    achievements: [''],
    licenses: [''],
    training: [''],
    certifications: ['']
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDocxDownload = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({ 
                  text: formData.name.toUpperCase(), 
                  bold: true, 
                  size: 28,
                  font: 'Helvetica'
                }),
              ],
              heading: HeadingLevel.HEADING_1,
              spacing: { after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({ 
                  text: formData.title.toUpperCase(), 
                  size: 22,
                  font: 'Helvetica'
                }),
              ],
              spacing: { after: 400 }
            }),
            new Paragraph({ 
              text: "ABOUT ME", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            new Paragraph({
              text: formData.summary,
              spacing: { after: 400 }
            }),
            new Paragraph({ 
              text: "CONTACT", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            new Paragraph({ 
              text: "PHONE", 
              bold: true,
              spacing: { after: 100 }
            }),
            new Paragraph(formData.phone),
            new Paragraph({ 
              text: "EMAIL", 
              bold: true,
              spacing: { after: 100 }
            }),
            new Paragraph(formData.email),
            new Paragraph({ spacing: { after: 400 } }),
            new Paragraph({ 
              text: "REFERENCES", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            ...formData.references.map(ref => [
              new Paragraph({ 
                text: ref.name.toUpperCase(), 
                bold: true,
                spacing: { after: 100 }
              }),
              new Paragraph(ref.contact),
              new Paragraph({ spacing: { after: 200 } })
            ]).flat(),
            new Paragraph({ 
              text: "EMPLOYMENT", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            ...formData.experiences.map(exp => [
              new Paragraph({ 
                text: exp.role.toUpperCase(), 
                bold: true,
                spacing: { after: 100 }
              }),
              new Paragraph(exp.date),
              new Paragraph({ 
                text: exp.company.toUpperCase(), 
                bold: true,
                spacing: { after: 100 }
              }),
              new Paragraph(exp.description),
              new Paragraph({ spacing: { after: 200 } })
            ]).flat(),
            new Paragraph({ 
              text: "EDUCATION", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            ...formData.education.map(edu => [
              new Paragraph({ 
                text: edu.degree.toUpperCase(), 
                bold: true,
                spacing: { after: 100 }
              }),
              new Paragraph(edu.year),
              new Paragraph({ spacing: { after: 200 } })
            ]).flat(),
            new Paragraph({ 
              text: "CERTIFICATIONS", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            ...formData.certifications.map(cert => [
              new Paragraph(cert),
              new Paragraph({ spacing: { after: 100 } })
            ]).flat(),
            new Paragraph({ 
              text: "LICENSES", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            ...formData.licenses.map(lic => [
              new Paragraph(lic),
              new Paragraph({ spacing: { after: 100 } })
            ]).flat(),
            new Paragraph({ 
              text: "TRAINING", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            ...formData.training.map(train => [
              new Paragraph(train),
              new Paragraph({ spacing: { after: 100 } })
            ]).flat(),
            new Paragraph({ 
              text: "ACHIEVEMENTS", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            ...formData.achievements.map(ach => [
              new Paragraph(ach),
              new Paragraph({ spacing: { after: 100 } })
            ]).flat(),
            new Paragraph({ 
              text: "SKILLS", 
              bold: true,
              heading: HeadingLevel.HEADING_2,
              spacing: { after: 200 }
            }),
            new Paragraph(formData.skills)
          ],
        },
      ],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'resume.docx');
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (index, field, value, key) => {
    const newArray = [...formData[key]];
    newArray[index][field] = value;
    setFormData({ ...formData, [key]: newArray });
  };

  const handleListChange = (index, value, key) => {
    const newList = [...formData[key]];
    newList[index] = value;
    setFormData({ ...formData, [key]: newList });
  };

  const addField = (key, emptyItem) => {
    setFormData({ ...formData, [key]: [...formData[key], emptyItem] });
  };

  const removeField = (index, key) => {
    const newArray = [...formData[key]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [key]: newArray });
  };

  return (
    <div className="resume-builder-container">
      <div className="form-column">
        <h2>Resume Builder</h2>
        
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Professional Title</label>
            <input name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleChange} />
          </div>
        </div>

        <div className="form-section">
          <h3>About Me</h3>
          <div className="form-group">
            <label>Summary</label>
            <textarea name="summary" value={formData.summary} onChange={handleChange} />
          </div>
        </div>

        <div className="form-section">
          <h3>References</h3>
          {formData.references.map((ref, i) => (
            <div key={i} className="array-item-group">
              <div className="form-group">
                <label>Name</label>
                <input value={ref.name} onChange={(e) => handleArrayChange(i, 'name', e.target.value, 'references')} />
              </div>
              <div className="form-group">
                <label>Contact</label>
                <input value={ref.contact} onChange={(e) => handleArrayChange(i, 'contact', e.target.value, 'references')} />
              </div>
              <button type="button" className="remove-btn" onClick={() => removeField(i, 'references')}>
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('references', { name: '', contact: '' })}>
            <i className="fas fa-plus"></i> Add Reference
          </button>
        </div>

        <div className="form-section">
          <h3>Experience</h3>
          {formData.experiences.map((exp, i) => (
            <div key={i} className="array-item-group">
              <div className="form-group">
                <label>Role</label>
                <input value={exp.role} onChange={(e) => handleArrayChange(i, 'role', e.target.value, 'experiences')} />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input value={exp.company} onChange={(e) => handleArrayChange(i, 'company', e.target.value, 'experiences')} />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input value={exp.date} onChange={(e) => handleArrayChange(i, 'date', e.target.value, 'experiences')} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea value={exp.description} onChange={(e) => handleArrayChange(i, 'description', e.target.value, 'experiences')} />
              </div>
              <button type="button" className="remove-btn" onClick={() => removeField(i, 'experiences')}>
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('experiences', { role: '', company: '', date: '', description: '' })}>
            <i className="fas fa-plus"></i> Add Experience
          </button>
        </div>

        <div className="form-section">
          <h3>Education</h3>
          {formData.education.map((edu, i) => (
            <div key={i} className="array-item-group">
              <div className="form-group">
                <label>Degree</label>
                <input value={edu.degree} onChange={(e) => handleArrayChange(i, 'degree', e.target.value, 'education')} />
              </div>
              <div className="form-group">
                <label>Year</label>
                <input value={edu.year} onChange={(e) => handleArrayChange(i, 'year', e.target.value, 'education')} />
              </div>
              <button type="button" className="remove-btn" onClick={() => removeField(i, 'education')}>
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('education', { degree: '', year: '' })}>
            <i className="fas fa-plus"></i> Add Education
          </button>
        </div>

        <div className="form-section">
          <h3>Certifications</h3>
          {formData.certifications.map((cert, i) => (
            <div key={i} className="array-item-group">
              <div className="form-group">
                <label>Certification</label>
                <input value={cert} onChange={(e) => handleListChange(i, e.target.value, 'certifications')} />
              </div>
              <button type="button" className="remove-btn" onClick={() => removeField(i, 'certifications')}>
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('certifications', '')}>
            <i className="fas fa-plus"></i> Add Certification
          </button>
        </div>

        <div className="form-section">
          <h3>Licenses</h3>
          {formData.licenses.map((lic, i) => (
            <div key={i} className="array-item-group">
              <div className="form-group">
                <label>License</label>
                <input value={lic} onChange={(e) => handleListChange(i, e.target.value, 'licenses')} />
              </div>
              <button type="button" className="remove-btn" onClick={() => removeField(i, 'licenses')}>
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('licenses', '')}>
            <i className="fas fa-plus"></i> Add License
          </button>
        </div>

        <div className="form-section">
          <h3>Training</h3>
          {formData.training.map((train, i) => (
            <div key={i} className="array-item-group">
              <div className="form-group">
                <label>Training</label>
                <input value={train} onChange={(e) => handleListChange(i, e.target.value, 'training')} />
              </div>
              <button type="button" className="remove-btn" onClick={() => removeField(i, 'training')}>
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('training', '')}>
            <i className="fas fa-plus"></i> Add Training
          </button>
        </div>

        <div className="form-section">
          <h3>Achievements</h3>
          {formData.achievements.map((ach, i) => (
            <div key={i} className="array-item-group">
              <div className="form-group">
                <label>Achievement</label>
                <input value={ach} onChange={(e) => handleListChange(i, e.target.value, 'achievements')} />
              </div>
              <button type="button" className="remove-btn" onClick={() => removeField(i, 'achievements')}>
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={() => addField('achievements', '')}>
            <i className="fas fa-plus"></i> Add Achievement
          </button>
        </div>

        <div className="form-section">
          <h3>Skills</h3>
          <div className="form-group">
            <label>Skills (one per line)</label>
            <textarea name="skills" value={formData.skills} onChange={handleChange} />
          </div>
        </div>

        <div className="download-buttons">
          <button className="download-btn pdf-btn" onClick={handlePrint}>
            <i className="fas fa-file-pdf"></i> Download PDF
          </button>
          <button className="download-btn word-btn" onClick={handleDocxDownload}>
            <i className="fas fa-file-word"></i> Download Word
          </button>
        </div>
      </div>

      <div className="preview-column">
        <div className="resume-preview-sandra" ref={componentRef}>
          <h1>{formData.name.toUpperCase()}</h1>
          <h2>{formData.title.toUpperCase()}</h2>
          
          <div className="section">
            <h3>ABOUT ME</h3>
            <p>{formData.summary}</p>
          </div>
          
          <div className="section">
            <h3>CONTACT</h3>
            <p><strong>PHONE</strong><br/>{formData.phone}</p>
            <p><strong>EMAIL</strong><br/>{formData.email}</p>
          </div>
          
          <div className="section">
            <h3>REFERENCES</h3>
            {formData.references.map((ref, i) => (
              <p key={i}><strong>{ref.name.toUpperCase()}</strong><br/>{ref.contact}</p>
            ))}
          </div>
          
          <div className="section">
            <h3>EMPLOYMENT</h3>
            {formData.experiences.map((exp, i) => (
              <div key={i} className="experience">
                <p><strong>{exp.role.toUpperCase()}</strong><br/>{exp.date}</p>
                <p><strong>{exp.company.toUpperCase()}</strong><br/>{exp.description}</p>
              </div>
            ))}
          </div>
          
          <div className="section">
            <h3>EDUCATION</h3>
            {formData.education.map((edu, i) => (
              <p key={i}><strong>{edu.degree.toUpperCase()}</strong><br/>{edu.year}</p>
            ))}
          </div>
          
          <div className="section">
            <h3>CERTIFICATIONS</h3>
            {formData.certifications.map((cert, i) => (
              <p key={i}>{cert}</p>
            ))}
          </div>
          
          <div className="section">
            <h3>LICENSES</h3>
            {formData.licenses.map((lic, i) => (
              <p key={i}>{lic}</p>
            ))}
          </div>
          
          <div className="section">
            <h3>TRAINING</h3>
            {formData.training.map((train, i) => (
              <p key={i}>{train}</p>
            ))}
          </div>
          
          <div className="section">
            <h3>ACHIEVEMENTS</h3>
            {formData.achievements.map((ach, i) => (
              <p key={i}>{ach}</p>
            ))}
          </div>
          
          <div className="section">
            <h3>SKILLS</h3>
            <p>{formData.skills.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default ResumeForm;