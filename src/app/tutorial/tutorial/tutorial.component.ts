import { Component, OnInit } from '@angular/core';

import { Game } from '../../game/game';

import { UpdateService } from '../../shared/update.service';
import { TutorialDialogsService } from '../tutorial-dialogs.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  game: any;
  modal: any;
  playerBot: any;
  player: any;
  isStarted = false;
  isSecondPlayer = true;

  constructor(
    private updateService: UpdateService,
    private tutorialDialogsService: TutorialDialogsService,
  ) {
    this.updateService.checkUpdate();
  }

  ngOnInit(): void {
    const localStorageIsStarted = window.localStorage.getItem('isStarted') === 'true'
      ? true
      : false;
    this.isStarted = localStorageIsStarted;

    if (this.isStarted) {
      this.start();
    }

  }

  start(): void {
    this.isStarted = true;
    window.localStorage.setItem('isStarted', 'true');

    this.game = new Game();
    this.player = this.game.getPlayerA();
    this.player.name = 'Spieler 1';
    this.player.backgroundColor = '#FF0000';
    this.player.fontColor = '#FFFFFF';
    this.playerBot = this.game.getPlayerB();
    this.playerBot.backgroundColor = '#000000';
    this.playerBot.fontColor = '#FFFFFF';
    this.playerBot.name = 'Bot Hai';
    this.game.getScriptedStartingCards([39, 66, 44, 14, 53], [5, 9, 49, 58, 1]);
    this.modal = this.tutorialDialogsService.getStartDialog();
  }

  showDialog(event: any): void {
    const { modalIndex, showNext } = event;

    switch (modalIndex) {
      case 1:
        this.modal = this.tutorialDialogsService.getStartDialog();
        break;
      case 2:
        this.modal.isActive = showNext;

        showNext
          ? this.modal = this.tutorialDialogsService.getSecondDialog()
          : this.playerBotFirstTurn();
        break;
      case 3:
        this.modal.isActive = showNext;

        if (showNext) {
          this.modal = this.tutorialDialogsService.getThirdDialog();
        }
        break;
      case 4:
        this.modal.isActive = showNext;

        if (showNext) {
          this.modal = this.tutorialDialogsService.getFourthDialog();
        }
        break;
      case 5:
        this.modal.isActive = showNext;

        if (showNext) {
          this.modal = this.tutorialDialogsService.getLastDialog();
        }
        break;
    }
  }

  drawCard(player: any): void {
    const isPlayer = player.name === 'Spieler 1';

    if (isPlayer && this.modal.index === 2) {
      // Turn 1 Player
      this.game.newTurn(this.player);
      this.game.drawCard(this.player, 59);

      setTimeout(() => {
        // Turn 2 Bot
        this.game.newTurn(this.playerBot);
        this.game.drawCard(this.playerBot, 45);

        const playerBotDienerSlots = this.playerBot.getDienerSlots();
        const cardPlayerBotPosition = this.game.searchCard(playerBotDienerSlots, 5);

        this.game.cardAttacksPlayer(playerBotDienerSlots[cardPlayerBotPosition], this.player);

        this.showDialog({
          modalIndex: 3,
          showNext: true,
        });
      }, 2000);
    }

    if (isPlayer && this.modal.index === 3) {
      // Turn 2 Player
      this.game.newTurn(this.player);
      this.game.drawCard(this.player, 65);
    }

    if (isPlayer && this.modal.index === 4) {
      // Turn 3 Player
      this.game.newTurn(this.player);
      this.game.drawCard(this.player, 61);
    }

  }

  playCard(card: any, player: any): void {
    const isPlayer = player.name === 'Spieler 1';

    if (isPlayer && card.id === 65 && this.modal.index === 3) {
      // Turn 2 Player
      const newCardPlayerPosition = this.game.searchCard(this.player.getHandCards(), 65);

      this.game.placeDiener(this.player, newCardPlayerPosition);

      setTimeout(() => {
        // Turn 3 Bot
        this.game.newTurn(this.playerBot);
        this.game.drawCard(this.playerBot, 41);

        const playerDiener = this.player.getDienerSlots();
        const playerBotDiener = this.playerBot.getDienerSlots();
        const newCardPositionBot = this.game.searchCard(playerBotDiener, 5);
        const newCardPositionPlayer = this.game.searchCard(playerDiener, 65);

        this.game.cardAttacksCard(playerBotDiener[newCardPositionBot], playerDiener[newCardPositionPlayer]);

        this.showDialog({
          modalIndex: 4,
          showNext: true,
        });
      }, 2000);
    }

    if (isPlayer && card.id === 66 && this.modal.index === 4) {
      // Turn 3 Player
      const newPlayerCardPosition = this.game.searchCard(this.player.getHandCards(), 66);

      this.game.placeSpell(this.player, newPlayerCardPosition);
    }

    if (isPlayer && card.id === 44 && this.modal.index === 4) {
      // Turn 3 Player
      const playerDiener = this.player.getDienerSlots();
      const playerHandCards = this.player.getHandCards();
      const receivingNewCardPosition = this.game.searchCard(playerDiener, 65);
      const donatingNewCardPosition = this.game.searchCard(playerHandCards, 44);

      this.game.getEffects().effectCard66(playerDiener[receivingNewCardPosition], playerHandCards[donatingNewCardPosition]);

      const playerSpells = this.player.getSpellSlots();
      const newPlayerSpellsPosition = this.game.searchCard(playerSpells, 66);

      this.game.sendHandcardToGrave(playerHandCards[donatingNewCardPosition]);
      this.game.sendSpellToGrave(playerSpells[newPlayerSpellsPosition]);

      const newCardPlayerPosition = this.game.searchCard(playerDiener, 65);
      this.game.cardAttacksPlayer(playerDiener[newCardPlayerPosition], this.playerBot);

      setTimeout(() => {
        // Finish
        this.game.playerWins();

        this.showDialog({
          modalIndex: 5,
          showNext: true,
        });
      }, 2000);
    }
  }

  private playerBotFirstTurn(): void {
    this.game.newTurn(this.playerBot);
    this.game.drawCard(this.playerBot, 13);

    const newCardPosition = this.game.searchCard(this.playerBot.getHandCards(), 5);

    this.game.placeDiener(this.playerBot, newCardPosition);

    setTimeout(() => {
      this.showDialog({
        modalIndex: 2,
        showNext: true,
      });
    }, 2000);
  }

}
