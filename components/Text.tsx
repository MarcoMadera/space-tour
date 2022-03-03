import { createElement, PropsWithChildren, ReactElement } from "react";
import { AsType, TextProps } from "types/Heading";
import { getTextStyles } from "utils/getTextStyles";

export default function Text({
  as: element = AsType.P,
  opacity,
  bold,
  color,
  children,
  ...props
}: PropsWithChildren<TextProps>): ReactElement {
  const { className, styles } = getTextStyles(element, {
    bold,
    opacity,
    color,
  });
  return (
    <>
      {createElement(element, { className, ...props }, children)}
      {styles}
    </>
  );
}
