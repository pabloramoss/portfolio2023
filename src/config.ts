export const config = {
  email: 'ramospablo9@gmail.com',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/pabloramoss',
      image: '/github.svg',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/pabloramoss/',
      image: '/linkedin.svg',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  techs: [
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Saga',
    'Node',
    'MongoDB',
    'NextJS',
    'Docker',
    'Docker Compose',
    'API Rest',
    'Material UI',
    'Ant Design',
    'Bootstrap',
    'Tailwind CSS',
    'Styled Components',
    'Jest',
    'Testing Library',
    'Cypress',
    'Storybook',
    'Jira',
    'Git',
    'GitHub',
    'Photoshop',
    'Illustrator',
    'Figma',
    'Wordpress',
  ],
  colors: {
    background: '#e8e8e8',
  },
  projects: [
    {
      name: 'Chat Frontend App',
      description:
        'Frontend of a web chat I created for a challenge. No backend, just the frontend.',
      url: 'https://wanpatapp.vercel.app',
      github: 'https://github.com/pabloramoss/wanpatapp',
      image: '/projects/chatBanner.jpg',
      tech: ['React', 'Material UI', 'Redux Toolkit'],
      id: 'chat',
    },
    {
      name: 'Anon Question App',
      description:
        'Server-side rendered app for asking anonymous questions and generating and copying the OpenGraph to the clipboard for sharing on social media.',
      url: 'https://question-app-eight.vercel.app',
      github: 'https://github.com/pabloramoss/questionApp',
      image: '/projects/questionBanner.jpg',
      tech: ['Supabase', 'Tailwind CSS', 'Next.js 13'],
      id: 'anon-question',
    },
    {
      name: 'Threads App',
      description:
        'App similar to Twitter for creating threads. Users can log in with GitHub and Google, create threads, and respond to them.',
      url: 'https://threadsapp-two.vercel.app',
      github: 'https://github.com/pabloramoss/mern-threads-app',
      image: '/projects/threadsBanner.jpg',
      tech: ['MongoDB', 'Tailwind CSS', 'Next.js 13'],
      id: 'threads',
    },
    {
      name: 'Simple API store',
      description:
        'API that can provide an array of 30 products or an object with a single product. Useful for e-commerce prototypes. It was made with Next.js API routes feature.',
      url: 'https://simpleapistore.vercel.app',
      github: 'https://github.com/pabloramoss/fake-api-shop',
      image: '/projects/apiStoreBanner.jpg',
      tech: ['NEXTS.JS 12', 'CHAKRA-UI'],
      id: 'api',
    },
    {
      name: 'Gecomm',
      description:
        'Zero cost e-commerce, since it has a database of products and sales made in Google Sheet. The app get the database from server side using getStaticProps and update the content at runtime with Incremental Static Regeneration.',
      url: 'https://ecommerce-pablo.vercel.app/',
      github: 'https://github.com/pabloramoss/Gecomm',
      image: '/projects/gecommBanner.jpg',
      tech: ['NEXT.JS 12', 'CHAKRA-UI', 'SSG', 'ISR', 'TELEGRAM API'],
      id: 'gecomm',
    },
    {
      name: 'Valobrain',
      description:
        'Gaming app for Valorant which consists in a video search engine from a specific YouTube channel.',
      url: 'https://valobrain.vercel.app/',
      github: 'https://github.com/pabloramoss/stratcall',
      image: '/projects/valobrainBanner.jpg',
      tech: ['REACT JS', 'CHAKRA-UI', 'YOUTUBE API'],
      id: 'valobrain',
    },
    {
      name: 'El Torito Bar',
      description:
        'App with mobile design for a restaurant with a digital menu where you can make orders.',
      url: 'https://eltoritobar.vercel.app',
      github: 'https://github.com/pabloramoss/El-toro-bar',
      image: '/projects/toritoBanner.jpg',
      tech: ['TYPESCRIPT', 'NEXT.JS 12', 'CHAKRA-UI', 'SSG', 'ISR'],
      id: 'torito',
    },
    {
      name: 'My blog',
      description: 'Own blog where I share my experiences working with different technologies.',
      url: 'https://rpablog.vercel.app/',
      github: 'https://github.com/pabloramoss/my-blog',
      image: '/projects/myBlogBanner.jpg',
      tech: ['NEXT.JS 12', 'CHAKRA-UI', 'MARKDOWN'],
      id: 'blog',
    },
  ],
};
