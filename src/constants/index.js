import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  userInterface,
  webdeveloper,
  quicklearner,
  reactnative,
  threejs,
  foodr,
  goalmanager,
  nationaljob,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "projects" },
  { id: "contact", title: "Contact" },
];

// Used by Tech component
export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
];

// Used by Feedbacks component
export const testimonials = [
  {
    testimonial: "Abdiladif builds modern, responsive websites with great attention to design, usability, and performance. The final result exceeded our expectations.",
    name: "Helen Tesfaye",
    designation: "General Manager",
    company: "Arbamicnh Technology",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    testimonial: "Working with Abdiladif on our mobile app was a smooth experience. He delivered a clean, user-friendly app with excellent performance across devices.",
    name: "Henok Million",
    designation: "COO",
    company: "EagleLion System Technology",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Abdiladif has a strong eye for UI and UX. His web and mobile development work helped us create a professional and engaging digital presence.",
    name: "Samrawit Bekele",
    designation: "CEO",
    company: "Trial PLC",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
];

// Used by Works component – cleaned and deduplicated
export const projects = [
    {
    name: "National Jobs",
    description: "A job application website where employers post jobs and job seekers apply. Built as a frontend developer with responsive design and smooth navigation.",
    tags: [
      { name: "Nextjs", color: "blue-text-gradient" },
      { name: "tailwind css", color: "green-text-gradient" },
    ],
    image: nationaljob, // using same image as placeholder; replace if you have a dedicated one
    source_code_link: "https://github.com/abdiladifrazaam/Movie-finder-App.git",
  },
 
   {
    name: "FRS",
    description: "food recommendation App is a cross-platform mobile application that lets you search for any food item by name and instantly get details. Perfect for discovering what to eat next.",
    tags: [
      { name: "react native", color: "blue-text-gradient" },
      { name: "tailwind css", color: "green-text-gradient" }, 
    ],
    image: foodr,
    source_code_link: "https://github.com/abdiladifrazaam/Foodr-App.git",
  },
   {
    name: "goal manager App",
    description: "A dynamic goal manager app that helps users set, track, and achieve their personal and professional goals with a clean and intuitive interface.",
    tags: [
      { name: "react native", color: "blue-text-gradient" },
      { name: "tailwind css", color: "green-text-gradient" },
      
    ],
    image: goalmanager,
    source_code_link: "https://github.com/abdiladifrazaam/Goal-Manager-App.git",
  },
 
  ];  

 export const services = [
 {
    title: "ui/ux Designer",
    icon: userInterface,
  },
  {
    title: "Quick-learner",
    icon: quicklearner,
  },
  {
    title: "Web Developer",
    icon: webdeveloper,
  },
    {
    title: "React Native Developer",
    icon: reactnative,
  },
];

