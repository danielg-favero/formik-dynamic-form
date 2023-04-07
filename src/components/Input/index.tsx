import { Field } from "formik";
import React from "react";
import { IInputProps } from "./types";

export const Input: React.FC<IInputProps> = ({ ...props }) => {
  return (
    <Field
      className="w-full p-4 rounded outline-none hover:bg-indigo-900 bg-indigo-950 text-slate-50 placeholder:text-indigo-300"
      {...props}
    />
  );
};
