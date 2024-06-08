import { colors } from "@/constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.white};
  min-height: 100vh;
  flex-direction: ${({ direction }) => direction ?? `column`};
  justify-content: ${({ justify }) => justify ?? `flex-start`};
  align-items: ${({ align }) => align ?? `flex-start`};
  margin: 0;
  padding: 1rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  background-color: ${colors.white};
  flex-direction: ${({ direction }) => direction ?? `column`};
  justify-content: ${({ justify }) => justify ?? `flex-start`};
  align-items: ${({ align }) => align ?? `flex-start`};
  padding: 1rem;
  gap: 1rem;
`;
