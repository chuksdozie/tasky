import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ onClick, value, disabled, type }) => {
  return (
    <Button onClick={onClick} disabled={disabled} type={type ?? "button"}>
      {value}
    </Button>
  );
};

export default PrimaryButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colors.success700};
  color: ${colors.white};
  padding: 0.7rem;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: 0;
  font-size: ${fontSizes.m};
`;
