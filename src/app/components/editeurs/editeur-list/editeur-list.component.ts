import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Editeur } from 'src/app/models/editeur';
import { Festival } from 'src/app/models/festival';
import { FestivalsService } from 'src/app/services/festivals.service';

@Component({
  selector: 'app-editeur-list',
  templateUrl: './editeur-list.component.html',
  styleUrls: ['./editeur-list.component.css'],
})
export class EditeurListComponent {
  @Input() listeEditeur!: Editeur[] | null;
  @Output() editeurSelectionne = new EventEmitter<Editeur>();

  constructor(private router: Router) {}

  setNewEditeur(editeur: Editeur) {
    this.editeurSelectionne.emit(editeur);
  }

  goToDetailsPage(editeur: Editeur) {
    this.router.navigate([`/editeur/${editeur.id}`]);
  }
}
