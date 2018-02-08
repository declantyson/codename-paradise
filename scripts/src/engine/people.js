/*
 *
 *  Paradise/People
 *  Declan Tyson
 *  v0.0.23
 *  06/02/2018
 *
 */

import { personCount } from '../constants';
import * as util from './util';
import { people } from '../people/people';

export const choosePeople = () => {
    let chosenPeople = [];
    util.log(`Choosing ${personCount} people...`);
    let person;
    while(chosenPeople.length < personCount) {
        person = util.pickRandomProperty(people);
        if(chosenPeople.indexOf(person) === -1) {
            chosenPeople.push(person);
            util.log(`${person} has been chosen.`);
        }
    }

    return chosenPeople;
};