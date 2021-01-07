import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

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
