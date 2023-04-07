import { IFormFieldProps, IFormValuesProps } from "../../types"

export interface IFormFieldsPage {
    pageIndex: number
    onChange: (values: IFormValuesProps[]) => void
}