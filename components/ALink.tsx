import {
  ReactElement,
  PropsWithChildren,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from "react";
import Link from "next/link";

interface ALinkProps {
  href: string;
}
export default function ALink({
  href,
  children,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > &
    ALinkProps
>): ReactElement {
  return (
    <Link href={href}>
      <a {...props}>
        {children}
        <style jsx>{`
          a {
            text-decoration: none;
            color: inherit;
          }
        `}</style>
      </a>
    </Link>
  );
}
