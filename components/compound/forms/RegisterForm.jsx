import PrimaryButton from "@/components/simple/buttons/PrimaryButton";
import TextInput from "@/components/simple/inputs/TextInput";
import { FormWrapper } from "@/components/styles/general";
import { registerSchema } from "@/schema/auth.schema";
import { Formik } from "formik";
import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={() => console.log("submitted")}
        validationSchema={registerSchema}
        validateOnChange={true}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <FormWrapper>
              <TextInput
                label={"Name"}
                type={"text"}
                name={"name"}
                id={"name"}
                value={values?.name}
                error={errors?.name}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />
              <TextInput
                label={"Email Address"}
                type={"email"}
                name={"email"}
                id={"email"}
                value={values?.email}
                error={errors?.email}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />

              <TextInput
                label={"Password"}
                type={"password"}
                name={"password"}
                id={"password"}
                value={values?.password}
                error={errors?.password}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />
              <TextInput
                label={"Confirm Password"}
                type={"password"}
                name={"confirmPassword"}
                id={"confirmPassword"}
                value={values?.confirmPassword}
                error={errors?.confirmPassword}
                // placeholder={"placeholder"}
                onChange={handleChange}
              />
              <PrimaryButton
                onClick={() => {
                  console.log({ errors: Object.keys(errors)?.length });
                }}
                value={"Create Account"}
                type={"submit"}
              />
            </FormWrapper>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
