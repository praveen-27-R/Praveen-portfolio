// Internships. Add a new object to this array to add a new
// internship entry to the timeline.
/*
  TEMPLATE FOR ADDING A NEW INTERNSHIP:
  Copy and paste this block inside the internships array:

  {
    id: 'unique-id-here',        // String: Any unique identifier
    company: 'Company Name',     // String: Host institution/company
    role: 'Role Title',          // String: Internship title / role
    period: 'Start — End Date',  // String: Timeframe (e.g. Dec 2025 — Jan 2026)
    focus: ['Skill1', 'Skill2'], // Array: Key learning focuses
    tools: ['Tool1', 'Tool2'],   // Array: Specific tools utilized (e.g., Vivado, Proteus VSM)
    description: 'Brief summary',// String: Main description paragraph
    highlights: [                // Array: Bullet point lists of achievements/tasks
      'Bullet point 1',
      'Bullet point 2',
    ],
  },
*/

export const internships = [
  {
  id: 'robotics-automation-ingage',
  company: 'InGage Technologies - Chennai',
  role: 'Robotics and Automation Intern',
  period: '26 Oct 2026 — 30 Oct 2026',
  focus: [
    'Robotics and Automation',
    'Embedded Systems',
    'Sensor Interfacing',
    'Microcontroller Programming',
    'Motor Control',
    '3D Printing'
  ],
  tools: [
    'Arduino',
    'ESP32',
    '3D Printer'
  ],
  description: 'Completed a hands-on internship in Robotics and Automation, gaining practical experience in sensor interfacing, microcontroller-based robotic systems, motor control, wireless communication, and 3D printing. Explored how electronic hardware and embedded programming work together to develop automated robotic applications.',
  highlights: [
    
    'Worked with Arduino and ESP32 microcontrollers for robotics applications.',
    'Designed and implemented a Line & Light Following Robot using IR sensor light detection sensors.',
    'Gained hands-on experience in 3D printer operation and prototype fabrication.'
  ],
},

  {
    id: 'nit-trichy-analog',
    company: 'VDART',
    role: 'OJT IN FULL STACK DEVELOPMENT',
    period: 'JUN 2026',
    focus: ['Frontend ', 'Backend', 'API calling'],
    tools: ['React','Django'],
    description:
      'Completed 1 month Intenship at Vdart academic as OJT in Full Stack Development gained hands-on experience in developing real world software products',
    highlights: [
      'React frame work for Frontend Development',
      'Django frame work for Frontend Development',
      'API calling for AI integraions',
    ],
  },

  {
    id: 'nit-trichy-vlsi',
    company: 'NIT Trichy',
    role: 'Internship in Design and Analysis of Digital VLSI',
    period: 'JAN 2026',
    focus: ['Digital VLSI', 'FPGA Design', 'Verilog HDL', 'Xilinx Vivado'],
    tools: ['Xilinx Vivado', 'Verilog HDL'],
    description:
      'Gained hands-on experience in digital VLSI and FPGA design by implementing, simulating, and analyzing combinational and sequential circuits using Verilog HDL and Xilinx Vivado. Culminated in the design and implementation of a digital alarm clock and verified functionality through simulation and timing analysis.',
    highlights: [
      'Implemented digital alarm clock project using Verilog HDL',
      'Simulated and verified circuits with Xilinx Vivado',
      'Performed timing analysis and optimization',
    ],
  },
  {
    id: 'nit-trichy-analog',
    company: 'NIT Trichy',
    role: 'Internship in Analog and Digital Circuit Design and Simulation',
    period: 'Feb 2025',
    focus: ['Analog & Digital Circuits', 'Circuit Simulation', 'Proteus VSM'],
    tools: ['Proteus VSM','Simulation '],
    description:
      'Evaluated multiple analog and digital circuits utilizing Proteus Virtual System Modeling (VSM) simulator software, analyzing the performance and frequency response of circuits.',
    highlights: [
      'Simulated and analyzed frequency response of analog circuits',
      'Evaluated digital circuit functionality in Proteus VSM',
      'Analyzed circuit performance and parameters',
    ],
  },
]

export default internships
