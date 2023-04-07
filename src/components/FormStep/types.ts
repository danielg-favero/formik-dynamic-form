import { FormikConfig, FormikValues } from 'formik';
import { PropsWithChildren } from 'react';

export interface IFormStepProps extends Pick<FormikConfig<FormikValues>, 'initialValues' | 'enableReinitialize'>, PropsWithChildren {}
