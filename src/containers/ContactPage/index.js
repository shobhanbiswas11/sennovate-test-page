import { Email, PermPhoneMsg } from "@material-ui/icons";
import React from "react";
import { useShowForm } from "../../animation";
import {
  CollapsingContainer,
  ContactCard,
  Container,
  Form,
  FormButton,
  FormWrapper,
  Heading,
  HeadingContainer,
  NonCollapsingContainer,
  Or,
  Subheading,
} from "./elements";

export default function ContactPage({ ...rest }) {
  const {
    collapsingRef,
    handleShowFormClick,
    hideRef,
    formRef,
  } = useShowForm();

  return (
    <Container {...rest}>
      <NonCollapsingContainer>
        <HeadingContainer>
          <Heading>What can we help you with?</Heading>
          <Subheading>
            Email, call or simply fill out the form with your message
          </Subheading>
        </HeadingContainer>

        <ContactCard
          title="Sales Enquires"
          contactInfo="+1 925 918 6618"
          icon={PermPhoneMsg}
        />
        <ContactCard
          title="Support Enquires"
          contactInfo="support@sennovate.com"
          icon={Email}
        />

        <div ref={hideRef}>
          <Or />
          <FormButton onClick={handleShowFormClick}>
            Fill out the Form
          </FormButton>
        </div>
      </NonCollapsingContainer>

      <CollapsingContainer ref={collapsingRef}>
        <FormWrapper ref={formRef}>
          <Form />
        </FormWrapper>
      </CollapsingContainer>
    </Container>
  );
}
