import { ButtonHTMLAttributes } from "react";

export interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isEnabled?: boolean
}