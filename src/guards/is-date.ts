import { Guard } from '../types';
import { isInstanceOf } from './is-instance-of';

/**
 * Guard that tests if the value is an instance of Date
 * @param value The value to test
 * @returns The result of the test
 */
export const isDate = isInstanceOf(Date);
(isDate as Guard).expectation = 'be a date';
