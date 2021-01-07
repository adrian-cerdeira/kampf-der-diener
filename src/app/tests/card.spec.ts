import { Card } from '../cards/card';
import { Player } from '../player/player';
import { Game } from '../game/game';

import { CardLocation } from '../cards/card-location';

import cards from '../cards/cards.json';

// Straight Jasmine testing without Angular's testing support
describe('Testing card class', () => {
    const testCardFromJson = cards.find(c => c.id === 1);
    let card: Card;
    let player: Player;
    let game: Game;
    const startingHitPoints = 15;

    beforeEach(() => {
        game = new Game();
        player = new Player(startingHitPoints, game);
        card = new Card(testCardFromJson, player);
    });

    it('Get Id of card', () => {
        expect(card.getId()).toBe(1);
    });

    it('Get normal cost (crystal amount) of card', () => {
        expect(card.getCost()).toBe(4);
    });

    it('Get current cost of played card', () => {
        card.setCost(2);

        expect(card.getCost()).toBe(2);
    });

    it('Set cost (crystal amount) of card', () => {
        card.setCost(6);

        expect(card.getCost()).toBe(6);
    });

    it('Get attack of card', () => {
        expect(card.getAttack()).toBe(10);
    });

    it('Set specific attack of card', () => {
        card.setAttack(5);

        expect(card.getAttack()).toBe(5);
    });

    it('Get shield of card', () => {
        expect(card.getShield()).toBe(0);
    });

    it('Set specific shield of card', () => {
        card.setShield(5);

        expect(card.getShield()).toBe(5);
    });

    it('Get type of card', () => {
        expect(card.getType()).toBe(0);
    });

    it('Set new type to card', () => {
        card.setType(1);

        expect(card.getType()).toBe(1);
    });

    it('Get current hitpoints (amount life) of card', () => {
        expect(card.getHitpoints()).toBe(1);
    });

    it('Set hitpoints by damage of card', () => {
        card.setHitpoints(5);

        expect(card.getHitpoints()).toBe(5);
    });

    it('Get max. hitpoints (max. amount life) of card', () => {
        expect(card.getMaxHitpoints()).toBe(1);
    });

    it('Set max. hitpoints (set max. amount life) of card', () => {
        card.setMaxHitpoints(7);

        expect(card.getMaxHitpoints()).toBe(7);
    });

    it('Get position (in board) of card', () => {
        expect(card.getLocation()).toBe(CardLocation.undefined);
    });

    it('Set position (in board) of card', () => {
        card.setLocation(CardLocation.inHand);

        expect(card.getLocation()).toBe(CardLocation.inHand);
    });
});
