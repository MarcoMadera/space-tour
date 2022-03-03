import { SelectorTypes } from "components/Selector";
import { ReactElement } from "react";
import css from "styled-jsx/css";

const SelectorTabStyles = css`
  ul {
    column-gap: 35px;
    row-gap: 35px;
  }
  button {
    padding-bottom: 8px;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: center;
    border-bottom: 3px solid transparent;
  }
  button:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
`;

const SelectorSliderStyles = css`
  ul {
    column-gap: 35px;
    row-gap: 35px;
  }
  button {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    height: 80px;
    width: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-family: "bellefair", sans-serif;
  }
  button:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;

const SelectorDotsStyles = css`
  ul {
    column-gap: 24px;
    row-gap: 24px;
  }
  button {
    display: block;
    background: rgba(255, 255, 255, 0.1744);
    height: 15px;
    width: 15px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
  }
  button:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export function getSelectorStyles(type?: SelectorTypes): ReactElement {
  if (type === SelectorTypes.SLIDER) {
    return SelectorSliderStyles;
  }

  if (type === SelectorTypes.DOTS) {
    return SelectorDotsStyles;
  }

  return SelectorTabStyles;
}
