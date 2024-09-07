import { createElement, HTMLAttributes, ReactNode, forwardRef } from 'react';
import classnames from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
  attrs?: HTMLAttributes<HTMLElement> & {
    [p: `data-${string}`]: string;
  };
  tag?: 'div' | 'nav' | 'span' | 'main';
};

export const View = ({ attrs, children, className, tag = 'div' }: Props) => {
  return createElement(
    tag,
    { ...attrs, className: classnames(className) },
    children
  );
};

export const ViewRef = forwardRef(
  ({ attrs, children, className, tag = 'div' }: Props, ref) => {
    return createElement(
      tag,
      { ...attrs, ref, className: classnames(className) },
      children
    );
  }
);
