export enum AsType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  SPAN = "span",
}
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export interface HeadingProps {
  number: Range<1, 7>;
  as?: AsType | Heading;
  color?: Color;
}
export interface SubHeadingProps {
  number: Range<1, 3>;
  as: AsType;
}

export type Heading = `h${HeadingProps["number"]}`;

export enum Color {
  Primary = "#0B0D17",
  Secondary = "#D0D6F9",
  White = "#FFFFFF",
  Black = "#000000",
}
export interface TextOptions {
  bold?: boolean;
  opacity?: number;
  color?: Color;
}

export interface TextProps extends TextOptions {
  as?: AsType;
}
