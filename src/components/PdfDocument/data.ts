import { UserDatatype } from 'types/userTypes';

const dummyData: UserDatatype = {
  userDetails: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Software Engineer',
    address: '123 Main Street, City, Country',
    linkedinUrl: 'https://www.linkedin.com/in/johndoe',
    phoneNumber: '+1234567890',
    email: 'john.doe@example.com',
    aboutMe:
      'Experienced Ruby on Rails Developer with 1.5 years in the field, known for innovative problem-solving and a dedication to delivering top-tier web applications. Proficient in Ruby, Ruby on Rails, and associated technologies, with a strong focus on crafting intuitive and user-centric web solutions. Skilled in designing robust databases, implementing RESTful APIs, and ensuring code reliability through rigorous testing. Proven ability to collaborate effectively across teams, consistently meeting project objectives and deadlines while upholding code quality standards. Seeking opportunities to apply my expertise to progressive tech companies, driving exceptional web development initiatives.',
  },
  education: {
    university: 'University of XYZ',
    program: 'Bachelor of Science in Computer Science',
    location: 'City, Country',
    startDate: '2018',
    endDate: '2022',
  },
  experience: [
    {
      organization: 'Tech Solutions Inc.',
      title: 'Software Engineer',
      location: 'City, Country',
      startDate: '2020-07-01',
      endDate: 'Present',
      details: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with team members to implement new features',
        'Performed code reviews and provided feedback to peers',
      ],
    },
    {
      organization: 'ABC Software',
      title: 'Intern',
      location: 'City, Country',
      startDate: '2019-06-01',
      endDate: '2019-09-01',
      details: [
        'Assisted in the development of a mobile application using React Native',
        'Tested and debugged code to ensure quality and reliability',
        'Participated in team meetings and contributed to project discussions',
      ],
    },
  ],
  projects: [
    {
      name: 'E-commerce Website',
      title: 'Full Stack Developer',
      details: [
        'Developed a responsive e-commerce website using React and Redux',
        'Implemented user authentication and authorization features',
        'Integrated payment gateway for processing online transactions',
      ],
    },
    {
      name: 'Task Management App',
      details: [
        'Designed and developed a task management application using MERN stack',
        'Implemented CRUD operations for tasks and users',
        'Deployed the application to AWS using Docker and CI/CD pipeline',
      ],
    },
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Git'],
};

export default dummyData;
