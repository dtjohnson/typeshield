import { Guard } from '../types';
import { isInstanceOf } from './is-instance-of';

export const isDate = isInstanceOf(Date);
(isDate as Guard).expectation = 'be a date';
