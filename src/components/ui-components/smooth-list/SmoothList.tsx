import React, {
  Children,
  FC,
  JSXElementConstructor,
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

type SmoothListProps = {
  transitionDuration?: number;
  delay?: number;
  wrapperTag?: JSXElementConstructor<any>;
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  animated?: boolean;
  onComplete?: () => any;
  children: ReactNode;
};
const SmoothList: FC<SmoothListProps> = ({
  delay = 50,
  transitionDuration = 400,
  wrapperTag: WrapperTag = 'div',
  childTag: ChildTag = 'div',
  children,
  onComplete,
  className,
  childClassName,
  animated,
}) => {
  const [maxIsVisible, setMaxIsVisible] = useState(0);

  const count = useMemo(() => Children.count(children), [children]);

  useEffect(() => {
    if (count === maxIsVisible) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);

    return () => clearTimeout(timeout);
  }, [count, delay, maxIsVisible, transitionDuration]);

  return (
    <WrapperTag className={className}>
      {animated
        ? Children.map(children, (child, i) => {
            return (
              <ChildTag
                className={childClassName}
                style={{
                  transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
                  transform: maxIsVisible > i ? 'none' : 'translateY(20px)',
                  opacity: maxIsVisible > i ? 1 : 0,
                }}
              >
                {child}
              </ChildTag>
            );
          })
        : children}
    </WrapperTag>
  );
};

export default memo(SmoothList);
