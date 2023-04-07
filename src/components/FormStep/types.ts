import { FormikConfig, FormikValues } from 'formik';

export interface IFormStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'initialValues' | 'enableReinitialize'> {}
