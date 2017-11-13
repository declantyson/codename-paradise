/*
 *
 *  XL RPG/Locales
 *  XL Gaming/Declan Tyson
 *  v0.0.10
 *  13/11/2016
 *
 */

// Locales

import * as util from '../util';

import { Village } from './village';
import { Islands } from './islands';

export const locales = {
    "Village" : Village,
    "Islands" : Islands
};

export const chooseLocale = () => {
    let locale = util.pickRandomProperty(locales);
    util.log('Choosing locale...');
    util.log(`Locale is ${locale}.`);
    return locale;
};

