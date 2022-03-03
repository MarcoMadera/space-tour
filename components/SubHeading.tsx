import { createElement, PropsWithChildren, ReactElement } from "react";
import type { SubHeadingProps } from "types/Heading";
import { getSubHeadingStyles } from "utils/getSubHeadingStyles";

export default function SubHeadings({
  number,
  as: element,
  children,
  ...props
}: PropsWithChildren<SubHeadingProps>): ReactElement {
  const { className, styles } = getSubHeadingStyles(number, element);

  return (
    <>
      {createElement(element, { className, ...props }, children)}
      {styles}
    </>
  );
}
