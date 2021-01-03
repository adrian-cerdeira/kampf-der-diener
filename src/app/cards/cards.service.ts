import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private dbConnection: any;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
  ) {
    this.dbConnection = this.getConnection();
  }

  getAll(): Observable<any> {
    return this.dbConnection.valueChanges();
  }

  getBasicsAll(): Observable<any> {
    return this.dbConnection.valueChanges().pipe(
      map((cards: any) => cards
        .map((c: any) => {

          return {
            id: c.id,
            name: c.name,
            description: c.description,
            effects: c.effects,
            attack: c.attack,
            life: c.life,
            shield: c.shield,
            crystal: c.crystal,
            type: c.type,
          };

        })
      ));
  }

  getById(id: number): Observable<any> {
    return this.dbConnection.valueChanges().pipe(
      map((cards: any) => cards.find((c: any) => c.id === id))
    );
  }

  getImg(name: string): Observable<any> {
    return this.storage.ref(`cards/${name}`).getDownloadURL();
  }

  private getConnection(config?: any): any {
    return this.db.list('/cards', config);
  }

}

export enum CardLocation {
  undefined = 0,
  inDeckPlayerA = 1,
  inDeckPlayerB = 2,
  inHandPlayerA = 3,
  inHandPLayerB = 4,
  DienerPlayerA = 5,
  DienerPlayerB = 6,
  ZauberPlayerA = 7,
  ZauberPlayerB = 8,
  FriedhofPlayerA = 9,
  FriedhofPlayerB = 10,
}
