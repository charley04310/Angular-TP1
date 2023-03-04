import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable, tap } from 'rxjs';
import { Festival } from '../models/festival';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';
import { Editeur } from '../models/editeur';

@Injectable({
  providedIn: 'root',
})
export class EditeurService {
  private editeurStore: AngularFirestore;
  private editeurCollection: AngularFirestoreCollection<Editeur>;
  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.editeurStore = db;
    this.editeurCollection = db.collection('/editeurs/');
  }

  private editeur = '/editeurs/';

  json2Editeur(json: any): Editeur {
    return new Editeur(
      json.nom,
      json.id,
      json.adresse,
      json.telephone,
      json.listeFestivalId
    );
  }

  getAllEditeurByid(): Observable<Editeur[]> {
    return this.editeurCollection
      .valueChanges({ idField: 'id' })
      .pipe(map((data) => data.map((doc) => this.json2Editeur(doc))));
  }

  addNewEditeur(editeur: Editeur, idFestival: string) {
    if (editeur.id == null) {
      editeur.id = this.editeurStore.createId();
    }
    if (editeur.listeFestivalId == null) {
      editeur.listeFestivalId = [];
    }
    editeur.listeFestivalId.push(idFestival);
    this.editeurCollection.doc(editeur.id).set(Object.assign({}, editeur));
  }
}
