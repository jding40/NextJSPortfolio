import { useEffect } from "react";

const useEqualHeight = (className) => {
  useEffect(() => {
    const updateHeight = () => {
      const elements = document.querySelectorAll(className);
      if (elements.length === 0) return;

      let maxHeight = 0;

      elements.forEach((element) => {
        const height = element.getBoundingClientRect().height;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      elements.forEach((element) => {
        element.style.height = `${maxHeight}px`;
      });
    };
    // 初次加载时调整高度
    updateHeight();

    // 监听窗口大小变化事件
    window.addEventListener("resize", updateHeight);

    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [className]); // 监听className变化
};

export default useEqualHeight;
