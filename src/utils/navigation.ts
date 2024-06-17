// An array of links for navigation bar
const navBarLinks = [
  { name: "Главная", url: "/" },
  { name: "Продукты", url: "/products" },
  { name: "Услуги", url: "/services" },
  { name: "Блог", url: "/blog" },
  { name: "Контакты", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Экосистема",
    links: [
      { name: "Документация", url: "/welcome-to-docs/" },
      { name: "Инструменты и оборудование", url: "/products" },
      { name: "Строительные услуги", url: "/services" },
    ],
  },
  {
    section: "Компания",
    links: [
      { name: "О нас", url: "#" },
      { name: "Блог", url: "/blog" },
      { name: 'Карьера', url: "#" }, 
      { name: "Клиенты", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};