import type { ReactNode } from "react";

export type TypographyVariant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "sub-title"
  | "link";

export type TypographyTag = "h1" | "h2" | "h3" | "span" | "div" | "p";

interface TypographyProps {
  tag?: TypographyTag;
  className?: string;
  variant: TypographyVariant;
  children: ReactNode;
}

const Typography = (props: TypographyProps) => {
  const { tag: Tag = "div", children, className = "", variant } = props;

  return <Tag className={`${className} ${variant}`}>{children}</Tag>;
};

export { Typography };
