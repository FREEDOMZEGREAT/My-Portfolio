// ================================================
// src/data/social.js
// 🎯 SOCIAL LINKS
// ================================================

export const social = {
  email: 'netsanetdegu387@gmail.com',
  phone: '+251918072093',
  github: 'https://github.com/FREEDOMZEGREAT',
  linkedin: 'https://www.linkedin.com/in/netsanet-degu-429755366',
  instagram: 'https://www.instagram.com/netsanet_degu_21/',
  
  // Optional
  twitter: '', // Leave empty if you don't have one
  website: '', // Leave empty if no personal site
};
export const socialLinks = [
  {
    name: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/${social.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Netsanet, I would like to connect with you.')}`,
    external: true,
  },
  { name: 'linkedin', label: 'LinkedIn', href: social.linkedin, external: true },
  { name: 'instagram', label: 'Instagram', href: social.instagram, external: true },
  { name: 'github', label: 'GitHub', href: social.github, external: true },
  { name: 'email', label: 'Email', href: `mailto:${social.email}`, external: false },
  { name: 'phone', label: 'Phone', href: `tel:${social.phone}`, external: false },
];

export default social;