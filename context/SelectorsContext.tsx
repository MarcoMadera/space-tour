import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

export interface SelectorsContextType {
  selectors: Record<string, number>;
  setSelectors: Dispatch<SetStateAction<Record<string, number>>>;
}

const Context = createContext<SelectorsContextType | null>(null);

export function SelectorContextProvider({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement {
  const [selectors, setSelectors] = useState<SelectorsContextType["selectors"]>(
    {}
  );

  const value = {
    selectors,
    setSelectors,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
