export interface IFormFieldProps {
    id: number
    text: string
}

export interface IFormValuesProps {
    id: number
    fields: IFormFieldProps[]
}