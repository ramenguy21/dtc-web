import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About Dr Tasneem', href: getPermalink('/personal') },
    {
      text: 'Institute of Health',
      href: getPermalink('/institute'),
      /**links: [
        {
          text: 'Aesthetic Courses',
          href: getPermalink('/courses/aesthetic'),
        },
        {
          text: 'Health and Nutrition',
          href: getPermalink('/courses/nutrition'),
        },
        {
          text: 'Obstetrics and Gynaecology',
          href: getPermalink('/courses/gynae-obs'),
        },
        {
          text: 'Hijama (Cupping Therapy)',
          href: getPermalink('/courses/hijama'),
        },
      ],
    **/
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/#services'),
        },
        {
          text: 'Aesthetic Procedures',
          href: getPermalink('/services/aesthetics'),
        },
        {
          text: 'Hijama',
          href: getPermalink('/hijama'),
        },
        {
          text: 'Gynae & Obs',
          href: getPermalink('/about'),
        },
        {
          text: 'General Lab Tests',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Posts',
          href: getBlogPermalink(),
        },
        /*{
          text: 'Blog List',
          ,
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },*/
      ],
    },
  ],
  actions: [{ text: 'Get in Touch', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Clinic',
      links: [
        { text: 'Services', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Customer stories', href: '#' },
      ],
    },

    {
      title: 'Who we are',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> Muhammad Hamza Asad</a>
  `,
};
