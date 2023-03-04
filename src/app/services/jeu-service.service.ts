import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Jeu } from '../models/jeu';

@Injectable({
  providedIn: 'root',
})
export class JeuService {
  private jeuStore: AngularFirestore;
  private jeuCollection: AngularFirestoreCollection<Jeu>;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.jeuStore = db;
    this.jeuCollection = db.collection('jeux');
  }

  json2Jeu(json: any): Jeu {
    return new Jeu(
      json.editeurId,
      json.nom,
      json.type,
      json.age_min,
      json.age_max,
      json.nb_joueurs_min,
      json.nb_joueurs_max,
      json.duree
    );
  }

  getAllJeux(): Observable<Jeu[]> {
    return this.jeuCollection
      .valueChanges({ idField: 'id' })
      .pipe(map((data) => data.map((doc) => this.json2Jeu(doc))));
  }

  addUpdateJeu(jeu: Jeu, editeur_id: string) {
    if (jeu.id == null) {
      jeu.id = this.jeuStore.createId();
    }
    jeu.editeurId = editeur_id;
    console.log(jeu);
    this.jeuCollection.doc(jeu.id).set(Object.assign({}, jeu));
  }
}
