const base = import.meta.env.BASE_URL;

// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: `${base}` },
  { name: "Productos", url: `${base}/products` },
  { name: "Servicios", url: `${base}/services` },
  { name: "Blog", url: `${base}/blog` },
  { name: "Contacto", url: `${base}/contact` },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentacion", url: `${base}/welcome-to-docs/` },
      { name: "Agentes de I.A", url: `${base}/products` },
      { name: "Servicios de I.A", url: `${base}/services` },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Quiénes Somos", url: `${base}/about-us` },
      { name: "Blog", url: `${base}/blog` },
      { name: "FAQs", url: `${base}/faq` },
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