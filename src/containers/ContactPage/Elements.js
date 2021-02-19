import styled, { css } from "styled-components";
import { Button } from "../../components";
import { color, device, flex } from "../../style";
import ContactCardComp from "./ContactCard";
import FormComp from "./Form";

export const Container = styled.div`
  ${flex({ y: "flex-start", x: "flex-start" })};
  ${device.tabPort} {
    flex-flow: column;
  }
`;

export const NonCollapsingContainer = styled.div`
  background-color: ${color.blue};
  min-height: 90vh;
  padding: 3rem;
  width: 100vw;
  color: white;

  ${device.tabPort} {
    min-height: unset;
  }
`;

export const CollapsingContainer = styled.div`
  width: 0;
  overflow-x: hidden;
  ${device.tabPort} {
    width: 100%;
  }
`;

export const FormWrapper = styled.div``;

export const Form = styled(FormComp)`
  padding: 3rem;
  max-width: 60rem;
  ${device.tabPort} {
    margin: 5rem auto;
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Heading = styled.div`
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 0.8rem;

  ${device.phone} {
    font-size: 3.2rem;
  }
`;

export const Subheading = styled.div`
  font-size: 1.8rem;
  font-weight: 100;
  ${device.phone} {
    font-size: 1.6rem;
  }
`;

export const ContactCard = styled(ContactCardComp)`
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const line = css`
  height: 2px;
  width: 20rem;
  background-color: white;
`;

export const Or = styled.div.attrs(() => ({
  children: ["Or"],
}))`
  font-size: 1.8rem;
  text-align: center;
  ${flex({ x: "center" })}
  margin : 4rem 0;
  &::before {
    content: "";
    ${line};
    margin-right: 2rem;
  }
  &::after {
    content: "";
    ${line};
    margin-left: 2rem;
  }
`;

export const FormButton = styled(Button)`
  display: block;
  margin: 0 auto;
  ${device.tabPort} {
    display: none;
  }
`;
