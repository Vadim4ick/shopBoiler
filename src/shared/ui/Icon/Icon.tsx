import type { ReactNode } from "react";

import { Button } from "../Button/Button";

export interface IconProps extends ReactTagProps<"button"> {
  children: ReactNode;
  clicable?: boolean;
}

export const Icon = (props: IconProps) => {
  const { children, clicable, ...otherProps } = props;

  if (clicable) {
    return (
      <Button {...otherProps} bg="clear" size="auto" width="auto">
        {children}
      </Button>
    );
  }

  return children;
};
