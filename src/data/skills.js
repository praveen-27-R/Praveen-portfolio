// Skills data, categorized for Web Development and Core ECE.
// Each item maps to its official devicon name or a custom SVG logo.
/*
  TEMPLATE FOR ADDING A NEW SKILL / CATEGORY:

  A. To add a new skill to an existing category, copy and paste this inside that category's items list:
     { name: 'Skill Name', logo: 'logo-key' }
     * Note: 'logo-key' will map to devicons (like 'python', 'react'). 
       If it is a custom tool (like Keil, Proteus, Vivado, CANoe), its custom SVG is handled in Skills.jsx.

  B. To add a new skill category, copy and paste this block inside the skillCategories array:
     {
       id: 'category-id',
       name: 'Category Display Name',
       items: [
         { name: 'Skill 1', logo: 'logo1' },
         { name: 'Skill 2', logo: 'logo2' },
       ],
     },
*/

export const skillCategories = [
  {
    id: 'web-lang',
    name: 'Web Dev - Languages',
    items: [
      { name: 'Python', logo: 'python' },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'HTML5', logo: 'html5' },
      { name: 'CSS3', logo: 'css3' },
      { name: 'SQL', logo: 'sql' },
    ],
  },
  {
    id: 'web-tools',
    name: 'Web Dev - Tools',
    items: [
      { name: 'VS Code', logo: 'vscode' },
      { name: 'Django', logo: 'django' },
      { name: 'React', logo: 'react' },
      { name: 'Git', logo: 'git' },
      { name: 'GitHub', logo: 'github' },
      { name: 'Vercel', logo: 'vercel' },
    ],
  },
  {
    id: 'core-lang',
    name: 'Core ECE - Languages',
    items: [
      { name: 'Embedded C', logo: 'embeddedc' },
      { name: 'Verilog HDL', logo: 'verilog' },
    ],
  },
  {
    id: 'core-tools',
    name: 'Core ECE - Tools',
    items: [
      { name: 'MATLAB', logo: 'matlab' },
      { name: 'Keil', logo: 'keil' },
      { name: 'Proteus VSM', logo: 'proteus' },
      { name: 'Xilinx Vivado', logo: 'vivado' },
      { name: 'CANoe', logo: 'canoe' },
    ],
  },
]

export default skillCategories
