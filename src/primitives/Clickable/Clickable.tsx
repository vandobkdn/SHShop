import {
  createElement,
  forwardRef,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';
import classnames from 'classnames';

type Props = {
  tag?: 'button' | 'div' | 'span' | 'label' | 'a';
  onClick: MouseEventHandler;
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
  attrs?: HTMLAttributes<HTMLImageElement> & {
    [p: `data-${string}`]: string | undefined;
  };
};

export const Clickable = forwardRef(
  (
    { tag = 'button', isDisabled, className, children, attrs, onClick }: Props,
    ref
  ) => {
    return createElement(
      tag,
      {
        ...attrs,
        disabled: isDisabled,
        className: classnames(className),
        onClick: onClick,
        ref,
      },
      children
    );
  }
);
