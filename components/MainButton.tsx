import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from "react";
import css from "styled-jsx/css";
import Link from "next/link";

export enum ButtonType {
  ANCHOR = "anchor",
  LINK = "link",
  BUTTON = "button",
}

interface MainAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type: ButtonType.ANCHOR | ButtonType.LINK;
  href: string;
}

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonType.BUTTON;
}

export const mainButtonStyle = css`
  a,
  button {
    width: 274px;
    height: 274px;
    border: none;
    border-radius: 50%;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
  }

  a:hover,
  button:hover,
  a:focus,
  button:focus {
    box-shadow: 0px 0px 0px 88px rgba(255, 255, 255, 0.1036);
    border: none;
    outline: none;
  }
`;

export default function MainButton({
  type,
  children,
  ...attribs
}: PropsWithChildren<MainButtonProps | MainAnchorProps>): ReactElement {
  if (type === ButtonType.ANCHOR && "href" in attribs) {
    return (
      <>
        <a {...attribs}>{children}</a>
        <style jsx>{mainButtonStyle}</style>
      </>
    );
  }

  if (type === ButtonType.LINK && "href" in attribs) {
    return (
      <>
        <Link href={attribs.href}>
          <a {...attribs}>{children}</a>
        </Link>
        <style jsx>{mainButtonStyle}</style>
      </>
    );
  }

  return (
    <>
      <button {...(attribs as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
      <style jsx>{mainButtonStyle}</style>
    </>
  );
}
