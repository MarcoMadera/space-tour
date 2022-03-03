import SelectorContext from "context/SelectorsContext";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect } from "react";

export default function useSelector(
  id: string,
  defaultActiveSelector?: number
): [number, (tab: number) => void] {
  const { asPath } = useRouter();
  const context = useContext(SelectorContext);

  if (context === null) {
    throw new Error(
      "useSelector must be used within a SelectorContextProvider"
    );
  }

  const { selectors, setSelectors } = context;
  const activeSelect = selectors[`${asPath}-${id}`];

  const setActiveSelect = useCallback(
    (tab: number) => {
      setSelectors((prev) => {
        return {
          ...prev,
          [`${asPath}-${id}`]: tab,
        };
      });
    },
    [asPath, id, setSelectors]
  );

  useEffect(() => {
    setActiveSelect(defaultActiveSelector ?? 0);
  }, [defaultActiveSelector, setActiveSelect]);

  return [activeSelect, setActiveSelect];
}
