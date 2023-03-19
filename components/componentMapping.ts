import { ComponentType } from "lib/models";
import { Hero } from "./Hero";
import { RegisterForm } from "./RegistrationForm";

export const componentMapping: any = {
  [ComponentType.Hero]: Hero,
  [ComponentType.RegistrationForm]: RegisterForm,
};

export default componentMapping;
