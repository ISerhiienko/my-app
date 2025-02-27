import { FC, lazy } from "react";
import { LoginFormProps } from "../../ui/LoginForm/LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import("./LoginForm")), 1500);
  }),
);
