import { Guard } from '../guard';

export function isSymbol(value: unknown): value is string {
    return typeof value === 'symbol';
}
(isSymbol as Guard).expectation = 'be a symbol';
