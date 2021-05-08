module.exports = {
  name: 'Jesus',
  lastName: 'Castaneda',
  title: 'Full Stack Developer',
  age: 34,
  bio: `I am a Javascript Fullstack Developer, with an 9 years web development experience. 
    Looking for a place that offers new challenges and good vibes where I can implement my knowledge in and learn more to improve myself.`,
  company: 'Digital On Us',
  skills: [
    {
      name: 'Html 5',
      level: 'Advanced',
      icon: 'FaHtml5',
    },
    {
      name: 'CSS 3',
      level: 'Advanced',
      icon: 'FaCss3Alt',
    },
    {
      name: 'Javascript',
      level: 'Advanced',
      icon: 'FaJs',
    },
  ],
  experience: [],
  languages: [
    {
      id: 1,
      name: 'Spanish',
      level: 'Native',
    },
    {
      id: 2,
      name: 'English',
      level: 'Fluent',
    },
    {
      id: 3,
      name: 'Italian',
      level: 'Intermediate',
    }
  ],
  hobbies: ['family', 'outdoors', 'read', 'soccer', 'cars'],
  links: {
    linkedin: {
      site: 'Linkedin',
      url: 'https://www.linkedin.com/in/imfanjs/',
    },
    github: {
      site: 'Github',
      url: 'https://github.com/ImFanJs',
    },
    platzi: {
      site: 'Platzi',
      url: 'https://platzi.com/@ImFanJs/',
    },
    instagram: {
      site: 'Instagram',
      url: 'https://instagram.com/ImFanJs/',
    },
    twitter: {
      site: 'Twitter',
      url: 'https://twitter.com/ImFanJs',
    },
    facebook: {
      site: 'Facebook',
      url: 'https://web.facebook.com/ImFanJs/',
    },
    fcc: {
      site: 'Free Code Camp',
      url: 'https://www.freecodecamp.org/imfanjs',
    },
  },
  tags: [],
  education: [],
  projects: [
    {
      name: 'Contacts App',
      url: 'projects/contacts',
      tools: ['React', 'Context API', 'React Hooks', 'Third party APIs', 'ES6', 'Material UI'],
      description:
        'This is a project to manage contacts information, to practice React and Material UI',
    },
    {
      name: 'Weather App',
      url: 'projects/wheater',
      tools: ['React', 'Context API', 'React Hooks', 'Third party APIs', 'ES6', 'Material UI'],
      description:
        'This is a project to search the weather in determinate city, to practice React and Material UI',
    },
  ],
}
