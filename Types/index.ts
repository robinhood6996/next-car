import { MouseEventHandler } from "react";

export interface CustomButton{
    title: String,
    customStyles?: String,
    btnType?: "button" | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>
}