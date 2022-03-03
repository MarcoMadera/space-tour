import css from "styled-jsx/css";
import type { AsType, Heading, Color } from "types/Heading";

const fontSizes = ["150px", "100px", "56px", "32px", "28px", "24px"];

export function getHeadingStyles(
  number: number,
  element: AsType | Heading,
  { color }: { color?: Color }
): {
  className: string;
  styles: JSX.Element;
} {
  return css.resolve`
    ${element} {
      color: ${color ??
      (number === 5 || number === 6 ? "var(--light-blue)" : "#fff")};
      font-size: ${fontSizes[number - 1]};
      margin: 16px 0;
      font-family: ${number === 5 || number === 6
        ? "'barlow-condensed', 'sans-serif'"
        : "'bellefair', 'sans-serif'"};
      font-weight: 400;
      letter-spacing: ${number === 5
        ? "4.75px"
        : number === 6
        ? "4.05px"
        : "unset"};
    }

    @media (min-width: 0px) and (max-width: 500px) {
      h1 {
        font-size: 80px;
      }
    }
  `;
}
