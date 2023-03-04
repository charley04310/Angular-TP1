import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Jeu } from 'src/app/models/jeu';
import { JeuService } from 'src/app/services/jeu-service.service';

@Component({
  selector: 'app-jeux-list',
  templateUrl: './jeux-list.component.html',
  styleUrls: ['./jeux-list.component.css'],
})
export class JeuxListComponent {
  @Input() listeJeux!: Jeu[] | null;
  @Output() jeuSelectionne = new EventEmitter<Jeu>();

  constructor(private jeuService: JeuService, private router: Router) {}
}
