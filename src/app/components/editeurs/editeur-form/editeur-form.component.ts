import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Editeur } from 'src/app/models/editeur';
import { EditeurService } from 'src/app/services/editeur-service.service';

@Component({
  selector: 'app-editeur-form',
  templateUrl: './editeur-form.component.html',
  styleUrls: ['./editeur-form.component.css'],
})
export class EditeurFormComponent implements OnInit {
  @Input() editeur!: Editeur | null;
  public editeurFormData!: FormGroup;
  @Input() public festivalId!: string | null;

  constructor(
    private editeurService: EditeurService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.updateform();
  }

  ngOnChanges() {
    if (this.editeur == null) {
      this.editeurFormData = new FormGroup({
        nom: new FormControl(''),
        adresse: new FormControl(''),
        telephone: new FormControl(''),
      });
    } else {
      this.editeurFormData = new FormGroup({
        id: new FormControl(this.editeur.id),
        nom: new FormControl(this.editeur.nom),
        adresse: new FormControl(this.editeur.adresse),
        telephone: new FormControl(this.editeur.telephone),
      });
    }
  }

  updateform() {
    if (this.editeur == null) {
      this.editeurFormData = new FormGroup({
        nom: new FormControl(''),
        adresse: new FormControl(''),
        telephone: new FormControl(''),
      });
    } else {
      this.editeurFormData = new FormGroup({
        id: new FormControl(this.editeur.id),
        nom: new FormControl(this.editeur.nom),
        adresse: new FormControl(this.editeur.adresse),
        telephone: new FormControl(this.editeur.telephone),
      });
    }
  }

  validate() {
    // on considère que c'est un ajout et non une modification
    if (this.editeur === null) {
      this.editeur = new Editeur(this.editeurFormData.get('nom')?.value);
    }
    console.log('Id: ', this.festivalId);
    this.editeur.nom = this.editeurFormData.value.nom;
    this.editeur.adresse = this.editeurFormData.value.adresse;
    this.editeur.telephone = this.editeurFormData.value.telephone;
    if (this.festivalId == null) return;
    this.editeurService.addNewEditeur(this.editeur, this.festivalId);
    this.editeur = null;
    this.updateform();
  }
}
