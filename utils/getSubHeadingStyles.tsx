import css from "styled-jsx/css";
import type { AsType } from "types/Heading";

const fontSizes = ["28px", "14px"];

export function getSubHeadingStyles(
  number: number,
  element: AsType
): {
  className: string;
  styles: JSX.Element;
} {
  return css.resolve`
    ${element} {
      font-size: ${fontSizes[number - 1]};
      font-family: ${number === 2
        ? "'barlow-condensed', 'sans-serif'"
        : "'bellefair', 'sans-serif'"};
      font-weight: 400;
      letter-spacing: ${number === 2 ? "2.35px" : "unset"};
      line-height: 32px;
      margin: 16px 0;
    }
  `;
}
