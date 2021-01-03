import { Game } from "../game/game";
import { Player } from "../game/player";

// Straight Jasmine testing without Angular's testing support
describe('Testing player class', () => {
    let player: Player;
    let game: Game;
    const startingHitPoints = 15;

    beforeEach(() => {
        game = new Game(startingHitPoints);
        player = new Player(startingHitPoints, game);
    });

    it('Get current hitpoints (amount of life) of a player', () => {
        player.setHitpoints(10);
        expect(player.getHitpoints()).toBe(10);
    });

    it('Set current hitpoints (amount of life) of a player', () => {
        player.setHitpoints(8);
        expect(player.getHitpoints()).toBe(8);
    });

    it('Take damage to player', () => {
        player.takeDamage(10);
        expect(player.getHitpoints()).toBe(5);
    });

    it('Heal player', () => {
        player.takeDamage(10);
        player.healHitpoints(5);
        expect(player.getHitpoints()).toBe(10);
    });

    it('Get max. hitpoints (amount of life) of a player', () => {
        expect(player.getMaxHitpoints()).toBe(startingHitPoints);
    });

    it('Set max. hitpoints (amount of life) of a player', () => {
        player.setMaxHitpoints(30);
        expect(player.getMaxHitpoints()).toBe(30);
    });

    it('Get current crystals of a player', () => {
        player.nextTurn();
        expect(player.getCrystals()).toBe(1);
    });

    it('Set current crystals of a player', () => {
        player.setCrystals(5);
        expect(player.getCrystals()).toBe(5);
    });

    it('Get current turn of a player', () => {
        player.nextTurn();
        expect(player.getTurn()).toBe(1);
    });

    it('Set current turn of a player', () => {
        player.setTurn(5);
        player.nextTurn();
        expect(player.getTurn()).toBe(6);
    });

    it('Set next turn of a player', () => {
        player.setTurn(8);
        player.nextTurn();
        expect(player.getTurn()).toBe(9);
    });

    it('Get handcards of a player', () => {
        const handCards = [1, 2, 3, 4, 5];
        player.setHandCards(handCards);

        expect(player.getHandCards()).toBe(handCards);
    });

    it('Set handcards of a player', () => {
        const handCards = [1, 2, 3];
        player.setHandCards(handCards);

        expect(player.getHandCards()).toBe(handCards);
    });

    it('Get amount of dienerslots of a player', () => {
        expect(player.getDienerSlots().length).toBe(5);
    });

    it('Set amount of dienerslots of a player', () => {
        const dienerSlots = [1, 2, 3];
        player.setDienerSlots(dienerSlots);

        expect(player.getDienerSlots().length).toBe(3);
    });

    it('Get amount of spellslots of a player', () => {
        expect(player.getSpellSlots().length).toBe(1);
    });

    it('Set amount of spellslots of a player', () => {
        const spellSlots = [1, 2, 3];
        player.setSpellSlots(spellSlots);

        expect(player.getSpellSlots().length).toBe(3);
    });

    it('Get amount of partnerslots of a player', () => {
        expect(player.getPartnerSlots().length).toBe(2);
    });

    it('Get amount of partnerslots of a player', () => {
        const partnerSlots = [1, 2];
        player.setPartnerSlots(partnerSlots);

        expect(player.getPartnerSlots().length).toBe(2);
    });

    it('Get dead cards in graveyard of a player', () => {
        const graveyard = [1, 2, 3, 4, 5];
        player.setGraveyard(graveyard);

        expect(player.getGraveyard()).toBe(graveyard);
    });

    it('Set dead cards in graveyard of a player', () => {
        const graveyard = [1];
        player.setGraveyard(graveyard);

        expect(player.getGraveyard()).toBe(graveyard);
    });
});