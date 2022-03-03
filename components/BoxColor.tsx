import { ReactElement } from "react";
import { AsType, Color } from "types/Heading";
import Text from "./Text";

interface BoxColorProps {
  backgroundColor: string;
  textColor: string;
  rgb: string;
  hsl: string;
}

export default function BoxColor({
  backgroundColor,
  textColor,
  rgb,
  hsl,
}: BoxColorProps): ReactElement {
  return (
    <div>
      <div className="box">
        <span>{backgroundColor}</span>
      </div>
      <div className="color-info">
        <Text color={Color.Secondary} as={AsType.SPAN}>
          RGB
        </Text>{" "}
        <Text as={AsType.SPAN}>{rgb}</Text>
      </div>
      <div className="color-info">
        <Text color={Color.Secondary} as={AsType.SPAN}>
          HSL
        </Text>{" "}
        <Text as={AsType.SPAN}>{hsl}</Text>
      </div>
      <style jsx>{`
        .box {
          background-color: ${backgroundColor};
          position: relative;
          height: 116px;
          border: 1px solid #616476;
        }
        .color-info {
          display: flex;
          column-gap: 62px;
        }
        span {
          color: ${textColor};
          font-family: Bellefair;
          font-size: 24px;
          position: absolute;
          bottom: 24px;
          left: 23.5px;
        }
      `}</style>
    </div>
  );
}
