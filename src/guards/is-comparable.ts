import { Comparable } from '../types';
import { hasDefinition } from './has-definition';
import { isFunction } from './is-function';

export const isComparable = hasDefinition<Comparable>({
    compareTo: isFunction,
}, 'Comparable');
