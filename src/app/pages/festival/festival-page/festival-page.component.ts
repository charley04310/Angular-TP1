import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Editeur } from 'src/app/models/editeur';
import { Festival } from 'src/app/models/festival';
import { EditeurService } from 'src/app/services/editeur-service.service';
import { FestivalsService } from 'src/app/services/festivals.service';

@Component({
  selector: 'app-festival-page',
  templateUrl: './festival-page.component.html',
  styleUrls: ['./festival-page.component.css'],
})
export class FestivalPageComponent implements OnInit {
  constructor(
    private festivalService: FestivalsService,
    private editeurService: EditeurService,
    private route: ActivatedRoute
  ) {}
  editeurs!: Observable<Editeur[]>;
  editeurSelectionne?: Editeur;
  currentFestival!: Observable<Festival>;
  currentFestivalId!: string | null;

  async ngOnInit(): Promise<void> {
    if (this.route.snapshot.paramMap.has('festivalId')) {
      this.currentFestivalId = this.route.snapshot.paramMap.get('festivalId');
      // console.log(id);

      if (this.currentFestivalId == null) return;
      this.festivalService
        .getFestival(this.currentFestivalId)
        .subscribe((fest) => {
          this.currentFestival = of(fest);
        });

      this.editeurService.getAllEditeurByid().subscribe((editeurs) => {
        let tab: Editeur[] = [];
        editeurs.forEach((element) => {
          if (this.currentFestivalId != null)
            if (element.listeFestivalId.includes(this.currentFestivalId)) {
              tab.push(element);
            }
        });
        this.editeurs = of(tab);
      });
    }
  }
  modifierEditeur(editeur: Editeur) {
    this.editeurSelectionne = editeur;
  }
}
