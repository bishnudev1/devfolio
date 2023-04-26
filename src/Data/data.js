import devfolio from '../Assets/Images/Devfolio.png';
import detailbook from '../Assets/Images/Detailbook.png';
import fireblogs from '../Assets/Images/Fireblogs.png';
import npxcard from '../Assets/Images/NPXCard.png';
import bdaywisher from '../Assets/Images/Bdaywisher.png';
import greenbook from '../Assets/Images/Greenbook.png';
import dp from '../Assets/Images/Profile.jpg';
import { SiCanva, SiFigma, SiFirebase, SiFlutter, SiGraphql, SiMicrosoftexcel, SiMongodb, SiNodedotjs, SiYoutube } from 'react-icons/si'

// Add Home Screen Data

export const homeData = {
    intro: "Myself Bishnudev Khutia. A CSE Scholer & Fullstack Developer from India. Currently working as a SDE Intern at Merkos.",
    dp: dp
};

// Add About Data

export const aboutData = {
    desc: "I am a hardcore technology lover since my childhood as well as a Math-Physics student in my high school. Currently I'm pursing my Bachelor of Technology degree in Computer Science & Engineering from CEM, Kolaghat. I got taste my first programming language in my 10th standard and it was Python. Since then I am trying to learn new technologies and building projects. Recently I have switched to Open Source Community to explore more variety of techs. Beside I love to play games in my free time & exploring new places around the world. I will be more happy if you call me a problem solver rather than just a developer :)"
};

// Add Skills

export const skillData = {
    // Go to SKills.jsx file and start adding your favorite icons after importing it. Simple :)
};

// Add Projects

export const projectData = [
    {
        id: 1,
        name: 'Greenbook',
        image: greenbook,
        desc: 'A mini startups to save our mother nature. This project is still ongoing.',
        checkUrl: '#',
        forkUrl: 'https://github.com/bishnudev1/greenbook'
    },
    {
        id: 2,
        name: 'Devfolio',
        image: devfolio,
        desc: 'A customizable and  minimal React portfolio for Software Engineers',
        checkUrl: 'https://bishnu-dev.netlify.app/',
        forkUrl: 'https://github.com/bishnudev1/devfolio'
    },
    {
        id: 3,
        name: 'Detailbook',
        image: detailbook,
        desc: 'A story writing social site with Authentication made with React, Express and Mongoose',
        checkUrl: '#',
        forkUrl: 'https://github.com/bishnudev1/detailbook-server'
    },
    {
        id: 4,
        name: 'NPX Card',
        image: npxcard,
        desc: 'Just hit "npx bishnudev" in your terminal. Make sure Node JS is installed in your machine',
        checkUrl: '#',
        forkUrl: 'https://github.com/ShreyamMaity/npx-card'
    },
    {
        id: 5,
        name: 'Birthday Wisher',
        image: bdaywisher,
        desc: 'Send birthday wishes now with just few clicks with anybody without copying and searching quotes in Google.',
        checkUrl: 'https://birthdaywishmaker.netlify.app/',
        forkUrl: 'https://github.com/bishnudev1/bday_wisher'
    },

];

// Add Work Experiences

export const worksData = {
    project1: {
        name: "Givemefive AI",
        duration: "Dec 21 - Feb 22",
        role: "Content Creation Internship",
        techStack: [<SiCanva color='skyblue' />,
        <SiYoutube color='red' />,
        <SiMicrosoftexcel color='green' />
    ],
        description: "Made more than 30+ lectures regarding Basic Science & Programming on Canva, edited them and deployed them in Youtube and Duonut official website."
    },
    project2: {
        name: "Arowdox Pvt. Ltd.",
        duration: "Oct 22 - Nov 22",
        role: "Backend Developer Internship",
        techStack: [<SiNodedotjs color='green' />,
        <SiMongodb color='lightgreen' />,
        <SiGraphql color='black' />],
        description: "Created a fully optimize and scallable user and product API using Node JS, Express JS, Mongoose and GraphQL. Later deployed it to Amazon Web Services."
    },
    project3: {
        name: "Merkos 302",
        duration: "Dec 22 - Present",
        role: "Frontend Developer Internship",
        techStack: [<SiFlutter color='blue' />,
        <SiFirebase color='orange' />,
        <SiFigma color='red' />],
        description: "Created a fully responsive edtech platform for their upcoming startup with Flutter and Firebase. Currently working the state management part of it and will work on the API in future."
    }
};

// Add Social Data

export const connectData = {
    githubUrl: "https://github.com/bishnudev1",
    instagramUrl: "https://www.instagram.com/bishnudev_ig/",
    linkedinUrl: "https://www.linkedin.com/in/bishnudevkhutia/"
};