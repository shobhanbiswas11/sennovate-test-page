import React from "react";
import { Action, Button, Container, Title } from "./Elements";

export default function Dialog({ open, onClose, ...rest }) {
  return (
    <Container open={open} onClose={onClose} {...rest}>
      <Title>This is a demo page</Title>
      <Action>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => {
            onClose();
            window.location.href = "https://sennovate.com/";
          }}
          color="primary"
        >
          Go to main Website
        </Button>
      </Action>
    </Container>
  );
}
