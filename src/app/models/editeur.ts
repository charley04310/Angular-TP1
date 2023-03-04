import { Optional } from '@angular/core';

export class Editeur {
  public id!: string;
  public nom!: string;
  public adresse!: string;
  public telephone!: string;
  public listeFestivalId!: String[];

  constructor(
    nom: string,
    @Optional() id?: string,
    @Optional() adresse?: string,
    @Optional() telephone?: string,
    @Optional() listeFestivalId?: String[]
  ) {
    this.nom = nom;
    if (id) this.id = id;
    if (adresse) this.adresse = adresse;
    if (telephone) this.telephone = telephone;
    if (listeFestivalId) this.listeFestivalId = listeFestivalId;
  }
}
