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
    photo: 'src/assets/images/rent-or-sell.jpg',
    title: 'Rent or Sell',
    desc: 'Online website where users can put up their house for sale or rental. This is a full-stack project which uses firebase for storage, database and authentication. ',
    tech: ['React', 'Tailwind CSS', 'Dasiy UI', 'Firebase'],
    github: 'https://github.com/agrajy10/rent-or-sell',
    live: 'https://rentorsell.netlify.app/'
  },
  {
    photo: 'src/assets/images/product-feedback-board.jpg',
    title: 'Product feedback app',
    desc: 'A web app that allows product users to post their suggestions, bug and feature requests. Users can sort, filter feedback and they can alson upvote and comment on other users feedback. This is a full-stack project which uses firebase for backend.',
    tech: ['React', 'Styled Components', 'Firebase', 'Redux Toolkit'],
    github: 'https://github.com/agrajy10/product-feedback-app',
    live: 'https://product-feedback-board.netlify.app/'
  },
  {
    photo: 'src/assets/images/invoice-app.jpg',
    title: 'Invoice App',
    desc: 'A web app to manage invoices sent to the clients. User can create new invoices, manage or update existing invoices. This app uses localStorage to save app data.',
    tech: ['React', 'Styled Components'],
    github: 'https://github.com/agrajy10/invoice-app',
    live: 'https://invoice-app-react.netlify.app/'
  }
];
