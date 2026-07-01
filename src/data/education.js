// Education timeline. Add a new object to this array to add a new
// entry -- no component changes needed. Entries are rendered in the
// order they appear here, so list most recent first.
/*
  TEMPLATE FOR ADDING A NEW EDUCATION ENTRY:
  Copy and paste this block inside the education array:

  {
    id: 'unique-id-here',        // String: Any unique identifier
    period: 'YYYY — YYYY',       // String: Year range or date (e.g. 2023 — 2027)
    degree: 'Degree Title',      // String: Course of study or qualification (e.g. BE, HSC)
    institution: 'School Name',  // String: Institution / College / School Name
    detail: 'Score or CGPA',     // String: Marks, CGPA or percentage details
    type: 'school/undergraduate', // String: Type categorization (optional)
  },
*/

export const education = [
  {
    id: 'edu-be-ece',
    period: '2023 — 2027',
    degree: 'B.E. Electronics and Communication Engineering',
    institution: 'University College of Engineering (BIT-Campus), Tiruchirappalli',
    detail: 'CGPA: 7.50',
    type: 'undergraduate',
  },
  {
    id: 'edu-hsc',
    period: 'March 2023',
    degree: 'HSC',
    institution: ' KAP Viswanatham Higher Secondary School, Tiruchirappalli',
    detail: '86%',
    type: 'school',
  },
  {
    id: 'edu-sslc',
    period: 'March 2021',
    degree: 'SSLC',
    institution: 'KAP Viswanatham Higher Secondary School, Tiruchirappalli',
    detail: 'Completed',
    type: 'school',
  },
]

export default education
