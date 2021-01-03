import { Card } from "../cards/card";
import cards from '../cards/cards.json';

// Straight Jasmine testing without Angular's testing support
describe('card', () => {
    const testCardFromJson = cards.find(c => c.id === 1);
    let card: Card;

    beforeEach(() => { card = new Card(testCardFromJson); });

    it('getId of card', () => {
        expect(card.getId()).toBe(1);
    });

    it('getNormalCost (crystal amount) of card', () => {
        expect(card.getCost()).toBe(4);
    });

    it('getCost of current played card', () => {
        card.setCost(2)
        expect(card.getCost()).toBe(2);
    });

    it('setCost of card', () => {
        card.setCost(2)
        expect(card.getCost()).toBe(2);
    });

    it('getAttack of card', () => {
        expect(card.getAttack()).toBe(10);
    });

    it('setAttack of card', () => {
        card.setAttack(5);
        expect(card.getAttack()).toBe(5);
    });

    it('getShield of card', () => {
        expect(card.getShield()).toBe(0);
    });

    it('setShield of card', () => {
        card.setShield(5);
        expect(card.getShield()).toBe(5);
    });

    it('getShield of card', () => {
        expect(card.getShield()).toBe(0);
    });

    it('getType of card', () => {
        expect(card.getType()).toBe(0);
    });

    it('setType of card', () => {
        card.setType(1);
        expect(card.getType()).toBe(1);
    });

    it('getHitpoints of card', () => {
        expect(card.getHitpoints()).toBe(1);
    });

    it('setHitpoints of card', () => {
        card.setHitpoints(5);
        expect(card.getHitpoints()).toBe(5);
    });

    it('getMaxHitpoints of card', () => {
        expect(card.getMaxHitpoints()).toBe(1);
    });

    it('setMaxHitpoints of card', () => {
        card.setMaxHitpoints(7);
        expect(card.getMaxHitpoints()).toBe(7);
    });
});