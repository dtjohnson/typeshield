import { Guard } from '../guard';
import { isIdenticalTo } from './is-identical-to';

export const isEmptyString = isIdenticalTo('');
(isEmptyString as Guard).expectation = 'be an empty string';
