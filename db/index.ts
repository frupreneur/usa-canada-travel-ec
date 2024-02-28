type MenuType = {
  name: string;
  path: string;
}[];

let siteURL = "https://englishcompositions.com";

export const menu: MenuType = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: `${siteURL}/about`,
  },
  {
    name: "Privacy Policy",
    path: `${siteURL}/privacy-policy/`,
  },
  {
    name: "Contact us",
    path: `${siteURL}/contact`,
  },
];
