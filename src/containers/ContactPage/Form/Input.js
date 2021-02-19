import { lighten } from "polished";
import React from "react";
import styled from "styled-components";
import { color, grey } from "../../../style";

export default function Input({
  name,
  handleChange,
  errors,
  touched,
  onFocus,
  onBlur,
  ...rest
}) {
  const error = errors[name];

  return (
    <Container {...rest}>
      <StyledInput
        name={name}
        onChange={handleChange}
        $error={error}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <Error>Something went Wrong</Error>}
    </Container>
  );
}

const Container = styled.div``;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${grey.lighter};
  padding: 1rem;
  outline: none;
  transition: all 0.2s;
  border-radius: 4px;
  &:focus {
    border: 1px solid ${lighten(0.5, color.blue)};
  }
`;

const Error = styled.div`
  color: red;
  font-size: 1.4rem;
  margin-top: 0.2rem;
`;
