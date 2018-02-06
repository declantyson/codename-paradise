/*
 *
 *  XL RPG/Person/Evelyn
 *  XL Gaming/Declan Tyson
 *  v0.0.20
 *  13/11/2017
 *
 */

import { Person } from '../engine/person';
import { genders } from '../constants';

class Evelyn extends Person {
    constructor() {
        super("Evelyn", genders.female);
    }
}

export { Evelyn };
