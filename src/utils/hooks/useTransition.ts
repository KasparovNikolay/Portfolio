import { CSSProperties, useEffect, useState } from 'react';

/*
  Draft
  Hook let you make initial animation
*/
type useTransitionState = CSSProperties | undefined;
export type useTransitionProps = {
  intialStyle?: CSSProperties;
  delay?: number;
  fade?: boolean;
  type?: 'transition';
  direction?: 'top' | 'left' | 'right' | 'buttom';
  inTransitionComponent?: boolean;
};
type useTransitionType = (props?: useTransitionProps) => {
  style: useTransitionState;
};

const getStylesFromProps = (props?: useTransitionProps): CSSProperties => {
  if (!props)
    return {
      transform: 'translateX(-500px)',
      opacity: 0,
      transition: '300ms',
    };

  if (props.intialStyle) return props.intialStyle;
  const { delay = 300, type, direction, fade = false } = props;
  const result: CSSProperties = {
    transition: `opacity ${delay}ms ease-in 0s, transform ${delay}ms ease-out 0s`,
  };
  const transtionDirections = {
    right: 'translateX(-500px)',
    left: 'translateX(500px)',
    top: 'translateY(300px)',
    buttom: 'translateY(-300px)',
  };
  if (type === 'transition' && !!direction) {
    result.transform = transtionDirections[direction];
  }
  if (fade) {
    result.opacity = 0;
  }
  return result;
};

export const useTransition: useTransitionType = (props) => {
  const [style, setStyle] = useState<useTransitionState>(
    getStylesFromProps(props)
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStyle({
        transition: 'opacity 320ms ease-in 0s, transform 300ms ease-out 0s',
      });
    }, props?.delay || 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return { style };
};
