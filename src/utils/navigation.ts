// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Servicios", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentacion", url: "/welcome-to-docs/" },
      { name: "Agentes de I.A", url: "/products" },
      { name: "Servicios de I.A", url: "/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Nuestra Empresa", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "FAQs", url: "/faq" },
      //{ name: "Careers", url: "#" },
      //{ name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};