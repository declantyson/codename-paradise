/*
 *
 *  XL RPG/Locales/Base
 *  XL Gaming/Declan Tyson
 *  v0.0.19
 *  05/02/2018
 *
 */

import * as util from './util';
import {colours, inhabitanceSize, tileSize} from './constants';

class Locale {
    constructor(player, people) {
        this.player = player;
        this.people = people;
        this.entryPoints = {};
        this.spawnPoints = [];
        this.inhabitances = [];
    }

    initialise(width, height) {
        let map = [],
            enc = [],
            ent = [];
        for(let i = 0; i < width; i++) {
            map.push([]);
            enc.push([]);
            ent.push([]);
            for(let j = 0; j < height; j++) {
                map[i].push(["Blank"]);
                enc[i].push(false);
                ent[i].push(false);
            }
        }

        this.map = map;
        this.encounters = enc;
        this.entrances = ent;
        this.width = width;
        this.height = height;
    }

    terrainPaint(startX, startY, width, height, terrain) {
        for(let x = startX; x < startX + width; x++) {
            for(let y = startY; y < startY + height; y++) {
                this.map[x][y] = terrain;
            }
        }
    }

    randomEncounterPatch(startX, startY, width, height, rate, enemies) {
        for(let x = startX; x < startX + width; x++) {
            for (let y = startY; y < startY + height; y++) {
                this.encounters[x][y] = {
                    rate: rate,
                    enemies: enemies
                };
            }
        }
    }

    addInhabitance(startX, startY, width, height, inhabitance) {
        let doorway = inhabitance.doorway;
        this.terrainPaint(startX, startY, width, height, "Wall");
        this.terrainPaint(doorway.x, doorway.y, 1, 1, "Doorway");
        this.entrances[doorway.x][doorway.y] = {
            locale : inhabitance,
            entryPoint : "frontDoor"
        };
    }

    enterLocaleAt(entryPoint) {
        this.player.setPlacement(this.entryPoints[entryPoint].x, this.entryPoints[entryPoint].y);
    }

    drawInhabitances() {
        for(let i = 0; i < this.inhabitances.length; i++) {
            let inhabitance = this.inhabitances[i];
            this.addInhabitance(inhabitance.x, inhabitance.y, inhabitanceSize, inhabitanceSize, inhabitance);
        }
    }

    assignPeopleToInhabitances() {
        if(this.inhabitances.length === 0 || this.people.length === 0) return;

        for(let i = 0; i < this.people.length; i++) {
            let person = this.people[i],
                index = Math.floor(Math.random() * this.inhabitances.length),
                inhabitance = this.inhabitances[index];

            inhabitance.addInhabitant(person);
        }
    }
}

class Interior extends Locale {
    constructor(player, people, inhabitance) {
        super(player, people);
        this.inhabitance = inhabitance;
        util.log(`Welcome to ${inhabitance.name}.`);

        for(let i = 0; i < inhabitance.inhabitants.length; i++) {
            let inhabitant = inhabitance.inhabitants[i];
            util.log(`${inhabitant} lives here.`);
        }
    }
}

class Inhabitance {
    constructor(id, name, x, y, doorway) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
        this.doorway = doorway;
        this.inhabitants = [];
    }

    addInhabitant(person) {
        this.inhabitants.push(person);
    }
}

export { Locale, Interior, Inhabitance };