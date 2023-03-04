import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Jeu } from 'src/app/models/jeu';
import { EditeurService } from 'src/app/services/editeur-service.service';
import { JeuService } from 'src/app/services/jeu-service.service';

@Component({
  selector: 'app-editeur-page',
  templateUrl: './editeur-page.component.html',
  styleUrls: ['./editeur-page.component.css'],
})
export class EditeurPageComponent implements OnInit {
  constructor(private JeuService: JeuService, private route: ActivatedRoute) {}
  jeux!: Observable<Jeu[]>;

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('editeurId')) {
      const id = this.route.snapshot.paramMap.get('editeurId');
      console.log(id);

      this.JeuService.getAllJeux().subscribe((jeux) => {
        console.log(jeux);
        const filteredJeux = jeux.filter((jeu) => jeu.editeurId === id);
        console.log(filteredJeux);
        this.jeux = of(filteredJeux);
      });
    }
  }
}
