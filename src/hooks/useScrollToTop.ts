import { useEffect } from "react";

// Scroll to top when loading state changes to false
export const useScrollToTop = (isLoading: boolean) => {
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);
};
