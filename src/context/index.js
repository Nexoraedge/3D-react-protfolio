import { desc } from "motion/react-client";

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
      name: 'Projects',
      href: '#projects',
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
      name: 'Himanshu Jain',
      position: 'Owner of Manchaha Restaurnt',
      img: 'assets/him.jpg',
      review:
        'Working with Hardik was a fantastic experience. He delivered us the logo of Manchaha Restaurnat with great attention to detail. I highly recommend Hardik for any logo design needs.',
    },
    {
      id: 2,
      name: 'Lokesh Jain',
      position: 'Founder of Parshwanath Caterers',
      img: 'assets/MAMA.JPG',
      review:
        "Impressed with Hardik's work on our website. Professional, understood our needs and delivered a great website. Attention to detail and creativity were impressive.",
    },
    // {
    //   id: 3,
    //   name: '',
    //   position: 'Project Manager at UrbanTech ',
    //   img: 'assets/review3.png',
    //   review:
    //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    // },
    // {
    //   id: 4,
    //   name: 'Ether Smith',
    //   position: 'CEO of BrightStar Enterprises',
    //   img: 'assets/review4.png',
    //   review:
    //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    // },
  ];
  
  export const myProjects = [
    { 
      title: 'Tone Genie - AI-powered Text Enhancer',
      desc: 'Tone Genie is a cutting-edge browser extension that leverages AI technology to enhance the readability of text. With features like AI-driven text editing, essay writing, bid writing, chat generation, and grammar improvement, it revolutionizes the way you interact with text online.',
      subdesc:
        'Built with vite-react, javascript , google/generative-ai,and express, Tone Genie is designed for optimal performance and scalability.',
      href: 'https://tone-genie.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/texten.png',
      img: '/Project/toneGenie.png',
     logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'vite',
          path: '/assets/vite.png',
        },
        {
          id: 4,
          name: 'Google generative-ai',
          path: '/assets/googleai.png',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: '/assets/tailwindcss.png',
        },
        {
          id: 2,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 5,
          name: 'firebase',
          path: '/assets/firebase.png',
        },
        {
          id: 6,
          name: 'framermotion',
          path: '/assets/framer.png',
        },
      ],
    },

    {
      title: 'Interview Prep - AI powered Interviewer',
      desc: 'Interview Prep is a unique Software-as-a-Service app that transforms the way interviews are conducted. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
      subdesc:
        'Built as a unique Software-as-a-Service app with Next.js 15, Tailwind CSS, TypeScript, Vapi-ai, Ai-SDK Google , shadcn-ui and Firebase, Interview Prep is designed for optimal performance and scalability.',
      href: 'https://interview-prep-five-iota.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.svg',
      img: '/Project/Aiinterview.png',
      logoStyle: {
        backgroundColor: '#24273a',
        border: '0.2px solid #FFCAAD',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Vapi-ai',
          path: '/assets/vapi.png',
        },
        {
          id: 5,
          name: 'Firebase',
          path: '/assets/firebase.png',
        },
        {
          id: 7,
          name: 'google-ai-sdk',
          path: '/assets/aisdk.png',
        },
      ],
    },
    {
      title: 'Youtube Snippets - get Code snippet and links',
      desc: 'Get code snippets and links of my  YouTube videos (channel- DevDhoni-ai). This is a work-in-progress, with an AI-powered path generator that creates a roadmap for learning a topic or course with recommended resources, based on your current knowledge and skills.',
      subdesc:
        'Built with Next.js 15, Tailwind CSS, TypeScript, framer-motion, and Supabase, Youtube Snippets is designed for optimal performance and scalability.',
      href: 'https://youtube-snippets.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.jpg',
      img: '/Project/ytsnippets.png',
      logoStyle: {
        backgroundColor: '#130A29',
        border: '0.2px solid #8F1B6E',
        boxShadow: '0px 0px 60px 0px #C2229F',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
        {
          id: 4,
          name: 'Supabase',
          path: '/assets/supabase.png',
        },
      ],
    },
    {
      title: "Resume ATS - Ai powered Resume checker",
      desc:"Resume ATS is an ai powered website that helps user to check the ATS of the Resume and get feedback  ,  improvemnts and Strong point of the Resume. Helps you to get a job ready Resume.",
      subdesc:"Built with vite react-router-dom, Tailwind CSS, TypeScript, and Puter.js  , is desgined for optimal performance and scalability.",
      href:"https://ai-resume-checker-five.vercel.app/",
      texture:'/textures/project/project5.mp4',
      logo: '/assets/project_resume.png',
      img: '/Project/test.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 4,
          name: 'react-router-dom',
          path: '/assets/reactrouter.png',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: '/assets/tailwindcss.png',
        },
        {
          id: 2,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 5,
          name: 'Puter.js',
          path: '/assets/puter.png',
        },
        
      ],
    },
    {
      title: 'Spotify Clone',
      desc: 'Spotify Clone is a simple web application built for learning purposes, using only HTML, CSS, and JavaScript. It demonstrates a basic understanding of web development concepts and serves as a starting point for further learning and improvement.',
      subdesc:
        'Built with HTML, CSS, and JavaScript, Spotify Clone is designed for optimal performance and scalability.',
      href: 'https://hardikjain1043.github.io/Project_Spotify/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/spotify.png',
      img: '/Project/spclone.png  ',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #24D565',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: '/assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/JS.png',
        },
      ],
    },
    {
      title: 'GetMeashikanji-Fund your projects',
      desc: 'GetMeashikanji is a comprehensive online funding platform that offers users a to get funding for their projects. It allows users to connect bank accounts, upi and real-time transactions, and seamlessly transfer money to other users.',
      subdesc:
        'Built with Next auth ,MongoDB , Mongoose and Razorpay, GetMeashikanji ensures a smooth and secure funding experience , tailored to meet the needs of modern consumers.',
      href: 'https://getmeashikanji.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/shikanji.png',
      img: '/Project/getMeShikanji.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #A89B10',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },

        {
          id: 5,
          name: 'Razorpay',
          path: '/assets/razorpay.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
    //   deskScale: isSmall ? 0.018 : isMobile ? 0.020 : 0.040
    deskScale: (() => {
      if (isSmall) return 0.03;
      if (isMobile) return 0.032;
      if (isTablet) return 0.035;
      return 0.04;
    })()
      ,
      deskPosition:isSmall ? [0.3, -1.4, -3.8]: isMobile ? [0.3, -1.4, -3.8] :isTablet?[0.3,-2.3,-2.5]: [0.3, -2.97, -3.8],
      cubePosition: isSmall ? [2.75, -4.25, -8] : isMobile ? [0, 0, 0] : isTablet ? [6.5,-5.5, -9] : [13, -6.3, -9],
      reactLogoPosition:  isSmall ? [2.75, -4.25, -8] : isMobile ? [4, -6, -10] : isTablet ? [6.5,-5.5, -9] : [13, -6.3, -9],
      ringPosition: isSmall ? [2, 7, 0] : isMobile ? [5.7, 6, -9.5] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-2.75, -7, -8] : isMobile ? [-4.5, -9, -10] : isTablet ? [-6.5, -9.5, -9] : [-13, -7, -9],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Built My First AI Tool (extension)',
      pos: 'ToneGenie - AI-powered Text Enhancer',
      duration: '2025 - June',
      title: "ToneGenie is a browser extension that uses AI to improve text readability. It features AI-driven text editing, writing, chat generation , bit writing, and grammar improvement.",
      icon: '/assets/tone_png.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Learned Full-Stack Development',
      pos: 'Full-Stack Developer',
      duration: '2025 - March',
      title: "I learned full-stack development using React,tailwindcss, github, Node.js, and MongoDB. I built some web applications like Getmeashikanji , TODO App and Password Saver. ",
      icon: '/assets/web.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'First ever Fronted Project',
      pos: 'My first fully working fronted project - Spotify Clone',
      duration: '2025 - January',
      title: "Spotify Clone is a simple web application built for learning purposes, using only HTML, CSS, and JavaScript. It demonstrates a basic understanding of web development concepts and serves as a starting point for further learning and improvement.",
      icon: '/assets/spopng.png',
      animation: 'salute',
    },    
  ];

  export const footerlink = [
    {
      id: 1,
      name: 'Github',
      img: '/assets/github.svg',
      href: 'https://github.com/Nexoraedge/',
    },
    {
      id: 2,
      name: 'X',
      img: '/assets/x.svg',
      href: 'https://x.com/DhoniAi',
    },
    {
      id: 3,
      name: 'mail',
      img: '/assets/mail.svg',
      href: 'mailto:hardikjain2030@gmail.com',
    },
    {
      id:4,
      name:'linkedIn',
      img: '/assets/linke.png',
      href: 'www.linkedin.com/in/devdhoni-ai'
    }
  ];