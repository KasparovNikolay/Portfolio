import { MutableRefObject, useCallback, useEffect, useRef } from "react";

const SCROLL_COEFFICIENT = 0.7;
/*
 Меняет вертикальный скролл на горизонтальный для выбранного элемента
 */
export const useScrollChange = (): { ref: MutableRefObject<null> } => {
  const ref = useRef(null);

  const onWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const el = ref.current as unknown as HTMLElement;
    const diffY = e.deltaY;
    const diffX = e.deltaX;
    const leftPosition = el.scrollLeft;
    if (Math.abs(diffY) > Math.abs(diffX)) {
      el.scrollLeft = leftPosition - diffY * SCROLL_COEFFICIENT;
    } else {
      el.scrollLeft = leftPosition + diffX * SCROLL_COEFFICIENT;
    }
  }, []) as EventListener;

  useEffect(() => {
    const el = ref.current as unknown as HTMLElement;
    el.addEventListener("mousewheel", onWheel, false);
    return () => {
      el.removeEventListener("mousewheel", onWheel, false);
    };
  }, []);

  return { ref };
};
