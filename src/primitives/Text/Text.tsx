import { createElement, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  children: ReactNode;
  className?: string;
  attrs?: HTMLAttributes<HTMLElement> & {
    [p: `data-${string}`]: string;
  };
  tag?: 'p' | 'label' | 'small' | 'strong' | 'h1' | 'h2' | 'h3';
};

export const Text = ({ children, attrs, className, tag = 'p' }: Props) => {
  return createElement(
    tag,
    { ...attrs, className: classnames(className) },
    children
  );
};
