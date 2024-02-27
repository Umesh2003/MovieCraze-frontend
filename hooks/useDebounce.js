import { useEffect, useState } from "react";

export function useDebounce(term, delay = 200) {
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(term);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [term, delay]);

  return debouncedTerm;
}
