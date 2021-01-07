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
