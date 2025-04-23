import { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon: ReactElement;
    endIcon: ReactElement;
    onClick: () => void;

}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-500"
}
const sizeStyles = {
    "sm": "px-2 py-4 text-sm rounded-sm",
    "md": "px-4 py-2 text-md rounded-md",
    "lg": "px-8 py-4 text-lg rounded-lg"
}

const defaultStyles = "flex cursor-pointer"

export const Button = (props: ButtonProps) => {

    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}</button>
}

