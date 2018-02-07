/*
 *
 *  XL RPG/Constants
 *  XL Gaming/Declan Tyson
 *  v0.0.26
 *  07/02/2018
 *
 */

export const fps = 45;
export const actionTimeoutLimit = 2;
export const tileSize = 15;
export const tilesWide = 96;
export const tilesHigh = 54;

export const colours = {
    black : '#000000',
    white: '#FFFFFF',
    green: '#00AA00',
    blue: '#0000AA',
    brown: '#4f1f0b',
    darkbrown: '#291006',
    grey: '#cdcdcd',
    red: '#ff0000'
};

export const directions = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right'
};

export const texts = {
    dead: 'Dead'
};

export const fonts = {
    large: '24px "Roboto Condensed"',
    small: '16px "Roboto"',
    death: '24px "Permanent Marker"'
};

export const canvasProperties = {
    width: tileSize * tilesWide,
    height: tileSize * tilesHigh,
    centerPoint: {
        x: ((tileSize * tilesWide) / 2) - (tileSize / 2),
        y: ((tileSize * tilesHigh) / 2) - (tileSize / 2)
    }
};

export const interactionTextArea = {
    width: canvasProperties.width,
    height: canvasProperties.height / 3,
    background: colours.black,
    alpha: 0.4,
    badgeOffsetX: 20,
    badgeOffsetY: 40,
    lineHeight: 18
};

export const genders = {
    male   : 'M',
    female : 'F',
    alien  : 'A'
};

export const pronouns = {
    M   : 'him',
    F   : 'her',
    A   : 'xlem'
};

export const posessivePronouns = {
    M   : 'his',
    F   : 'her',
    A   : 'xleir'
};

export const personCount = 4;
export const evidenceCount = 3;
export const herrings = 1;
export const defaultInhabitanceSize = 2;
