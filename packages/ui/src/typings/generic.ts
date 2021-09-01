import { Classes } from 'jss';

import { Theme } from '../../../theme';

export interface IWithStyle {
  classes: Classes;
  theme: Theme;
}

export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;