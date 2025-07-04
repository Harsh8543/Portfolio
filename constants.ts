
import { PortfolioData } from './types';
const profile = "/pic.jpg";
const travelRootsImage = "/Travel.png";
const aiEvaluateImage = "/evalute.png";
const Prescripto = "/Harshsh.png";
const RealTimeChat= "/Vik.png";
const Aigrader="/Aigrader.png"
export const ACCENT_COLOR = "teal"; 

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Harsh Singh",
  title: "Full-Stack Developer, APP Developer,API Tester & AI Enthusiast",
  tagline: "Building innovative solutions with a passion for technology and user experience. Exploring the frontiers of AI and scalable web applications.",
  profileImage: profile,
  contact: {
    phone: "+91 8543842893",
    email: "harsh945455@gmail.com",
    linkedin: "https://www.linkedin.com/in/harsh-singh-867b66299/",
    github: "https://github.com/Harsh8543",
    resume: "https://drive.google.com/file/d/1I9A3hBXL5VgfIfncJT9CxLQY4BCjcyDy/view?usp=drivesdk",
    leetcode: "https://leetcode.com/u/Phy_harsh_singh/",
  },
  academicDetails: [
    {
      id: "btech",
      degree: "B.Tech (CSE)",
      institution: "GLBITM, Greater Noida",
      year: "2023-Ongoing",
      score: "8.3/10.0",
    },
    {
      id: "classxii",
      degree: "Class XII (CBSE)",
      institution: "Happy Model School, Varanasi",
      year: "2023",
      score: "89%",
    },
    {
      id: "classx",
      degree: "Class X (CBSE)",
      institution: "Happy Model School, Varanasi",
      year: "2021",
      score: "92%",
    },
  ],
  projects: [
    {
      id: "travel-roots",
      title: "Travel Roots",
      subtitle: "Full-Stack Web Application",
      date: "February 2025",
      liveDemo: "https://travel-roots.onrender.com/listings", // Placeholder as per resume, update if available
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Passport.js", "Geoapify", "Joi", "Multer"],
      description: [
        "Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.",
        "Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.",
        "Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.",
        "Integrated Geoapify API to display property locations dynamically.",
        "Used Joi for schema validation and flash messages for error handling.",
        "Integrated Multer for seamless image uploads and storage.",
        "Built a fully responsive UI using React for a smooth user experience."
      ],
      image: travelRootsImage,
    },
    {
      id: "ai-evaluate",
      title: "AI-Evaluate",
      subtitle: "AI-Powered Automated Answer Sheet Evaluation (Hackathon Project)",
      date: "March 2025",
      liveDemo: "https://ai-evaluaite-1.onrender.com/", 
      techStack: ["AI/ML", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      description: [
        "Developed an AI-driven grading system to automate answer sheet evaluation, reducing manual workload.",
        "Implemented AI-powered marks evaluation and automated answer generation.",
        "Integrated interactive whiteboard for dynamic student engagement.",
        "Created an AI-driven analytics dashboard for tracking academic progress.",
        "Designed a PPT Auto-Generator for instant report and presentation generation.",
        "Optimized AI models for real-time student assessment in a hackathon environment."
      ],
      image: aiEvaluateImage,
    },
    {
      id: "prescripto", 
      title: "Prescripto(Book, Connect & Care)",
      subtitle: "Doctor's Appointement Booking App (Hackathon Project)",
      date: "March 2025",
      liveDemo: "https://prescripto-frontend-6xd8.onrender.com/", 
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      description: [
        "Developed an intuitive doctor-patient appointment scheduling system, streamlining the booking process and reducing administrative overhead.",
        "Implemented smart appointment conflict resolution and notification system for enhanced reliability and patient satisfaction.",
        "Integrated interactive whiteboard for dynamic student engagement.",
        "Created a data-driven dashboard for doctors and admins to monitor appointments, patient flow, and clinic performance.",
        "Designed an automated prescription and report generation module for quick and error-free documentation.",
        "Optimized backend logic for real-time slot availability and patient queuing in high-demand scenarios during a health-tech hackathon."
      ],
      image: Prescripto,
    },
    {
      id: "real-time-chat", 
      title: "Real Time Chatt App",
      subtitle: "Real Time Chatt Application",
      date: "March 2025",
      liveDemo: "https://realtime-chat-frontend-8v82.onrender.com/chat", 
      techStack: ["Socket.io","JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      description: [
        "Developed a real-time chat application enabling seamless one-on-one and group conversations, enhancing communication efficiency.",
        "Implemented intelligent message delivery and conflict resolution mechanisms to ensure message consistency across devices.",
        "Integrated voice and video calling features with real-time signaling and media handling for immersive user interaction.",
        "Created a data-driven admin dashboard to monitor user activity, chat analytics, and system performance in real-time.",
        "Designed automated media sharing and file management system with instant preview and secure storage capabilities.",
        "Optimized backend socket architecture and real-time database updates to support high concurrency and smooth performance during peak traffic."
      ],
      image: RealTimeChat,
    },
    {
      id: "ai-grader", 
      title: "AI-GRADER",
      subtitle: "Full Stack Web Application",
      date: "March 2025",
      liveDemo: "https://ai-grader-glkc.onrender.com/", 
      techStack: ["AI/ML", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      description: [
        "Developed a real-time chat application enabling seamless one-on-one and group conversations, enhancing communication efficiency.",
        "Implemented intelligent message delivery and conflict resolution mechanisms to ensure message consistency across devices.",
        "Integrated voice and video calling features with real-time signaling and media handling for immersive user interaction.",
        "Created a data-driven admin dashboard to monitor user activity, chat analytics, and system performance in real-time.",
        "Designed automated media sharing and file management system with instant preview and secure storage capabilities.",
        "Optimized backend socket architecture and real-time database updates to support high concurrency and smooth performance during peak traffic."
      ],

      image: Aigrader,
    },
   
  ],
  achievements: [
    {
      id: "Hacksprint",
      text: "5th Place -  Hacksprint Coding Competition",
      organization: "Google Developer Groups (GDG)",
      link: "https://drive.google.com/file/d/1nYxee2jRqqKUaA-u8ZzM6spAaWH__cR-/view?usp=drivesdk", // Resume says LINK
    },
   {
      id: "GeeksforGeeks",
      text: "GfG 160-160 Days of Problem Solving (With Summer Workshops)",
      organization: "GeeksforGeeks",
      link: "https://media.geeksforgeeks.org/courses/certificates/7998111f40830ae96bf5c662f2d626ef.pdf", // Resume says LINK
    },
   {
      id: "Hackerrank",
      text: "HackerRank Problem Solving(Basic),React (Basic) & Rest API(Intermediate) Certificates",
      organization: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/38c896ddc4a1",
      
       // Resume says LINK
    },
   
  ],
  skills: [
    {
      id: "languages",
      name: "Programming Languages",
      skills: [
        { id: "c", name: "C" }, { id: "cpp", name: "C++" }, { id: "html", name: "HTML" }, { id: "css", name: "CSS" }, { id: "javascript", name: "JavaScript" }
      ],
    },
    {
      id: "frameworks",
      name: "Libraries & Frameworks",
      skills: [
        { id: "mongodb", name: "MongoDB" }, { id: "express", name: "Express.js" }, { id: "reactjs", name: "ReactJS" }, 
        { id: "reactnative", name: "React Native (Expo)" }, { id: "nodejs", name: "Node.js" }, { id: "restapi", name: "RESTful API" }
      ],
    },
    {
      id: "ui-frameworks",
      name: "UI Frameworks",
      skills: [
        { id: "bootstrap", name: "Bootstrap" }, { id: "tailwindcss", name: "Tailwind CSS" }, { id: "materialui", name: "Material UI" },{ id: "figma", name: "Figma" }
      ],
    },
    {
      id: "tools",
      name: "Tools & Platforms",
      skills: [
        { id: "git", name: "Git" }, { id: "github", name: "GitHub" },{ id: "postman", name: "Postman" },{ id: "vscode", name: "VS Code" }
      ],
    },
  ],
  responsibilities: [
    {
      id: "GLBITM-reso",
      role: "Development Team Member – GLBITM Reso",
      organization: "Society GLBITM",
      duration: "April 2025 - Ongoing",
      description: [
        "Contributing to GLBITM.XYZ, a website creating an accessible and dynamic learning environment.",
        "Promoting academic excellence and continuous growth within the society."
      ]
    },
  
  ],
  interestsSummary: [
    "Passionate about Full-Stack Development, specializing in scalable web applications, UI/UX design, and API development.",
    "Keenly interested in Artificial Intelligence & Data Science, including:",
    "  - Machine Learning (ML)",
    "  - Deep Learning (DL)",
    "Core curriculum knowledge includes:",
    "  - Data Structures",
    "  - Digital Logic & Design",
    "  - Object-Oriented Programming",
    "  - Database Management Systems",
    "  - Design & Analysis of Algorithms",
    "Enjoys exploring new technologies, participating in hackathons, and collaborating on open-source projects.",
    "Always eager to learn, adapt, and contribute to innovative solutions that make a real-world impact."
  ],
};
