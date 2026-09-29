// ================================================
// src/data/projects.js
// 🎯 YOUR PROJECTS
// ================================================

/**
 * 📚 HOW TO WRITE A GREAT PROJECT
 * 
 * For each project, include:
 * 
 * 1. BASIC: title, subtitle, description
 * 2. STORY: longDescription (why you built it)
 * 3. FEATURES: what it does (bullet points)
 * 4. TECH: what you used
 * 5. LEARNINGS: what you learned (very important!)
 * 6. LINKS: live, github, case study
 * 7. IMAGES: screenshots
 * 
 * Why learnings? Employers care about your growth mindset,
 * not just what you built.
 */

export const projects = [
  // ==========================================
  // PROJECT 1: ADDIS EATS
  // ==========================================
  {
    id: 'addis-eats',
    title: 'Addis Eats',
    subtitle: 'Food Ordering Platform',
    year: 2026,
    status: 'Completed',
    
    // 🎯 SHORT DESCRIPTION (1-2 sentences)
    description: `A complete food ordering platform for Ethiopian cuisine 
      with a customer storefront and admin dashboard.`,
    
    // 🎯 LONG DESCRIPTION (why you built it)
    longDescription: `Addis Eats is a full-featured food ordering application 
      I built during my React module at IBT College. The goal was to demonstrate 
      real-world patterns: routing, state management, forms, performance 
      optimization, and error handling — all in one cohesive app.
      
      The app has 43 features across two interfaces. The customer side handles 
      browsing, cart, checkout with validation, favorites, and order history. 
      The admin side provides dish CRUD, order management, and a real-time 
      analytics dashboard.`,
    
    // 🎯 KEY FEATURES
    features: [
      'Browse menu with live search and category filtering',
      'Shopping cart with localStorage persistence',
      'Validated checkout form with TeleBirr integration',
      'Favorites system with heart toggle',
      'Order history with one-click reorder',
      'Dark/light theme with system preference detection',
      'Admin panel with dish CRUD and order status updates',
      'Dashboard with revenue and top-dish analytics',
      'Fully responsive and keyboard accessible',
    ],
    
    // 🎯 TECH STACK
    tech: [
      'React 18',
      'React Router v6',
      'Zustand',
      'Context API',
      'Vite',
      'CSS Variables',
      'PropTypes',
    ],
    
    // 🎯 WHAT YOU LEARNED (very important!)
    learnings: [
      'State management trade-offs: Context vs Zustand for different use cases',
      'Route-based code splitting with React.lazy and Suspense',
      'Accessible form design with aria attributes and focus management',
      'Performance optimization with React.memo and selective selectors',
      'Error boundaries for graceful render-error handling',
      'Deriving state instead of storing it (validation, totals)',
      'Pure validation functions that can be tested without React',
    ],
    
    // 🎯 LINKS
    links: {
      live: 'https://addis-eats-flavor.netlify.app/', // ← UPDATE
      github: 'https://github.com/FREEDOMZEGREAT/Addis-eats-react',
    },
    
    // 🎯 IMAGES (screenshots)
    images: [
      '/images/addis-eats.png',
      '/images/addis-eats-menu.png',
      '/images/addis-checkout.png',
      '/images/admin-dashboard.png',
      '/images/admin-menu.png',
    ],
    
    // 🎯 FEATURED? (shown first, larger)
    featured: true,
  },

  {
    id: 'debre-tabor-campus-navigation',
    title: 'Debre Tabor University Campus Navigation',
    subtitle: 'Web-Based Campus Navigation System',
    status: 'Academic Project',
    description: 'A web-based campus navigation system for Debre Tabor University.',
    longDescription: 'This project is a web-based campus navigation system for Debre Tabor University.',
    features: [],
    tech: [],
    learnings: [],
    links: {
      live: '',
      github: 'https://github.com/FREEDOMZEGREAT/navigation_system',
    },
    images: ['/images/campus-navigation.svg'],
    featured: false,
  },
  
  // ==========================================
  // PROJECT 2: TEMPLATE (DUPLICATE FOR MORE)
  // ==========================================
  // {
  //   id: 'project-2',
  //   title: 'Project Title',
  //   subtitle: 'Short subtitle',
  //   year: 2024,
  //   status: 'Completed',
  //   description: 'Short description',
  //   longDescription: 'Long story',
  //   features: ['Feature 1', 'Feature 2'],
  //   tech: ['React', 'TypeScript'],
  //   learnings: ['Lesson 1', 'Lesson 2'],
  //   links: {
  //     live: '',
  //     github: '',
  //   },
  //   images: ['/images/project-2.png'],
  //   featured: false,
  // },
  
  // ==========================================
  // PROJECT 3: TEMPLATE
  // ==========================================
  // Add more projects as you build them
];

export default projects;