// ================================================
// src/data/about.js
// 🎯 YOUR PERSONAL INFORMATION
// ================================================

/**
 * 📚 WHY A DATA FILE?
 * 
 * 1. Content in one place - easy to update
 * 2. No hunting through JSX to change a word
 * 3. Can be swapped for a CMS later
 * 4. Clean separation: content vs presentation
 */

export const about = {
  // 🎯 BASIC INFO
  name: 'Netsanet Degu',
  title: 'Full-Stack Software Developer',
  tagline: 'Go-focused full-stack developer building complete web applications',
  
  // 🎯 SHORT BIO (for hero section)
  shortBio: `I build full-stack web applications, specializing in Go, with additional hands-on experience in Node.js, PHP, and .NET. I hold a Computer Science degree from Debre Tabor University and a Full-Stack Software Development certificate from IBT College Canada.`,
  
  // 🎯 LONG BIO (for about section)
  paragraphs: [
    `Hello! I'm Netsanet Degu, a Computer Science graduate from Debre Tabor University and a Full-Stack Software Development graduate of IBT College Canada.`,
    
    `I specialize in Go and have also worked with Node.js, PHP, and .NET. My full-stack training and project work combine application interfaces, backend development, and API integration to deliver complete web experiences.`,
    
    `My projects include a food ordering platform and a web-based campus navigation system for Debre Tabor University. I'm interested in building reliable, useful software across the full stack.`,
  ],
  
  // 🎯 QUICK FACTS (shown as cards or list)
  facts: [
    { label: 'Degree', value: 'Computer Science' },
    { label: 'University', value: 'Debre Tabor University' },
    { label: 'Certification', value: 'IBT College Canada' },
    { label: 'Focus', value: 'Full-Stack Development' },
  ],
  
  // 🎯 PHOTO
  photo: '/images/profile.jpg',
  
  // 🎯 RESUME
  resumeUrl: '/resume.pdf',
};

export default about;