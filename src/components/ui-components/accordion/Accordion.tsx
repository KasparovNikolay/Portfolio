import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react';

import styles from './accordion.module.scss';

export type AccordionProps = {
  buttonElement?: ReactNode;
  children: ReactNode;
};

type InjectedButtonProps = {
  buttonElement?: ReactNode;
  handler: (...val: unknown[]) => void;
};

const InjectedButton: FC<InjectedButtonProps> = ({
  buttonElement,
  handler,
}) => {
  const btn = buttonElement as ReactElement;
  const additionalProp = {
    onClick: handler,
  };

  if (!isValidElement(Children.only(buttonElement)) || !buttonElement) {
    return <button {...additionalProp}>click</button>;
  }

  return cloneElement(btn, {
    ...btn.props,
    ...additionalProp,
  });
};

const Accordion: FC<AccordionProps> = ({ buttonElement, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const style = useMemo(() => {
    if (isOpen && ref.current) {
      const { height } = (ref.current as HTMLElement).getBoundingClientRect();
      return { maxHeight: height };
    }
    return { maxHeight: '0px' };
  }, [isOpen]);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <InjectedButton buttonElement={buttonElement} handler={handleClick} />
      <div ref={ref} className={styles.testRender}>
        {children}
      </div>
      <div className={styles.container} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
