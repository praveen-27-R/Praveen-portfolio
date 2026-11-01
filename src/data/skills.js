// Skills data, categorized for Software Tools and Core ECE Tools.
// Each item can use:
//   logo: 'devicon-key'     → loads from devicons CDN automatically
//   image: 'https://...'   → use ANY direct image URL (PNG, SVG, JPG) for the logo
//   Both logo and image can be combined; image takes priority if provided.
/*
  TEMPLATE FOR ADDING A NEW SKILL:

  Using a Devicon (auto logo):
    { name: 'React', logo: 'react' }

  Using a custom image URL (paste any logo URL you find online):
    { name: 'Wokwi', image: 'https://avatars.githubusercontent.com/u/73233838' }

  Using both (image overrides logo):
    { name: 'Firebase', logo: 'firebase', image: 'https://...' }

  TEMPLATE FOR ADDING A NEW CATEGORY:
    {
      id: 'category-id',
      name: 'Category Display Name',
      items: [
        { name: 'Skill 1', logo: 'logo1' },
        { name: 'Skill 2', image: 'https://direct-logo-url.png' },
      ],
    },
*/

export const skillCategories = [
  {
    id: 'software-tools',
    name: 'Software Tools',
    items: [
      { name: 'C Language', logo: 'c' },
      { name: 'Python', logo: 'python' },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'HTML5', logo: 'html5' },
      { name: 'CSS3', logo: 'css3' },
      { name: 'SQL', logo: 'sql' },
      { name: 'VS Code', logo: 'vscode' },
      { name: 'Django', logo: 'django' },
      { name: 'React', logo: 'react' },
      { name: 'Git', logo: 'git' },
      { name: 'GitHub', logo: 'github' },
      { name: 'Vercel', logo: 'vercel' },
      { name: 'Firebase', image: 'fbb.png' },
    ],
  },
  {
    id: 'core-tools',
    name: 'Core Tools',
    items: [
      { name: 'Embedded C', logo: 'embeddedc' },
      { name: 'Verilog HDL', logo: 'verilog' },
      { name: 'MATLAB', logo: 'matlab' },
      { name: 'Keil', logo: 'keil' },
      { name: 'Proteus VSM', logo: 'proteus' },
      { name: 'Xilinx Vivado', logo: 'vivado' },
      { name: 'CANoe', logo: 'canoe' },
      // --- IoT Tools (using direct image URLs) ---
      { name: 'Wokwi', image: 'ww.png' },
      { name: 'ThingSpeak', image: 'tp.jpg' },
      { name: 'HiveMQ', image: 'hv.png' },
      { name: 'Node-RED', logo: 'nodered' },
      { name: 'Firebase', image: 'fbb.png' },
    ],
  },
]

export default skillCategories
