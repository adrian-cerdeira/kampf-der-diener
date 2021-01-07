import { Game } from '../game/game';
import { Move } from '../game/move';
import { Player } from '../player/player';

import cards from '../cards/cards.json';
import { Card } from '../card/card';

// Straight Jasmine testing without Angular's testing support
describe('Testing card class', () => {
    let move: Move;
    let game: Game;
    let player: Player;
    const startingHitPoints = 15;

    beforeEach(() => {
        move = new Move();
        game = new Game();
        player = new Player(startingHitPoints, game);
    });

    it('Get card of player move', () => {
        const cardId = 1;
        const card = new Card(cards.find(c => c.id === cardId), player);

        expect(move.getCard(cardId, player).getId()).toBe(card.getId());
    });

    it('Battle between two cards in a game', () => {
        const enemyPlayer = new Player(startingHitPoints, game);
        const attackingCard = new Card(cards.find(c => c.id === 1), player);
        const defendingCard = new Card(cards.find(c => c.id === 2), enemyPlayer);

        move.battleBetweenCards(attackingCard, defendingCard);

        expect(defendingCard.getHitpoints()).toBe(-5);
        expect(attackingCard.getHitpoints()).toBe(0);
    });

    it('Attack on a player in a game', () => {
        const attackingCard = new Card(cards.find(c => c.id === 1), player);

        move.attackOnPlayer(attackingCard, player);

        expect(player.getHitpoints()).toBe(5);
    });
});
