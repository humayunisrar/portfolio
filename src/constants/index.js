import { Link } from 'react-router-dom';
import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    react,
    wordpress,
    tailwindcss,
    nextgen,
    seniorinv,
    sleet,
  
} from "../assets/icons";

export const skills = [

    {
        imageUrl: wordpress,
        name: "Wordpress",
        type: "Content Management System",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "WordPress",
        company_name: "",
        icon: wordpress,
        iconBg: "#e4e4e4",
        date: "2 Years",
        points: [
            "Managed and maintained customized WordPress websites, ensuring optimal performance and functionality.",
            "Utilized pre-built WordPress themes and plugins to implement responsive design for improved user experience.",
            "Ensured cross-browser compatibility and optimized website performance for seamless user interaction.",
            "Stayed updated on the latest WordPress developments, incorporating new features into ongoing projects.",
            "Addressed and resolved issues related to website functionality, performance, and security.",
            "Collaborated with clients to understand their unique requirements and provided website management solutions to meet their business goals & Contributed to the planning and execution of WordPress projects, adhering to timelines and project requirements.",  
        ],
    },
    {
        title: "React.Js",
        company_name: "",
        icon: react,
        iconBg: "#d2e9fe",
        date: "6 Months",
        points: [
            "Applied knowledge of JavaScript basics to implement functionality and features within React.js applications. Demonstrated familiarity with React hooks, leveraging them to manage state and side effects efficiently.",
            "Completed two demo projects using React.js, showcasing proficiency in building interactive and dynamic user interfaces, also Successfully delivered a client project using React.js, meeting client requirements and ensuring a positive user experience.",
            "Implemented responsive design principles in React.js projects for a consistent user experience across devices, addressed and resolved issues related to React.js application functionality and performance.",
            "Contributed to the planning and execution of React.js projects, adhering to timelines and project requirements.",
        ],
    },
    {
        title: "Tailwind CSS",
        company_name: "",
        icon: tailwindcss,
        iconBg: "#d2e9fe",
        date: "6 Months",
        points: [
            "Utilized Tailwind CSS to streamline and expedite the styling process in web development projects, and demonstrated proficiency in creating responsive and visually appealing user interfaces using Tailwind CSS utility classes.",
            "Implemented design specifications and translated them into clean and maintainable Tailwind CSS code.",
            "Worked on projects that showcased the flexibility and efficiency of Tailwind CSS for styling web applications.",
            "Incorporated Tailwind CSS into React.js projects, creating cohesive and visually consistent UI components.",
        ],
    },
    {
        title: "HTML & CSS",
        company_name: "",
        icon: html,
        iconBg: "#fbc3bc",
        date: "1 Year",
        points: [
            "Developed and maintained modern and semantic HTML5 markup for web applications, integrating responsive design principles to ensure a seamless user experience across various devices.",
            "Utilized HTML5 features, such as the <canvas> element for dynamic graphics and animations, also demonstrated proficiency in structuring web content with HTML5 elements.",
            "Created visually appealing and consistent user interfaces using CSS3 styling techniques, applying transitions and animations to enhance user interactions.",
            "Developed and maintained React.js projects, utilizing React hooks, responsive design, and integrating Tailwind CSS for cohesive UI components.",
            "Addressed and resolved issues related to website functionality, performance, and styling in HTML5, CSS3, React.js, and Tailwind CSS projects.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'tel:+923363204705',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/humayunisrar',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/humayun-israr-466276218/',
    }
];

export const projects = [
    {
        iconUrl: seniorinv,
        theme: 'btn-back-green',
        name: 'Senior Investigators ',
        description: 'Senior Investigations is a reputable Gold Coast-based private investigation agency specializing in a wide range of investigation services including background checks, factual investigations, surveillance, and skip tracing.',
        link: 'https://seniorinvestigations.com.au/',
    },
    {
        iconUrl: sleet,
        theme: 'btn-back-blue',
        name: 'Sleet',
        description: 'Sleet is the pioneering cold store logistics solution to be Saudi Arabia based that changes the way that logistics operates by relentless innovation and digitalized approaches.',
        link: 'https://sleet-app.netlify.app/',
    },
    {
        iconUrl: nextgen,
        theme: 'btn-back-green',
        name: 'NextGen-Women ',
        description: 'NextGen Women empower women to succeed by providing them with the resources and support they need to advance their careers. They believe that women have unique perspectives and experiences that can drive innovation and change in the workplace, and they are committed to helping them realize their full potential.',
        link: 'https://nextgen-women.com/',
    
    },
    
];