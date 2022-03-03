import { createElement, PropsWithChildren, ReactElement } from "react";
import { AsType } from "types/Heading";
import css from "styled-jsx/css";

interface NavTextProps {
  as?: AsType;
}

export default function NavText({
  as = AsType.SPAN,
  children,
  ...props
}: PropsWithChildren<NavTextProps>): ReactElement {
  const { className, styles } = css.resolve`
    ${as} {
      font-family: "barlow-condensed", sans-serif;
      font-size: 16px;
      letter-spacing: 2.7px;
    }
  `;
  return (
    <>
      {createElement(as, { className, ...props }, children)}
      {styles}
    </>
  );
}
