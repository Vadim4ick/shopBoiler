import { cva } from "class-variance-authority";
import type { ReactNode } from "react";

export type ButtonSize = "normal40" | "small33" | "average48";
export type ButtonBg = "blue" | "yellow" | "clear" | "gray" | "pale";
export type ButtonBorder = "normal4" | "average40";

interface ButtonProps extends ReactTagProps<"button"> {
  children: ReactNode;
  size?: ButtonSize;
  bg?: ButtonBg;
  border?: ButtonBorder;
}

const Button = (props: ButtonProps) => {
  const { children, size, bg, border, ...otherProps } = props;

  return (
    <button
      className={cva("btn-disabled w-full", {
        defaultVariants: {
          bg: "blue",
          border: "normal4",
          size: "normal40",
        },
        variants: {
          bg: {
            blue: "bg-blue text-white",
            clear: "text-darkGray bg-none",
            gray: "bg-gray text-darkGray",
            pale: "bg-pale text-blue",
            yellow: "bg-yellow text-bigDarkGray",
          },
          border: {
            average40: "rouded-[40px]",
            normal4: "rounded-[4px]",
          },
          size: {
            average48: "h-[48px]",
            normal40: "h-[40px]",
            small33: "h-[33px]",
          },
        },
      })({ bg, border, size })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };