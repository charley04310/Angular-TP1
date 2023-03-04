import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Jeu } from 'src/app/models/jeu';
import { JeuService } from 'src/app/services/jeu-service.service';

@Component({
  selector: 'app-editeur-details',
  templateUrl: './editeur-details.component.html',
  styleUrls: ['./editeur-details.component.css'],
})
export class EditeurDetailsComponent {
  @Input() listeJeux!: Jeu[] | null;
  @Output() jeuSelectionne = new EventEmitter<Jeu>();

  constructor(private jeuService: JeuService, private router: Router) {}
}
