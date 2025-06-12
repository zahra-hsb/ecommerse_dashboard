import { HTMLInputTypeAttribute, ReactNode } from "react";

export interface SubmitButtonType {
  text: string;
  icon?: ReactNode;
}

export interface TextInputType {
  label?: string;
  id?: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  dir?: "ltr" | "rtl";
  icon?: ReactNode;
}
