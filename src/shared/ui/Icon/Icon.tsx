import type { ReactNode } from "react";

import { Button } from "../Button/Button";

interface IconProps extends ReactTagProps<"button"> {
  children: ReactNode;
  clicable?: boolean;
}

export const Icon = (props: IconProps) => {
  const { children, clicable } = props;

  if (clicable) {
    return (
      <Button bg="clear" className="w-auto" size="auto">
        {children}
      </Button>
    );
  }

  return children;
};
