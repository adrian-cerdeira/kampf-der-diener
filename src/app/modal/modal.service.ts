import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  getStartDialog(): any {
    return this.create({
      title: 'Start',
      content: `
        <h1 class="title">Willkommen zu Kampf der Diener</h1>
        <p>
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
    });
  }

  getSecondDialog(): any {
    return this.create({
      title: 'Spielen',
      content: `
        <h1 class="title">Dein Spielzug</h1>
        <p>
          Der Bot Hai spielte <strong>Agent Schnecke</strong>
          <br />
          Ziehe eine Karte und behalte Sie.
        </p>
      `,
      index: 2,
      isActive: true,
    });
  }

  getThirdDialog(): any {
    return this.create({
      title: 'Spielen',
      content: `
        <h1 class="title">Verteidige dich</h1>
        <p class="has-text-left">
          Der Bot Hai hat dich mit <strong>Agent Schnecke</strong> angegriffen.
          <br />
          Ziehe eine Karte und spiele das <strong>Regenbogenviech</strong>, um dich zu verteidigen.
        </p>
      `,
      index: 3,
      isActive: true,
    });
  }

  getFourthDialog(): any {
    return this.create({
      title: 'Spielen',
      content: `
        <h1 class="title">Besiege den Bot</h1>
        <p class="has-text-left">
          Der Bot hat dich angegriffen.
          <br/>
          1. Ziehe eine Karte und behalte Sie
          <br/>
          2. Setze <strong>Ritual der Stärkung</strong> ein
          <br/>
          3. Setze somit zusätzlich <strong>Sternenzerstörer</strong> ein,
          damit das <strong>Regenbogenviech</strong> den Gegner mit verstärkten Attribute angreifen kann.
        </p>
      `,
      index: 4,
      isActive: true,
    });
  }

  getLastDialog(): any {
    return this.create({
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

  create(template: any): any {
    const emptyModal = {
      title: '',
      content: '',
      index: 0,
      isActive: false,
    };

    return {
      ...emptyModal,
      ...template,
    };
  }

}
