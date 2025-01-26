// filepath: /e:/github deployment/NextJSPortfolio/hooks/useEqualHeight.js
import { useEffect } from "react";

const useEqualHeight = (className) => {
  useEffect(() => {
    const elements = document.querySelectorAll(className);
    if (elements.length === 0) return;

    let maxHeight = 0;

    elements.forEach((element) => {
      //getBoundingClientRect().height 和clientHeight均可 前者更好
      const height = element.getBoundingClientRect().height;
      //const height = element.clientHeight;

      //const height = element.style.height;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    elements.forEach((element) => {
      element.style.height = `${maxHeight}px`;
    });
  }, [className]);
};

export default useEqualHeight;
