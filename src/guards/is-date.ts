import { Guard } from '../guard';
import { isInstanceOf } from './is-instance-of';

export const isDate = isInstanceOf(Date);
(isDate as Guard).expectation = 'be a date';
