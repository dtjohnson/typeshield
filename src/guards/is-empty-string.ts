import { Guard } from '../types';
import { isIdenticalTo } from './is-identical-to';

/**
 * Guard that tests if the value is an empty string
 * @param value The value to test
 * @returns The result of the test
 */
export const isEmptyString = isIdenticalTo('');
(isEmptyString as Guard).expectation = 'be an empty string';
