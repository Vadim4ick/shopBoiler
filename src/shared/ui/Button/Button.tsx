import { cva } from "class-variance-authority";
import type { ReactNode } from "react";

export type ButtonSize = "normal40" | "small33" | "average48" | "auto";
export type ButtonBg = "blue" | "yellow" | "clear" | "gray" | "pale";
export type ButtonBorder = "normal4" | "average40";
export type ButtonWidth = "full" | "auto";

export interface ButtonProps extends ReactTagProps<"button"> {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  bg?: ButtonBg;
  border?: ButtonBorder;
  width?: ButtonWidth;
}

export const BUTTON_TEST_IDS = {
  CONTAINER: "button-container",
};

const Button = (props: ButtonProps) => {
  const { children, size, bg, border, className, width, ...otherProps } = props;

  return (
    <button
      data-testid={BUTTON_TEST_IDS.CONTAINER}
      className={cva(`btn-disabled ${className}`, {
        defaultVariants: {
          bg: "blue",
          border: "normal4",
          size: "normal40",
          width: "full",
        },
        variants: {
          bg: {
            blue: "bg-blue text-white",
            clear: "bg-none text-darkGray",
            gray: "bg-gray text-darkGray",
            pale: "bg-pale text-blue",
            yellow: "bg-yellow text-bigDarkGray",
          },
          border: {
            average40: "rounded-[40px]",
            normal4: "rounded-[4px]",
          },
          size: {
            auto: "h-auto",
            average48: "h-[48px]",
            normal40: "h-[40px]",
            small33: "h-[33px]",
          },

          width: {
            auto: "w-auto",
            full: "w-full",
          },
        },
      })({ bg, border, size, width })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
