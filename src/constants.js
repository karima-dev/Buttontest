/**
 * @Todo
 * mettre miniscule au debut du nom des constantes
 */
export const ColorBoutonBootstrap = {
  primary: "primary",
  success: "success",
  info: "info",
  secondary: "secondary",
};
export const TextBoutonBootstrap = {
  primary: "primary",
  success: "success",
  info: "info",
  secondary: "secondary",
};

export const textInputProps = {
  placeholder: {
    email: "Enter email",
    password: "Enter password",
    default: "Enter text",
  },
  type: { email: "email", password: "password", default: "text" },
};

export const textInputProps2 = {
  defaults: {
    placeholder: "Enter text",
    type: "text",
  },
  email: {
    placeholder: "Enter email",
    type: "email",
  },
  password: {
    placeholder: "Enter password",
    type: "password",
  },
};
/* export const bgNavbar = {
  light: "light",
  dark: "dark",
  primary: "primary",
}; */

export const customNavbarProps = {
  defaults: {
    background: "primary",
    variant: "dark",
    navHome: "/",
    classeName: "me-auto",
    navLinks: [
      { link: "#home", text: "Home" },
      { link: "#features", text: "Features" },
    ],
    logo: "My web site",
  },
};

export const navLinks = [
  { link: "#home", text: "Home" },
  { link: "#features", text: "Features" },
  { link: "#about", text: "About" },
  { link: "#princing", text: "Pricing" },
];
export const logoProps = {
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/170px-Apple_logo_black.svg.png",
  default: {
    width: "50px",
    height: "50px",
  },
  smartphone: {
    width: "50px",
    height: "50px",
  },
  tablette: {
    width: "50px",
    height: "50px",
  },
};

//declaration des constantes miniscule debut et majiscule deuxieme si compose
