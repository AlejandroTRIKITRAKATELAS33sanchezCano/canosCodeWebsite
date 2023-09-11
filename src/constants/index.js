import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  sql,
  html,
  css,
  reactjs,
  nodejs,
  java,
  git,
  figma,
  python,
  mui,
  npm,
  docker,
  meta,
  Ing_Martin_Lopez_Rito,
  rc_dude,
  ipn,
  multi,
  gestick,
  chat,
  fernanda,
  molly,
  mora,
  video,
  android,
  ui,
  game,
  armando
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
  {
    title: "Video Editor",
    icon: video,
  },
  {
    title: "Android Studio Developer",
    icon: android,
  },
  {
    title: "UI/UX Developer",
    icon: ui,
  },
  {
    title: "Game Designer",
    icon: game,
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
    name: "MySQL",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "npm",
    icon: npm,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "office technician",
    company_name: "Ing Martin Lopez Rito",
    icon: Ing_Martin_Lopez_Rito,
    iconBg: "#fff",
    date: "Agust 2017 - Agust 2020",
    points: [
      "Use Of All Microsoft Office Packages.",
      "Collaboration With Work Teams In The Preparation Of Office Projects.",
      "Advanced use of typing technique.",
    ],
  },
  {
    title: "Web Designer And Video Editor",
    company_name: "RC DUDE MX",
    icon: rc_dude,
    iconBg: "#fff",
    date: "Agust 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Video Editor In Youtube Channel And Multimedia Creator.",
      "Implementing responsive design.",
    ],
  },
  {
    title: "Java Developer, Web Developer And Mobile Developer",
    company_name: "IPN Cecyt 9 Juan De Dios Batiz",
    icon: ipn,
    iconBg: "#fff",
    date: "Agust 2020 - Agust 2023",
    points: [
      "Programming Technician Graduate.",
      "Expobatiz 2022 Winner.",
      "Participation in the best national prototypes of the IPN.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developer in ReactJS and React Native.",
      "Use Of Databases like MySQL.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "TATA Consultancy Services",
    icon: meta,
    iconBg: "#fff",
    date: "Agust 2023 - Septermber 2023",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Javascript and python training.",
      "Use Of English With Clients And Project Managers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "His ability to work under pressure is very good, he maintains order in the team and knows how to land ideas from clients.",
    name: "Jaime Minor",
    designation: "Software Engineer",
    company: "IPN",
    image: ipn,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Cano does.",
    name: "Fernando Adauto",
    designation: "CEO",
    company: "RC DUDE MX",
    image: rc_dude,
  },
  {
    testimonial:
      "At his young age, he has extensive experience in developing web applications with innovative technologies, a professional in the field of software development.",
    name: "Armando Alvarez",
    designation: "Software Engineer",
    company: "IPN",
    image: armando,
  },
];

const projects = [
  {
    name: "MultiClash",
    description:
      "A Desktop Aplication With Java That Consist In A Pokemon Style Videogame, It Was Make With Java And Files As Database Because I Wanted To Do A Simple Project. It's totally asyncronous.",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "Eclipse",
        color: "black-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: multi,
    source_code_link: "https://github.com/AlejandroTRIKITRAKATELAS33sanchezCano/MultiClash/",
  },
  {
    name: "Gestick",
    description:
      "web application aimed at micro-SMEs offering a point of sale, financial tool and an inventory manager, it was nominated for the best project at ExpoBatiz 2022 and awarded as the best national prototype of the IPN.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "gray-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: gestick,
    source_code_link: "https://github.com/AlejandroTRIKITRAKATELAS33sanchezCano/GestickCLIENT/",
  },
  {
    name: "Chat NodeJS",
    description:
      "It is a chat made with sockets in javascript and NodeJS as a server, I did it as a practice to make asynchronous systems and later put this functionality into Gestick, it has cybersecurity and is totally asynchronous.",
    tags: [
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/AlejandroTRIKITRAKATELAS33sanchezCano/Chat-NODEJS/",
  },
  {
    name: "Digital Invitations",
    description:
      "System that allows you to make your own invitation for social events and have it digitally on the web, so you can invite all your friends without the need for physical invitations.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "orange-text-gradient",
      },
    ],
    image: fernanda,
    source_code_link: "https://github.com/AlejandroTRIKITRAKATELAS33sanchezCano/Fernanda-XV-2",
  },
  {
    name: "Molly",
    description:
      `It was a video game in the browser that sought to generate empathy through the "IRI" scale, it was the winner of the ExpoBatiz 2022 contest for best programming project. It will have a new version"`,
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Servlets",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "orange-text-gradient",
      },
    ],
    image: molly,
    source_code_link: "https://github.com/AlejandroTRIKITRAKATELAS33sanchezCano?tab=repositories/",
  },
  {
    name: "La Mas Querida MX",
    description:
      "It is a web page of a restaurant with the option of making a reservation, locating the place where the restaurant is located and checking its menu, it was done in 2 hours and currently it has worked wonderfully for them.",
    tags: [
      {
        name: "JavaScript",
        color: "white-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "purple-text-gradient",
      },
    ],
    image: mora,
    source_code_link: "https://lamasqueridamx.com/menu/",
  },
];

export { services, technologies, experiences, testimonials, projects };
