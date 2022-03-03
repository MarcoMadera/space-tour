import { ReactElement, SVGProps } from "react";

export default function Close(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg width="20" height="21" {...props}>
      <g fill="#D0D6F9" fillRule="evenodd">
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </g>
    </svg>
  );
}
