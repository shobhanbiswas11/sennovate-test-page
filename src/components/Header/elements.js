import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import styled from "styled-components";
import { Logo as LogoSVG } from "../../assets";
import { device, flex, size } from "../../style";
import Button from "../Button";

export const Container = styled.header`
  ${flex()}
`;
export const Logo = styled.img.attrs(() => ({
  src: LogoSVG,
}))`
  height: 4rem;
  ${device.phone} {
    height: 2rem;
  }
`;
export const Links = styled.div`
  ${flex()};
  ${device.tabLand} {
    display: none;
  }
`;
export const Link = styled.div`
  cursor: pointer;
  font-weight: 700;
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
export const BtnTray = styled.div``;
export const Btn = styled(Button)`
  &:not(:last-child) {
    margin-right: 2rem;
  }
  ${device.phone} {
    display: none;
  }
`;

export const HamBurgerMenu = styled(IconButton).attrs(() => ({
  children: <Menu />,
}))`
  @media screen and (min-width: ${size.phone}px) {
    display: none;
  }
`;
