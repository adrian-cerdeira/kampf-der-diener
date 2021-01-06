import { Component, OnInit } from '@angular/core';

import { UpdateService } from '../../shared/update.service';
import { Game } from '../../game/game';

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

    // Turn 1 Bot
    // this.game.drawCard(this.game.getPlayerB(), 13);

    // Search for card to place
    // let cardPos = this.game.searchCard(this.game.getPlayerB().getHandCards(), 5);

    // Place card
    // this.game.placeCard(this.game.getPlayerB(), cardPos); 



    // Turn 1 Player
    // this.game.drawCard(this.game.getPlayerA(), 59);


    // Turn 2 Bot
    // this.game.drawCard(this.game.getPlayerB(), 45);

    // let playerBDiener = this.game.getPlayerB().getDienerSlots();
    // let cardPosB = this.game.searchCard(playerBDiener, 5);

    // this.game.cardAttacksPlayer(playerBDiener[cardPosB], this.game.getPlayerA());


    // Turn 2 Player
    // this.game.drawCard(this.game.getPlayerA(), 65);

    // let cardPos = this.game.searchCard(this.game.getPlayerA().getHandCards(), 65);

    // this.game.placeCard(this.game.getPlayerA(), cardPos); 


    // Turn 3 Bot
    // this.game.drawCard(this.game.getPlayerB(), 41);

    // let playerADiener = this.game.getPlayerA().getDienerSlots();
    // let playerBDiener = this.game.getPlayerB().getDienerSlots();
    // let cardPosB = this.game.searchCard(playerBDiener, 5);
    // let cardPosA = this.game.searchCard(playerADiener, 65);

    //this.game.cardAttacksCard(playerBDiener[cardPosB], playerADiener[cardPosA]);

    // Turn 3 Player
    // this.game.drawCard(this.game.getPlayerA(), 61);

    // Methode Effektaktivierung

    // let playerADiener = this.game.getPlayerA().getDienerSlots();
    // let cardPos = this.game.searchCard(playerADiener, 65);

    // this.game.cardAttacksPlayer(playerADiener[cardPos], this.game.getPlayerB());

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
    this.modal = this.createDialog(this.getStartDialog());
  }

  showDialog(event: any): void {
    const { modalIndex, showNext } = event;

    switch (modalIndex) {
      case 1:
        this.modal = this.createDialog(this.getStartDialog());
        break;
      case 2:
        this.modal.isActive = showNext;
        if (showNext) {
          this.modal = this.createDialog({
            title: 'Spielen',
            content: `
          <h1 class="title">Dein Spielzug</h1>
          <p class="has-text-left">
          Ziehe eine Karte und behalte Sie.
          </p>
          `,
            index: 2,
            isActive: true,
          });
        }
        break;
      case 3:
        this.modal.isActive = showNext;
        if (showNext) {
          this.modal = this.createDialog({
            title: 'Spielen',
            content: `
            <h1 class="title">Verteidige dich</h1>
            <p class="has-text-left">
              Ziehe eine Karte und spiele die Karte <strong>Regenbogenviech</strong>, um keinen Schaden zu erleiden.
            </p>
            `,
            index: 3,
            isActive: true,
          });
        }
        break;
      case 4:
        this.modal.isActive = showNext;
        if (showNext) {
          this.modal = this.createDialog({
            title: 'Spielen',
            content: `
              <h1 class="title">Besiege dein Gegner</h1>
              <p class="has-text-left">
                Der Gegner hat dich angegriffen, nutze den <strong>Lebenstrank</strong> und die <strong>Ritual der Stärkung</strong>,
                um den <strong>Sternenzerstörer</strong> zu nutzen, damit das <strong>Regenbogenviech</strong> den Gegner angreifen kann.
              </p>
              `,
            index: 4,
            isActive: true,
          });
        }
        break;
      case 5:
        this.modal.isActive = showNext;
        if (showNext) {
          this.modal = this.createDialog({
            title: 'Ende',
            content: `
                <h1 class="title">Gewonnen</h1>
                <p>
                  Du hast dein Gegner besiegt!
                  <br />
                  Das Tutorial hast du erfolgreich abgeschlossen.
                </p>
                <br />
                <h2 class="title">Probleme</h2>
                <p>
                  Falls technische Schwierigkeiten passiert sind, erstellen Sie bitte ein Ticket auf 
                  <a href="https://github.com/adrian-cerdeira/kampf-der-diener/issues/new">
                  <i class="fab fa-github"></i>
                  Github - Kampf der Diener Issues
                  </a>
                  .
                  <br />
                  <br />
                  Danke fürs Feedback!
                </p>
                `,
            index: 5,
            isActive: true,
          });
        }
        break;
    }
  }

  private getStartDialog(): any {
    return {
      title: 'Start',
      content: `
      <h1 class="title">Willkommen zu Kampf der Diener</h1>
      <p class="has-text-left">
        In diesem Tutorial werden Sie das Spiel kennenlernen.
        <br />
        Schritt für Schritt werden Sie an das Spiel spielerisch herangeführt.
      </p>
      <br />
      <h2 class="title">Probleme</h2>
      <p>
        Falls technische Schwierigkeiten passiert sind, erstellen Sie bitte ein Ticket auf 
        <a href="https://github.com/adrian-cerdeira/kampf-der-diener/issues/new">
        <i class="fab fa-github"></i>
        Github - Kampf der Diener Issues
        </a>
        .
        <br />
        <br />
        Danke fürs Feedback!
      </p>
      `,
      index: 1,
      isActive: true,
    }
  }

  private createDialog(modal: any): any {
    return {
      title: modal.title,
      content: modal.content,
      index: modal.index,
      isActive: modal.isActive,
    }
  }

}
