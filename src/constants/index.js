import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  tailwind,
  nodejs,
  mongodb,
  git,
  terenui,
  rikai,
  orange,
  carrent,
  delf, 
  tcf,
  toeic,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Parcours",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
  {
    title: "Amateur Designer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Rikai",
    icon: rikai,
    iconBg: "#383E56",
    date: "May 2022 - Juillet 2023",
    context:"Project ChatBot: Joining a frontend development team using ReactJS, HTML, CSS, JavaScript, TypeScript, and Bootstrap to work on a chatbot website for customers. I perform manual tests to verify the proper functioning of features developed by previous contributors. In case of error detection, I debug them. I also collaborate closely with my designer and backend developer colleagues to ensure seamless integration of data between the user interface and the application logic through the API. Additionally, I have also been responsible for adding new features to the website, mainly related to data exchange and display through APIs" ,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies in a chatbot development project.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Participating in test function",
    ],
  },
  {
    title: "Language certificate",
    company_name: "DELF",
    icon: delf,
    iconBg: "#383E56",
    date: "Avril 2023",
    context:"",
    points: [
      "DELF B2 80/100"
    ],
  },
  {
    title: "Language certificate",
    company_name: "TCF",
    icon: tcf,
    iconBg: "#383E56",
    date: "Decembre 2022",
    context:"",
    points: [
      "TCF 434/699"
    ],
  },
  {
    title: "Language certificate",
    company_name: "TOEIC",
    icon: toeic,
    iconBg: "#383E56",
    date: "Avril 2022",
    context:"",
    points: [
      "TOEIC 875/990"
    ],
  },
  {
    title: "Intern- Angular 11 Developer",
    company_name: "Orange",
    icon: orange,
    iconBg: "#E6DEDD",
    date: "March 2021 - September 2021",
    context:"I play the role of an interface developer for an application in the context of a smart home and IoT. This application allows users to create their own customized rules for their home using intelligent suggestions. My mission is to design interface templates that display abstract suggestions coherently and then progressively translate them into concrete rules. Afterward, I develop the product based on my mock-ups. I utilize Angular 11, TypeScript, HTML, CSS, Bootstrap, and Grid 960 for this project. Upon completion, I test the integration of data from two API sources developed by two team members. At the end of my internship, I have two different interface versions.",
    points: [
      "Creation of the web interface that implements the proposed recommendation system.",
      "Designing maquettes using Invision Studio, based on an analysis of user needs",
      "Building the complete interface based on the final version using Angular",
      "Creating an online REST API to model data and test the functionality of the developed websites.",
      "Integration with the official API developed in Python to retrieve data using the Flask framework.",
      "Writing a technical document for the Orange team and a internship report."
    ],
  },

  {
    title: "Intern- AngularJS Developer",
    company_name: "Terenui",
    icon: terenui,
    iconBg: "#E6DEDD",
    date: "Jun 2020 - August 2020",
    context:"I participated in a project to develop an application for a hospital. Firstly, I worked on the interface to make the application responsive. Then, I developed features using JavaScript and AngularJS that allow doctors and nurses to manage patient schedules and statuses. I also designed a mock-up for a new page within this application. After receiving approval from my supervisor, I developed this section of the interface with functionalities such as drag-and-drop, PDF export, and copying.",
    points: [
      "Rebuilding the interface based on requirements: modifying templates and improving source code performance.",
      "Adding new features and conducting JavaScript testing.",
      "Analyzing and resolving issues (bugs or missing functionalities) reported by clients.",
      " Writing the project report.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
export { services, technologies, experiences };