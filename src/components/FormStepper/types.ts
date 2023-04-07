import { FormikConfig, FormikValues } from 'formik'

export interface IFormStepperProps extends FormikConfig<FormikValues> {
    currentStep: number
}
