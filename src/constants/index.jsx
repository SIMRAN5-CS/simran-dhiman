import {
  FaGithub,
  FaLinkedin, 
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";

import { RiReactjsLine } from "react-icons/ri";
import {  SiMysql } from "react-icons/si";
import { DiJava, DiJavascript } from "react-icons/di";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SIMRAN DHIMAN",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "#",
  },
  {
    id: 2,
    name: "Food Ordering Web App",
    description:
      "Developed using ReactJS and using Redux Toolkit for state management, custom hooks, and lazy loading for efficient component rendering, allowing users to explore restaurant listings and manage cart items",
    image: projectImage2,
    githubLink: "https://react-ashy.vercel.app",
  },
  {
    id: 3,
    name: "Chat Web Application",
    description:
      "A Chat Web application built with React , Redux and  Tailwind CSS for UI and Firebase for backend services",
    image: projectImage3,
    githubLink: "https://chat-connect-sigma.vercel.app/",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the external API to fetch and display current weather data and forecasts for various locations, built with ReactJS.",
    image: projectImage4,
    githubLink: "https://simran5-cs.github.io/Weather-Web-App/",
  },
  {
    id: 5,
    name: "Drishti Dham",
    description:
      "A website displaying temples to embrace cultural heritage using Tailwind CSS for adaptive styling.",
    image: projectImage5,
    githubLink: "https://drishti-dham.vercel.app",
  },
];

export const BIO = [
  "Front-End Web Developer",
  "Computer science Undergraduate at GJUST ",
  "Have deep understanding of HTML, CSS, and JavaScript and  proficiency in modern frameworks like React, possessing a versatile skill set to craft stunning and unforgettable web experiences.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <DiJavascript className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Javascript",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-cyan-600 lg:text-5xl" />,
    name: "Tailwind CSS",
  },
  
  {
    icon: <SiMysql className="text-4xl text-green-600 lg:text-5xl" />,
    name: "SQL",
    },
  {
    icon: <SiFirebase className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Firebase",
  },
  {
    icon: <DiJava className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Core Java",
    
  },
];

export const EXPERIENCES = [
  {
    title: "ReactJS Intern",
    company: "Presen",
    duration: "September 2024 - Present",
    description:
      "As the Frontend Developer Intern at an early startup, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },

];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (CSE) ",
    institution: "GJUST, Haryana",
    duration: "2021 - 2025",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, React.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/SIMRAN5-CS",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://linkedin.com/in/simrandhiman05",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {   href: "https://leetcode.com/u/Simran52/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  
];
