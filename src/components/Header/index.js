import React from "react";
import {
  Btn,
  BtnTray,
  Container,
  HamBurgerMenu,
  Link,
  Links,
  Logo,
} from "./elements";

export default function Header({ ...rest }) {
  return (
    <Container {...rest}>
      <Logo />
      <Links>
        <Link>Why Sennovate</Link>
        <Link>Solutions</Link>
        <Link>Resources</Link>
        <Link>Company</Link>
      </Links>

      <BtnTray>
        <Btn outlined>Try For Free</Btn>
        <Btn>Calculate Savings</Btn>
      </BtnTray>

      <HamBurgerMenu />
    </Container>
  );
}
