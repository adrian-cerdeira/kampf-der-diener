import { Card } from '../card/card';
import { Player } from '../player/player';
import { Game } from '../game/game';
import { GameStatus } from '../game/game-status';

import cards from '../cards/cards.json';

// Straight Jasmine testing without Angular's testing support
describe('Testing card class', () => {
    let game: Game;
    let player: Player;
    const startingHitPoints = 15;

    beforeEach(() => {
        game = new Game();
        player = new Player(startingHitPoints, game);
    });

    // Funktionen die nicht getestet werden (weil dies nicht möglich ist oder keinen Sinn macht):
    // getRandomInt, getStartingCards, getScriptedStartingCards, drawRandomStartingCards, generateRandomCardId, getEffects

    it('New turn of game and show if, player changed turn', () => {
        game.newTurn(player);

        expect(player.getTurn()).toBe(1);
    });

    it('Draw new card', () => {
        game.drawCard(player, 5);

        const findDrawedCard = player.getHandCards().find((c: any) => c.id === 5);

        expect(findDrawedCard.id).toBe(5);
    });

    // TODO MF: Get Cost Error
    // it('Place card from hand to diener slot', () => {
    //     game.newTurn(player);
    //     player.setHandCards([new Card(cards.find((c: any) => c.id === 5), player)]);
    //     game.placeDiener(player, 5);

    //     const findDienerCard = player.getDienerSlots().find((c: any) => c.id === 5);

    //     expect(findDienerCard.id).toBe(5);
    // });

    // TODO MF: Get Cost Error
    // it('Place card from hand to spell slot', () => {
    //     game.newTurn(player);
    //     player.setHandCards([new Card(cards.find((c: any) => c.id === 5), player)]);
    //     game.placeSpell(player, 5);

    //     const findSpellCard = player.getSpellSlots().find((c: any) => c.id === 5);

    //     expect(findSpellCard.id).toBe(5);
    // });

    // TODO MF: Get Cost Error
    // it('Is card for current crystals from player allowed to play', () => {
    //     player.setHandCards([new Card(cards.find((c: any) => c.id === 1), player)]);

    //     expect(game.cardCostValidation(player, player.getHandCards(), 5)).toBe(false);
    // });

    // TODO MF: Should but work, it dont
    // it('Attacks between cards', () => {
    //     const playerEnemy = new Player(startingHitPoints, game);
    //     const attackerCard = new Card(cards.find((c: any) => c.id === 1), player);
    //     const defenderCard = new Card(cards.find((c: any) => c.id === 2), playerEnemy);

    //     game.cardAttacksCard(attackerCard, defenderCard);

    //     // expect(attackerCard.getHitpoints()).toBe(-5);
    //     // expect(defenderCard.getHitpoints()).toBe(0);
    // });

    it('Send diener to grave after defeat', () => {
        const graveCard = new Card(cards.find((c: any) => c.id === 1), player);
        player.setDienerSlots([graveCard]);

        game.sendDienerToGrave(graveCard);

        expect(player.getGraveyard().length).toBe(1);
    });

    it('Send handcard to grave after use', () => {
        const graveCard = new Card(cards.find((c: any) => c.id === 1), player);
        player.setHandCards([graveCard]);

        game.sendHandcardToGrave(graveCard);

        expect(player.getGraveyard().length).toBe(1);
    });

    it('Send spell to grave after use', () => {
        const graveCard = new Card(cards.find((c: any) => c.id === 16), player);
        player.setSpellSlots([graveCard]);

        game.sendSpellToGrave(graveCard);

        expect(player.getGraveyard().length).toBe(1);
    });

    it('Serach card in specific card array for ex. diener slots, handcards etc.', () => {
        const searchedCard = new Card(cards.find((c: any) => c.id === 1), player);

        player.setHandCards([searchedCard]);

        const searchedCardPosition = game.searchCard(player.getHandCards(), 1);

        expect(searchedCardPosition).toBe(0);
    });

    it('Set Game Status to specific player win', () => {
        game.getPlayerA().setHitpoints(2);
        game.getPlayerB().setHitpoints(-1);
        game.playerWins();

        expect(game.getStatus()).toBe(GameStatus.PlayerAWon);
    });

    it('Get and set game playerA', () => {
        game.setPlayerA(player);

        expect(player).toBe(game.getPlayerA());
    });

    it('Get and set game playerB', () => {
        game.setPlayerB(player);

        expect(player).toBe(game.getPlayerB());
    });

    it('Get and set status of game', () => {
        game.setStatus(GameStatus.Stopped);

        expect(game.getStatus()).toBe(GameStatus.Stopped);
    });
});
