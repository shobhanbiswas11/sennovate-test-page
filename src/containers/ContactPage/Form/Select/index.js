import React, { useState } from "react";
import { Container, DropDown, Input, Item } from "./Elements";

export default function Select({ className, ...rest }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const value = rest.values[rest.name];
  console.log(value);

  return (
    <Container className={className}>
      <Input
        name="country"
        {...rest}
        onFocus={() => {
          setShowDropDown(true);
        }}
        onBlur={() => {
          setShowDropDown(false);
        }}
      />
      <DropDown style={{ display: showDropDown ? "block" : "none" }}>
        {Array.from({ length: 100 }).map(() => (
          <Item
            onClick={() => {
              console.log("Hi");
            }}
            tabIndex={-1}
          >
            India
          </Item>
        ))}
      </DropDown>
    </Container>
  );
}
