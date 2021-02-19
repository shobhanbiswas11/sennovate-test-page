export const grey = {
  lightest: "#ebebeb",
  lighter: "#bababa",
  light: "#898989",
  normal: "#666",
  dark: "#444",
  darker: "#333",
  darkest: "#222",
};

export const size = {
  phone: 600,
  tabPort: 900,
  tabLand: 1024,
  laptop: 1440,
  retina: 2560,
};

export const device = {
  phone: `@media screen and (max-width: ${size.phone}px)`,
  tabPort: `@media screen and (max-width: ${size.tabPort}px)`,
  tabLand: `@media screen and (max-width: ${size.tabLand}px)`,
  laptop: `@media screen and (max-width: ${size.laptop}px)`,
  retina: `@media screen and (min-width: ${size.retina}px)`,
};

/*


 @media ${device.desktop} {
    max-width: 1400px;
  }


 */

export const color = {
  green: "#02b355",
  blue: "#081d71",
};
