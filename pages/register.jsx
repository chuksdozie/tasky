import React, { useState } from "react";
import Head from "next/head";
import { Wrapper } from "@/components/styles/general";
import styled from "styled-components";
import { colors } from "@/constants/colors";
import { sampleData } from "@/constants/sampleData";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import AuthFormLayout from "@/layouts/forms/AuthFormLayout";
import { Formik } from "formik";
import RegisterForm from "@/components/compound/forms/RegisterForm";

const Register = () => {
  return (
    <>
      <Wrapper justify="center" align="center">
        <AuthFormLayout
          title={"Signup"}
          footerText={"Already have an account? Login"}
        >
          <RegisterForm />
        </AuthFormLayout>
      </Wrapper>
    </>
  );
};

export default Register;
