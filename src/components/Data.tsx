export const skills = [
  { category: 'Frontend', title: 'HTML' },
  { category: 'Frontend', title: 'CSS' },
  { category: 'Frontend', title: 'Javascript' },
  { category: 'Frontend', title: 'React' },
  { category: 'Frontend', title: 'NextJs' },
  { category: 'Frontend', title: 'Node.js' },
  { category: 'Frontend', title: 'TypeScript' },
  { category: 'Frontend', title: 'ES6' },
  { category: 'Frontend', title: 'JSON' },
  { category: 'Frontend', title: 'SASS' },
  { category: 'Frontend', title: 'Tailwind' },
  { category: 'Frontend', title: 'MaterialUI' },
  { category: 'Frontend', title: 'Responsive web design' },
  { category: 'Frontend', title: 'Jest' },
  { category: 'Frontend', title: 'Testing Library' },
  { category: 'Frontend', title: 'API' },
  { category: 'Frontend', title: 'Jira' },
  { category: 'Frontend', title: 'Figma' },
  { category: 'Backend', title: 'GraphQl' },
  { category: 'Backend', title: 'Apollo GraphQL' },
  { category: 'Backend', title: 'Strapi' },
  { category: 'Backend', title: 'MongoDB' },
  { category: 'Backend', title: 'Mongoose' },
  { category: 'Backend', title: 'Express.js' },
  { category: 'Backend', title: 'WebAPI' },
  { category: 'Backend', title: 'RestfulAPI' },
  { category: 'Backend', title: 'IntergrateAPI' },
  { category: 'Other', title: 'Git' },
  { category: 'Other', title: 'Github' },
  { category: 'Soft Skills', title: 'Countinuous learning' },
  { category: 'Soft Skills', title: 'Self-motivation' },
  { category: 'Soft Skills', title: 'Attention to detail' },
  { category: 'Soft Skills', title: 'Fast learner' },
  { category: 'Soft Skills', title: 'Problem Solving' },
  { category: 'Soft Skills', title: 'Verbal communication' },
  { category: 'Soft Skills', title: 'Writen communication' },
  { category: 'Soft Skills', title: 'Consistency' },
  { category: 'Soft Skills', title: 'Highly motivated' },
  { category: 'Soft Skills', title: 'Passionate' },
  { category: 'Soft Skills', title: 'Emthusiasm' },
]

export const skillCategories = [
  { label: 'All' },
  { label: 'Frontend' },
  { label: 'Backend' },
  { label: 'Other' },
  { label: 'Soft Skills' },
]

interface NavItem {
  label: string
  page: string
}

export const NavItems: Array<NavItem> = [
  { label: 'Home', page: '' },
  { label: 'About', page: 'about' },
  { label: 'Projects', page: 'projects' },
]

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
