import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import CountrySelectComp from "./CountrySelect";

export const FormContainer = styled.form``;

export const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.2rem;
  display: block;
  font-weight: 700;
`;

export const Input = styled(TextField).attrs(() => ({
  variant: "outlined",
  fullWidth: true,
}))`
  & .MuiInputBase-root {
    padding: 0;
  }
  & .MuiInputBase-input {
    padding: 1rem;
  }
`;

export const SubmitBtn = styled(({ ...rest }) => (
  <Button variant="contained" color="primary" fullWidth {...rest} />
))``;

export const CountrySelect = styled(CountrySelectComp)`
  && .MuiInputBase-input {
    padding: 0.2rem;
  }
`;
