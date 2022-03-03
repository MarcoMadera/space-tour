import Head from "next/head";
import { PropsWithChildren, ReactElement } from "react";

export default function PageTitle({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
}
