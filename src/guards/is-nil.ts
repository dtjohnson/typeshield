import { isNull } from './is-null';
import { isUndefined } from './is-undefined';
import { or } from '../operators/or';

export const isNil = or(isNull, isUndefined);
