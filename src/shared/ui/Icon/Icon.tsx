import type { ReactNode } from "react";

import { Button } from "../Button/Button";

export interface IconProps extends ReactTagProps<"button"> {
  children: ReactNode;
  clicable?: boolean;
}

export const ICON_TEST_IDS = {
  CONTAINER: "icon-container",
};

export const Icon = (props: IconProps) => {
  const { children, clicable } = props;

  if (clicable) {
    return (
      <Button bg="clear" size="auto" width="auto">
        {children}
      </Button>
    );
  }

  return children;
};
