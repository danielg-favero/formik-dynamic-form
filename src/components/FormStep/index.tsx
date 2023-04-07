import React from "react";

import { IFormStepProps } from "./types";

export * from "./types";

export const FormStep: React.FC<IFormStepProps> = ({ children }) => {
  return <section className="w-1/4">{children}</section>;
};
