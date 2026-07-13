// Projects. Add a new object to this array to add a new project --
// it will automatically appear in the projects grid and get its own
// modal.
/*
  TEMPLATE FOR ADDING A NEW PROJECT:
  Copy and paste this block inside the projects array:

  {
    id: 'unique-id-here',        // String: Any unique identifier
    title: 'Project Title',      // String: Name of the project
    category: 'Category Name',   // String: Technical field (e.g. Embedded System, VLSI & FPGA)
    tools: ['React', 'CSS'],     // Array: Tech/tools tags to display at the bottom of the card
    description: 'Main body',    // String: Paragraph describing the project's purpose and logic
    features: [                  // Array: Bullet point lists under features in the detail modal (can include clickable https:// urls)
      'Feature description 1',
      'Feature description 2',
      'https://associated-link.vercel.app/', // URL strings will automatically become clickable links
    ],
    timeline: 'Period',          // String: Time period (e.g. Dec 2025 — Jan 2026)
    github: '#',                 // String/null: Link to repo (optional placeholder)
    liveDemo: '#',               // String/null: Link to demo (optional placeholder)
    image: null,                 // String/null: Card preview image path (e.g., '/images/project.jpg')
    gallery: [],                 // Array: Paths to multiple gallery images (optional)
  },
*/

export const projects = [
  {
    id: 'digital-alarm-clock',
    title: 'Digital Alarm Clock ',
    category: 'VLSI-INTERNSHIP',
    tools: ['Verilog HDL', 'Xilinx Vivado', 'Digital Electronics', 'Testbench Simulation', 'Timing Analysis'],
    description:
      'Designed and implemented a digital alarm clock in Verilog HDL. Verified the functionality through extensive testbench simulations, RTL schematics generation, and rigorous timing analysis using Xilinx Vivado.',
    features: [
      'Designed using Verilog HDL with modular architecture',
      'Simulated and verified functionality with testbench simulations',
      'RTL schematics generation and rigorous timing analysis'
    ],
    timeline: 'Dec 2025 — Jan 2026',
    github: '#',
    liveDemo: '#',
    image: null,
    gallery: [],
  },
  {
    id: 'smart-door-lock',
    title: 'Smart Door Lock System',
    category: 'Embedded Systems',
    tools: ['Tinkercad', 'C++ (Arduino)', 'Microcontrollers', 'Servo Motors', 'Sensors & Actuators', 'Circuit Simulation'],
    description:
      'Designed, wired, and simulated an automated smart door lock system using microcontrollers. Utilized Tinkercad to simulate sensor feeds, buzzer alerts, and servo-actuated locks, coding the firmware in C++.',
    features: [
      'Developed firmware in C++ for Arduino microcontrollers',
      'Simulated sensor feeds, buzzer alerts, and servo-actuated locks',
      'Verified circuit design using Tinkercad simulation'
    ],
    timeline: '2025',
    github: '#',
    liveDemo: '#',
    image: null,
    gallery: [],
  },
  {
    id: 'tech-dining-system',
    title: 'Tech Dining System (Naan Mudhalvan)',
    category: 'Design Thinking',
    tools: ['Design Thinking', 'System Prototyping', 'User Experience (UX)', 'Naan Mudhalvan Framework'],
    description:
      'Developed a sustainable and customer-centric dining management solution. Applied Design Thinking methodologies to construct layout maps, user flows, and service prototypes targeting waste reduction and ordering speed.',
    features: [
      'Applied Design Thinking methodologies (Empathize, Define, Ideate, Prototype, Test)',
      'Constructed detailed layout maps and user flows',
      'Designed service prototypes targeting waste reduction and ordering speed'
    ],
    timeline: '2024',
    github: '#',
    liveDemo: '#',
    image: null,
    gallery: [],
  },
  // {
  //   id: 'medtech-digital-partner',
  //   title: 'MEDTECH DigitalPartner (Startup Website)',
  //   category: 'Web Development',
  //   tools: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  //   description:
  //     'Designed and developed the frontend and client layout for a medical startup portal, showcasing dynamic layouts and user-friendly medical data management.',
  //   features: [
  //     'Modern glassmorphism UI/UX design',
  //     'Responsive layouts for desktop and mobile viewports',
  //     'Simulated patient and device telemetry data management'
  //   ],
  //   timeline: '2026',
  //   github: '#',
  //   liveDemo: '#',
  //   image: null,
  //   gallery: [],
  // },
  {
    id: 'modern-ece-portfolio',
    title: 'Modern Portfolios & Website',
    category: 'Web Development',
    tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    description:
      'Built a state-of-the-art interactive digital portfolio website. Showcases ECE coursework, hardware projects, software development work, and certifications.',
    features: [
      'High-performance React single-page application',
      'Smooth scroll integration via Lenis and animations using Framer Motion',
      'Fully responsive grid systems and custom-tailored dark theme styling',
      'https://divyalakshmani-portfolio.vercel.app/',
      'https://shahul-portfolio-phi.vercel.app/',
      'https://medtech-peach.vercel.app/'
    ],
    timeline: '2026',
    github: '#',
    liveDemo: '#',
    image: null,
    gallery: [],
  },

  {
    id: 'full-stack-development',
    title: 'FULL STACK DEVELOPMENT',
    category: 'FULL STACK DEVELOPMENTt',
    tools: ['React', 'Tailwind CSS', 'Django', 'Github'],
    description:
      'Developed a CONTENT-IQ website, which helpful for content cerators to generate a daily content based on trending topis and suggesting #Hastags to make virals ',
    features: [
      'AI  Integration for generating Post and Reels',
      'Suggesting Tredning Hashtags ',
      'Easily predict your content reaching details',
      'Analyse your Insights',
      'Trend Radar and Content sheduling calender makes work easy',
    ],
    timeline: '2026',
    github: '#',
    liveDemo: '#',
    image: null,
    gallery: [],
  },
  
  {
  id: 'ai-speech-translator',

  title: 'AI Multilingual Speech Translator',

  category: 'Artificial Intelligence & Web Development',

  tools: [
    'Google AI Studio',
    'Gemini AI',
    'JavaScript',
    'React',
    'HTML5',
    'CSS3',
    'Web Speech API'
  ],

  description:
    'Developed an AI-powered multilingual speech translation web application capable of recognizing spoken input in multiple languages, automatically detecting the source language, translating it into English in real time, generating an accurate transcript, and delivering the translated content through natural AI voice synthesis. The application provides a seamless communication experience with an intuitive user interface, making language barriers easier to overcome.',

  features: [
    
    'AI-powered automatic language detection.',
    'Real-time translation into English.',
    'Live transcript generation of spoken content.',
    'Natural AI voice playback of translated text.',
    'Certificate of Completion from GUVI × HCL for successfully building and deploying the application.',
    'https://ai-live-translator.ai.studio',
  ],

  timeline: 'July 2026',
  github: '#',
  liveDemo: '#',
  image: null,

  gallery: [],
},
]

export default projects
