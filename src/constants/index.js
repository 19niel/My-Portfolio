export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'No Clients yet',
      position: 'Unknown',
      img: 'assets/unknown.png',
      review:
        'not available',
    },
    
  ];
  
  export const myProjects = [

    {
      title: 'WatchTower: San Juan Web Admin',
      desc: 'A Disaster Management Mern Stack Web Application For Handling Real-Time Reports from WatchTower Citizen Mobile That Uses Random Forest Tree Algorithm To Assign Values Based On Their Category and Description',
      subdesc:
        'A Dedicated Web Admin Prototype for the San Juan CDRRMO for disaster handling and management for all the disaster related reports from the WatchTower:Citizen within the San Juan City',
      href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/projectWT-logo.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Node.js',
          path: 'assets/nodejs.png',
        },
        {
          id: 3,
          name: 'Express.js',
          path: 'assets/express.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
        {
          id: 5,
          name: 'Python',
          path: '/assets/python.png',
        },
      ],
    },
    {
      title: 'A Project Is In Progress',
      desc: 'Unreleased yet',
      subdesc:
        'Soon To Be Announced',
      href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
      texture: '/textures/project/comingsoon.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/unknown.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/unknown.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/unknown.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/unknown.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
     {
      id: 1,
      name: 'BSIT Graduate',
      pos: 'College Degree',
      duration: '2025',
      title: "Technological Institute of the Philippines",
      icon: '/assets/tip_logo.png',
      animation: 'clapping',
    },
    {
      id: 2,
      name: 'Intern',
      pos: 'Technical Support Engineer',
      duration: '2025',
      title: "Equitable Computer Services, Inc.",
      icon: '/assets/ecs.png',
      animation: 'salute',
    },
    {
      id: 3,
      name: 'Soon',
      pos: 'Unknown',
      duration: 'Unknown',
      title: "Actively Looking for Opportunities",
      icon: '/assets/unknown.png',
      animation: 'victory',
    },

  ];