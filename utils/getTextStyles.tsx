import css from "styled-jsx/css";
import type { AsType, TextOptions } from "types/Heading";
import { Color } from "types/Heading";

export function getTextStyles(
  element: AsType,
  { bold, opacity = 1, color = Color.White }: TextOptions
): {
  className: string;
  styles: JSX.Element;
} {
  return css.resolve`
    ${element} {
      color: ${color};
      line-height: 32px;
      font-weight: ${bold ? "bold" : "400"};
      opacity: ${opacity};
      margin: 8px 0;
    }
  `;
}
