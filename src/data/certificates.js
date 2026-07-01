// Certificates. Add a new object to this array to add a new
// certificate card to the slider.
/*
  TEMPLATE FOR ADDING A NEW CERTIFICATE:
  Copy and paste this block inside the certificates array:

  {
    id: 'unique-id-here',          // String: Any unique identifier
    title: 'Certificate Title',     // String: Name of the course or certificate
    issuer: 'Organization Name',    // String: Who issued it (e.g. NPTEL, Coursera)
    credential: 'Completed/Pursuing', // String: Status badge text
    date: 'Date or Period',         // String: Date (optional)
    image: null,                    // String or null: Image path (e.g., '/images/cert.jpg')
    link: '#',                      // String: URL to view/verify certificate
  },
*/

export const certificates = [
  {
    id: 'nptel-ml',
    title: 'Introduction to Machine Learning ELITE 68%',
    issuer: 'NPTEL',
    credential: 'Completed',
    date: '2026',
    image: null,
    link: '#',
  },
  {
    id: 'web-dev-pmkvy',
    title: 'Web Development',
    issuer: 'PMKVY Scheme',
    credential: 'Completed',
    date: '2025',
    image: null,
    link: '#',
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking',
    issuer: 'Naan Mudhalvan',
    credential: 'Completed',
    date: '2025',
    image: null,
    link: '#',
  },
  {
    id: 'adas-simulation',
    title: 'ADAS ECU Simulation & Testing LEVEL I & II',
    issuer: 'Naan Mudhalvan',
    credential: 'Completed',
    date: '2025-26',
    image: null,
    link: '#',
  },
  {
    id: 'adas-simulation',
    title: 'SANP ON CHIP WORKSHOP',
    issuer: 'PROBE 25 NITT',
    credential: 'Completed',
    date: '2025',
    image: null,
    link: '#',
  },
]

export default certificates
