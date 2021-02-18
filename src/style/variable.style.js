export const grey = {
  lightest: "#ebebeb",
  lighter: "#bababa",
  light: "#898989",
  normal: "#666",
  dark: "#444",
  darker: "#333",
  darkest: "#222",
}

const size = {
  phone: 600,
  tabPort: 900,
  tabLand: 1024,
  laptop: 1440,
  retina: 2560,
}

export const device = {
  phone: `(max-width: ${size.phone}px)`,
  tabPort: `(max-width: ${size.tabPort}px)`,
  tabLand: `(max-width: ${size.tabLand}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  retina: `(min-width: ${size.retina}px)`,
}

/*


 @media ${device.desktop} {
    max-width: 1400px;
  }


 */
