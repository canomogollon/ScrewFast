
const base = import.meta.env.BASE_URL;

const navBarLinks = [
  { name: "Accueil", url: `${base}/fr` },
  { name: "Produits", url: `${base}/fr/products` },
  { name: "Services", url: `${base}/fr/services` },
  { name: "Blog", url: `${base}/fr/blog` },
  { name: "Contact", url: `${base}/fr/contact` },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: `${base}/fr/welcome-to-docs/` },
      { name: "Outils et Équipements", url: `${base}/fr/products` },
      { name: "Services de Construction", url: `${base}/fr/services` },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: `${base}/fr/blog` },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};