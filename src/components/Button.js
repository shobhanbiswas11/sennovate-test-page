import React from "react";
import styled, { css } from "styled-components";
import { btnReset, color } from "../style";

export default function Button({ children, outlined, ...rest }) {
  return (
    <Btn {...rest} $outlined={outlined}>
      {children}
    </Btn>
  );
}

const outlinedStyle = css`
  border: 1px solid ${color.green};
  background-color: white;
  color: ${color.green};
`;

const solidStyle = css`
  color: white;
  background-color: ${color.green};
`;

const Btn = styled.button`
  ${btnReset};
  border-radius: 2rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  transition: all 0.2s;
  ${(props) => (props.$outlined ? outlinedStyle : solidStyle)};
  ${(props) =>
    props.$outlined &&
    css`
      &:hover {
        ${solidStyle};
      }
    `};
`;
