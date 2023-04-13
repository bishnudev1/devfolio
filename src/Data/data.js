import devfolio from '../Assets/Images/Devfolio.png';
import detailbook from '../Assets/Images/Detailbook.png';
import fireblogs from '../Assets/Images/Fireblogs.png';
import npxcard from '../Assets/Images/NPXCard.png';
import bdaywisher from '../Assets/Images/Bdaywisher.png';

const projectData = [
    {
        id: 1,
        name: 'Devfolio',
        image: devfolio,
        desc: 'A customizable and  minimal React portfolio for Software Engineers',
        checkUrl: '',
        forkUrl: ''
    },
    {
        id: 2,
        name: 'Detailbook',
        image: detailbook,
        desc: 'A story writing social site with Authentication made with React, Express and Mongoose',
        checkUrl: '',
        forkUrl: 'https://github.com/bishnudev1/detailbook-server'
    },
    {
        id: 3,
        name: 'Fireblogs',
        image: fireblogs,
        desc: 'A simple blog app with Flutter and Firebase with Authentication',
        checkUrl: '',
        forkUrl: 'https://github.com/bishnudev1/fireblogs'
    },
    {
        id: 4,
        name: 'NPX Card',
        image: npxcard,
        desc: 'Just hit "npx bishnudev" in your terminal. Make sure Node JS is installed in your machine',
        checkUrl: '',
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

export default projectData;