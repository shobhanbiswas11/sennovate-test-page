import {
  Button as MuiBtn,
  Dialog,
  DialogActions,
  DialogTitle,
  withStyles,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export const Container = withStyles({
  paper: {
    minWidth: "30rem",
    padding: "3rem",
  },
})(({ classes: { paper }, ...rest }) => (
  <Dialog {...rest} classes={{ paper }} />
));

export const Title = styled(DialogTitle)`
  .MuiTypography-h6 {
    text-align: center;
    font-weight: 700;
  }
`;
export const Action = styled(DialogActions)``;
export const Button = styled(MuiBtn).attrs(() => ({
  variant: "outlined",
}))``;
