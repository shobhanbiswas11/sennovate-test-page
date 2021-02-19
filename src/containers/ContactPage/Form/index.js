import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import {
  CountrySelect,
  FormContainer,
  FormGroup,
  Input,
  Label,
  SubmitBtn,
} from "./elements";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  phone: Yup.string().required(),
  companyName: Yup.string().required(),
  country: Yup.string().required(),
  message: Yup.string().required(),
});

export default function Form({ ...rest }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      country: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  const { handleSubmit, handleChange, errors, setFieldValue, touched } = formik;

  function getInputProp(name) {
    const error = Boolean(touched[name]) && Boolean(errors[name]);

    return {
      onSubmit: handleSubmit,
      error,
      helperText: error && errors[name],
      name,
      onChange: handleChange,
    };
  }

  function renderFormGroup({
    label = "Label",
    name = "name",
    handleChange = () => {},
  } = {}) {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input {...getInputProp(name)} />
      </FormGroup>
    );
  }

  return (
    <FormContainer onSubmit={handleSubmit} {...rest}>
      {renderFormGroup({ label: "Name", name: "name", handleChange })}
      {renderFormGroup({ label: "Email", name: "email", handleChange })}
      {renderFormGroup({ label: "Phone", name: "phone", handleChange })}
      {renderFormGroup({
        label: "Company Name",
        name: "companyName",
        handleChange,
      })}
      <FormGroup>
        <Label>Country</Label>
        <CountrySelect
          {...getInputProp("country")}
          setFieldValue={setFieldValue}
        />
      </FormGroup>
      <FormGroup>
        <Label>Message</Label>
        <Input {...getInputProp("message")} multiline rows={3} rowsMax={4} />
      </FormGroup>

      <SubmitBtn type="submit">Submit</SubmitBtn>
    </FormContainer>
  );
}
