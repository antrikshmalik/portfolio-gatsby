import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Antriksh | React Dev', // e.g: 'Name | Developer'
  lang: 'English, Hindi, French', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Antriksh Malik',
  subtitle: 'I am a React Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'my_pic4.jpg',
  paragraphOne:
    'I am an undergraduate student, pursuing a degree in Bachelor of Engineering in ' +
    'Computer Science from Bennett University. I am a self taught web developer and an open source ' +
    'enthusiast with a toxic love for Fedora OS.',
  paragraphTwo:
    'I like to resolve design problems, create smart user interface and imagine useful interaction,' +
    ' developing rich web experiences & web applications.\n' +
    'When not working or futzing around with code, I study how to escape from University. Actually for hire.',
  paragraphThree: 'Feel free to checkout my resume for further details',
  resume: 'https://drive.google.com/file/d/1bnG5y7U3jtgk9cUxZXNogFu1jxC3p2DF/view?usp=sharing',
  // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Crown-clothing.png',
    title: 'CROWN clothing',
    info:
      'A mock e commerce platform developed with ReactJS, Redux, Firebase, SCSS, ' +
      'styled-components (I was experimenting). The application has local storage persistence for' +
      'the selected items in cart. Lodash is also used to memoize the calculations for total ' +
      'payment. The application has been carefully designed in order to ' +
      'get the best web performance possible and all the components are highly reusable.' +
      ' To accept payments, Stripe API is used.',
    info2: '',
    url: 'https://crown-e-commerce-app.herokuapp.com',
    repo: 'https://github.com/antrikshmalik/e-commerce-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'evento.png',
    title: 'Evento',
    info:
      'A platform developed with HTML5, CSS3 and JavaScript in the frontend. Built with the ' +
      'old school ejs method and a backend consisting of NodeJS and MongoDB. The application has ' +
      'automatic mailing abilities for booking a vendor, a custom SignUp and LogIn that uses JWT. ' +
      'It also has a history feature allowing one to see all the vendors that the person booked. ',
    info2: '',
    url: 'https://eventohosted.herokuapp.com/',
    repo: 'https://github.com/AATMA-HELMHOLTZ/EventoWeb', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'RoboFriends',
    info:
      'A react app that takes a list of users and filters out the user that you are searching' +
      ' for in real time.',
    info2: '',
    url: 'https://antrikshmalik.github.io/robofriends_new/',
    repo: 'https://github.com/antrikshmalik_robofriends_new', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'malikantriksh@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/AntrikshMalik',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/antriksh-malik-8a4806193/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/antrikshmalik',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
