import useSelector from "hooks/useSelector";
import { Children, ReactElement, useEffect } from "react";
import { Color } from "types/Heading";
import { getSelectorStyles } from "utils/getSelectorStyles";

export enum SelectorTypes {
  TABS = "tabs",
  SLIDER = "slider",
  DOTS = "dots",
}

export enum Orientation {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}

export default function Selector({
  id,
  defaultActiveSelector,
  onSelect,
  type,
  orientation,
  children,
}: {
  id: string;
  defaultActiveSelector?: number;
  onSelect?: (tab: number) => void;
  type?: SelectorTypes;
  orientation?: Orientation;
  children: ReactElement<Text>[];
}): ReactElement {
  const [activeSelect, setActiveSelect] = useSelector(
    id,
    defaultActiveSelector
  );

  useEffect(() => {
    if (onSelect) {
      onSelect(activeSelect);
    }
  }, [activeSelect, onSelect]);

  const styles = getSelectorStyles(type);

  const inlineStyles: Record<SelectorTypes, Record<string, string>> = {
    [SelectorTypes.TABS]: {
      borderColor: "rgba(255, 255, 255, 1)",
    },
    [SelectorTypes.SLIDER]: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: Color.Primary,
    },
    [SelectorTypes.DOTS]: {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <nav>
      <ul>
        {Children.map(children, (child, number) => {
          const content =
            type === SelectorTypes.SLIDER
              ? number + 1
              : type === SelectorTypes.DOTS
              ? null
              : child;
          return (
            <li>
              <button
                onClick={() => {
                  setActiveSelect(number);
                }}
                style={
                  activeSelect === number
                    ? inlineStyles[`${type ?? SelectorTypes.TABS}`]
                    : undefined
                }
              >
                {content}
              </button>
            </li>
          );
        })}
      </ul>
      <style jsx>{styles}</style>
      <style jsx>{`
        nav {
          display: flex;
        }
        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-direction: ${orientation === Orientation.VERTICAL
            ? "column"
            : "row"};
        }
      `}</style>
    </nav>
  );
}
