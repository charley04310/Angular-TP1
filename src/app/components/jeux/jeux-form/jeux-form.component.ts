import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Jeu } from 'src/app/models/jeu';
import { JeuService } from 'src/app/services/jeu-service.service';

@Component({
  selector: 'app-jeux-form',
  templateUrl: './jeux-form.component.html',
  styleUrls: ['./jeux-form.component.css'],
})
export class JeuxFormComponent implements OnInit {
  @Input() jeu!: Jeu | null;
  public jeuFormData!: FormGroup;
  @Input() public editeurId!: string | null;
  constructor(private jeuService: JeuService, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    this.updateform();
    if (this.route.snapshot.paramMap.has('editeurId')) {
      this.editeurId = this.route.snapshot.paramMap.get('editeurId');

      /*       if (this.editeurId == null) return;
      this.jeuService.getFestival(this.editeurId).subscribe((fest) => {
        this.currentFestival = of(fest);
      });
 */
      /*  this.editeurService.getAllEditeurByid().subscribe((editeurs) => {
        let tab: Editeur[] = [];
        editeurs.forEach((element) => {
          if (this.editeurId != null)
            if (element.listeFestivalId.includes(this.editeurId)) {
              tab.push(element);
            }
        });
        this.editeurs = of(tab);
      }); */
    }
  }

  ngOnChanges() {
    if (this.jeu == null) {
      this.jeuFormData = new FormGroup({
        nom: new FormControl(''),
        type: new FormControl(''),
        age_min: new FormControl(''),
        age_max: new FormControl(''),
        nb_joueurs_min: new FormControl(''),
        nb_joueurs_max: new FormControl(''),
        duree: new FormControl(''),
      });
    } else {
      this.jeuFormData = new FormGroup({
        id: new FormControl(this.jeu.id),
        nom: new FormControl(this.jeu.nom),
        type: new FormControl(this.jeu.type),
        age_min: new FormControl(this.jeu.age_min),
        age_max: new FormControl(this.jeu.age_max),
        nb_joueurs_min: new FormControl(this.jeu.nb_joueur_min),
        nb_joueurs_max: new FormControl(this.jeu.nb_joueur_max),
        duree: new FormControl(this.jeu.duree),
      });
    }
  }

  updateform() {
    if (this.jeu == null) {
      this.jeuFormData = new FormGroup({
        nom: new FormControl(''),
        type: new FormControl(''),
        age_min: new FormControl(''),
        age_max: new FormControl(''),
        nb_joueurs_min: new FormControl(''),
        nb_joueurs_max: new FormControl(''),
        duree: new FormControl(''),
      });
    } else {
      this.jeuFormData = new FormGroup({
        id: new FormControl(this.jeu.id),
        nom: new FormControl(this.jeu.nom),
        type: new FormControl(this.jeu.type),
        age_min: new FormControl(this.jeu.age_min),
        age_max: new FormControl(this.jeu.age_max),
        nb_joueurs_min: new FormControl(this.jeu.nb_joueur_min),
        nb_joueurs_max: new FormControl(this.jeu.nb_joueur_max),
        duree: new FormControl(this.jeu.duree),
      });
    }
  }

  validate() {
    // on considère que c'est un ajout et non une modification

    if (this.editeurId === null) return;
    this.jeu = new Jeu(
      this.editeurId,
      this.jeuFormData.get('nom')?.value,
      this.jeuFormData.get('type')?.value,
      this.jeuFormData.get('age_min')?.value,
      this.jeuFormData.get('age_max')?.value,
      this.jeuFormData.get('nb_joueurs_min')?.value,
      this.jeuFormData.get('nb_joueurs_max')?.value,
      this.jeuFormData.get('duree')?.value
    );

    if (this.editeurId == null) return;
    this.jeuService.addUpdateJeu(this.jeu, this.editeurId);
    this.jeu = null;
    console.log(this.jeu);
    this.updateform();
  }
}
