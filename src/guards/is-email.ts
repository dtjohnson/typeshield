import { Guard } from '../types';
import { isMatch } from './is-match';

/**
 * Brand interface for [[Email]]
 */
interface EmailBrand {
    __Email__: void;
}

/**
 * A string that is an email address
 */
export type Email = string & EmailBrand;

/**
 * Regex for validating an email address. Found here:
 * https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression#201378
 * @ignore
 */
// eslint-disable-next-line no-control-regex, max-len
const regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/u;

/**
 * Guard that tests if the value is an email address
 * @param value The value to test
 * @returns The result of the test
 */
export function isEmail(value: unknown): value is Email {
    return isMatch(regex)(value);
}
(isEmail as Guard).expectation = 'be an email address';
