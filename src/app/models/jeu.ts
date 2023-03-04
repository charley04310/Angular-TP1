import { Optional } from '@angular/core';

export class Jeu {
  public id!: string;
  public editeurId!: string;
  public nom!: string;
  public type!: string;
  public age_min!: number;
  public age_max!: number;
  public nb_joueur_min!: number;
  public nb_joueur_max!: number;
  public duree!: number;

  constructor(
    @Optional() editeurId: string,
    nom: string,
    type: string,
    age_min: number,
    age_max: number,
    nb_joueur_min: number,
    nb_joueur_max: number,
    duree: number
  ) {
    this.editeurId = editeurId;
    this.nom = nom;
    this.type = type;
    this.age_min = age_min;
    this.age_max = age_max;
    this.nb_joueur_min = nb_joueur_min;
    this.nb_joueur_max = nb_joueur_max;
    this.duree = duree;
  }
}
