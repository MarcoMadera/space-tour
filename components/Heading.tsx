import { createElement, PropsWithChildren, ReactElement } from "react";
import type { HeadingProps } from "types/Heading";
import { getHeadingStyles } from "utils/getHeadingStyles";

export default function Headings({
  number,
  as: element = `h${number}`,
  color,
  children,
  ...props
}: PropsWithChildren<HeadingProps>): ReactElement {
  const { className, styles } = getHeadingStyles(number, element, { color });

  return (
    <>
      {createElement(element, { className, ...props }, children)}
      {styles}
    </>
  );
}
