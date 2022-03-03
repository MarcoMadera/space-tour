import { useRouter } from "next/router";
import {
  Children,
  PropsWithChildren,
  ReactElement,
  isValidElement,
  ReactChild,
} from "react";
import { AsType } from "types/Heading";
import ALink from "./ALink";
import Text from "./Text";

const validateElement = (child: ReactChild, number: number) => {
  if (isValidElement(child) && child?.type === "a") {
    return (
      <a {...child.props}>
        <Text bold as={AsType.SPAN}>
          {number < 10 ? `0${number}` : number}
        </Text>{" "}
        <Text as={AsType.SPAN}>{child.props.children}</Text>
      </a>
    );
  }
  if (isValidElement(child) && child?.type === ALink) {
    return (
      <ALink {...child.props}>
        <Text bold as={AsType.SPAN}>
          {number < 10 ? `0${number}` : number}
        </Text>{" "}
        <Text as={AsType.SPAN}>{child.props.children}</Text>
      </ALink>
    );
  }
  return (
    <>
      <Text bold as={AsType.SPAN}>
        {number < 10 ? `0${number}` : number}
      </Text>{" "}
      <Text as={AsType.SPAN}>{child}</Text>
    </>
  );
};

export default function NavBar({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement {
  const router = useRouter();
  return (
    <nav>
      <ul>
        {Children.map(children, (child, number) => {
          const href = isValidElement(child) ? child.props.href : null;
          const shouldShowBorder = router.pathname === href;
          return (
            <li
              style={{
                borderColor: shouldShowBorder
                  ? "rgba(255, 255, 255, 1)"
                  : undefined,
              }}
            >
              {validateElement(child as ReactChild, number)}
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          width: 100%;
          min-height: 96px;
          background-color: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(0.4px);
          align-items: center;
          justify-content: center;
        }
        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          column-gap: 137px;
          flex-wrap: wrap;
          justify-content: center;
        }
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 96px;
          width: 137px;
          font-family: "barlow-condensed", sans-serif;
          font-size: 16px;
          letter-spacing: 2.7px;
          font-weight: 400;
          letter-spacing: 2.35px;
          line-height: 32px;
        }
        li {
          border-bottom: 3px solid rgba(255, 255, 255, 0);
        }
        li:hover {
          border-bottom: 3px solid rgba(255, 255, 255, 0.5);
        }
        nav :global(a) {
          text-decoration: none;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 14px;
        }
      `}</style>
    </nav>
  );
}
