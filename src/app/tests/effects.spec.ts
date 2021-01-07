import { Card } from '../card/card';
import { Player } from '../player/player';
import { Game } from '../game/game';
import { Effects } from '../game/effects';

import cards from '../cards/cards.json';

// Straight Jasmine testing without Angular's testing support
describe('Testing effects class', () => {
    let effects: Effects;
    let game: Game;
    let player: Player;
    const startingHitPoints = 15;

    beforeEach(() => {
        effects = new Effects();
        game = new Game();
        player = new Player(startingHitPoints, game);
    });

    it('Get effect of card 66', () => {
        const receivingNewCardPosition = new Card(cards.find(c => c.id === 65), player);
        const donatingNewCardPosition = new Card(cards.find(c => c.id === 44), player);

        effects.effectCard66(receivingNewCardPosition, donatingNewCardPosition);

        expect(receivingNewCardPosition.getAttack()).toBe(16);
        expect(receivingNewCardPosition.getHitpoints()).toBe(10);
        expect(receivingNewCardPosition.getMaxHitpoints()).toBe(10);
        expect(receivingNewCardPosition.getShield()).toBe(19);
    });

});
