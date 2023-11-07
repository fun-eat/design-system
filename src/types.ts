import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type OverridableComponentPropsWithRef<T extends ElementType, P = unknown> = P &
  ComponentPropsWithRef<T> & { as?: T };
export type OverridableComponentPropsWithoutRef<T extends ElementType, P = unknown> = P &
  ComponentPropsWithoutRef<T> & { as?: T };
