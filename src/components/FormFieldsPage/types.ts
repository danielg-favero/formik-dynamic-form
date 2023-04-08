import { IFormFieldProps, IFormValuesProps } from "../../types"

export interface IFormFieldsPageProps {
    pageIndex: number
    onChange: (values: IFormValuesProps[]) => void
}