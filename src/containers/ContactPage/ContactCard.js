import React from "react";
import styled from "styled-components";
import { device } from "../../style";

export default function ContactCard({ title, contactInfo, icon, ...rest }) {
  return (
    <Container {...rest}>
      <Svg as={icon} />
      <Title>{title}</Title>
      <Div>{contactInfo}</Div>
      <Div>(Availability: 24×5)</Div>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  max-width: 30rem;
`;

const Svg = styled.svg`
  margin-bottom: 1rem;
  font-size: 7rem;
  border: 1px solid currentColor;
  border-radius: 50%;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  ${device.phone} {
    font-size: 1.8rem;
  }
`;

const Div = styled.div`
  font-weight: 100;
`;
