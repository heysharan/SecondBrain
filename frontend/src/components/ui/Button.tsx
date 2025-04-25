import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-500",
};

const defaultStyles = "px-4 py-2 cursor-pointer rounded-md font-light flex items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${props.loading? 'opacity-40': ''} ${props.fullWidth ? 'w-full pt-2 pb-2 font-medium flex items-center justify-center': ''}`}> {props.startIcon ? <div className="pr-2"> {props.startIcon} </div> : null}
      {props.text}
    </button>
  );
};
