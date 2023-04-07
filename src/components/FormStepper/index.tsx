import { Formik } from "formik";
import { Children, ReactElement } from "react";
import { IFormStepperProps } from "./types";

export const FormStepper: React.FC<IFormStepperProps> = ({
  children,
  currentStep,
  ...props
}) => {
  const childrenArray = Children.toArray(children as ReactElement);

  const currentChild = childrenArray[currentStep];

  return (
    <Formik
      {...props}
      onSubmit={(values, helpers) => props.onSubmit(values, helpers)}
    >
      {currentChild}
    </Formik>
  );
};
