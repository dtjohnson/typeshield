import { Equatable } from '../interfaces';
import { hasDefinition } from './has-definition';
import { isFunction } from './is-function';

export const isEquatable = hasDefinition<Equatable>({
    equals: isFunction,
}, 'Equatable');
