import * as Yup from "yup";

export const createTaskboardSchema = Yup.object({
  name: Yup.string().required("Required field, Please specify name"),
  // password: Yup.string().required("Please enter your password"),
});
