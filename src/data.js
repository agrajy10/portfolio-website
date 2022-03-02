export const links = [
  {
    id: 1,
    label: 'Home',
    href: '#home'
  },
  {
    id: 2,
    label: 'Skills',
    href: '#skills'
  },
  {
    id: 4,
    label: 'Work',
    href: '#work'
  },
  {
    id: 3,
    label: 'Contact',
    href: '#contact'
  }
];

export const skills = [
  {
    category: 'Frontend',
    tech: [
      'HTML 5',
      'CSS 3',
      'Bootstrap 5',
      'Javascript',
      'React',
      'Tailwind CSS',
      'Styled Components',
      'Redux Toolkit'
    ]
  },
  {
    category: 'Backend',
    tech: ['Firebase']
  },
  {
    category: 'Design',
    tech: ['Adobe XD', 'Photoshop']
  },
  {
    category: 'CMS',
    tech: ['WordPress']
  },
  {
    category: 'Version Control',
    tech: ['Git']
  }
];

export const projects = [
  {
    photo:
      'https://raw.githubusercontent.com/agrajy10/portfolio-website/master/src/assets/images/rent-or-sell.png',
    title: 'Rent or Sell',
    category: 'personal',
    desc: 'Online website where users can put up their house for sale or rental. This is a full-stack project which uses firebase for storage, database and authentication. ',
    tech: ['React', 'Tailwind CSS', 'Dasiy UI', 'Firebase'],
    github: 'https://github.com/agrajy10/rent-or-sell',
    live: 'https://rentorsell.netlify.app/'
  },
  {
    photo:
      'https://raw.githubusercontent.com/agrajy10/portfolio-website/master/src/assets/images/product-feedback-board.png',
    title: 'Product feedback app',
    category: 'personal',
    desc: 'A web app that allows product users to post their suggestions, bug and feature requests. Users can sort, filter feedback and they can alson upvote and comment on other users feedback. This is a full-stack project which uses firebase for backend.',
    tech: ['React', 'Styled Components', 'Firebase', 'Redux Toolkit'],
    github: 'https://github.com/agrajy10/product-feedback-app',
    live: 'https://product-feedback-board.netlify.app/'
  },
  {
    photo:
      'https://raw.githubusercontent.com/agrajy10/portfolio-website/master/src/assets/images/invoice-app.png',
    title: 'Invoice App',
    category: 'personal',
    desc: 'A web app to manage invoices sent to the clients. User can create new invoices, manage or update existing invoices. This app uses localStorage to save app data.',
    tech: ['React', 'Styled Components'],
    github: 'https://github.com/agrajy10/invoice-app',
    live: 'https://invoice-app-react.netlify.app/'
  },
  {
    photo:
      'https://raw.githubusercontent.com/agrajy10/portfolio-website/master/src/assets/images/kerry.png',
    title: 'Kerry Kagiri',
    category: 'freelance',
    desc: 'One page website of a public speaker built using bootstrap 5.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    github: '',
    live: 'https://kerrykagiri.com/'
  },
  {
    photo:
      'https://raw.githubusercontent.com/agrajy10/portfolio-website/master/src/assets/images/gsg.png',
    title: 'Give send go',
    category: 'freelance',
    desc: 'Converted 30 page website design into HTML of a crowdfunding website.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    github: '',
    live: 'https://newdesign.givesendgo.com/'
  },
  {
    photo:
      'https://raw.githubusercontent.com/agrajy10/portfolio-website/master/src/assets/images/jeff-kitchen.png',
    title: 'Jeff kitchen',
    category: 'freelance',
    desc: 'Website for real estate team built in WordPress using beaver builder, ACF and custom page builder modules.',
    tech: ['WordPress'],
    github: '',
    live: 'https://jeffkitchen.ca/'
  },
  {
    photo:
      'https://raw.githubusercontent.com/agrajy10/portfolio-website/master/src/assets/images/flewwelling.png',
    title: 'Flewwelling Press',
    category: 'freelance',
    desc: 'Canadian printing press website built in WordPress using beaver builder.',
    tech: ['WordPress'],
    github: '',
    live: 'https://www.flewwellingpress.com/'
  }
];
